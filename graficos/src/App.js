import logo from './logo.svg';
import './App.css';
import { Bar } from 'react-chartjs-2'

function App() {

  const data= {
    labels: ['Estados Unidos', 'México','Italia','Colombia','España'],
    datasets:[{
      label:'Habitantes',
      backgroundColor:'rgba(0,255,0,1)',
      borderColor:'black',
      borderWidth: 1,
      hoverBackgroundColor:'rgba(0,255,0,2)',
      hoverBorderColor:'#FF0000',
      data:[327.16,126.19,60.43,49.64,46.72]
    }]
  }

  const options={
    maintainAspectRatio: false,
    responsive:true,
  }
  return (
    <div className="App" style={{width:'100%', height:'500px'}}>
      <h2>Población en Millones de habitantes</h2>
      <Bar data={data} options={options}/>
    </div>
  );
}

export default App;
