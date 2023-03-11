const countProps = function (obj) {
  // твій код
  return Object.keys(obj).length;

  //   const keys = Object.keys(obj);
  //   return keys.length;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
