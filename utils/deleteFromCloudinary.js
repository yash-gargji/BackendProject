import { extractPublicId } from "cloudinary-build-url";
import { v2 as cloudinary } from "cloudinary";

const deleteFromCloudinary = async (url) => {
  const publicId = extractPublicId(url);
  await cloudinary.uploader
    .destroy(publicId)
    .then((result) => console.log(result));
};

export {deleteFromCloudinary}
