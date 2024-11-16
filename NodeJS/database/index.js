const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/emp')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Connection error:', err));

// Define User Schema
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    jobTitle: { type: String },
    gender: { type: String }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// Middleware to parse JSON and URL-encoded data
app.use(express.json());  // Add this line for parsing JSON requests
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log('Request Headers:', req.headers);
    console.log('Request Body:', req.body);
    next();
});

// Root Route
app.get('/', (req, res) => {
    res.status(200).send('Hello from root route!');
});

// GET Route to Get All Users

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        const html=`<ol>
        ${users.map(user=>`<li>${user.firstName}</li>`).join('')} 
        </ol>`;
        res.send(html);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST Route to Create a New User
app.post('/users', async (req, res) => {
    console.log('Request Body:', req.body); // Check if req.body is populated

    // Validate required fields
    if (!req.body.firstName || !req.body.email || !req.body.gender || !req.body.jobTitle) {
        return res.status(400).json({ error: 'Please provide all required fields' });
    }

    try {
        // Create a new user in the database
        const newUser = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            jobTitle: req.body.jobTitle,
            gender: req.body.gender
        });
        console.log('New User:', newUser);
        res.status(201).json({ message: 'User created', data: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


//  delete requestion 

app.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                error: 'User not found'
            });
        }

        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'User deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error deleting user',
            details: error.message
        });
    }
});


//  patch request body

app.patch('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                error: 'User not found'
            });
        }

        // Only update fields that are provided
        const updates = {};
        if (req.body.firstName) updates.firstName = req.body.firstName;
        if (req.body.lastName) updates.lastName = req.body.lastName;
        if (req.body.email) updates.email = req.body.email;
        if (req.body.jobTitle) updates.jobTitle = req.body.jobTitle;
        if (req.body.gender) updates.gender = req.body.gender;

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            updates,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            message: 'User updated successfully',
            data: updatedUser
        });
    } catch (error) {
        res.status(400).json({
            error: 'Error updating user',
            details: error.message
        });
    }
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
