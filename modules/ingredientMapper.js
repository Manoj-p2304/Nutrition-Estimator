function normalizeName(name) {
    return name.toLowerCase().replace(/[^a-z\s]/g, '').trim();
  }
  
  export function findMatchingIngredient(nutritionDB, inputName) {
    const cleaned = normalizeName(inputName);
  
    let exact = nutritionDB.find(entry =>
      normalizeName(entry.food_name) === cleaned
    );
  
    if (exact) return exact;
  
    // Fallback: contains match
    return nutritionDB.find(entry =>
      normalizeName(entry.food_name).includes(cleaned) ||
      cleaned.includes(normalizeName(entry.food_name))
    );
  }
  