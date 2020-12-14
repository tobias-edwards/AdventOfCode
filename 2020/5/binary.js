const replace = (str, key) => {
  const keys = Object.keys(key).join();
  return str.replace(new RegExp(`[${keys}]`, "g"), (char) => key[char]);
};

export { replace };
