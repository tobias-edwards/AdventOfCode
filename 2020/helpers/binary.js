// Zero right-shift converts operand to signed 32-bit to handle negatives
export const toBinary = (dec) => (dec >>> 0).toString(2);
