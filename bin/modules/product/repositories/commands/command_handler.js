
const Product = require('./domain');
const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
const db = new Mongo(config.get('/mongoDbUrl'));

// const postDataLogin = async (payload) => {
//   const user = new User(db);
//   const postCommand = async payload => user.generateCredential(payload);
//   return postCommand(payload);
// };

// const registerUser = async (payload) => {
//   const user = new User(db);
//   const postCommand = async payload => user.register(payload);
//   return postCommand(payload);
// };

const insertProduct = async (payload) => {
  const product = new Product(db);
  const postCommand = async (payload) => product.create(payload);
  return postCommand(payload);
};

const deleteProduct = async (payload) => {
  const product = new Product(db);
  const postCommand = async (payload) => product.delete(payload);
  return postCommand(payload);
};

module.exports = {
  insertProduct,
  deleteProduct
};
