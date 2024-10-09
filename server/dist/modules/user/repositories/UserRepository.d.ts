import User from '../model';
declare const UserRepository: {
    getAllUsers(): Promise<User[]>;
    getUserById(userId: string): Promise<User | null>;
    createUser(userData: Partial<User>): Promise<User>;
    updateUser(userId: string, userData: Partial<User>): Promise<User | null>;
    deleteUser(userId: string): Promise<User | null>;
};
export default UserRepository;
