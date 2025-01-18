import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Outputs a Single-Page Application (SPA).
  //distDir: "./build", // Changes the build output directory to `./dist`.
};

export default withNextIntl(nextConfig);
