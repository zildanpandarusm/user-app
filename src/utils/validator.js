export const validateUser = (data, isUpdate = false) => {
  const { name, username, email, address } = data;
  if (!isUpdate) {
    if (!name || !username || !email || !address) throw new Error('All fields are required');
  }

  if (name !== undefined) {
    if (typeof name !== 'string' || name.trim() === '') {
      throw new Error('Name must be a non-empty string');
    }
    if (name.length > 100) {
      throw new Error('Name cannot be longer than 100 characters');
    }
  }

  if (username !== undefined) {
    if (typeof username !== 'string' || username.trim() === '') {
      throw new Error('Username must be a non-empty string');
    }
    if (username.length > 50) {
      throw new Error('Username cannot be longer than 50 characters');
    }
  }

  if (email !== undefined) {
    if (typeof email !== 'string' || email.trim() === '') {
      throw new Error('Email cannot be empty');
    }
    if (!email.includes('@')) {
      throw new Error('Invalid email format, must contain "@"');
    }
  }

  if (address !== undefined) {
    if (typeof address !== 'string' || address.trim() === '') {
      throw new Error('Address must be a non-empty string');
    }
    if (address.length > 200) {
      throw new Error('Address cannot be longer than 200 characters');
    }
  }

  return { name, username, email, address };
};
