const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskName: { type: String, required: true },
    viewLink: { type: String, required: false }, // Optional Google Drive link
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },  // Automatically set the date when task was added
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
