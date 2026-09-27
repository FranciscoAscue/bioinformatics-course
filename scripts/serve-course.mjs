import { createReadStream } from 'node:fs'
import { access, readdir, stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, join, resolve, sep } from 'node:path'

const distRoot = resolve('dist')
const slideFiles = (await readdir('slides'))
  .filter(file => file.endsWith('.md') && !file.startsWith('_'))
  .sort()
const deckSlugs = new Set([
  'slides',
  ...slideFiles.map(file => file.replace(/\.md$/, '')),
])

const requiredFiles = [
  join(distRoot, 'index.html'),
  ...[...deckSlugs].map(slug => join(distRoot, slug, 'index.html')),
]
const missingFiles = []

for (const file of requiredFiles) {
  try {
    await access(file)
  }
  catch {
    missingFiles.push(file.slice(distRoot.length + 1))
  }
}

if (missingFiles.length) {
  console.error('La compilación de dist/ está incompleta.')
  console.error(`Faltan ${missingFiles.length} archivo(s), por ejemplo: ${missingFiles.slice(0, 4).join(', ')}`)
  console.error('Ejecuta primero: npm run build')
  process.exit(1)
}

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

function sendFile(response, file) {
  const extension = extname(file).toLowerCase()
  response.writeHead(200, {
    'Content-Type': mimeTypes[extension] ?? 'application/octet-stream',
    'Cache-Control': extension === '.html' ? 'no-cache' : 'public, max-age=3600',
  })
  createReadStream(file)
    .on('error', () => {
      if (!response.headersSent) response.writeHead(500)
      response.end('No se pudo leer el archivo.')
    })
    .pipe(response)
}

const portFlag = process.argv.indexOf('--port')
const port = Number(portFlag >= 0 ? process.argv[portFlag + 1] : 4173)

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error('El puerto debe ser un número entre 1 y 65535.')
  process.exit(1)
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? '/', 'http://localhost')
    const pathname = decodeURIComponent(url.pathname)
    const relativePath = pathname.replace(/^\/+/, '')
    const requestedPath = resolve(distRoot, relativePath)

    if (requestedPath !== distRoot && !requestedPath.startsWith(`${distRoot}${sep}`)) {
      response.writeHead(403)
      response.end('Ruta no permitida.')
      return
    }

    try {
      const details = await stat(requestedPath)
      if (details.isDirectory()) {
        if (!pathname.endsWith('/')) {
          response.writeHead(308, { Location: `${pathname}/${url.search}` })
          response.end()
          return
        }
        sendFile(response, join(requestedPath, 'index.html'))
        return
      }
      if (details.isFile()) {
        sendFile(response, requestedPath)
        return
      }
    }
    catch (error) {
      if (error.code !== 'ENOENT') throw error
    }

    // Slidev usa rutas internas como /05-conda-reproducibilidad/4.
    // En esas rutas se devuelve el index del mazo correspondiente.
    const [slug] = relativePath.split('/')
    if (deckSlugs.has(slug)) {
      sendFile(response, join(distRoot, slug, 'index.html'))
      return
    }

    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.end('Página no encontrada.')
  }
  catch {
    response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.end('Ruta inválida.')
  }
})

server.listen(port, '127.0.0.1', () => {
  console.log(`Curso disponible en http://localhost:${port}`)
  console.log('Detén el servidor con Ctrl+C.')
})
