import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    labels: ['2018', '2019', '2020', '2021', '2022'],
    data: [0, 15000, 40000, 30000, 45000]
  });
});

export default router;
