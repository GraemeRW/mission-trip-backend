import express from 'express';
import financesRoute from './routes/finances';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001; // Render assigns its own port

app.use(cors()); // Allow requests from your frontend
app.use(express.json());

// API route for finances
app.use('/api/finances', financesRoute);

// Health check route
app.get('/', (req, res) => {
  res.send('Mission Backend API is running.');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
