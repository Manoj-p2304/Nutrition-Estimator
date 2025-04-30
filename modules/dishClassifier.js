const mapping = {
    "butter masala": "Wet Sabzi",
    "fry": "Dry Sabzi",
    "dal": "Dal",
    "chicken curry": "Non-Veg Curry"
  };
  
  export function classifyDish(dishName) {
    dishName = dishName.toLowerCase();
    for (const key in mapping) {
      if (dishName.includes(key)) return mapping[key];
    }
    return "Unknown";
  }
  