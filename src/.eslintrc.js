module.exports = {
  extends: [
    "eslint:recommended", // Utilise les règles de base recommandées d'ESLint
    "plugin:import/recommended", // Active les règles du plugin eslint-plugin-import
  ],
  plugins: ["import"], // Active le plugin import
  rules: {
    "import/no-unresolved": "error", // Assure que tous les imports sont résolus correctement
    "import/named": "error", // Assure que les importations nommées sont valides
    "import/default": "error", // Assure que les importations par défaut sont valides
    "import/no-named-as-default": "error", // Interdit l'utilisation des importations nommées comme valeurs par défaut
  },
  env: {
    browser: true, // Spécifie que tu es dans un environnement de navigateur
    es6: true, // Permet l'utilisation des fonctionnalités ES6
  },
};
