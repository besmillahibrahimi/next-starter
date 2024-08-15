import "@/styles/globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { cn } from "@/lib/utils";
import { ConfigProvider, theme } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { ThemeConfig } from "antd";
import { ThemeProvider } from "@/components/ThemeProvider";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--lato-font-family",
});

export const metadata: Metadata = {
  title: "Next Start App",
  description:
    "This started app is created to help you not configure theming, i18n, and others from scratch.",
};

const config: ThemeConfig = {
  // Use dark algorithm
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#1890ff",
  },
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={cn(
        "min-h-screen bg-background font-lato antialiased",
        lato.variable
      )}
    >
      <AntdRegistry>
        <ConfigProvider
          theme={{
            token: {
              //colorPrimary: "hsl(var(--brand))", //#f4ce4c
            },
          }}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ConfigProvider>
      </AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
