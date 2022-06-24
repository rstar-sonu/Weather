import "./home.css"

const Home=()=>{
    return(
        <div>
            <div className="homeContainer">
                <h1>Weather</h1>
                <div className="weather"></div>
                <div className="weather1">
                    <h3>Noida</h3>
                    <h1>30 c</h1>
                </div>
                <div className="weather2">
                <div className="card">
                <h6>Humidity</h6>
                </div>
                <div className="card">
                <h6> pressure</h6>
                </div>
                <div className="card"></div>
                <div className="card"></div>
                
                </div>
            </div>







        </div>
    )
}

export default Home;