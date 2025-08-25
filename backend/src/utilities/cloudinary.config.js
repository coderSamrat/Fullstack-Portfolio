import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

if (!(process.env.CLOUDINARY_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET)) {
      throw new Error("Missing Cloudinary configuration");
} else {
      cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
      });
}

export const uploadImageOnCloudinary = async (image) => {
      try {
            let buffer = image.buffer ? image.buffer : (image.arrayBuffer ? Buffer.from(await image.arrayBuffer()) : null);

            if (!buffer) {
                  throw new Error("Invalid image format");
            }

            const uploadImage = await new Promise((resolve, reject) => {
                  const upload_stream = cloudinary.uploader.upload_stream(
                        { folder: "Portfolio", resource_type: "auto" },
                        (error, result) => {
                              if (error) return reject(error);
                              resolve(result);
                        }
                  );
                  Readable.from(buffer).pipe(upload_stream);
            });
            return uploadImage;
      } catch (error) {
            throw new Error(`Failed to upload image: ${error.message}`);
      }
};