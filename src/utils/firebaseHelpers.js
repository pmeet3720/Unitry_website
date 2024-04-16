import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase/firebaseConfig'; // Adjust path as necessary

export const getImageUrl = async (imagePath) => {
  const imageRef = ref(storage, imagePath);
  try {
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error("Failed to get image URL:", error);
    return null;
  }
};
