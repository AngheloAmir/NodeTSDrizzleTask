import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

import Test from './routes/test';

const PORT   = process.env.PORT || 8000;
const server = express();
server.use(morgan('dev'));
server.use(cors());

//import helmet from 'helmet';
// server.use(
//   helmet({
//     contentSecurityPolicy: {
//       directives: {
//         defaultSrc: ["'self'"],
//         scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
//         styleSrc: ["'self'", 'fonts.googleapis.com'],
//       },
//     },
//   })
// );

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, '../public')));

//Set the route paths
server.use('/api/v1/test', Test);


server.listen(PORT, () =>
  console.log(`Server running on: http://localhost:${PORT}`)
);

export default server;
