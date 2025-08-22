import 'dotenv/config';
import { app } from './app.js';
import { connectDB } from './database/connectDB.js';

const port = process.env.PORT;

connectDB()
      .then(() => {
            console.log('MongoDB connected');
            app.on('error', (error) => {
                  console.error('MongoDB connection Failed', error);
                  throw new Error('MongoDB connection Failed', error);
            });
            app.listen(process.env.PORT || 8000, () => {
                  console.log(`Server running on port http://localhost:${port}`);
            });
      }).catch((error) => {
            console.error('MongoDB connection Failed', error);
      });