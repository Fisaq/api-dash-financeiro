import express from "express";
import userRoutes from "../presentation/routes/user.routes";

const app = express();

app.use(express.json());

app.use('/api', userRoutes);

export default app;