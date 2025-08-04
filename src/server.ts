import express from 'express';
import cors    from 'cors';
import morgan  from 'morgan';
import path    from 'path';

//List of routes
import Test       from './routes/test';
import TestAddNew from './routes/testaddnew';

//Initial set up
const PORT   = process.env.PORT || 8000;
const server = express();
server.use(morgan('dev'));
server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, '../public')));

//Set the route paths
server.use('/api/v1/test', Test);
server.use('/api/v1/testaddnew', TestAddNew);

server.listen(PORT, () =>
  console.log(`Server running on: http://localhost:${PORT}`)
);

export default server;
