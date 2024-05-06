const groupBy = (key, data) =>
  data.reduce((accumulator, currData) => {
    if (!accumulator[currData[key]]) accumulator[currData[key]] = [];
    accumulator[currData[key]].push(currData);
    return accumulator;
  }, {});
generateRandomColor = () => {
  // Generating a random number between 0 and 0xFFFFFF
  const randomColor = Math.floor(Math.random() * 0xffffff);
  // Converting the number to a hexadecimal string and padding with zeros
  return `#${randomColor.toString(16).padStart(6, "0")}`;
};
const reduceForPieChart = (data, reducerKey) => 
  Object.entries(data).map(([merchant, txnList]) => {
    return {
      label: merchant,
      value: txnList.reduce((tot, txn) => tot + txn[reducerKey], 0),
      color: generateRandomColor(),
    };
  });

export { groupBy, reduceForPieChart };
