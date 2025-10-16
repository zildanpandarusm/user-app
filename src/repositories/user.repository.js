import { users } from '../data/data.js';

export const getAllUsersRepo = () => users;

export const getUserByIdRepo = (id) => users.find((u) => u.id === id) || null;

export const saveUserRepo = (user) => {
  users.push(user);
};

export const updateUserRepo = (user) => {
  const index = users.findIndex((u) => u.id === user.id);
  if (index !== -1) {
    users[index] = user;
  }
};

export const deleteUserRepo = (id) => {
  const index = users.findIndex((u) => u.id === id);
  if (index !== -1) {
    users.splice(index, 1);
  }
};
