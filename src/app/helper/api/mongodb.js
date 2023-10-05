// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb+srv://abby:iMedia@009@cluster0.haey07t.mongodb.net/?retryWrites=true&w=majority');
// }


/* This is a database connection function*/
import mongoose from 'mongoose'
import Task from '@/app/modal/task'
const connection = {} /* creating connection object*/

async function dbConnect() {
    /* check if we have connection to our databse*/
    if (connection.isConnected) {
        return
    }

    /* connecting to our database */
    const db = await mongoose.connect("mongodb+srv://abby:iMedia%40009@cluster0.haey07t.mongodb.net/?retryWrites=true&w=majority")

    connection.isConnected = db.connections[0].readyState
}
dbConnect()

const Modals = {
    Task
}

export default Modals
