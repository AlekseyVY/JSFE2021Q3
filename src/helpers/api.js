export const api = (id, dto, mode) => {
  switch (mode) {
    case 'set':
      localStorage.setItem(id, dto);
      break;
    case 'get':
      return localStorage.getItem(id);
    case 'delete':
      localStorage.removeItem(id);
      break;
    case 'clear':
      localStorage.clear();
      break;
    default: break;
  }
};