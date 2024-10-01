import "./App.css";
import IpInfo from "./components/IpInformation";

function App() {
  const ip = "34.211.200.85";

  return (
    <div>
      <h1>Dirección IP</h1>
      <h3>Hora del dox</h3>
      <h4>IP ingresada: {ip}</h4>
      <IpInfo ip={ip} />
    </div>
  );
}

export default App;
