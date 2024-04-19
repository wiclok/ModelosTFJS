// Define el umbral de confianza mínima
const umbral = 0.1; // Reducido el umbral para que el modelo sea más propenso a clasificar las frases como "malas"

// Carga el modelo de toxicidad
toxicity.load(umbral).then(model => {
  // Define las frases de ejemplo
  const frases = [
    "I am going to kill you",
    "you are scum",
    "we are going to bomb"
  ];

  // Clasifica las frases
  model.classify(frases).then(predictions => {
    // Imprime los resultados en la consola
    console.log(JSON.stringify(predictions, null, 2));
  });
});
