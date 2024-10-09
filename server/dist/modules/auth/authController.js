"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const model_1 = __importDefault(require("../user/model"));
async function login(req, res) {
    const { email, password } = req.body;
    try {
        // Find the user by email
        const user = await model_1.default.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        // Compare the provided password with the stored password hash
        /* const isPasswordValid = await bcrypt.compare(password, user.password);
         if (!isPasswordValid) {
           return res.status(401).json({ error: 'Invalid email or password' });
         }*/
        // Generate a JWT token
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });
        // Return the token as the response
        res.json({ token });
    }
    catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
exports.login = login;
async function logout(req, res) {
    // Perform any necessary logout logic, such as invalidating the token or clearing session data
    // Return an appropriate response
    res.json({ message: 'Logout successful' });
}
exports.logout = logout;
