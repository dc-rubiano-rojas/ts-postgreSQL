import express from 'express';
const app = express();

import indexRoutes from './routes/index.routes';

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(indexRoutes);


app.listen(3000, () => {
    console.log('Server on Port', 3000);
})