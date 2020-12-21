import Decoder from "./decoder.js";
import { toBinary } from "./../helpers/binary.js";

class DecoderV1 extends Decoder {
  applyMask(mask, value) {
    return mask
      .split("")
      .map((bit, i) => (bit === "X" ? value[i] : bit))
      .join("");
  }

  write(mask, memWrite) {
    const [addr, value] = this.parseInstruction(memWrite);
    this.memory[addr] = parseInt(
      this.applyMask(mask, toBinary(value).padStart(mask.length, "0")),
      2
    );
  }

  writeAll(maskedWrites) {
    for (const maskedWrite of maskedWrites) {
      const [mask, ...memWrites] = maskedWrite.split("\n").filter((x) => x);
      for (const memWrite of memWrites) {
        this.write(mask, memWrite);
      }
    }
  }
}

export default DecoderV1;
