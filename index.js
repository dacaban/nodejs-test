const express = require('express');
const cors = require('cors');
const faker = require('@faker-js/faker');
const port = process.env.PORT || 8005;

const app = express();
app.use(cors());
app.options('*', cors());

faker.locale = 'ru';

app.get('/open-api',(req,res) => {
  //счетчик, он же id элементов
  let currentId = 0;
  //Генерация 100 элементов
  const result = [...Array(100)].map(() => {
    let item = {
      id: currentId,
      name: faker.commerce.productName()
    };
    currentId++;
    //сгенерируем случайное количество дочерних элементов (от 1 до 5)
    const itemsCount = numberGenerator(1, 5);
    item.items = [...Array(itemsCount)].map(() => {
      let itemInItem = {
        id: currentId,
        name: faker.commerce.color()
      };
      currentId++;
      return itemInItem;
    });
    return item;
  });
  res.status(200).send(JSON.stringify(result));
});

const numberGenerator = (start, end) => {
  return Math.floor(Math.random() * end) + start;
};

app.listen(port, function(){
  // console.log('Sample mySQL app listening on port ' + port);
});