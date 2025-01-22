import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { AppProvider, DashboardLayout } from "@toolpad/core";

const MuiWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppRouterCacheProvider>
            {/* <ThemeProvider theme={theme}> */}
            {children}
            {/* </ThemeProvider> */}
        </AppRouterCacheProvider>
    );
};

export default MuiWrapper;