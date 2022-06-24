import { useEffect, useState } from "react";
import "./Components/CityPicker/countryStateCityPicker.css"
import axios from "axios";
import Header from "./Components/header/header";
import DisplayWeather from "./Components/WeatherDisplay/displayweather";

function App() {

  const [data,setData]=useState([])
  const [getState,setState]=useState([])
  const [getCity,setCity]=useState([])
  const[cityValue,getCityValue]=useState("")
 
  useEffect(() => {
      
     axios.get(
          "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"        )
        .then((response) => {
          setData(response.data)
        })
        .catch((err) => {
          console.log(err);
        })

    },[]);

    console.log("Value in allContry", data);
    let country=[...new Set(data.map(item=> item.country))]
    country.sort();
    console.log("Value in Contry", country);

    const handleCountry=(e)=>{
      let states= data.filter(state=> state.country === e.target.value)
      states=[...new Set(states.map(item=>item.subcountry))]
      states.sort();
      setState(states)
  }

  const handleState=(e)=>{
      let cities= data.filter(city=> city.subcountry === e.target.value)
      cities.sort(); 
      setCity(cities)
      console.log("city is",cities);
  }

  const handleCity=(e)=>{
      getCityValue(e.target.value)
  }



  const [input, setInput] = useState("");
  const getInput = (event) => {
    setInput(event.target.value);
  };

  const [data1, setData1] = useState({});
 
  useEffect(() => {
    let city=cityValue
    let key = "58886041fa915a41d0b54309011ce3e4";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Value in Data", data);
        setData1(data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[handleCity]);

  // let Sonu1 = Math.floor(data1.main.temp)
  console.log("fdddddd",data1.name)

  return (
    <div>
      <Header value={input} onChange={getInput} />
      
      <div className="container">

      
      <label htmlFor="country" className="">Country
      <select className="form-select" id="country" name="country" required  onChange={handleCountry}>
          <option value="">Choose...</option>
            {country.map(item=><option value={item}>{item}</option>)}
      </select>
      </label>

      
      <label htmlFor="state" className="">State
      <select className="form-select" id="state" name="state" required onChange={handleState}>
          <option value="">Choose...</option>
          {getState.map(item=><option value={item}>{item}</option>)}
      </select>
      </label>

     
      <label htmlFor="city" className="">City
      <select className="form-select" id="city" name="city" required onChange={handleCity}>
          <option value="">Choose...</option>
          {getCity.map(item=><option value={item.name}>{item.name}</option>)}
      </select>
      </label>
      
      </div>
      
      <DisplayWeather city={data1.name} visibility={data1.visibility} temp2="" />
      <div>Hello{data1.name} {}</div>
    </div>
  );
}

export default App;
