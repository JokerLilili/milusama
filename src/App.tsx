import { useState } from "react";
import "./App.css";
import gift from "/gift.svg";
import loadScript from "./utils/script";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  const [showGift, setShowGift] = useState<boolean>(false);
  const [showMain, setShowMain] = useState<boolean>(false);

  const videoEnd = () => {
    setShowGift(true);
    console.log("end");
  };

  const openDialog = () => {
    const somedialog = document.getElementById("somedialog"),
      dlg = new DialogFx(somedialog);

    dlg.toggle.bind(dlg);
    dlg.toggle();
    loadScript("/js/index.js");
  };

  const toMain = () => {
    setShowMain(true);
  };

  return (
    <>
      {showMain ? (
        <MainPage />
      ) : (
        <>
          {showGift ? (
            <img
              className="gift"
              src={gift}
              data-dialog="somedialog"
              onClick={openDialog}
            ></img>
          ) : (
            ""
          )}
          <video
            className="video"
            onEnded={videoEnd}
            width={"100%"}
            height={"100%"}
            autoPlay
            muted
          >
            <source src="/public/begin.mp4" type="video/mp4" />
          </video>
          <div id="somedialog" className="dialog">
            <div className="dialog__overlay"></div>
            <div className="dialog__content">
              <div className="morph-shape">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 560 280"
                  preserveAspectRatio="none"
                >
                  <rect x="3" y="3" fill="none" width="556" height="276" />
                </svg>
              </div>
              <div className="dialog-inner">
                <h2>
                  <strong>Howdy</strong>, I'm a dialog box
                </h2>
                <span className="input input--shoko">
                  <input
                    className="input__field input__field--shoko"
                    type="text"
                    id="input-6"
                  />
                  <label
                    className="input__label input__label--shoko"
                    htmlFor="input-6"
                  >
                    <span className="input__label-content input__label-content--shoko">
                      World
                    </span>
                  </label>
                  <svg
                    className="graphic graphic--shoko"
                    width="300%"
                    height="100%"
                    viewBox="0 0 1200 60"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0" />
                    <path d="M0,2.5c0,0,298.666,0,399.333,0C448.336,2.5,513.994,13,597,13c77.327,0,135-10.5,200.999-10.5c95.996,0,402.001,0,402.001,0" />
                  </svg>
                </span>
                <div>
                  <div className="button_su">
                    <span className="su_button_circle"></span>
                    <a href="#" className="button_su_inner" onClick={toMain}>
                      <span className="button_text_container">
                        Another button
                      </span>
                    </a>
                  </div>
                  {/* <button className="action" data-dialog-close>
                Close
              </button> */}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
