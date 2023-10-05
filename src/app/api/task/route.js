
// import dbConnect from '@/app/helper/api/mongodb';
// import Task from '../../modal/' // Import your Mongoose model
import Modals from '@/app/helper/api/mongodb'
import { NextResponse } from 'next/server'
// await dbConnect();
export async function POST(req) {
    const {Task} = Modals
    console.log(Task)
    
        try {
            const {title,description} = await req.json()
            // Create a new task using the Mongoose model
            const newTask = new Task({
                title,
                description,
            });

            // Save the task to the database
            await newTask.save();
            return NextResponse.json(newTask);
        } catch (error) {
            return NextResponse.json({ error: 'Server error' });
        }
   
}
