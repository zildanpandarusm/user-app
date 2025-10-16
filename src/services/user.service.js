import { validateUser } from '../utils/validator.js';
import { randomUUID } from 'crypto';
import { getAllUsersRepo, getUserByIdRepo, saveUserRepo, updateUserRepo, deleteUserRepo } from '../repositories/user.repository.js';

export const createUserService = (data) => {
  const validData = validateUser(data);
  const users = getAllUsersRepo();

  if (users.find((u) => u.username === validData.username)) {
    throw new Error('Username already exists');
  }

  const newUser = {
    id: randomUUID(),
    ...validData,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  saveUserRepo(newUser);
  return newUser;
};

export const getAllUsersService = () => getAllUsersRepo();

export const getUserByIdService = (id) => {
  const user = getUserByIdRepo(id);
  if (!user) throw new Error('User not found');
  return user;
};

export const updateUserService = (id, data) => {
  const user = getUserByIdRepo(id);
  if (!user) throw new Error('User not found');

  const validData = validateUser(data, true);

  if (validData.username && validData.username !== user.username) {
    const users = getAllUsersRepo();
    if (users.find((u) => u.username === validData.username)) {
      throw new Error('Username already exists');
    }
  }

  const filteredData = Object.fromEntries(Object.entries(validData).filter(([_, v]) => v !== undefined));

  Object.assign(user, filteredData, { updatedAt: new Date() });
  updateUserRepo(user);
  return user;
};

export const deleteUserService = (id) => {
  const user = getUserByIdRepo(id);
  if (!user) throw new Error('User not found');

  deleteUserRepo(id);
};
