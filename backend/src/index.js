import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import addressRoutes from './routes/addressRoutes.js';
import { generateTestToken } from './middleware/auth.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', addressRoutes);

// Test route to generate token (for testing purposes only)
app.get('/generate-test-token', (req, res) => {
  const testUserId = '12345';
  const token = generateTestToken(testUserId);
  res.json({ token });
});

const PORT =5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});