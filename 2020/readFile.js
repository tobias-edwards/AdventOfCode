import { promises as fs } from "fs";

const readInput = async (filename) => await fs.readFile(filename, "utf8");

export default readInput;
