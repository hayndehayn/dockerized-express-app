const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

//? Connection to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

//? Middleware
app.use(express.json());

//? Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Express app with Docker' });
});

//? Server init
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});