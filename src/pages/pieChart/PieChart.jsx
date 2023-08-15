import { Container } from "@mui/material";
import "./PieChart.css";
import Pie from "./Pie";
import Header from "../../components/Header";


const PieChart = () => {
  
  return (
    <Container sx={{height: '75vh'}} fixed>
      <Header
          title={"Pie Chart"}
          subTitle={"Simple Pie Chart"}
        />
      <Pie isDashbord={false} />
    </Container>
  );
};

export default PieChart;
