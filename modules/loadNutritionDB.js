import fs from 'fs';
import csv from 'csv-parser';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function loadNutritionDatabase(filePath = path.join(__dirname, '../data/nutrition_database.csv')) {
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        const parsedRow = {};
        for (const key in row) {
          const value = row[key];
          parsedRow[key] = isNaN(value) ? value.trim() : parseFloat(value);
        }
        results.push(parsedRow);
      })
      .on('end', () => {
        console.log(`✅ Loaded ${results.length} entries from nutrition DB.`);
        resolve(results);
      })
      .on('error', (err) => {
        console.error('❌ Failed to load CSV:', err);
        reject(err);
      });
  });
}
