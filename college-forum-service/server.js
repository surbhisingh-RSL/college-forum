// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const runMigrations = require('./utils/runMigrations');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;


const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log("➡️ Backend request:", req.method, req.url);
  next();
});

app.use((req, res, next) => {
  console.log(`➡️ ${req.method} ${req.url}`);
  next();
});

// ✅ API routes
app.use('/api/users', userRoutes);
app.use('/api/post', postRoutes)

// Run migrations before starting
runMigrations().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Migration failed:', err);
});
