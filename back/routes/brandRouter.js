const express = require("express"); //получаем класс роутера из библиотеки
const BrandController = require("../controllers/brandController");
const router = express.Router(); //вызываем обьект класса
const checkrole = require("../middleWare/checkRoleMiddleware");
router.post("/", checkrole("ADMIN"), BrandController.create);
router.get("/", BrandController.getAll);


module.exports = router;
