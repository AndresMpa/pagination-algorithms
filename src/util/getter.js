const data = document.querySelector("#data")

export const getForm = () => {
  console.log(data.value);
  
  return {
    arr: [],
    modules: 1,
    mode: "FIFO",
  };
};
