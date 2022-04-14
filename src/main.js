import { makeSimulate } from './simulation/simulator.js';
import { getForm } from "./util/getter.js";

const simulate = document.querySelector("#simulate");

simulate.onclick = () => {
  let form = getForm();
  makeSimulate(form)
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/serviceWorker.js").catch((error) => {
    console.error(error.message);
  })
}
