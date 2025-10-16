import express from 'express';
import userRouter from './routes/user.route.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);

const PORT = 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
