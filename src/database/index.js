import { Sequelize } from 'sequelize';
import mongoose from 'mongoose';
import configdatabase from '../config/database';

import user from '../app/models/User';
import Product from '../app/models/Products';
import Category from '../app/models/Category';

const models = [user, Product, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(configdatabase);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }

  //  conexão com o mongoDB
  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/devburger',
    );
  }
}
export default new Database();
