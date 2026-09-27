import { execFileSync } from 'node:child_process'
import { access, readdir, rename, rm, mkdir, writeFile } from 'node:fs/promises'
import { basename, join, resolve } from 'node:path'

const baseFlag = process.argv.indexOf('--base')
const requestedBase = baseFlag >= 0 ? process.argv[baseFlag + 1] : '/'

if (!requestedBase) {
  throw new Error('Falta el valor de --base. Ejemplo: --base /Bioinformatica/')
}

const rootBase = `/${requestedBase}/`.replace(/\/+/g, '/')
const slideFiles = (await readdir('slides'))
  .filter(file => file.endsWith('.md') && !file.startsWith('_'))
  .sort()

const decks = [
  { entry: 'slides.md', slug: 'slides', title: 'Presentación general', tag: 'Curso' },
  ...slideFiles.map(file => {
    const slug = basename(file, '.md')
    const label = slug
      .replace(/^\d+-/, '')
      .replaceAll('-', ' ')
      .replace(/^./, letter => letter.toUpperCase())
    const isTemplate = /^(?!00-)\d{2}-/.test(slug)

    return {
      entry: join('slides', file),
      slug,
      title: slug.startsWith('00-') ? 'Sílabo del curso' : `${isTemplate ? 'Plantilla · ' : ''}${label}`,
      tag: slug.slice(0, 2),
    }
  }),
]

const outputRoot = resolve('.dist-building')
const distRoot = resolve('dist')
const previousRoot = resolve('.dist-previous')

await rm(outputRoot, { recursive: true, force: true })
await mkdir(outputRoot, { recursive: true })

const slidevCli = resolve('node_modules/@slidev/cli/bin/slidev.mjs')

for (const [index, deck] of decks.entries()) {
  const deckBase = `${rootBase}${deck.slug}/`.replace(/\/+/g, '/')
  // Slidev interpreta --out respecto del directorio del archivo de entrada.
  // Una ruta absoluta mantiene todos los mazos dentro del mismo dist/ raíz.
  const output = join(outputRoot, deck.slug)
  console.log(`[${index + 1}/${decks.length}] ${deck.entry} → ${deckBase}`)

  try {
    execFileSync(process.execPath, [
      slidevCli,
      'build',
      deck.entry,
      '--out',
      output,
      '--base',
      deckBase,
      '--without-notes',
    ], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
  }
  catch (error) {
    process.stderr.write(error.stdout ?? '')
    process.stderr.write(error.stderr ?? '')
    throw error
  }
}

const cards = decks.map(deck => `
        <a class="card" href="./${deck.slug}/">
          <span>${deck.tag}</span>
          <strong>${deck.title}</strong>
          <small>Abrir diapositivas →</small>
        </a>`).join('')

const indexHtml = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Análisis Bioinformático</title>
    <style>
      :root { color-scheme: light; font-family: Inter, ui-sans-serif, system-ui, sans-serif; color: #1c252c; background: #fbfbf8; }
      * { box-sizing: border-box; }
      body { margin: 0; min-height: 100vh; background: #fbfbf8; }
      header, main { width: min(920px, calc(100% - 2.5rem)); margin-inline: auto; }
      header { padding: 5rem 0 2.5rem; border-bottom: 1px solid #d8ddd9; }
      .eyebrow, .card span { color: #176c94; font-size: .68rem; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; }
      h1 { margin: .45rem 0 .75rem; font-size: clamp(2.3rem, 6vw, 4.6rem); font-weight: 470; letter-spacing: -.055em; line-height: 1; }
      header p { color: #66747e; font-size: 1rem; margin: 0; }
      header nav { display: flex; gap: 1.2rem; margin-top: 1.4rem; }
      header nav a { color: #176c94; font-size: .72rem; text-decoration: none; }
      header nav a:hover { text-decoration: underline; }
      main { display: grid; grid-template-columns: 1fr 1fr; column-gap: 2.5rem; padding: 2.5rem 0 5rem; }
      .card { align-items: baseline; display: grid; grid-template-columns: 2.4rem 1fr auto; gap: .7rem; padding: .85rem 0; color: inherit; text-decoration: none; border-bottom: 1px solid #d8ddd9; }
      .card:hover, .card:focus-visible { color: #176c94; outline: none; }
      .card strong { font-size: .92rem; font-weight: 580; text-transform: capitalize; }
      .card small { color: #66747e; font-size: .65rem; }
      @media (max-width: 720px) { main { grid-template-columns: 1fr; } .card { grid-template-columns: 2.4rem 1fr; } .card small { display: none; } }
    </style>
  </head>
  <body>
    <header>
      <div class="eyebrow">UNSAAC · 2026-II</div>
      <h1>Análisis Bioinformático</h1>
      <p>Sílabo completo · semanas 01–16 como plantillas provisionales</p>
      <nav><a href="https://asvi.org.pe/">Proyectos y datos ↗</a><a href="https://github.com/FranciscoAscue">GitHub ↗</a></nav>
    </header>
    <main>${cards}
    </main>
  </body>
</html>
`

await writeFile(join(outputRoot, 'index.html'), indexHtml, 'utf8')

// Conserva el último sitio funcional mientras se compilan todos los mazos.
// Solo intercambia directorios cuando el build completo terminó correctamente.
await rm(previousRoot, { recursive: true, force: true })
try {
  await access(distRoot)
  await rename(distRoot, previousRoot)
}
catch (error) {
  if (error.code !== 'ENOENT') throw error
}

try {
  await rename(outputRoot, distRoot)
  await rm(previousRoot, { recursive: true, force: true })
}
catch (error) {
  try {
    await access(previousRoot)
    await rename(previousRoot, distRoot)
  }
  catch {
    // El error original contiene la causa relevante.
  }
  throw error
}

console.log(`Curso compilado en dist/ con base ${rootBase}`)
