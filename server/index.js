const express = require('express');
const cors = require('cors');
require('dotenv').config()
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const e = require('express');
const MongoClient = require('mongodb').MongoClient;


const app = express()
const port = 9000
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.1sg5c.mongodb.net/creative-agency?retryWrites=true&w=majority`;
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
      OrderCollection.insertOne({name,image,email})
      .then(result =>{
          res.send(result.insertedCount > 0)
      })
      
  })
  //get servic filtered for customer
  app.post('/customer-order-list',(req,res)=>{
      console.log('mm',req.body)
      const email = req.body.email
      AdminCollection.find({email:email})
      .toArray((err,admin)=>{
          console.log('body',admin)
          const customer = {}
          if(admin.length === 0){
              customer.email = email;
              console.log(customer)
          }
          
          OrderCollection.find(customer)
          .toArray((err,documents)=>{
              res.send(documents)
          })
      
      })
  })

  //get service list for admin
  app.post('/admin-order-list',(req,res)=>{
    const email = req.body.email
    AdminCollection.find({email:email})
    .toArray((err,admin)=>{
        OrderCollection.find({})
        .toArray((err,document)=>{
            res.send(document)
        })
    })
})
    
  app.post('/addReview',(req,res)=>{
        const review = req.body;
        ReviewCollection.insertOne({review})
        .then(result =>{
            res.send(result.insertedCount>0)
        })
  })
  //add admin 
  app.post('/addAdmin',(req,res)=>{
     const email = req.body.email;
     AdminCollection.insertOne({email})
     .then(result =>{
         res.send(result.insertedCount>0)
     })
  })
  //get admin
  app.post('/isAdmin',(req,res)=>{
    const email = req.body.email
    AdminCollection.find({email:email})
    .toArray((err,document)=>{
        res.send(document.length>0)
    })
})


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

//get services 
app.get('/services',(req,res)=>{
    ServiceCollection.find({})
    .toArray((err,document)=>{
        res.send(document)
    })
})
//get custome feedback/review
app.get('/customer/reviews',(req,res)=>{
    ReviewCollection.find({}).limit(6)
    .toArray((err,document)=>{
        res.send(document)
    })
})
 
});

app.listen(process.env.PORT||port)