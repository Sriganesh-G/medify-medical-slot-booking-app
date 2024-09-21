import React, { useState } from "react";
import {
  Box,
  Container,
  Button,
  List,
  ListItem,
  Stack,
  Typography,
  useMediaQuery,
  IconButton,
  Drawer,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import "../../App.css";
import Buttons from "../Buttons/Buttons";
import logo from "../../../public/assets/logo.png";
const Navbar = () => {
  const isReducedScreenSize = useMediaQuery("(max-width:900px");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    // setDrawerOpen((prev) => !prev);
    setDrawerOpen(newOpen);
    console.log(drawerOpen);
  };

  // drawer code
  const DrawerList = (
    <Stack
      className="drawer"
      spacing={5}
      direction={"column"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ width: 250, position: "relative" }}
      role="presentation"
      padding={5}
      onClick={toggleDrawer(false)}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={() => {
          setDrawerOpen((prev) => !prev);
        }}
      >
        <CloseIcon />
      </IconButton>
      <Link>Find Doctors</Link>
      <Link to="/search">Hospitals</Link>
      <Link>Medicines</Link>
      <Link>Surgeries</Link>
      <Link>Software for Provider</Link>
      <Link>Facilities</Link>
      <Link to="/my-bookings" />
      <Link to="/my-bookings">
        <Button sx={{ backgroundColor: "white", color: "black" }}>
          My Bookings
        </Button>
      </Link>
    </Stack>
  );

  return (
    <header>
      {/* Header Message */}
      <Box className="headerMessage">
        <p>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </p>
      </Box>
      <Box>
        {/* Navbar section */}
        <Stack
          className="navbar"
          spacing={2}
          padding={5}
          paddingLeft={10}
          paddingRight={10}
          direction={"row"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          height={"100px"}
          sx={{
            padding: { xs: "10px", sm: "5px 60px" },
          }}
        >
          <Link>
            <img src={logo} alt="medify logo" height={27} width={92} />
          </Link>
          {!isReducedScreenSize ? (
            <Stack
              spacing={5}
              direction={"row"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Link>Find Doctors</Link>
              <Link to="/search">Hospitals</Link>
              <Link>Medicines</Link>
              <Link>Surgeries</Link>
              <Link>Software for Provider</Link>
              <Link>Facilities</Link>
              <Link to="/my-bookings" />
              <Link to="/my-bookings">
                <Buttons value={"My Bookings"} />
              </Link>
            </Stack>
          ) : (
            //IconButton is a component that is used to wrap icons and make them clickable.
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Stack>
      </Box>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </header>
  );
};

export default Navbar;
