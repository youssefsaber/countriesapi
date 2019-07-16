const express = require('express');
const router = express.Router();
const slotsService = require('../services/slots.service');

const getSpin = async (req, res, next) => {
  try {
    return res.json(slotsService.spin());
  } catch (error) {
    next(error.message);
  }
};

router.get('/', getSpin);

module.exports = router;
