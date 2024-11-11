/** @type {import('next').NextConfig} */

const getEnvConfig = () => {
  switch (process.env.ENV) {
    case "dev":
      return { env: "dev", apiUrl: "http://localhost:8081/api" };
    case "prod":
      return { env: "prod", apiUrl: "https://chatting-prod.com/api" };
  }
};

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  publicRuntimeConfig: getEnvConfig(),
};

export default nextConfig;
