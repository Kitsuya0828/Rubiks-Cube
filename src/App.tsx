import React from "react";
import Rubiks from "./rubiks/index";

window.onload = () => {
  const container = document.getElementById("container");
  const orderChangeEle = document.getElementById(
      "order-select"
  ) as HTMLSelectElement;
  const disorderEle = document.getElementById(
      "disorder"
  ) as HTMLButtonElement;
  const restore = document.getElementById("restore") as HTMLButtonElement;

  if (container) {
      const rubiks = new Rubiks(container);

      orderChangeEle.addEventListener("change", (event) => {
          const value = (event.target! as HTMLSelectElement).value;

          rubiks.setOrder(parseInt(value));
      });

      disorderEle.addEventListener("click", () => {
          rubiks.disorder();
      });

      restore.addEventListener("click", () => {
          const ok = window.confirm("Are you sure?");

          if (ok) {
              rubiks.restore();
          }
      });
  }
};


function App() {
    return (
        <>
            <div id="container" style={{"position": "relative", "width": "100%", "height": "100vh"}}>
                <div id="status" style={{"position":"absolute"}}>
                    <h1>Rubik's Cube</h1>
                    <div className="status-item">
                        <div className="status-item">
                            <label>State: </label>
                            <span id="finish"></span>
                        </div>
                        <label>Size: </label>
                        <select id="order-select">
                            <option value="2">2×2</option>
                            <option value="3" selected>
                                3×3
                            </option>
                            <option value="4">4×4</option>
                            <option value="5">5×5</option>
                            <option value="6">6×6</option>
                            <option value="7">7×7</option>
                            <option value="8">8×8</option>
                            <option value="9">9×9</option>
                            <option value="10">10×10</option>
                        </select>
                    </div>
                    <div className="status-item">
                        <button id="restore">Reset</button>
                    </div>
                    <div className="status-item">
                        <button id="disorder">Shuffle</button>
                    </div>
                </div>
                <script type="module" src="./rubiks/index.ts"></script>
            </div>
        </>
    );
}

export default App;
