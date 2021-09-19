import http from './http';

export const requestLogin = async (email, password) => {
  const users = await http.get('/users');
  const usersFiltered = users.filter((user) => user.email === email && user.password === password);
  return usersFiltered ? usersFiltered[0] : undefined;
};
