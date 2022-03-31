import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AboutMe from "./posts/first-post";
import { Grid } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import {
  Animate,
  AnimateKeyframes,
  useAnimateKeyframes,
} from "react-simple-animate";
import Image from "next/image";
import Articles from "./articles/articles";

const pages = ["Blog"];
const settings = ["Profile", "Dashboard", "Logout"];
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [value, setValue] = React.useState(0);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
              <AppBar position="static" color="primary">
                <Container maxWidth="xl">
                  <Toolbar disableGutters>
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                    >
                      <AnimateKeyframes
                        play
                        iterationCount="infinite"
                        direction="alternate"
                        duration={5}
                        keyframes={[
                          "transform: rotateX(0) rotateY(0) rotateZ(0)",
                          "transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg)",
                        ]}
                      >
                        <Image
                          src="/favicon.ico"
                          height={40}
                          width={40}
                          alt="Logo"
                        />
                      </AnimateKeyframes>
                    </Typography>
                    <Box
                      sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                    >
                      <Tabs
                        value={value}
                        onChange={handleTabChange}
                        aria-label="basic tabs example"
                      >
                        <Tab
                          label="Articles"
                          {...a11yProps(0)}
                          style={{ textTransform: "none" }}
                        />
                        <Tab
                          label="Posts"
                          {...a11yProps(1)}
                          style={{ textTransform: "none" }}
                        />
                        <Tab
                          label="About me"
                          {...a11yProps(2)}
                          style={{ textTransform: "none" }}
                        />
                      </Tabs>
                    </Box>

                    {/* <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                          alt="Ashutosh"
                          src="/public/images/profile.jpg"
                        />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box> */}

                    <IconButton title="refresh" color="secondary">
                      <RestartAltIcon />
                    </IconButton>
                  </Toolbar>
                </Container>
              </AppBar>
            </ThemeProvider>
          </Stack>
        </Grid>

        <Grid item>
          <TabPanel value={value} index={0}>
            <Articles />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Random blogs
          </TabPanel>
          <TabPanel value={value} index={2}>
            <AboutMe handleTabChange={handleTabChange} />
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
