import { createUserService, getAllUsersService, getUserByIdService, updateUserService, deleteUserService } from '../services/user.service.js';
import { success, error } from '../utils/response.js';

export const createUser = (req, res) => {
  try {
    const newUser = createUserService(req.body);
    return success(res, 'User created successfully', newUser, 201);
  } catch (err) {
    return error(res, err.message);
  }
};

export const getAllUsers = (req, res) => {
  const users = getAllUsersService();
  return success(res, 'Users fetched successfully', users);
};

export const getUserById = (req, res) => {
  try {
    const user = getUserByIdService(req.params.id);
    return success(res, 'User fetched successfully', user);
  } catch (err) {
    return error(res, err.message, 404);
  }
};

export const updateUser = (req, res) => {
  try {
    const updatedUser = updateUserService(req.params.id, req.body);
    return success(res, 'User updated successfully', updatedUser);
  } catch (err) {
    return error(res, err.message);
  }
};

export const deleteUser = (req, res) => {
  try {
    deleteUserService(req.params.id);
    return success(res, 'User deleted successfully');
  } catch (err) {
    return error(res, err.message);
  }
};
