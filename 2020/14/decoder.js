class Decoder {
  constructor() {
    this.memory = {};
  }

  parseInstruction(instruction) {
    const [, addr, value] = instruction.match(/mem\[(\d+)\] = (\d+)/);
    return [+addr, +value];
  }

  sumMemoryValues() {
    return Object.values(this.memory).reduce((total, value) => total + value);
  }
}

export default Decoder;
