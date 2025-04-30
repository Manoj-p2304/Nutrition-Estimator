export function calculateNutrition(nutritionEntry, grams) {
    const factor = grams / 100;
    return {
      calories: factor * parseFloat(nutritionEntry.energy_kcal || 0),
      protein: factor * parseFloat(nutritionEntry.protein_g || 0),
      carbs: factor * parseFloat(nutritionEntry.carb_g || 0),
      fat: factor * parseFloat(nutritionEntry.fat_g || 0),
      ingredient: nutritionEntry.food_name
    };
  }
  