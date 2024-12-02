document.getElementById('viverBemForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Captura os valores selecionados
    const sleep = parseInt(document.getElementById('sleep').value, 10);
    const exercise = parseInt(document.getElementById('exercise').value, 10);
    const diet = parseInt(document.getElementById('diet').value, 10);
    const stress = parseInt(document.getElementById('stress').value, 10);
    const relationships = parseInt(document.getElementById('relationships').value, 10);
    const emotionalSupport = parseInt(document.getElementById('emotionalSupport').value, 10);
  
    // Calcula a pontuação total
    const totalScore = sleep + exercise + diet + relationships + emotionalSupport - stress;
  
    let feedback = '';
  
    // Feedback com base na pontuação
    if (totalScore >= 24) {
      feedback = 'Parabéns! Seu bem-estar está em um nível excelente. Continue com seus hábitos saudáveis e relacionamentos positivos.';
    } else if (totalScore >= 18) {
      feedback = 'Seu bem-estar é bom, mas há espaço para melhorias. Reflita sobre pequenas mudanças para reduzir o estresse ou melhorar seus hábitos.';
    } else if (totalScore >= 12) {
      feedback = 'Seu bem-estar precisa de atenção. Considere ajustar sua rotina para incluir hábitos mais saudáveis e fortalecer seu apoio emocional.';
    } else {
      feedback = 'Atenção! Seu bem-estar está baixo. Reavalie seu estilo de vida e busque ajuda se necessário, seja emocional ou física.';
    }
  
    // Exibe o resultado
    document.getElementById('feedback').innerText = feedback;
    document.getElementById('result').classList.remove('hidden');
  });
  