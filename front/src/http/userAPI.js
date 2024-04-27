//здесь реализация функции авторизации, регистрации и проверки токена на валидность(функция чек)

import { $host, $authHost } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (email, password) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    role: "ADMIN",
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};
export const login = async (email, password) => {
  const { data } = await $host.post("api/user/login", { email, password });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};
/**
 * Функция для проверки токена на валидность
 * @returns - декодированный токен
 */
export const check = async () => {
  // Отправляем запрос на сервер для получения данных пользователя
  const { data } = await $authHost.get("api/user/auth");
  // Сохраняем токен в локальном хранилище
  localStorage.setItem("token", data.token);
  // Возвращаем декодированный токен
  return jwtDecode(data.token);
};