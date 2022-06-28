import series from '../assets/series';
import ReactApexChart from "react-apexcharts";
import { useEffect, useRef } from 'react';

const options = {
  chart: {
    type: 'candlestick',
    height: 400
  },
  title: {
    text: 'CandleStick Chart',
    align: 'left'
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    tooltip: {
      enabled: true
    }
  }
};

const ApexChart = () => {

  const chart = useRef();
  const once = useRef(true);

  useEffect(() => {
    if (once.current === false) return;
    once.current = false;

    // console.log("width", chart.current.clientWidth);
    // console.log("height", chart.current.clientHeight);

  }, [once])

  return (
    <>
      <div id="chart" ref={chart}>
        <h2>SPX</h2>
        <ReactApexChart
          options={options} 
          series={series} 
          type="candlestick" 
          //height={400}
        />
      </div>
    </>
  )
}

export default ApexChart;