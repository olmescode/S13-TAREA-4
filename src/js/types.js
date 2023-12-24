const ExerciseType = {
  title: 'Ejercicio',
  func: function(...args) {
    // Implementación de la función
  },
  input: 42,
  inputLabels: ['label1', 'label2'],
  defaultValues: function() {
    // Implementación de los valores predeterminados
    return [1, 2, 3];
  }
};

// Exporta el objeto
export { ExerciseType };