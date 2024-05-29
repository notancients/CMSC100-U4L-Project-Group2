import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

function authenticateTokenMiddleware(req, res, next) {
    console.log("Authenticating token validity (for both users and admins).");

    const authHeader = req.headers.authorization;
    console.log("Auth Header: ", authHeader);
    // Check if authorization header is present
    if (!authHeader) {
        return res.status(401).json({ 
                success: false,
                data: null,
                message: 'Unauthorized access' 
            });
    }

    // Extract token from header (format: 'Bearer <token>')
    const token = authHeader.split(' ')[1];

    // Verify token using secret key
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded; // Attach decoded user data to request object
        console.log("Valid token");
        next(); // Allow request to proceed
    } catch (error) {
        return res.status(403).json({
            success: false,
            data: null,
            message: 'Invalid token' 
        });
    }

    next();
}

function authorizeAdminMiddleware(req, res, next) {
    console.log("Authorizing user as administrator.")

    const authHeader = req.headers.authorization;
    console.log("Auth Header: ", authHeader);
    // Check if authorization header is present
    if (!authHeader) {
        return res.status(401).json({ 
                success: false,
                data: null,
                message: 'Unauthorized access' 
            });
    }

    // Extract token from header (format: 'Bearer <token>')
    const token = authHeader.split(' ')[1];

    // Verify token using secret key
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if (decoded.user_type === "User") {
            return res.status(400).json({
                success: false,
                data: null,
                message: "Not an administrator"
            });
        }
        req.user = decoded; // Attach decoded user data to request object
        next(); // Allow request to proceed
    } catch (error) {
        return res.status(403).json({
            success: false,
            data: null,
            message: 'Invalid token' 
        });
    }

    next();
}

export {
    authenticateTokenMiddleware,
    authorizeAdminMiddleware
}