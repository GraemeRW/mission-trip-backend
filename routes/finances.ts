import express from 'express';
import fetch from 'node-fetch';
import csv from 'csv-parser';

const router = express.Router();
const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQata8KKsIQW-L1Df1Q-qmkaqA0aPUt4S32uVJcDZDUcyidSxhxaNLasjP7NuQYMvjhQe3mMQLXtJVD/pub?output=csv';

router.get('/', async (req, res) => {
  try {
    const response = await fetch(CSV_URL);

    if (!response.body) {
      return res.status(500).send('No data stream from sheet');
    }

    const results: any[] = [];

    response.body
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        const labels = results.map(row => row.Date);
        const data = results.map(row => parseFloat(row['Total Amount']));
        res.json({ labels, data });
      });

  } catch (error) {
    console.error(error);
    res.status(500).send('Error loading sheet');
  }
});

export default router;
