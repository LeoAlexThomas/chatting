/** @type {import('next').NextConfig} */

const getEnvConfig = () => {
  switch (process.env.ENV) {
    case "dev":
      return { env: "dev", apiUrl: "http://localhost:8080" };
    case "prod":
      return { env: "prod", apiUrl: "https://chatting-prod.com" };
  }
};

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  publicRuntimeConfig: getEnvConfig(),
};

export default nextConfig;
