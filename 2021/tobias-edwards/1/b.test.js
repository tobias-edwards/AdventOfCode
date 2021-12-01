import path from 'path';
import { readFile } from '../utils/file';
import solve from './b';

it('example', () => {
  expect(solve([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])).toEqual(5);
});

test('puzzle input', () => {
  const depths = readFile(path.resolve(__dirname, './input.txt'))
    .split('\n')
    .filter((n) => n)
    .map((n) => +n);
  expect(solve(depths)).toEqual(1362);
});