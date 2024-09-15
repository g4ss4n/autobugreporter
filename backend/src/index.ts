import express from 'express';
import mongoose from 'mongoose';
import { createClient } from 'redis';
import routes from './routes/index'; // Import router

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/autobugreporter')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Connect to Redis
const redisClient = createClient();
redisClient.on('error', (err) => {
    console.error('Redis error:', err);
});

// Use routes
app.use('/api', routes); // Use router

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
