import dynamic from 'next/dynamic'

const ApexChart = dynamic(() => import('../components/ApexChart'), {
  ssr: false
})

const ApexChartView = () => {
  
  return (
    <div style={{ textAlign: 'center'}}>
      <ApexChart />
    </div>
  );
}
 
export default ApexChartView;