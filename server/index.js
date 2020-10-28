const express = require('express');
const cors = require('cors');
require('dotenv').config()
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const MongoClient = require('mongodb').MongoClient;


const app = express()
const port = 9000
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());

const uri = "mongodb+srv://snigdha2010:Aabccdeef9*@cluster0.1sg5c.mongodb.net/creative-agency?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true ,useUnifiedTopology: true });
client.connect(err => {
  const OrderCollection = client.db("creative-agency").collection("orders");
  const ReviewCollection = client.db("creative-agency").collection("reviews");
  const AdminCollection = client.db("creative-agency").collection("admins");
  const ServiceCollection = client.db("creative-agency").collection("services");
  //add customer order to server with image 
  app.post('/addOrder',(req,res)=>{
      const file = req.files.file;
      const name = req.body.name; 
      const email = req.body.email;
      const newImg = file.data;
      const encImg = newImg.toString('base64');

      var image = {
          contentType: file.mimetype,
          size: file.size,
          img: Buffer.from(encImg,'base64')
      };
      OrderCollection.insertOne({name,image})
      .then(result =>{
          res.send(result.insertedCount > 0)
      })
      console.log(file) 
  })

  //get order list 
  app.get('/service-list',(req,res)=>{
        OrderCollection.find({})
      .toArray((err,documet)=>{
          res.send(documet)
      })
  })
  //add review
  app.post('/addReview',(req,res)=>{
        const review = req.body;
        ReviewCollection.insertOne({review})
        .then(result =>{
            res.send(result.insertedCount>0)
        })
  })
  //add admin 
  app.post('/addAdmin',(req,res)=>{
     const admin = req.body;
     AdminCollection.insertOne({admin})
     .then(result =>{
         res.send(result.insertedCount>0)
     })
  })
  //find admin 


  //add service
  app.post('/addService',(req,res)=>{
    const file = req.files.file;
    const title = req.body.title; 
    const description = req.body.description;
    const newImg = file.data;
    const encImg = newImg.toString('base64');

    var image = {
        contentType: file.mimetype,
        size: file.size,
        img: Buffer.from(encImg,'base64')
    };
    ServiceCollection.insertOne({title,description,image})
    .then(result =>{
        res.send(result.insertedCount > 0)
    })
    console.log(file) 
})
 
});


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port)