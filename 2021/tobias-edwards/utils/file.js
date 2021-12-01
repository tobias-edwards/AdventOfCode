import { readFileSync } from 'fs';

export const readFile = (filename) => {
  try {
    return readFileSync(filename, 'utf8');
  } catch (err) {
    throw err;
  }
};
