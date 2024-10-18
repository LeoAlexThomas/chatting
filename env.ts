import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const { env, apiUrl } = publicRuntimeConfig;

const getEnv = () => {
  return env;
};

const getApiUrl = () => {
  return apiUrl;
};

export { getEnv, getApiUrl };
