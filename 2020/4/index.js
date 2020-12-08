import readFile from "./../readFile.js";
import fieldSpecs from "./passport_field_specs.js";
import hasFields from "./fields_spec.js";

const passports = readFile("./input.txt").then((file) => file.split("\n\n"));

const countValidPassports = (passports, fieldSpecs, useSpec = true) => {
  let numValid = 0;
  passports.forEach((passport) => {
    if (hasFields(passport, fieldSpecs, useSpec)) {
      numValid++;
    }
  });
  return numValid;
};

// Problem 4a
passports
  .then((passports) => countValidPassports(passports, fieldSpecs, false))
  .then((result) => console.log(result));

// Problem 4b
passports
  .then((passports) => countValidPassports(passports, fieldSpecs))
  .then((result) => console.log(result));
