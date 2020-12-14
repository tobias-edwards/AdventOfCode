const hasFields = (passport, fieldSpecs, { useSpec = true }) => {
  for (const [field, spec] of Object.entries(fieldSpecs)) {
    const regex = new RegExp(
      `${field}${useSpec ? `:${spec.source}($|\\s)` : ""}`
    );
    if (!regex.test(passport)) {
      return false;
    }
  }
  return true;
};

export default hasFields;
