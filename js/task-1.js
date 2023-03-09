const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

// додаємо поле mood зі значенням 'happy'
user.mood = 'happy';

// замінюємо значення hobby на 'skydiving'
user.hobby = 'skydiving';

// замінюємо значення premium на false
user.premium = false;

// виводимо вміст об'єкта user в форматі ключ:значення
for (const key of Object.keys(user)) {
  console.log(`${key}:${user[key]}`);
}
