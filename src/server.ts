import express, { Request, Response } from 'express'; // Importing express and the Request, Response types
import dotenv from 'dotenv'; // Importing dotenv to load environment variables
dotenv.config({ path: '.env.local' }); // Loading environment variables from the '.env.local' file
import connectDB from './config/db'; // Importing the database connection function
import authRoutes from './routes/authRoutes'; // Importing authentication-related routes
import cookieParser from "cookie-parser"; // Importing the cookie-parser middleware to handle cookies
import cors from "cors"; // Importing cors middleware to handle Cross-Origin Resource Sharing (CORS)
import noteRoutes from "./routes/noteRoutes"; // Importing routes related to notes

const app = express(); // Initializing an Express application
const port = process.env.PORT || 5000; // Setting the port, defaulting to 5000 if not provided in the environment variables

app.use(express.json()); // Middleware to parse incoming JSON requests
app.use(cookieParser()); // Middleware to parse cookies

// List of allowed origins for CORS
const allowedOrigins = ['process.env.BACKENDADMIN_URL'];

// CORS middleware to enable cross-origin requests from allowedOrigins
app.use(cors({
  origin: allowedOrigins, // Only allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Allow cookies and credentials to be sent with the request
}));

// Route for the root endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World! User'); // Send a simple "Hello, World!" message as the response
});

// Routes for authentication and notes
app.use("/auth", authRoutes); // All routes under /auth will be handled by authRoutes
app.use("/notes", noteRoutes); // All routes under /notes will be handled by noteRoutes

// Start the server and connect to the database
app.listen(port, () => {
  connectDB(); // Call the function to connect to the database
  console.log(`Server is running at http://localhost:${port}`); // Log the server running message
});
