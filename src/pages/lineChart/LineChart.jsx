import Line from './Line';
import './LineChart.css'
import { Container } from '@mui/material';
import Header from "../../components/Header";

const LineChart = () => {
  
  return (
    <Container sx={{ height: '75vh' }} fixed>
      <Header
          title={"Line Chart"}
          subTitle={"Simple Line Chart"}
        />
      <Line  isDahboard={false} />
    </Container>
  );
}

export default LineChart;
