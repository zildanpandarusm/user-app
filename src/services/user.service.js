import { readUsers, writeUsers } from '../data/data-handler.js';
import { validateUser } from '../utils/validator.js';
import { randomUUID } from 'crypto';

export const createUserService = (data) => {
  const validData = validateUser(data);
  const users = readUsers();
  const exists = users.find((u) => u.username === validData.username);
  if (exists) throw new Error('Username already exists');

  const newUser = {
    id: randomUUID(),
    ...validData,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  users.push(newUser);
  writeUsers(users);
  return newUser;
};

export const getAllUsersService = () => readUsers();

export const getUserByIdService = (id) => {
  const users = readUsers();
  const user = users.find((u) => u.id === id);
  if (!user) throw new Error('User not found');
  return user;
};

export const updateUserService = (id, data) => {
  const users = readUsers();
  const user = users.find((u) => u.id === id);
  if (!user) throw new Error('User not found');

  const validData = validateUser(data, true);

  if (validData.username && validData.username !== user.username) {
    const exists = users.find((u) => u.username === validData.username);
    if (exists) throw new Error('Username already exists');
  }

  const filteredData = Object.fromEntries(Object.entries(validData).filter(([_, v]) => v !== undefined));

  Object.assign(user, filteredData, { updatedAt: new Date() });
  writeUsers(users);
  return user;
};

export const deleteUserService = (id) => {
  const users = readUsers();
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) throw new Error('User not found');
  users.splice(index, 1);
  writeUsers(users);
};
