import mongoose from 'mongoose';

if (!process.env.MONGODB_URI && !MONGODB_NAME) {
      throw new Error('MONGODB_URI and MONGODB_NAME is not found in environment variables');
}

export const connectDB = async () => {
      try {
            const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`);
            if (connectionInstance) {
                  console.log('MongoDB connected successfully', connectionInstance.connection.host );
            } else {
                  console.error('MongoDB connection failed');
                  process.exit(1);
            }
      } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            process.exit(1);
      }
}