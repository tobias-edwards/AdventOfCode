class Program {
  constructor(instructions) {
    this.instructions = instructions;
    this.acc = 0;
  }

  _ammendInstruction(lineNum, newCommand) {
    const newInstructions = [...this.instructions];
    newInstructions[lineNum] = newInstructions[lineNum].replace(
      /\w+/,
      newCommand
    );
    return newInstructions;
  }

  _parseInstruction(instruction) {
    const [, command, arg] = instruction.match(/(\w+) ([+-]\d+)/);
    return [command, arg];
  }

  run(instructions = this.instructions) {
    this.acc = 0;
    let lineNum = 0;
    let linesVisited = [];

    while (!linesVisited.includes(lineNum)) {
      if (lineNum === instructions.length) {
        return true;
      }

      linesVisited.push(lineNum);
      const [command, arg] = this._parseInstruction(instructions[lineNum]);
      switch (command) {
        case "acc":
          this.acc += +arg;
        case "nop":
          lineNum++;
          break;
        case "jmp":
          lineNum += +arg;
      }
    }
    return false;
  }

  removeLoop() {
    // Brute force each instruction and try solve
    for (let i = 0; i < this.instructions.length; i++) {
      const [command] = this._parseInstruction(this.instructions[i]);
      if (command === "nop" || command === "jmp") {
        if (
          this.run(
            this._ammendInstruction(i, command === "nop" ? "jmp" : "nop")
          )
        ) {
          return true;
        }
      }
    }
    return false;
  }
}

export default Program;
