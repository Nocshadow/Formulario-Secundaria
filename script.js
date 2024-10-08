function calculateLevel() {
    let score = 0;

    const form = document.forms['levelTestForm'];

    // Evaluar la pregunta 1
    if (form['q1'].value === 'I went to the park with my friends') {
        score += 1;
    }

    // Evaluar la pregunta 2
    if (form['q2'].value === 'go to the cinema') {
        score += 1;
    }

    // Evaluar la pregunta 3
    if (form['q3'].value === 'I have lived here for five years') {
        score += 1;
    }

     // Evaluar la pregunta 4
     if (form['q4'].value === 'have lived') {
        score += 1;
    }

     // Evaluar la pregunta 5
     if (form['q5'].value === 'would have gone') {
        score += 1;
    }

     // Evaluar la pregunta 6
     if (form['q6'].value === 'taking') {
        score += 1;
    }

     // Evaluar la pregunta 7
     if (form['q7'].value === 'leave') {
        score += 1;
    }

     // Evaluar la pregunta 8
     if (form['q8'].value === 'for two years') {
        score += 1;
    }

     // Evaluar la pregunta 9
     if (form['q9'].value === 'had left') {
        score += 1;
    }

     // Evaluar la pregunta 10
     if (form['q10'].value === 'would take') {
        score += 1;
    }

     // Evaluar la pregunta 11
     if (form['q11'].value === 'would finish') {
        score += 1;
    }

     // Evaluar la pregunta 12
     if (form['q12'].value === 'studying') {
        score += 1;
    }

     // Evaluar la pregunta 13
     if (form['q13'].value === 'was sent') {
        score += 1;
    }

     // Evaluar la pregunta 14
     if (form['q14'].value === 'had started') {
        score += 1;
    }

     // Evaluar la pregunta 15
     if (form['q15'].value === 'had') {
        score += 1;
    }


    // Calcular el nivel basado en el puntaje
    let level = '';
    if (score >= 13 && score <= 15) {
        level = 'B2 (Basic)';
    } else if (score >= 10 && score <= 12) {
        level = 'B1+ (Pre-intermediate)';
    } else if (score >= 6 && score <= 9) {
        level = 'B1 (Basic)';
    } else if (score >= 1 && score <= 5) {
        level = 'A2 (Pre-intermediate)';
    }

    // Mostrar el resultado
    document.getElementById('result').innerText = `Your English Level: ${level}`;
}
