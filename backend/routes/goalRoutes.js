const express = require('express');
const router = express.Router();

router.get('/', (rer, res) => {
  res.status(200).json({ message: 'Get goals' });
});

module.exports = router;
