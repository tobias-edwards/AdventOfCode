import { readFileSync } from 'fs';

export const readFile = (filename) => readFileSync(filename, 'utf8');
