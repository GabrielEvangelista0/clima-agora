
import axios from 'axios';
import { useState } from 'react';
import './app.css'
import Form from './components/Form';

function App() {
  const key = 'e7fc12b6e44c6ad177cf99ca2fbb4c23'
  const [cidade, setCidade] = useState('catalao')
  const [dados, setDados] = useState({
    name: 'Clima Agora',
    main: {
      temp: 0,
      temp_max: 0,
      temp_min: 0,
      humidity: '0'
    },
    weather: [{
      description: '',
      icon: "01d",
    }]
  })

  const temp = {
    atual: dados.main.temp != 0 ? dados.main.temp - 273.13 : 0,
    min: dados.main.temp_min != 0 ? dados.main.temp_min - 273.13 : 0,
    max: dados.main.temp_max != 0 ? dados.main.temp_max - 273.13 : 0,
  }

  const buscarDados = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`)
      .then((res) => {
        setDados({ ...res.data });
      });
  }

  return (
    <div className="App">

      <div className='box'>

        <Form
          onClick={() => buscarDados()}
          onChange={(e) => setCidade(e.target.value)}
        />
        <div>

          <div className='box-title'>
            <h1>
              {dados.name}
            </h1>
            <img src={`http://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`} />
            <span> {dados.weather[0].description} </span>
            <span>temperatura atual: {temp.atual.toFixed(2)}°C</span>

          </div>

          <div className='box-data'>
            <span>umidade: {dados.main.humidity}% </span>
            <span>temperatura Max: {temp.max.toFixed(2)}°C</span>
            <span>temperatura Min: {temp.min.toFixed(2)}°C</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
