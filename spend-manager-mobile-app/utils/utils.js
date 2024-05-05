const groupBy = (key, data) =>
  data.reduce((accumulator, currData) => {
    if (!accumulator[currData[key]]) accumulator[currData[key]] = [];
    accumulator[currData[key]].push(currData);
    return accumulator;
  }, {});
