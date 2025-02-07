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
