let queue = [];

const fillQueue = (modules) => {
  for (let item = 0; item < modules; item++) {
    queue[item] = -1;
  }
};

const addProcessTable = (table, failure = false) => {
  let tr = document.createElement("tr");
  (failure)
    ? tr.classList = "failure"
    : tr.classList = ""

  queue.forEach((item) => {
    let td = document.createElement("td");
    item == -1 ? (td.innerText = " ") : (td.innerText = item);
    tr.appendChild(td);
  });

  table.appendChild(tr);
};

const fifoQueueHandler = (process, index, table) => {
  if (queue.includes(process)) {
    addProcessTable(table);
    return true;
  } else {
    queue[index] = process;
    addProcessTable(table, true);
    return false;
  }
};

export const simulateFifo = (process, modules, table) => {
  let tbody = document.createElement("tbody");
  fillQueue(modules);
  let failures = 0;
  let success = 0;
  let index = 0;
  process.forEach((currentProcess) => {
    if (fifoQueueHandler(currentProcess, index, tbody)) {
      success++;
    } else {
      failures++;
      if (index >= modules - 1) {
        index = 0;
      } else {
        index++;
      }
    }
  });

  table.appendChild(tbody);
  queue = [];
  return [failures, success];
};
