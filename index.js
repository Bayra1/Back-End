import express from 'express';
import bp from 'body-parser';
import mongoose from 'mongoose';
import Url from './Schema/Url.js';

const app = express();
const port = 8000;

const MONGDB_URL = "mongodb+srv://Isvhbaatar:94849622@cluster0.02jcx1i.mongodb.net/?retryWrites=true&w=majority"

app.use(bp.json())

app.get('/:id', async (req, res) => {
  const id = req.params.id
  console.log(id);
  const response = await Url.find()
  res.send({success : true, response}).end
})

app.post('/', async(req, res) => {
  console.log(req.body);
  const NewUrL = await Url.create(req.body)
  res.send({ urls: NewUrL}).end()
})

app.listen(port, async () => {
  try {
    await mongoose.connect(MONGDB_URL)
    console.log('get succed');
  } catch (error) {
    console.log(error);
  }
  console.log('server ');
})






































// app.use(bp.json());

// let fruits = [
//   {
//     id: 1,
//     name: 'grapes',
//   },
//   {
//     id: 2,
//     name: 'orange',
//   },
//   {
//     id: 3,
//     name: 'apple',
//   },
// ];

// app.get('/', (req, res) => {
//   res.send({fruits: fruits }).end();
// });

// app.post('/post', (req, res) => {
//   const newFruit = req.body;

//   fruits.push(newFruit);

//   console.log('Received new fruit:', newFruit);
//   console.log('Current state of fruits:', fruits);

//   res.send({ success: true, fruits: fruits }).end();
// });

// app.put('/:id', (req, res) => {
//   const id = req.params.id;
//   fruits.map((each) => {
//     if (each.id === parseInt(id)) {
//         each.name = req.body.name
//     }
//   })
//   res.send({ user:fruits}).end();
// });

// app.delete('/:id', (req, res) => {
//   const id = req.params.id;
//   const deletedByIdx = fruits.findIndex((each) => each.id === parseInt(id));
//   fruits = fruits.slice(0, deletedByIdx);
//   res.send({fruits: fruits }).end();
// });

// app.get('/fruits', (req, res) => {
//   res.json(fruits);
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
