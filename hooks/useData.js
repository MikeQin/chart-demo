import { useEffect } from "react";
import { priceData } from './priceData';
import { volumeData } from './volumeData';

// Bars can be individually coloured with 'color' prop.
const green = 'rgba(75, 255, 181, 0.4)';
const red = 'rgba(255, 73, 118, 0.4)';
const markers = [];

const useData = () => {

  useEffect(() => {

    priceData.map((p, i) => {
      if (p.open < p.close) {
        volumeData[i].color = green;
      }
      else {
        volumeData[i].color = red;
      }

      if (p.close < 160) {
        markers.push(
          {
            time: p.time,
            position: 'belowBar',
            shape: "arrowUp",
            text: "buy",
            color: "#1BEB2A"
          }
        );
      } else if (p.close > 205) {
        markers.push(
          {
            time: p.time,
            position: 'aboveBar',
            shape: "arrowDown",
            text: "sell",
            color: "#EF423D"
          }
        );
      }
      return p;
    })
  
  }, []); 
  
  return (
    {
      prices: priceData,
      volumes: volumeData,
      markers: markers
    }
  );
}

export default useData;
