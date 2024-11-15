import React, { useEffect } from "react";

const TikTok = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "");
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const lastDiv = document.getElementById("lastDiv");
    if (lastDiv) {
      lastDiv.style.setProperty("z-index", "99999", "important");
    }
  }, []);

  return (
    <>
    <div className="my-6 ">
        <div
          className="elfsight-app-ef92d437-3429-48bc-85b9-b374d21c4472"
          data-elfsight-app-lazy
        ></div></div>
    </>
  );
};

export default TikTok;
