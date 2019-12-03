const express = require('express');
const app = express();

app.use(express.json());
const products = [
    {id: 1, product: 'mobiles'},
    {id: 2, product: 'TVs'},
    {id: 3, product: 'toys'}
];

app.get('/',(req,res) => {
res.send('Hello World12');
});

app.get('/imge',(req,res) => {
    res.send([1,2,3]);
}
);
app.get('/product/:id', (req,res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) res.status(404).send('There is no product in the list');
    res.send(product);
});

app.post('/product/', (req,res) =>{
    const product = {
        id: products.length +1,
        product: req.body.name
    };
    products.push(product);
    products.send(product);
} )

const port = process.env.port || 3000;
app.listen(port, () => console.log(`listening port ${port} ....`)); 