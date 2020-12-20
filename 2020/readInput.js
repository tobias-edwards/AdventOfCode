import { readFileSync } from "fs";

const readInput = (filename) => readFileSync(filename, "utf8");

export default readInput;
