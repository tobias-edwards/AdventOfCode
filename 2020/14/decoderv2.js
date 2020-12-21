import Decoder from "./decoder.js";
import { toBinary } from "./../helpers/binary.js";
import { countOccurences } from "./../helpers/string.js";

class DecoderV2 extends Decoder {
  applyMask(mask, value) {
    return mask
      .split("")
      .map((bit, i) => (bit === "X" ? "X" : bit | value[i]))
      .join("");
  }

  findFloatingAddresses(addr) {
    const addresses = [];
    const exp = countOccurences([...addr], "X");
    let ind;

    for (let i = 0; i < 2 ** exp; i++) {
      ind = 0;
      const bin = toBinary(i).padStart(exp, "0");
      const newAddr = addr.replace(/X/g, () => bin[ind++]);
      addresses.push(newAddr);
    }
    return addresses;
  }

  write(mask, memWrite) {
    const [addr, value] = this.parseInstruction(memWrite);
    const floatAddresses = this.findFloatingAddresses(
      this.applyMask(mask, toBinary(addr).padStart(mask.length, "0"))
    );
    for (const floatAddr of floatAddresses) {
      this.memory[floatAddr] = value;
    }
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

export default DecoderV2;
