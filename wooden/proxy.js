const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

function handleRequest(req, res) {
    // Proxy the request to the Google Sites page
    proxy.web(req, res, { target: 'https://sites.google.com/psdschools.org/wooden?usp=sharing', changeOrigin: true });
}

const server = http.createServer(handleRequest);

server.listen(3000, () => {
    console.log('Proxy server is running on http://localhost:3000');
});