import dotenv from 'dotenv';
dotenv.config({
  path: './.env',
});
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const isProduction = process.env.NODE_ENV === 'production';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set trust proxy before session middleware
app.set('trust proxy', 1);

// Middleware setup
const allowedOrigins = [
  'http://localhost:5173',
  'https://beyondblushbytamanna.onrender.com'
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


// Serve static files from the public folder
const clientBuildPath = path.join(__dirname, 'public');
app.use(express.static(clientBuildPath, {
    setHeaders: (res, path) => {
      console.log('Serving static file:', path); // Log all served files
    }
  }));

import userRouter from './router/user.router.js' ;
import navRouter from './router/nav.router.js';
import adminRouter from './router/admin.router.js';

app.use('/api/user' , userRouter);
app.use('/api/navigate' , navRouter);
app.use('/api/admin' , adminRouter);
app.get('/' , (req,res) => {
    res.send("Server connected successfully !");
})


// React Router Fix - Serves index.html for unhandled routes
app.use((req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return next();
  }
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});
export { app };