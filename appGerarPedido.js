const https = require('https');

function getMercadoLivreData(searchQuery, callback) {
    const host = 'api.mercadolibre.com';
    const path = `/sites/MLB/search?q=${encodeURIComponent(searchQuery)}`;
    const url = `https://${host}${path}`;

    https.get(url, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            const response = JSON.parse(data);
            callback(response);
        });

        res.on('error', (error) => {
            console.error('Erro na requisição:', error);
            callback(null);
        });
    });
}

const server = require('http').createServer((req, res) => {
    const searchQuery = req.url.slice(1); // Obtém o parâmetro de busca a partir da URL do servidor

    if (!searchQuery) {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Nenhum parametro de busca fornecido, apos o 8000/digiteAqui');
        return;
    }

    getMercadoLivreData(searchQuery, (response) => {
        if (response) {
            const firstItem = response.results[0];
            const title = firstItem.title;
            const price = firstItem.price;

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`Pedido gerado\n\n Produto: ${title}\n Valor: R$ ${price}\n`);
        } else {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Erro na requisição');
        }
    });
});

server.listen(8000, () => {
    console.log('Servidor em execução na porta 8000');
});
