import { simulateFifo } from "./algorithms.js";

const drawHeader = (header, table) => {
  let thead = document.createElement("thead");
  header.forEach((item) => {
    let th = document.createElement("th");
    th.innerText = item;
    thead.appendChild(th);
  });
  table.appendChild(thead);
};

const handleBelamy = (process, currentModules, currentSimulationFailures) => {
  try {
    let current = document.querySelector(
      "#result article div p span"
    ).innerHTML;
    let belamy = JSON.parse(localStorage.getItem("belamy"));

    if (
      belamy["process"] === process.join(",") &&
      belamy["modules"] < currentModules &&
      parseInt(current) < currentSimulationFailures
    ) {
      try {
        Swal.fire(
          "Wow, it's Belamy!",
          "This chain suffers from the Belady anomaly",
          "info"
        );
      } catch (error) {
        console.log(error.message);
      }
    }
  } catch (error) {
    console.error(error);
  }
};

const simulationMode = (process, modules, mode, table) => {
  let result;
  switch (mode) {
    case "optimum": {
      console.log(process, modules, table);
      try {
        Swal.fire(
          "Working on it",
          "I'm not getting pay for this, give me time",
          "info"
        );
      } catch (error) {
        console.log(error.message);
      }
      result = [0, 0];
      break;
    }
    case "fifo": {
      result = simulateFifo(process, modules, table);
      break;
    }
    case "lru": {
      console.log(process, modules, table);
      try {
        Swal.fire(
          "Working on it",
          "I'm not getting pay for this, give me time",
          "info"
        );
      } catch (error) {
        console.log(error.message);
      }
      result = [0, 0];
      break;
    }
  }

  handleBelamy(process, modules, result[0]);

  return [
    //failures
    result[0],
    //success
    result[1],
    //total
    process.length,
  ];
};

const drawSimulation = (table) => {
  let article = document.createElement("article");

  article.appendChild(table);
  document.querySelector("#main").innerHTML = "";
  document.querySelector("#main").appendChild(article);
};

const performeStats = (result) => {
  const resultLabels = document.querySelectorAll("#result article div p span");

  resultLabels.forEach((item, index) => {
    item.innerText = result[index];
  });
};

export const makeSimulate = (simulationData) => {
  let process = simulationData["process"].split(",");
  let table = document.createElement("table");

  drawHeader(process, table);
  let result = simulationMode(
    process,
    simulationData["modules"],
    simulationData["mode"],
    table
  );
  drawSimulation(table);

  performeStats(result);
};
