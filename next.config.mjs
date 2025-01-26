import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  serverActions: {
    bodySizeLimit: "5mb",
  },
  images: {
    domains: ["fdynnqlewivodiidzfst.supabase.co"],
  },
};

export default withNextIntl(nextConfig);
