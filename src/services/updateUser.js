import { updateUserById } from '../repository/user.js';

const updateUser = async (call, callback) => {
  try {
    const user = call.request;
    console.log(user);
    await updateUserById(user._id, user);
    callback(null, { status: 'ok' });
  } catch (error) {
    callback(error);
  }
};

export default updateUser;
