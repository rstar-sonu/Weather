import "./displayweather.css"
import icon from "../.././Assets/image/icon.png"

const DisplayWeather=(props)=>{
    return(
        <div>
            <div className="container">
             <div className="main">
                <div><img className="tempicon" src={icon} alt="icon"/></div>
                <div className="temp">{props.temp2}°C</div>
                <div className="city">{props.city}</div>
                <div className="minmax">
                    <div className="min">{props.min}Min-32°C</div>
                    <div className="max">{props.max}Max-38°C</div>
                </div>
             </div>

             <div className="tilecontainer">
                <div className="tile">Visibility:{props.visibility}</div>
                <div className="tile">Wind Speed:{props.windspeed}</div>
                <div className="tile">Pressure:{props.pressure}</div>
                <div className="tile">Cod:{props.cod}</div>
             </div>
            
            </div>
        </div>
    )
}

export default DisplayWeather