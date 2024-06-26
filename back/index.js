require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const router = require("./routes/index");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const ErrorHandler = require("./middleWare/ErrorHandlingMiddleWare");
const path = require("path");

const PORT = process.env.PORT || 5000; //настройка порта
const app = express(); //вызов сервера

app.use(cors());

//передаем в функцию use express.json для того чтобы приложение могло парсить json формат
app.use(express.json());

//явно указываем серверу что файлы из папки static нужно раздавать как статику(иначе пишет не найден get метод)для получения
app.use(express.static(path.resolve(__dirname, "static")));

//для работы req.files
app.use(fileUpload({}));
app.use("/api", router);

//Обработка ошибок, последний middleWare
app.use(ErrorHandler);

const start = async () => {
    try{
         await sequelize.authenticate() //устанавливаем подключение к бд
         await sequelize.sync() //сверяет состояние бд со схемой данных
        app.listen(PORT, () => {
            console.log(`listening on ${PORT} port`);
          });
          
    }catch(e){
        console.log(e)
    }


}

start()


