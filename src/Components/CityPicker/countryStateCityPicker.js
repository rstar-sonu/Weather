// import "./countryStateCityPicker.css";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const CityPicker = (props) => {

//     const [data,setData]=useState([])
//     const [getState,setState]=useState([])
//     const [getCity,setCity]=useState([])
//     const[cityValue,getCityValue]=useState("")

//     let cityData=cityValue
   
   
//     useEffect(() => {
        
//        axios.get(
//             "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"        )
//           .then((response) => {
//             setData(response.data)
//           })
//           .catch((err) => {
//             console.log(err);
//           })

//       },[]);

//       console.log("Value in allContry", data);
//       let country=[...new Set(data.map(item=> item.country))]
//       country.sort();
//       console.log("Value in Contry", country);

//       const handleCountry=(e)=>{
//         let states= data.filter(state=> state.country === e.target.value)
//         states=[...new Set(states.map(item=>item.subcountry))]
//         states.sort();
//         setState(states)
//     }

//     const handleState=(e)=>{
//         let cities= data.filter(city=> city.subcountry === e.target.value)
//         cities.sort(); 
//         setCity(cities)
//         console.log("city is",cities);
//     }

//     const handleCity=(e)=>{
//         getCityValue(e.target.value)
//     }

//   return (
//     <div>
//       <div className="container">

      
//       <label htmlFor="country" className="">Country
//       <select className="form-select" id="country" name="country" required  onChange={handleCountry}>
//           <option value="">Choose...</option>
//             {country.map(item=><option value={item}>{item}</option>)}
//       </select>
//       </label>

      
//       <label htmlFor="state" className="">State
//       <select className="form-select" id="state" name="state" required onChange={handleState}>
//           <option value="">Choose...</option>
//           {getState.map(item=><option value={item}>{item}</option>)}
//       </select>
//       </label>

     
//       <label htmlFor="city" className="">City
//       <select className="form-select" id="city" name="city" required onChange={handleCity}>
//           <option value="">Choose...</option>
//           {getCity.map(item=><option value={item.name}>{item.name}</option>)}
//       </select>
//       </label>
      
//       </div>
//       <div>Hello is jndk{cityData}</div>
      
//     </div>
//   );
// };

// export default CityPicker;
