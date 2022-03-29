import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const PROTO_PATH = '../user.proto';

const packageDef = protoLoader.loadSync(PROTO_PATH, options);
const userPackage = grpc.loadPackageDefinition(packageDef);

const client = new userPackage.UserService(
  '127.0.0.1:7001',
  grpc.credentials.createInsecure(),
);

export default client;
