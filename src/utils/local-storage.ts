export const loadFromLocalStorage = (key: string): any => {
  const value = localStorage.getItem(key);
  if (value != null) {
    return JSON.parse(value);
  }
  return null;
};

export const saveToLocalStorage = (key: string, value: any): any => {
  localStorage.setItem(key, JSON.stringify(value));
};
