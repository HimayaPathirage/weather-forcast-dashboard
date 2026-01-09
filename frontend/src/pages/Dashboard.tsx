import { useState } from "react";
import styles from "./Dashboard.module.css";
import Scene3D from "../components/Scene3D";

/*function Dashboard() {
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`City: ${city}, Date: ${date}`);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      
      <Scene3D />

      
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

          <button type="submit" className={styles.dashboardButton}>
            Check Weather
          </button>
        </form>
      </div>
    </div>
  );
}*/
function Dashboard() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Scene3D />

      <div style={{ position: "relative", zIndex: 10 }}>
        <h1 style={{ color: "white", fontSize: 40 }}></h1>
      </div>
    </div>
  );
}

export default Dashboard;
