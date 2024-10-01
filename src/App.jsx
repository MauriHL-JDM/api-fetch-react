import React, { useState } from "react";
import "./App.css";
import IpInfo from "./components/IpInformation";

function App() {
  const [ipAddress, setIpAddress] = useState("");

  function consult(event) {
    event.preventDefault(); // Evita que la página se recargue
    const formData = new FormData(event.target);
    const ip = formData.get("ip");
    setIpAddress(ip);
  }

  return (
    <div>
      <form onSubmit={consult}>
        <h1>Dirección IP</h1>
        <label>
          <h4>
            Ingrese una IP: <input type="text" name="ip" />
          </h4>
          <button type="submit">Consultar</button>
        </label>
      </form>
      <IpInfo ip={ipAddress} />
    </div>
  );
}

export default App;
