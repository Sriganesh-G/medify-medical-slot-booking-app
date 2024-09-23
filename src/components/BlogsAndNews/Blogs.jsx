import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BlogsCard from "./BlogsCard.jsx";

const Blogs = () => {
  return (
    <Box py={6} width={"100%"} sx={{ backgroundColor: "white" }}>
      <Container>
        <Typography color="#2AA7FF" fontWeight={600} textAlign="center">
          Blog & News
        </Typography>
        <Typography textAlign="center" variant="h2" mb={2}>
          Read Our Latest News
        </Typography>

        <Grid container spacing={2}>
          <Grid xs={12} sm={6} md={4}>
            <BlogsCard />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <BlogsCard />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <BlogsCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Blogs;
