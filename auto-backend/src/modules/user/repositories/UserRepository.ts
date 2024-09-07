import User  from '../model';

const UserRepository = {
  async getAllUsers(): Promise<User[]> {
    return User.findAll();
  },

  async getUserById(userId: string): Promise<User | null> {
    return User.findByPk(userId);
  },

  async createUser(userData: Partial<User>): Promise<User> {
    return User.create(userData);
  },

  async updateUser(userId: string, userData: Partial<User>): Promise<User | null> {
    const user = await User.findByPk(userId);
    if (user) {
      await user.update(userData);
      return user;
    }
    return null;
  },

  async deleteUser(userId: string): Promise<User | null> {
    const user = await User.findByPk(userId);
    if (user) {
      await user.destroy();
      return user;
    }
    return null;
  },
};

export default UserRepository;