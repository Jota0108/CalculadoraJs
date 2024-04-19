  const resultado = document.querySelector('#resultado');
  const botones = document.querySelectorAll('.btn');

  botones.forEach((boton) => {
    boton.addEventListener('click', () => {
      const textoBoton = boton.textContent;
      
      if (boton.id === "C") {
        resultado.textContent = "0";
        return;
      }
      
      if (boton.id === "borrar"){ 
        if (resultado.textContent.length === 1 || resultado.textContent === "error") {
          resultado.textContent = "0";
        } else {
          resultado = resultado.textContent.slice(0, -1);
        }
        return;
      }
      
      if (boton.id === "igual") {
        try {
          resultado.textContent = eval(resultado.textContent);
        } catch {
          resultado.textContent = "error";
        }
        return;
      }
      
      if(resultado.textContent === "0" || resultado.textContent === "error"){
       resultado.textContent = textoBoton;}
      else{
      resultado.textContent += textoBoton;

      }
    });
  });

