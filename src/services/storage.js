const save = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const get = (key) => {
  const item = localStorage.getItem(key);

  if (!item) {
    return null;
  }

  return JSON.parse(item);
};

export { save, get };
