import { useState } from "react";
import styles from "./Dashboard.module.css";
//import Scene3D from "../components/Scene3D";


function Dashboard() {
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`City: ${city}, Date: ${date}`);
  };

  return (
    
    <div
  className="relative min-h-screen overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: "url('/night.jpg')" }}
>
  {/* Moving clouds */}
  <div
    className="absolute inset-0 opacity-40 animate-clouds"
    style={{
      backgroundImage: "url('/clouds.png')",
      backgroundRepeat: "repeat",
      backgroundSize: "cover"
    }}
  /><div
    className="absolute inset-0 opacity-40 animate-clouds"
    style={{
      backgroundImage: "url('/clouds.png')",
      backgroundRepeat: "repeat",
      backgroundSize: "cover"
    }}
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* App UI */}
  <div className="relative z-10 p-6">
    {/** EVERYTHING you already wrote goes here **/}
    <div className="flex justify-between items-center p-10">
  
      <div className="px-10">
        <h1 className="text-7xl   text-white ">Toronto</h1>
        <p className="text-white">Monday, Jan 10, 10:00 AM</p>
      </div>
      
        <div className="flex items-start gap-2 px-10">
  
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={styles.dashboardInput}
            required
          />
          
          <div className="flex flex-col gap-2">
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={styles.dashboardInput}
                required
              />
              <button className={styles.submitButton}>
                Submit
              </button>
          </div>
        </div>
    </div>
    
    <div className="flex justify-between items-center px-10 pt-0 ">
      <div className="flex items-center gap-1">
        <div className="text-[130px]  text-white  px-10 pt-0">
          25
        </div>
        <div className="flex flex-col gap-3 text-white ">
            <span>°C | °F</span>
            <span>Partly Cloudy</span>
        </div>
      </div>
      <div className="flex justify-between items-center  pt-0 px-10">
      <div className="flex items-center gap-4 pt-0">
        <p className="text-[120px]">🌤️</p>
        <div className="flex flex-col gap-0 text-gray-600">
            <span className="flex items-center gap-2 text-white">
              <img src="/icons/digital.png" className="w-6 h-6" alt="Temperature" />
              feels like 31°C
            </span>
            <span className="flex items-center gap-2 text-white">
              <img src="/icons/water-drop.png" className="w-6 h-6" alt="Humidity" />
              Humidity: 60%
            </span>
            <span className="flex items-center gap-2 text-white">
              <img src="/icons/cloud.png" className="w-6 h-6" alt="Wind" />
              Wind : 10 km/h
            </span>
        </div>
      </div>

    </div> 

    </div>  

     
        
    
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] pb-4">
  <div className="flex justify-between gap-6 p-2 rounded-xl overflow-x-auto 
                  bg-white/10 backdrop-blur-md border border-white/20">
    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
      <div
        key={day}
        className="flex flex-col items-center justify-center min-w-[160px] min-h-[160px] 
                   p-6"
      >
        <p className="font-bold mb-2">{day}</p>
        <div className="text-2xl mb-2">25°</div>
        <p>🌤️</p>
      </div>
    ))}
  </div>
</div>
  </div>
</div>
    

  
    

  );
}
/*function Dashboard() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Scene3D />

      <div style={{ position: "relative", zIndex: 10 }}>
        <h1 style={{ color: "white", fontSize: 40 }}></h1>
      </div>
    </div>
  );
  <div className="relative min-h-screen w-full overflow-hidden">
      <div className={styles.dashboardContainer}>
        <form onSubmit={handleSubmit} className={styles.dashboardForm}>
          <h1 className="text-2xl font-bold mb-4 text-center">
            Weather Dashboard
          </h1>

          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={styles.dashboardInput}
            required
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={styles.dashboardInput}
            required
          />

          
        </form>
      </div>
    </div>
}*/

export default Dashboard;
