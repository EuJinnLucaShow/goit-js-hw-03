const findBestEmployee = function (employees) {
  //   Object.values() повертає масив значень його власних властивостей
  const values = Object.values(employees);
  /* Math.max шукає і повертає найбільший з аргументів (чисел), тобто очікує не масив значень, а довільну кількість аргументів.
  Розподілимо колекцію елементів у якості окремих аргументів синтаксис ... повертає розпакований масив, тобто розподіляє його елементи у якості окремих аргументів.*/
  const maxTasks = Math.max(...values);
  // Метод find() використовується для одного завдання - пошуку елемента за унікальним значенням властивості.
  const bestEmployee = Object.keys(employees).find(
    employee => employees[employee] === maxTasks,
  );

  return bestEmployee;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
