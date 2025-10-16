import { readUsers, writeUsers } from '../data/data-handler.js';

export const getAllUsersRepo = () => readUsers();

export const getUserByIdRepo = (id) => {
  const users = readUsers();
  return users.find((u) => u.id === id) || null;
};

export const saveUserRepo = (user) => {
  const users = readUsers();
  users.push(user);
  writeUsers(users);
};

export const updateUserRepo = (user) => {
  const users = readUsers();
  const index = users.findIndex((u) => u.id === user.id);
  if (index !== -1) {
    users[index] = user;
    writeUsers(users);
  }
};

export const deleteUserRepo = (id) => {
  const users = readUsers();
  const index = users.findIndex((u) => u.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    writeUsers(users);
  }
};
