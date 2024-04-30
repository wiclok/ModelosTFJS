// Define el umbral de confianza mínima
const umbral = 0.1; // Reducido el umbral para que el modelo sea más propenso a clasificar las frases como "malas"

// Función para cargar el modelo de toxicidad y clasificar las frases
async function clasificarFrases() {
  try {
    // Carga el modelo de toxicidad
    const model = await toxicity.load(umbral);

    // Define las frases de ejemplo
    const frases = [
      "I am going to kill you",
      "you are scum",
      "we are going to bomb"
    ];

    // Clasifica las frases
    const predictions = await model.classify(frases);

    // Imprime los resultados en la consola
    console.log(JSON.stringify(predictions, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
}

// Llama a la función para clasificar las frases
clasificarFrases();
