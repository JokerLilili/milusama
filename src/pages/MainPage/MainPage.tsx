import { useEffect } from "react";
import loadScript from "../../utils/script";
import "./MainPage.css";

function MainPage() {
  useEffect(() => {
    loadScript("/js/universe.js");
    loadScript("/js/main.js");
  }, []);

  return (
    <>
      <div className="main-bg">
        <video
          className="main-video"
          width={"100%"}
          height={"100%"}
          autoPlay
          loop
          muted
        >
          <source src="/public/bg.mp4" type="video/mp4" />
        </video>
        <canvas id="canvas"></canvas>
      </div>
    </>
  );
}

export default MainPage;
