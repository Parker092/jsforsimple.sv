document.getElementById('agregarBtn').addEventListener('click', function() {
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
  
    if (placa === "") {
      var nduca = document.getElementById('nduca').value;
      var npiloza = document.getElementById('npiloza').value;
      placa = nduca || npiloza;
    }
  
    var table = document.getElementById('myTable');
    var row = table.insertRow(-1);
    var rowData = [placa, marca, anio, clase, tipo, cargasSecas, cargasPeligrosas, cargaPrederedera, cargaIndividual, cargaGranelSolida, cargaGranelLiquida, cargasVarias];
  
    for (var i = 0; i < rowData.length; i++) {
      var cell = row.insertCell(i);
      cell.innerHTML = rowData[i];
    }
  
    document.getElementById('myForm').reset();
  });
  
