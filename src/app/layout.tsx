import { Roboto } from "next/font/google";
import MuiWrapper from "../mui/MuiWrapper";
import { Container, createTheme, CssBaseline } from "@mui/material";
import { AppProvider, DashboardLayout, Navigation } from "@toolpad/core";
import {
  BarChart,
  ContactEmergency,
  Dashboard,
  Description,
  HelpOutline,
  Layers,
  ShoppingCart,
  Work,
} from "@mui/icons-material";
import theme, { demoTheme } from "../mui/theme";
import { Logo } from "@components";

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
  const NAVIGATION: Navigation = [
    {
      kind: "header",
      title: "About",
    },
    {
      segment: "who-is-andres",
      title: "Who is Andres?",
      icon: <HelpOutline />,
    },
    {
      segment: "portfolio",
      title: "Portfolio",
      icon: <Work />,
    },
    {
      segment: "contact",
      title: "Contact",
      icon: <ContactEmergency />,
    },
    {
      kind: "divider",
    },
    {
      kind: "header",
      title: "Tools",
    },
    {
      segment: "reports",
      title: "Reports",
      icon: <BarChart />,
      children: [
        {
          segment: "sales",
          title: "Sales",
          icon: <Description />,
        },
        {
          segment: "traffic",
          title: "Traffic",
          icon: <Description />,
        },
      ],
    },
    {
      segment: "integrations",
      title: "Integrations",
      icon: <Layers />,
    },
  ];

  return (
    <html lang="en" data-toolpad-color-scheme="light">
      <body className={roboto.variable}>
        <MuiWrapper>
          <AppProvider
            branding={{
              title: "",
              logo: <Logo size="small" />,
              homeUrl: "/who-is-andres",
            }}
            navigation={NAVIGATION}
            theme={theme}
          >
            <DashboardLayout hideNavigation>{children}</DashboardLayout>
          </AppProvider>
        </MuiWrapper>
      </body>
    </html>
  );
}
