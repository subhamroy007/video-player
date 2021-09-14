import { useState } from "react";
import "./App.css";
import StartScreenComponent from "./components/start-screen-component/StartScreenComponent";
import VideoComponent from "./components/video-component/VideoComponent";

function App() {
  const [url, setUrl] = useState();
  const readyStateHandler = (dataUrl) => {
    setUrl(dataUrl);
    console.log("url received");
  };

  return (
    <div className="app-container">
      {!url && <StartScreenComponent onReady={readyStateHandler} />}
      {url && <VideoComponent srcUrl={url} />}
    </div>
  );
}

export default App;
