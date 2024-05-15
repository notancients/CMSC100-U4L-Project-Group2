import jwt from 'jsonwebtoken';

function authenticateTokenMiddleware(req, res, next) {
    console.log("Now");
    next();
}

function authorizeAdmin(req, res, next) {

}
