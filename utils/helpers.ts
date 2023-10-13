type ClassObject = { string: string; condition: boolean };

const classes = (...classes: ClassObject[]) => {
  return classes
    .filter((classObj) => classObj.condition)
    .map((classObj) => classObj.string)
    .join(' ');
};

export { classes };
