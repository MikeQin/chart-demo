import { createChart, CrosshairMode } from 'lightweight-charts';
import useData from '../hooks/useData'
import React, { useEffect, useRef } from 'react'

export default function Chart() {
  const { prices, volumes, markers } = useData();
  const chartContainerRef = useRef();
  const chart = useRef();
  const resizeObserver = useRef();
  const once = useRef(true);

  useEffect(() => {
    if (once.current === false) return;
    once.current = false;

    const width = chartContainerRef.current.clientWidth;
    const height = chartContainerRef.current.clientHeight;
    //console.log("width", width)
    //console.log("height", height)
    //console.log("markers", markers);
    
    chart.current = createChart(chartContainerRef.current, { 
      width: width,
      height: height,
      layout: {
        backgroundColor: '#253248',
        textColor: 'rgba(255, 255, 255, 0.9)',
      },
      grid: {
        vertLines: {
          color: '#334158',
        },
        horzLines: {
          color: '#334158',
        },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      priceScale: {
        borderColor: '#485c7b',
      },
      timeScale: {
        borderColor: '#485c7b',
      },
      watermark: {
        text: "AAPL",
        fontSize: 128,
        color: "rgba(256, 256, 256, 0.1)",
        visible: true
      }
    });
    
    const candleSeries = chart.current.addCandlestickSeries({
      upColor: '#4bffb5',
      downColor: '#ff4976',
      borderDownColor: '#ff4976',
      borderUpColor: '#4bffb5',
      wickDownColor: '#ef5350', // default: '#ef5350', current: #838ca1
      wickUpColor: '#26a69a', // default: #26a69a, current: #838ca1
    });
    candleSeries.setData(prices);
    candleSeries.setMarkers(markers);

    const volumeSeries = chart.current.addHistogramSeries({
      color: '#182233',
      lineWidth: 2,
      priceFormat: {
        type: 'volume',
      },
      overlay: true,
      scaleMargins: {
        top: 0.8,
        bottom: 0,
      },
    });
    volumeSeries.setData(volumes);
    
  }, [prices, volumes, markers])

  const onlyOnce = useRef(true);
  //Resize chart on container resizes.
  useEffect(() => {
    if (onlyOnce.current === false) return;
    onlyOnce.current = false;

    resizeObserver.current = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      chart.current.applyOptions({ width, height });
      setTimeout(() => {
        chart.current.timeScale().fitContent();
      }, 0);
    });

    resizeObserver.current.observe(chartContainerRef.current);

    return () => resizeObserver.current.disconnect();
  }, []);

  return (
    <div className="Chart" style={{backgroundColor: '#253248', color: 'white'}}>
      <h1>Smart Point</h1>
      <div ref={chartContainerRef} className="chart-container"/>
      <p>Copyright &copy; 2022 TechSoft</p>
    </div>
  )
}
