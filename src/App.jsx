
import axios from 'axios';
import { useEffect, useState } from 'react';
import './app.css'
import Form from './components/Form';

function App() {
  const key = 'e7fc12b6e44c6ad177cf99ca2fbb4c23'
  const [cidade, setCidade] = useState('catalao')
  const [dados, setDados] = useState({
    name: '',
    main: {
      temp: '',
      temp_max: '',
      temp_min: '',
      humidity: ''
    },
    weather: [{
      description: '',
      icon: "01d",
    }]
  })

  const buscarDados = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`)
      .then((res) => {
        setDados({ ...res.data })
        console.log(dados);
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
            <span> {dados.weather[0].description} </span>
            <img src={`http://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`} />
          </div>

          <div className='box-data'>
            <span>umidade: {dados.main.humidity}% </span>
            <span>temperatura atual: {dados.main.temp}</span>
            <span>temperatura Max: {dados.main.temp_max}</span>
            <span>temperatura Min: {dados.main.temp_min}</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
