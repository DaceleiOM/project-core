const db = require('../config/firebase');
const { v4: uuidv4 } = require('uuid');
const storage = require('../config/firebasestorage');

const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");

class StorageService {
  
  static async uploadImageToStorage(fileBuffer, fileName) {
    const storageRef = ref(storage, fileName);
    await uploadBytes(storageRef, fileBuffer);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  }

  static async uploadImage(id, file) {
    try {
        const fileName = `${uuidv4()}-${file.originalname}`;
        const imageUrl = await StorageService.uploadImageToStorage(file.buffer, fileName);        
        const docRef = await db.collection('products').add({
            ...file,
            imageUrl: imageUrl
        });
        console.log(docRef)
        return imageUrl;
    } catch (error) {
        console.error('Error al subir y guardar la imagen:', error);
        throw error;
    }
  }

  static async deleteImage(req) {
    try {
      const { id, imageUrl } = req;

      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);
      await db.collection('products').doc(id).delete();

      return `La imagen y su referencia se han eliminado correctamente.`;
    } catch (error) {
      console.error('Error al eliminar la imagen y su referencia:', error);
      throw error;
    }
  }
}

module.exports = StorageService
