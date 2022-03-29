import User from '../models/user.js';

const addUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log('data', data);
      const newUser = await User.create(data);
      console.log('newUser', newUser);
      resolve(newUser);
    } catch (err) {
      reject(err);
    }
  });
};

const getUserById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({ id }).exec();
      resolve(user);
    } catch (err) {
      reject(err);
    }
  });
};

const getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.find();
      resolve(user);
    } catch (err) {
      reject(err);
    }
  });
};

const updateUserById = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOneAndUpdate({ id }, data, {
        new: true,
      }).exec();
      resolve(user);
    } catch (err) {
      reject(err);
    }
  });
};

const deleteUserById = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOneAndDelete({ id }).exec();
      resolve(user);
    } catch (err) {
      reject(err);
    }
  });
};

export { addUser, getUserById, getAllUser, updateUserById, deleteUserById };
