const process = document.querySelector("#process");
const modules = document.querySelector("#modules");
const modes = document.querySelector("#modes");

export const getForm = () => {
  return {
    process: process.value.replaceAll(/\s/g, ""),
    modules: parseInt(modules.value),
    mode: modes.value,
  };
};
