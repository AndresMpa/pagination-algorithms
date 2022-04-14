import { makeSimulate } from './simulation/simulator.js';
import { getForm } from "./util/getter.js";

const simulate = document.querySelector("#simulate");

simulate.onclick = () => {
  let form = getForm();
  makeSimulate(form)
};
