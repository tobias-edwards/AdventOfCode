const passwordFieldSpecs = {
  byr: /(19[2-9]\d|200[0-2])/, // 1920-2002
  iyr: /(20(1\d|20))/, // 2010-2020
  eyr: /(20(2\d|30))/, // 2020-2030
  hgt: /(1([5-8]\d|9[0-3])cm|(59|6\d|7[0-6])in)/, // 150-193cm or 59-76in
  hcl: /#[\da-f]{6}/, // #[0-f]{6}
  ecl: /(amb|blu|brn|gry|grn|hzl|oth)/, // amb,blue,brn,gry,grn,hzl,oth
  pid: /\d{9}/, // [0-9]{9}
};

export default passwordFieldSpecs;
