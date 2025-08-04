import express from 'express';
import cors    from 'cors';
import morgan  from 'morgan';
import path    from 'path';

//List of routes============================================
import Test    from './routes/testroute';
import Todo    from './routes/todo';

//Initial set up=============================================
const server = express();
server.use(morgan('dev'));
server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, '../public')));

//Set the route paths========================================
server.use('/api/v1/test',  Test);
server.use('/api/v1/todos', Todo);

export default server;
