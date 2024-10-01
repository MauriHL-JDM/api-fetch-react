import React, { useEffect, useState } from "react";

const IpInfo = ({ ip }) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!ip) return;

    setIsLoading(true);
    setError(null);

    fetch(`https://api.boostr.cl/ip/${ip}.json`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") setData(data.data);
        else setData("IP inválida");
        setStatus(data.status);
      })
      .catch((error) => setError(error.data))
      .finally(() => setIsLoading(false));
  }, [ip]);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Ha ocurrido un error: {error.message}</p>;

  if (status === "success") {
    return (
      <>
        {data && (
          <div>
            <h2>Información de la IP {data.ip}</h2>
            <p>
              País: "{data.country}"
              <br />
              Código de país: "{data.countryCode}"
              <br />
              Región: "{data.regionName}"
              <br />
              Ciudad: "{data.city}"
              <br />
              Código postal: "{data.zip}"
              <br />
              Sistema Autónomo AS: "{data.as}"
              <br />
              Proxy: {data.proxy ? "Sí" : "No"}
            </p>
          </div>
        )}
      </>
    );
  }
  if (status === "error") {
    return <>{data}</>;
  }
};

export default IpInfo;
