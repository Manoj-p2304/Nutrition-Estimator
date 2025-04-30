# 🥗 Nutrition Estimator

This Node.js-based CLI tool estimates per-serving nutritional values (Calories, Protein, Carbs, Fat) for Indian dishes using ingredient mapping and household measurements.

---

## 🚀 Features

- Estimates nutrition per 200ml katori serving
- Classifies dishes as Wet Sabzi, Dry Sabzi, etc.
- Reads from a local nutrition database and test recipes
- CLI-based lookup (e.g., `node index.js chana`)
- Handles household measurements (e.g., cup, tablespoon)

---

## 📁 Folder Structure

```
Nutrition-Estimator/
├── data/
│   ├── nutrition_database.csv
│   └── household_measurements.json
├── modules/
│   ├── loadNutritionDB.js
│   ├── ingredientMapper.js
│   ├── unitConverter.js
│   ├── nutritionCalculator.js
│   └── dishClassifier.js
├── testDishes.js
├── index.js
└── README.md
```

---

## 💠 Setup

```bash
# 1. Clone the repo
git clone https://github.com/Manoj-p2304/Nutrition-Estimator.git
cd Nutrition-Estimator

# 2. Install dependencies (if any)
npm install

# 3. Run
node index.js [dish-name]
```

Examples:

```bash
node index.js chana       # Matches "Chana Masala"
node index.js gobi        # Matches "Aloo Gobi"
node index.js             # Shows nutrition for all test dishes
```

---

## 📦 Input Datasets

- `data/nutrition_database.csv`: Contains food items and per-100g nutritional values
- `data/household_measurements.json`: Maps household units (e.g., 1 cup = 180g)

---

## 🧪 Testing

Predefined test dishes are in `testDishes.js`. You can add more for testing or development.

---

## 💡 Enhancements (Future Work)

- 🔍 Fuzzy matching for ingredient and dish names
- 🌐 API version for frontend integration
- 📱 Mobile/web interface for users
- 🧠 ML-based ingredient parser from free text
- 🥄 Auto-unit inference from quantity
- 📝 Support for user-uploaded custom dishes via JSON or CSV

---

## 👨‍💼 Author

Built for the VYB AI nutrition assignment challenge.

