import "./globals.css";
import { Montserrat } from "next/font/google";
import { Footer, Header, ChakraWrapper } from "@/components";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Cyberabad",
  description: "Cyberabad: A project of FCCI to Transform Textile into GenAi.",
  icons: {
    icon: { url: "/img/logo.png", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <ChakraWrapper>{children}</ChakraWrapper>
        <Footer />
      </body>
    </html>
  );
}
