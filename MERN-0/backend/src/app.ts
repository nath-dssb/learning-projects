import "dotenv/config";
import env from "./util/validateEnv";
import express, { NextFunction, Request, Response } from "express";
import notesRoutes from "./routes/notes";
import userRoutes from "./routes/users";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";
import session from "express-session";
import MongoStore from "connect-mongo";
import { requiresAuth } from "./middleware/auth";

const app = express();

app.use(morgan("dev"));

app.use(express.json()); //helps app to accept and write jsons

app.use(session({
  secret: env.SESSION_SECRET, //cookie that the user recieves that identifies the session
  resave: false, 
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 1000,
  },
  rolling: true, 
  store: MongoStore.create({
    mongoUrl: env.MONGO_CONNECTION_STRING
  }), 
}));

app.use("/api/users", userRoutes);
app.use("/api/notes", requiresAuth, notesRoutes); //middelware that catches route reqs

app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found"));
});

//error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "An unknown error occured";
  let statusCode = 500;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({ error: errorMessage });
});

export default app;
