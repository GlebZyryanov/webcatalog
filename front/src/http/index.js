import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

//В случае второго инстанса необходимо подставлять токен к каждому запросу
//реализуем это с помощью интерсептора - функции которая параметром принимает конфиг

const authInterceptor = (config) => {
  //в конфиг добавляем хедер авторизейшен с токеном, который будем получать из локального хранилища по ключу токен
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
  //при авторизации мы будем этот токен в локальное хранилище добавлять
};

//для инстанса auth.host добавляем интерцептор для запроса
//он будет перед каждым запросом подставлять токен в хедеравторизейшен
$authHost.interceptors.request.use(authInterceptor)

export { $host, $authHost };
