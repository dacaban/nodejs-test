# nodejs-test
Тестовый сервер для генерации данных

## Запуск контейнера

```
docker-compose up -d
```

## Пересборка контейнера

```
docker-compose up -d --build
```

## Описание

Get запрос по адресу `http://localhost:30001/open-api` вернет данные в формате json следующей структуры:

```
[{
  id,
  name,
  items: [{
    id,
    name
  },...]
},...]
```
