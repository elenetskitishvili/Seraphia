import "./globals.css";
import { ThemeProvider } from "next-themes";

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
      <body className="">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
