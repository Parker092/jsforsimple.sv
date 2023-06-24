document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que se envíe el formulario
  
    // Obtener los valores del formulario
    var placa = document.getElementById('placa').value;
    var marca = document.getElementById('marca').value;
    var anio = document.getElementById('anio').value;
    var clase = document.getElementById('clase').value;
    var tipo = document.getElementById('tipo').value;
    var cargasSecas = document.getElementById('cargasSecas').checked;
    var cargasPeligrosas = document.getElementById('cargasPeligrosas').checked;
    var cargaPrederedera = document.getElementById('cargaPrederedera').checked;
    var cargaIndividual = document.getElementById('cargaIndividual').checked;
    var cargaGranelSolida = document.getElementById('cargaGranelSolida').checked;
    var cargaGranelLiquida = document.getElementById('cargaGranelLiquida').checked;
    var cargasVarias = document.getElementById('cargasVarias').checked;
  
    // Verificar si el campo de la placa está vacío y utilizar nduca o npiloza en su lugar
    if (placa === "") {
      var nduca = document.getElementById('nduca').value;
      var npiloza = document.getElementById('npiloza').value;
      placa = nduca || npiloza;
    }
  
    // Crear una nueva fila en la tabla con los datos del formulario
    var table = document.getElementById('myTable');
    var row = table.insertRow(-1);
    var rowData = [placa, marca, anio, clase, tipo, cargasSecas, cargasPeligrosas, cargaPrederedera, cargaIndividual, cargaGranelSolida, cargaGranelLiquida, cargasVarias];
  
    for (var i = 0; i < rowData.length; i++) {
      var cell = row.insertCell(i);
      cell.innerHTML = rowData[i];
    }
  
    // Restablecer los valores del formulario
    document.getElementById('myForm').reset();
  });
  