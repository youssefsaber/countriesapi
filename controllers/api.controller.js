const express = require('express');
const router = express.Router();

const apiService = require('../services/api.service');

const getCountry = async (req, res, next) => {
  try {
    const name = req.params.name;
    const countries = await apiService.searchCountry(name, true);
    return res.json({ countries, count: countries.length });
  } catch (error) {
    next(error);
  }
};

const getListOfCountries = async (req, res, next) => {
  try {
    const names = req.body;
    if (!names || names.length === 0) throw 'country list is required';
    const countries = await apiService.getCountries(names);
    res.json({ countries, count: countries.length });
  } catch (error) {
    next(error);
  }
};
// routes
router.post('/', getListOfCountries);
router.get('/:name', getCountry);

module.exports = router;
