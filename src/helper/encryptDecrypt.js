import CryptoJS from 'crypto-js';

// Secret key for encryption (use a strong and secret key in production)
const SECRET_KEY = 'your_secret_key';

// Encrypt data
export const encryptData = (data) => {
  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
  return encrypted;
};

// Decrypt data
export const decryptData = (encryptedData) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decrypted);
};
 
