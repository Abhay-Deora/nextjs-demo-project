// const mongoose = require('mongoose');

// const taskSchema = new mongoose.Schema({
//     title: String,
//     description: String,
// });

// const Task = mongoose.model('Task', taskSchema);

// module.exports = Task;
const mongoose = require('mongoose');

// Check if the model already exists before defining it
if (mongoose.models && mongoose.models.Task) {
    module.exports = mongoose.models.Task;
} else {

    // mongoose.connect('mongodb+srv://abby:iMedia@009@cluster0.haey07t.mongodb.net/?retryWrites=true&w=majority').then(() => {
    //     console.log('DB connection successfully');
    // }).catch(err => console.log(err));

    const taskSchema = new mongoose.Schema({
        title: String,
        description: String,
    });

    const Task = mongoose.model('Task', taskSchema);

    module.exports = Task;
}