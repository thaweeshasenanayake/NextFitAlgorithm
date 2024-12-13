import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <AppBar component={"nav"} position={"fixed"}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant={"h6"} color="common.white">
              Next Fit Algorithm
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box
        sx={(theme) => ({
          width: "100%",
          height: `calc(100% - ${theme.mixins.toolbar.minHeight}px)`,
        })}
      >
        <Box sx={{ p: 2 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
