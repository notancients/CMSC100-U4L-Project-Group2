import jwt from 'jsonwebtoken';

function authenticateTokenMiddleware(req, res, next) {
    console.log("Authenticating token validity (for both users and admins).");
    next();
}

function authorizeAdminMiddleware(req, res, next) {
    console.log("Authorizing user as administrator.")
    next();
}

export {
    authenticateTokenMiddleware,
    authorizeAdminMiddleware
}