// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Connect to MongoDB (Make sure MongoDB is running)
// mongoose.connect('mongodb://localhost:27017/back-end', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
// });

// // Middleware
// app.use(bodyParser.json());

// // Define Task Schema and Model (Assuming a 'tasks' collection in MongoDB)
// const taskSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   completed: Boolean,
// });

// const Task = mongoose.model('Task', taskSchema);

// // API Endpoints

// // Create a new task
// app.post('/tasks', async (req, res) => {
//   try {
//     const task = new Task(req.body);
//     await task.save();
//     res.status(201).send(task);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // Get all tasks
// app.get('/tasks', async (req, res) => {
//   try {
//     const tasks = await Task.find();
//     res.send(tasks);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
