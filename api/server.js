const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser());

const mala = [
  {id: 1, nome: "Regata branca simples", preco: 14.99, tamanho: "M", thumbnail: "https://cea.vteximg.com.br/arquivos/ids/8431856-468-560/Regata-Feminina-Basica-de-Alca-Branca-8527765-Branco_1.jpg?v=636892962637400000"},
  {id: 2, nome: "Camisa de banda", preco: 20.99, tamanho: "M", thumbnail: "https://img.elo7.com.br/product/zoom/2152449/camisa-banda-camiseta-rock.jpg"},
  {id: 3, nome: "Saia preta cintura alta", preco: 19.99, tamanho: "38", thumbnail: "https://http2.mlstatic.com/saia-cintura-alta-com-ziper-em-cirre-curta-couro-fake-D_NQ_NP_957792-MLB31204270421_062019-F.jpg"},
  {id: 4, nome: "Bermudinha jeans", preco: 17.99, tamanho: "38", thumbnail: "https://http2.mlstatic.com/bermudinha-jeans-e-short-saia-36-ao-48-D_NQ_NP_873844-MLB26401253867_112017-F.jpg"},
  {id: 5, nome: "Calça pantalona salmão", preco: 34.99, tamanho: "38", thumbnail: "https://cdn.shopify.com/s/files/1/0821/2215/products/COR_SELECAO_CALCA_LOLA_SALMAO308_2000x.jpg?v=1562611849" },
];

app.get('/minha-mala', (req, res) => {
  res.json(mala);
});

app.post('/finalizar', (req, res) => {
  console.log(req.body)
  
  res.json([]);
});

app.listen(3000, ()=> {
  console.log('Listening on 3000');
});
