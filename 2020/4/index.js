import readInput from "./../readInput.js";
import passwordFieldSpecs from "./passport_field_specs.js";
import hasFields from "./fields_check.js";
import { countValid } from "../helpers/array.js";

const passports = readInput("./input.txt").split("\n\n");

// Problem 4a
console.log(
  countValid(passports, (passport) =>
    hasFields(passport, passwordFieldSpecs, { useSpec: false })
  )
);

// Problem 4b
console.log(
  countValid(passports, (passport) =>
    hasFields(passport, passwordFieldSpecs, { useSpec: true })
  )
);
