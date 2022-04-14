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

const simulationMode = (process, modules, mode, table) => {
  let result;
  switch (mode) {
    case "optimum": {
      console.log(process, modules, table);
      result = [0, 0];
      break;
    }
    case "fifo": {
      result = simulateFifo(process, modules, table);
      break;
    }
    case "lru": {
      console.log(process, modules, table);
      result = [0, 0];
      break;
    }
  }

  return [
    //failures
    result[0],
    //success
    result[1],
    //total
    process.length,
    //belamy
    localStorage.getItem("belamy"),
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
