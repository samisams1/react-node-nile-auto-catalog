import { Request, Response } from 'express';
declare function login(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
declare function logout(req: Request, res: Response): Promise<void>;
export { login, logout };
