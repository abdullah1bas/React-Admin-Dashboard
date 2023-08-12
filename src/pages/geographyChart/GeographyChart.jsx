import { Box, styled, Typography } from '@mui/material';
import './GeographyChart.css'

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const GeographyChart = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Typography variant="h1">Geography Chart Page</Typography>
    </Box>
  );
}

export default GeographyChart;
