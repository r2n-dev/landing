import { Roboto } from "next/font/google";
import MuiWrapper from "../mui/MuiWrapper";
import { Container, CssBaseline } from "@mui/material";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata = {
  title: "R2N",
  description: "R2N Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={roboto.variable}>
        <MuiWrapper>
          <Container>
            {children}
          </Container>
        </MuiWrapper>
      </body>
    </html>
  );
}
