import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../data/users.json');

export const readUsers = () => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]');
  }
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

export const writeUsers = (users) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};
