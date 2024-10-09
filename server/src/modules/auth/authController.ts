import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../user/model';

async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Compare the provided password with the stored password hash
   /* const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }*/

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });

    // Return the token as the response
    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
// New current user function
async function currentUser(req: Request, res: Response) {
  // Extract the token from the Authorization header
  const authHeader = req.headers['authorization'];
  console.log('Received Authorization header:', authHeader);

  if (!authHeader) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Split the header to get the token
  const token = authHeader.split(' ')[1];
  console.log('Extracted token:', token);

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Verify the token using your secret key
    const decoded = jwt.verify(token, 'your-secret-key') as { userId: number };
    console.log('Decoded token:', decoded);

    // Fetch the user from the database
    const user = await User.findByPk(decoded.userId);
    console.log('Fetched user:', user);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Exclude the password from the response
    const { password, ...userData } = user.get();
    res.json({ user: userData });
  } catch (error: any) {
    console.error('Error fetching current user:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function logout(req: Request, res: Response) {
  // Perform any necessary logout logic, such as invalidating the token or clearing session data
  // Return an appropriate response
  res.json({ message: 'Logout successful' });
}

export { login, currentUser,logout };