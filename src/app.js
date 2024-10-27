import express from 'express';
import { resolve } from 'node:path';
import https from 'https';
import fs from 'fs';
// eslint-disable-next-line import/no-extraneous-dependencies
import cors from 'cors';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.app = express();

    // Certificados SSL
    const key = fs.readFileSync(resolve(__dirname, './config/server.key'));
    const cert = fs.readFileSync(resolve(__dirname, './config/server.cert'));

    this.server = https.createServer({ key, cert }, this.app); // Cria o servidor HTTPS

    this.app.use(cors());
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(
      '/product-file',
      express.static(resolve(__dirname, '../uploads')),
    );
    this.app.use(
      '/category-file',
      express.static(resolve(__dirname, '../uploads')),
    );
  }

  routes() {
    this.app.use(routes);
  }

  // Função para iniciar o servidor HTTPS
  listen(port) {
    this.server.listen(port, () => {
      console.log(`Servidor HTTPS rodando na porta ${port}`);
    });
  }
}

export default new App();
