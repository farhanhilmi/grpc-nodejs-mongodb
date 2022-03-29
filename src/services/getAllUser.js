import { getAllUser } from '../repository/user.js';

const createUser = async (call, callback) => {
  try {
    const users = await getAllUser();
    if (!users) callback(null, { users: [] });
    callback(null, { users });
  } catch (err) {
    callback(err);
  }
};

export default createUser;
