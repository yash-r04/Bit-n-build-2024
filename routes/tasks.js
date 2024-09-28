// const express = require('express');
// const router = express.Router();
// const Task = require('../models/Task');

// // Add new task
// router.post('/task', async (req, res) => {
//     const { taskName, viewLink } = req.body;
//     const userId = req.user._id;  // Assuming user is logged in and their ID is stored in req.user
//     try {
//         const newTask = new Task({ taskName, viewLink, userId });
//         await newTask.save();
//         res.json(newTask);  // Send the newly created task back
//     } catch (err) {
//         res.status(500).json({ message: 'Error adding task' });
//     }
// });

// // Fetch all tasks for the logged-in user
// router.get('/tasks', async (req, res) => {
//     const userId = req.user._id;
//     try {
//         const tasks = await Task.find({ userId });
//         res.json(tasks);  // Return all tasks for this user
//     } catch (err) {
//         res.status(500).json({ message: 'Error fetching tasks' });
//     }
// });

// // Delete a task by its ID
// router.delete('/task/:id', async (req, res) => {
//     const taskId = req.params.id;
//     try {
//         await Task.findByIdAndDelete(taskId);
//         res.json({ message: 'Task deleted successfully' });
//     } catch (err) {
//         res.status(500).json({ message: 'Error deleting task' });
//     }
// });

// module.exports = router;




const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

// Create a new task
router.post('/task', async (req, res) => {
    const { taskName, viewLink, category } = req.body; // Include category
    const newTask = new Task({ taskName, viewLink, category });
    await newTask.save();
    res.status(201).json(newTask);
});

// Fetch all tasks grouped by category
router.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    const groupedTasks = tasks.reduce((acc, task) => {
        (acc[task.category] = acc[task.category] || []).push(task);
        return acc;
    }, {});
    res.json(groupedTasks);
});

// Delete a task
router.delete('/task/:id', async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(204).send();
});

module.exports = router;
