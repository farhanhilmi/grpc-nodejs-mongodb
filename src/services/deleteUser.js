import { deleteUserById } from '../repository/user.js';

const deleteUser = async (call, callback) => {
  try {
    const userId = call.request;
    await deleteUserById(userId);
    callback(null, { status: 'ok' });
  } catch (error) {
    callback(error);
  }
};

export default deleteUser;
