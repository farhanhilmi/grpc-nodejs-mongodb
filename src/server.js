import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import {
  addUser,
  getAllUser,
  updateUser,
  deleteUser,
} from './services/index.js';
import mongodb from './utils/mongo.js';

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const PROTO_PATH = './user.proto';

const packageDef = protoLoader.loadSync(PROTO_PATH, options);
const userPackage = grpc.loadPackageDefinition(packageDef);

const server = new grpc.Server();
server.addService(userPackage.UserService.service, {
  addUser,
  getAllUser,
  updateUser,
  deleteUser,
});

server.bindAsync(
  '127.0.0.1:7001',
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log('Error: ', error);
    console.log(`Server running at http://127.0.0.1:${port}`);
    server.start();
  },
);
