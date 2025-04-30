import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const measurementFile = path.join(__dirname, "../data/household_measurements.json");
let measurementConversions = {};

try {
  measurementConversions = JSON.parse(fs.readFileSync(measurementFile, "utf-8"));
} catch (err) {
  console.error("Error loading household measurements:", err);
  measurementConversions = {}; 
}

export function convertToGrams(quantity, unit) {
    if (typeof quantity !== 'number' || !unit) return 0;
  
    const normalizedUnit = unit.toLowerCase();
    const weightPerUnit = measurementConversions[normalizedUnit];
  
    if (!weightPerUnit) {
      console.warn(`⚠️ Unknown unit '${unit}', assuming 0g`);
      return 0;
    }
  
    return quantity * weightPerUnit;
  }
  
