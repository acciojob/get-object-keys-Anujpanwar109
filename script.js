const myObj = {
  name: "John",
  getKeys: function () {
    return Object.keys(this);
  }
};
console.log(myObj.getKeys());