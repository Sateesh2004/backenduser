import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
declare global {
  namespace Express{
      interface Request {
          id: string;
      }
  }
}

const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    
    
    const token = req.cookies.token;
    if (!token) {
      res.status(401).json({ error: "Unauthorized: Token is missing" });
      return; 
    }

   
    const decoded = jwt.verify(token, process.env.SECRET_KEY!) as jwt.JwtPayload;
    console.log(decoded)

    
    req.id = decoded.id
   
    

    next(); 
   
   
    
  } catch (error) {
    console.error("Authentication Error:", error);
    res.status(401).json({ error: "Unauthorized: Invalid or expired token" });
    return; 
  }
};

export default authMiddleware;
