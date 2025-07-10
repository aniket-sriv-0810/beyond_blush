import dotenv from 'dotenv';
dotenv.config({
  path: './.env',
});
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';

const app = express();
const isProduction = process.env.NODE_ENV === 'production';

// Set trust proxy before session middleware
app.set('trust proxy', 1);

// Middleware setup
const allowedOrigins = [
  'http://localhost:5173',
];

const corsSessionOption = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS policy: No access from origin ${origin}`), false);
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200,
};

const expressSessionOption = {
  secret: process.env.EXPRESS_SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI,
    collectionName: 'sessions',
    autoRemove: 'disabled',
  }),
  cookie: {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week expiry time
    secure: isProduction, // Secure only in production
    sameSite: isProduction ? 'none' : 'lax',
  },
};

app.use(cors(corsSessionOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session(expressSessionOption));


import userRouter from './router/user.router.js' ;

app.use('/api/user' , userRouter);
app.get('/' , (req,res) => {
    res.send("Server connected successfully !");
})



export { app };