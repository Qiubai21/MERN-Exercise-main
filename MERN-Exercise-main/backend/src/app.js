const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const todoRoutes = require('./routes/todos');

const app = express();
const port = process.env.PORT || 5050;
// this should always be in .env
// password: s1CUEBAfLUzn0eAf
// const uri = "mongodb+srv://dh21421214:dh21421214@cluster0.5qspjbo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const uri = "mongodb+srv://tpeng:tpeng@todo.d662dxi.mongodb.net/?retryWrites=true&w=majority&appName=Todo"
// Connect to MongoDB using environment variable
mongoose.set('strictQuery', false)

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000,
  socketTimeoutMS: 30000, 
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Middlewares
app.use(cors());
app.use(bodyParser.json());

app.use('/api/todos', todoRoutes);

app.listen(port, () => console.log(`Server listening on port ${port}`));
