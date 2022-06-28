import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('../components/Chart'), {
  ssr: false
})

const ChartView = () => {
  
  return (
    <div style={{ textAlign: 'center'}}>
      <Chart />
    </div>
  );
}
 
export default ChartView;