import React, { useEffect } from "react";

function Maps({ lat, lon }) {
  useEffect(() => {
    const mapData = document.getElementById("iframe");
    mapData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  }, [lat, lon]);

  return (
    <div>
      <iframe id="iframe" className="mt-3 rounded-3" width="70%" height="700px" title="googleMaps"></iframe>
    </div>
  );
}
export default Maps;