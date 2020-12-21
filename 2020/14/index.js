import readInput from "./../readInput.js";
import DecoderV1 from "./decoderv1.js";
import DecoderV2 from "./decoderv2.js";

const maskedWrites = readInput("./input.txt")
  .split("mask = ")
  .filter((x) => x);

// Question 14a
const decoderV1 = new DecoderV1();
decoderV1.writeAll(maskedWrites);
console.log(decoderV1.sumMemoryValues());

// Question 14b
const decoderV2 = new DecoderV2();
decoderV2.writeAll(maskedWrites);
console.log(decoderV2.sumMemoryValues());
