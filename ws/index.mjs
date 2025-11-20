import http from 'http'

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('WebSocket server is running!\n')
})

const PORT = 3000
server.listen(PORT, () => {
    console.log(`✅ WS server running on port ${PORT}`)
})
