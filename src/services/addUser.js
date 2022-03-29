import { addUser } from '../repository/user.js';

const createUser = async (call, callback) => {
  try {
    const user = call.request;
    // const newUser = await createUser(user);
    callback(null, await addUser(user));
  } catch (err) {
    callback(err);
  }
};

export default createUser;
