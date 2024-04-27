const { BasedPlatform } = require("../models/models");
const ApiError = require("../error/APIError");
//base
class BaseController {
  async create(req, res) {
    const {
      Name,
      Power,
      Weightlift,
      Speed,
      Fuel,
      Weight,
    } = req.body;
    const base = await BasedPlatform.create({
      Name,
      Power,
      Weightlift,
      Speed,
      Fuel,
      Weight,
    });
    return res.json(base);
  }
  async getAll(req, res) {
    const base = await BasedPlatform.findAll();
    return res.json(base);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const base = await BasedPlatform.findOne({
      where: { id },
    });
    return res.json(base);
  }
}

module.exports = new BaseController();
