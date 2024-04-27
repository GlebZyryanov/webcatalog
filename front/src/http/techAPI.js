import { $host, $authHost } from "./index";
import { jwtDecode } from "jwt-decode";

export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};
export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const createBase = async (base) => {
  const { data } = await $authHost.post("api/base", base);

  return data;
};
export const fetchBases = async () => {
  const { data } = await $host.get("api/base");
  return data;
};
export const fetchOneBases = async (id) => {
  const { data } = await $host.get("api/base/" + id);
  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $authHost.post("api/brand", brand);

  return data;
};
export const fetchBrands = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};

export const createTech = async (tech) => {
  const { data } = await $authHost.post("api/tech", tech);
  return data;
};

export const updateTech = async (tech) => {
  const { data } = await $authHost.post("api/tech/", tech);
  return data;
};

export const fetchTechs = async (typeId, brandId, page, limit = 5) => {
  const { data } = await $host.get("api/tech", {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  });
  return data;
};

export const fetchOneTechs = async (id) => {
  const { data } = await $host.get("api/tech/" + id);
  return data;
};
