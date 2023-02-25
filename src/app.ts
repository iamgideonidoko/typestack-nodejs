import { config } from 'dotenv';
config(); // env
import express from 'express';

(async () => {
  const app = express();
  const PORT = 5000;

  app
    .listen(PORT, () => {
      console.log('Server started on port ' + PORT);
    })
    .on('error', () => {
      process.exit(1);
    });
})();
