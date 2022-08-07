exports.getDate = function () {
  const today = new Date();
  const option = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };

  let iday = today.toLocaleDateString("eng-US", option);
  return iday;
};

exports.getDay = function () {
  const weeki = new Date();
  const option = {
    weekday: "long",
  };

  let week = weeki.toLocaleDateString("eng-US", option);
  return week;
};
console.log(module.exports);
