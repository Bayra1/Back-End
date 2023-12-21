import express, { request, response } from 'express';
import bp from 'body-parser';
import mongoose from 'mongoose';
import Url from './Schema/Url.js';
import { nanoid } from "nanoid";

const app = express();
const PORT = 8000;
app.use(bp.json())

const MONGDB_URL = "mongodb+srv://Isvhbaatar:94849622@cluster0.02jcx1i.mongodb.net/?retryWrites=true&w=majority"


app.get("/get", async (_, response) => {
  const res = await Url.find()
  // console.log(res, "this is res");
  // console.log(res, "this is res");
  response.send(res).end
});

app.get("/:url", async (request, response) => {
  const { url } = request.params;

  console.log(url, "this is params of req");

  try {
    const res = await Url.findOne({ ShortUrL: url });

    if (res) {
      response.redirect(res.LongUrL);
    } else {
      // Handle the case where no matching document was found
      response.status(404).send("Not Found");
    }
  } catch (error) {
    // Handle other errors that might occur during the query
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
});


app.post("/post", async (request, response) => {
  const url = request.body;
  console.log(request.body, "this is request-body");

  const NewUrL = await Url.create({
    LongUrL: url,
    ShortUrL: nanoid(5),
  });
  response.send({
    success: true,
    url: NewUrL
  }).end()
})














app.listen(PORT, async () => {
  try {
    await mongoose.connect(MONGDB_URL)
    console.log('get succed');
  } catch (error) {
    console.log(error);
  }
  console.log(`server is listening on ${PORT}`);
})