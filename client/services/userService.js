import client from '../grpc/user.js';

const getAllUser = (req, res) => {
  client.getAllUser({}, (error, data) => {
    if (error) res.status(400).json(error);
    res.status(200).json(data);
  });
};

const addUser = (req, res) => {
  const { body } = req;
  // client.addUser({});
  console.log('body: ', body);
  client.addUser(body, (error, data) => {
    console.log('YEEY', data);
    if (error) res.status(400).json(error);
    res.status(201).json(data);
  });
};

const updatedUser = (req, res) => {
  const { body } = req;
  const { userId } = req.params;
  client.updateUser({ ...body, _id: userId }, (error, data) => {
    console.log(data);
    if (error) res.status(400).json(error);
    res.status(200).json(data);
  });
};

const deleteUser = (req, res) => {
  const { userId } = req.params;
  client.deleteUser(userId, (error, data) => {
    console.log(data);
    if (error) res.status(400).json(error);
    res.status(200).json(data);
  });
};

export default { getAllUser, addUser, updatedUser, deleteUser };
