O Link da api é : https://api.mercadolibre.com/
O Link de recursos usados : https://developers.mercadolivre.com.br/pt_br/publicacao-de-produtos/itens-e-buscas

Como a primeira atividade fizemos uma aplicação para gerar pedidos,
com a Api do mercado livre é possivel buscar produtos, obtendo seu nome e preço.

Pesquisamos um modo de passar uma requisição através da URL, ou seja, ao digitar algo depois da barra no localhost ( / ) utilizando o req.url.slice(1), 
irá exibir o primeiro produto e seu valor, com base nos resultados do mercado livre.
