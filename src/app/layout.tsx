import "./globals.css";
import { ThemeProvider } from "next-themes";
import SkeletonWrapper from "../components/layout/SkeletonWrapper";

export const metadata = {
  title: {
    template: "%s | Shopverse",
    default: "Shopverse",
  },
  description:
    "Discover and sell unique jewelry on our platform. Shop stunning pieces or become a premium seller for unlimited listings and exclusive promotions. Secure payments and a seamless experience await!",

  openGraph: {
    title: "Shopverse - Exclusive Jewelry Marketplace",
    description:
      "Buy and sell unique jewelry pieces. Premium sellers get exclusive benefits!",
    url: "https://shopverse-nu.vercel.app/",
    siteName: "Shopverse",
    images: [
      {
        url: "https://fdynnqlewivodiidzfst.supabase.co/storage/v1/object/public/metadata//645bb2f01432f4b202b41e3f_hero-product-background.jpg",
        width: 1328,
        height: 695,
        alt: "Shopverse - Exclusive Jewelry Marketplace",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shopverse - Exclusive Jewelry Marketplace",
    description:
      "Buy and sell unique jewelry pieces. Premium sellers get exclusive benefits!",
    images: [
      "https://fdynnqlewivodiidzfst.supabase.co/storage/v1/object/public/metadata//645bb2f01432f4b202b41e3f_hero-product-background.jpg",
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale?: string;
  }>;
}

export default async function RootLayout(props: RootLayoutProps) {
  const params = await props.params;
  const { children } = props;
  const { locale } = params || { locale: "en" };

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="font-inter text-customDark dark:bg-darkModeBg dark:text-darkModeText">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SkeletonWrapper>{children}</SkeletonWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
