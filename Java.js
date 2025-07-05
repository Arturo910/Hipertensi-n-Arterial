function calcularPresion() {
    const sistolica = parseInt(document.getElementById("sistolica").value);
    const diastolica = parseInt(document.getElementById("diastolica").value);
    const resultado = document.getElementById("resultado");

    resultado.className = "result";
    resultado.style.backgroundColor = "";

    if (isNaN(sistolica) || isNaN(diastolica)) {
        resultado.textContent = "Por favor, ingresa valores válidos en ambos campos.";
        resultado.style.backgroundColor = "#ffdddd";
        return;
    }

    if (sistolica < 50 || sistolica > 300 || diastolica < 30 || diastolica > 200) {
        resultado.textContent = "Valores fuera de rango. Verifica los números ingresados.";
        resultado.style.backgroundColor = "#ffdddd";
        return;
    }

    let mensaje = "";
    let color = "";
    let claseExtra = "";
    if (sistolica > 180 && diastolica > 120) {
        mensaje = "🚨 CRISIS HIPERTENSIVA 🚨\nPresión arterial peligrosamente alta. ¡Busque atención médica inmediata!";
        color = "#ffebee";
        claseExtra = "crisis-alert";
    } else if (sistolica >= 140 && diastolica >= 90) {
        mensaje = "❌ Hipertensión Grado 2\nConsulta a tu médico con urgencia";
        color = "#f8d7da";
    } else if ((sistolica >= 130 && sistolica <= 139) || (diastolica >= 80 && diastolica <= 89)) {
        mensaje = "⚠ Hipertensión Grado 1\nPrograma una cita con tu médico";
        color = "#f8d7da";
    } else if (sistolica >= 120 && sistolica <= 129 && diastolica < 80) {
        mensaje = "📈 Presión Arterial Elevada\nControla tu presión regularmente";
        color = "#fff3cd";
    } else if (sistolica < 120 && diastolica < 80) {
        mensaje = "✅ Presión Arterial Normal\n¡Sigue así!";
        color = "#d4edda";
    } else {
        mensaje = "ℹ️ Resultado no definido\nConsulta a un profesional";
        color = "#ffdddd";
    }

    resultado.textContent = mensaje;
    resultado.style.backgroundColor = color;
    
    if (claseExtra) {
        resultado.classList.add(claseExtra);
    }

    resultado.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                window.location.hash = targetId;
            }
        }
    });
});