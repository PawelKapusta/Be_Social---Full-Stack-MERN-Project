import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "postdb"
});

db.connect((error) => {
  if (error) {
    console.log("Database connection error");
  } else {
    console.log("Database connected");
  }
});

app.get('/', (req,res) => {
  res.send("<h1>Server side</h1>")
})

app.listen(5000, () => {
  console.log('Running on port 5000');
});


app.get('/users',  (req,res) => {
  db.query("SELECT * FROM users;", (error, rows, fields) => {
    if (error) {
      console.log("Error in getting users query");
    } else {
      res.send(rows);
      console.log("Successful getting users query");
    }
  })
})
app.post('/users',  (req, res) => {
  const userName = req.body.fullName;
  console.log("nnnnn",userName);
  let sql = `INSERT INTO users (FullName) VALUES (${userName})`;
  console.log(sql)
  db.query(sql,(error, rows, fields) => {
    if (error) {
      console.log("Error in inserting user query");
    } else {
      res.send(rows);
      console.log("Successful inserting user query");
    }
  })
})
app.get('/users/:id', (req , res) => {
  const userID = req.params.id;
  db.query(`SELECT * FROM users WHERE Id = ${userID};`, (error, rows, fields) => {
    if (error) {
      console.log("Error in getting user query");
    } else {
      res.send(rows);
      console.log("Successful getting user query");
    }
  })
})
app.get('/posts',  (req,res) => {
  db.query("SELECT * FROM posts;", (error, rows, fields) => {
    if (error) {
      console.log("Error in getting posts query");
    } else {
      res.send(rows);
      console.log("Successful getting posts query");
    }
  })
})
app.get('/posts/:id', (req , res) => {
  const postId = req.params.id;
  db.query(`SELECT * FROM posts WHERE Id = ${postId};`, (error, rows, fields) => {
    if (error) {
      console.log("Error in getting post query");
    } else {
      res.send(rows);
      console.log("Successful getting post query");
    }
  })
})

app.post('/posts',  (req, res) => {
  db.query(`SELECT Id FROM users WHERE FullName = "${req.body.creator}";`, (error, rows, fields) => {
      if (error) {
        console.log("Error in getting UserId query");
      } else {
        console.log("Successful getting UserId query");
        let UserId = rows[0].Id;
        let date = new Date();
        let year = date.getFullYear(), month = date.getUTCMonth()+ 1, day = date.getUTCDate(), hour = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds();
        if(month < 10){
          month = "0" + month;
        }
        if(day < 10){
          day = "0" + day;
        }
        if(hour < 10){
          hour = "0" + hour;
        }
        if(minutes < 10){
          minutes = "0" + minutes;
        }
        if(seconds < 10){
          seconds = "0" + seconds;
        }
        const currentDate = `CAST(N'${year}-${month}-${day} ${hour}:${minutes}:${seconds}.000' AS DateTime)`;
        let sql = `INSERT INTO posts (UserId, Title, Image, Description, Hashtags, Likes, DataPosted) VALUES (${UserId},"${req.body.title}","${req.body.image}","${req.body.message}","${req.body.tags}",0,${currentDate})`;
        db.query(sql,(error, rows, fields) => {
          if (error) {
            console.log("Error in inserting post query");
          } else {
            res.send(rows);
            console.log("Successful inserting post query");
          }
        })
      }
    }
    )
})
app.patch('/likePost/:id', (req,res)=> {
  const postId = req.params.id;
  db.query(`UPDATE posts SET Likes = Likes + 1 WHERE Id = ${postId};`, (error, rows, fields) => {
    if (error) {
      console.log("Error in updating likes in post query");
    } else {
      res.send(rows);
      console.log("Successful updating likes in post query");
    }
  })
})
app.get('/joinTables', (req, res) => {
  db.query(`SELECT * FROM posts as POSTS INNER JOIN users as USERS ON POSTS.UserId = USERS.Id;`, (error, rows, fields) => {
    if (error) {
      console.log("Error in getting joined table query");
    } else {
      res.send(rows);
      console.log("Successful getting joined table query");
    }
  })
})
app.patch('/updatePost/:id', (req,res)=> {
  const postId = req.params.id;
  const post = req.body;
  db.query(`SELECT Id FROM users WHERE FullName = "${req.body.creator}";`, (error, rows, fields) => {
    if (error) {
      console.log("Error in getting id of post creator query");
    } else {
      console.log("Successful getting id of post creator query");
      let sql = `UPDATE posts SET UserId=${rows[0].Id}, Title = "${req.body.title}", Image = "${req.body.image}", Description = "${req.body.message}",Hashtags = "${req.body.tags}" WHERE Id = ${postId};`;
      db.query(sql, (error, rows, fields) => {
        if (error) {
          console.log("Error in updating post query");
        } else {
          res.send(rows);
          console.log("Successful updating post query");
        }
      })
    }
  })
})
app.delete('/:id', (req,res) => {
  const postId = req.params.id;
  console.log(postId);
  db.query(`DELETE FROM posts WHERE Id = ${postId};`, (error, rows, fields) => {
    if (error) {
      console.log("Error in deleting post creator query");
    } else {
      console.log("Successful deleting post creator query");

    }
  })
})
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// app.get("/", (req, res) => {
//   res.send("Hello");
// });
















// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import postRoutes from './routes/posts.js';
//
// const app = express();
// dotenv.config();
// app.use(bodyParser.json({limit: "30mb", extended: true}));
// app.use(bodyParser.urlencoded({limit: "30mb",extended: true}));
// app.use(cors());
//
// app.use('/posts', postRoutes);
//
// app.get('/', (req,res) => {
//     res.send('Welcome in social environment API!');
// });
//
//     const CONNECTION_URL = process.env.CONNECTION_URL;
//     const PORT  = process.env.PORT || 5000;
//
//     mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
//         .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
//         .catch((error) => console.log(error.message));
//
//     mongoose.set('useFindAndModify',false);