const server = Bun.serve({
    port: 8080,
    fetch(req) {
      return new Response('Hello World!')
    }
})

console.log(`Server running at ${server.port}`);
