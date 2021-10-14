import http from './http';

export const requestLogin = async (email, password) => {
  const users = await http.post('/login', { email, password });
  console.log(users);
  return users.status === 200 ? users.json : users.status;
};
