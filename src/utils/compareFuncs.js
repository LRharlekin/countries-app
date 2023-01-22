export const sortAsc = (a, b) => {
  const nameA = a.name.common.toLowerCase();
  const nameB = b.name.common.toLowerCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

export const sortDesc = (a, b) => {
  const nameA = a.name.common.toLowerCase();
  const nameB = b.name.common.toLowerCase();
  if (nameA > nameB) {
    return -1;
  }
  if (nameA < nameB) {
    return 1;
  }
  return 0;
};
