// components/TaskForm.js

import { Form, Input, Button } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const TaskForm = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is required'),
            description: Yup.string().required('Description is required'),
        }),
        onSubmit: async (values) => {
            // Send data to your API route to store it in the database
            const response = await fetch('/api/task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                // Handle success
                console.log('Task added successfully');
            } else {
                // Handle error
                console.error('Failed to add task');
            }
        },
    });

    return (
        <Form onFinish={formik.handleSubmit}>
            <Form.Item
                label="Title"
                name="title"
                validateStatus={formik.errors.title ? 'error' : ''}
                help={formik.errors.title}
            >
                <Input
                    type="text"
                    {...formik.getFieldProps('title')}
                    placeholder="Enter title"
                />
            </Form.Item>
            <Form.Item
                label="Description"
                name="description"
                validateStatus={formik.errors.description ? 'error' : ''}
                help={formik.errors.description}
            >
                <Input.TextArea
                    {...formik.getFieldProps('description')}
                    placeholder="Enter description"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default TaskForm;
