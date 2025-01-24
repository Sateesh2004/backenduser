import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Extending the Express Request interface to include 'id' field for user ID
declare global {
  namespace Express {
    interface Request {
      id: string; // Adding 'id' to the request object to store the user ID
    }
  }
}

// Authentication middleware to check if the user is authorized using the token
const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Extract the token from cookies
    const token = req.cookies.token;
    
    // If there's no token in the cookies, return a 401 Unauthorized error
    if (!token) {
      res.status(401).json({ error: "Unauthorized: Token is missing" });
      return; 
    }

    // Verify the token using the secret key (if the token is valid, it decodes it)
    const decoded = jwt.verify(token, process.env.SECRET_KEY!) as jwt.JwtPayload;
    console.log(decoded); // Log the decoded token to see the user data

    // Assign the decoded user ID to the request object (so it can be accessed in subsequent routes)
    req.id = decoded.id;
    
    // Proceed to the next middleware or route handler
    next(); 
  } catch (error) {
    // If there's any error during token verification (invalid or expired token), return 401 Unauthorized error
    console.error("Authentication Error:", error);
    res.status(401).json({ error: "Unauthorized: Invalid or expired token" });
    return; 
  }
};

export default authMiddleware;
