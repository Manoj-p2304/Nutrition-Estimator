import { loadNutritionDatabase } from './modules/loadNutritionDB.js';
import { findMatchingIngredient } from './modules/ingredientMapper.js';
import { convertToGrams } from './modules/unitConverter.js';
import { calculateNutrition } from './modules/nutritionCalculator.js';
import { classifyDish } from './modules/dishClassifier.js';
import { testDishes } from './testDishes.js';

const servingGrams = 180;
const inputDish = process.argv[2]?.toLowerCase();

async function main() {
  const db = await loadNutritionDatabase();

  const normalize = str => str.toLowerCase().replace(/\s+/g, '').trim();

  const matchedDishes = inputDish
    ? testDishes.filter(d => normalize(d.dish).includes(normalize(inputDish)))
    : testDishes;
  

  if (matchedDishes.length === 0) {
    console.error(`❌ Recipe not found for "${inputDish}"`);
    return;
  }

  for (const recipe of matchedDishes) {
    let totalGrams = 0;
    let totalNutrition = { calories: 0, protein: 0, carbs: 0, fat: 0 };

    for (const item of recipe.ingredients) {
      const match = findMatchingIngredient(db, item.name);
      if (!match) continue;

      const grams = convertToGrams(item.quantity, item.unit);
      if (!grams) continue;

      const nutrition = calculateNutrition(match, grams);
      totalGrams += grams;

      totalNutrition.calories += nutrition.calories;
      totalNutrition.protein += nutrition.protein;
      totalNutrition.carbs += nutrition.carbs;
      totalNutrition.fat += nutrition.fat;
    }

    const scale = servingGrams / totalGrams;

    console.log(`\n🍽️ Dish: ${recipe.dish}`);
    console.log(JSON.stringify({
      estimated_nutrition_per_200ml_katori: {
        calories: Math.round(totalNutrition.calories * scale),
        protein: +(totalNutrition.protein * scale).toFixed(1),
        carbs: +(totalNutrition.carbs * scale).toFixed(1),
        fat: +(totalNutrition.fat * scale).toFixed(1)
      },
      dish_type: classifyDish(recipe.dish),
      ingredients_used: recipe.ingredients
    }, null, 2));
  }
}

main();
