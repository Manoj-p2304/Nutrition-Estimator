

export function matchIngredient(name, nutritionDB) {
    const cleanedName = name.toLowerCase();
  

    let match = nutritionDB.find(item => item.food_name?.toLowerCase() === cleanedName);
  
    if (!match) {
      match = nutritionDB.find(item => item.food_name?.toLowerCase().includes(cleanedName));
    }
  
    if (!match) {
      console.warn(`⚠️ Could not match ingredient: ${name}`);
    }
  
    return match;
  }
  