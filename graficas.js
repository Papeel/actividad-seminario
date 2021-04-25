var freq = {};
conjunto.forEach(function(record) {
  puesto = record["Puesto institucional"];
  if (!freq[puesto]) {
    freq[puesto] = 0;
  }
  freq[puesto]++;
});

datos = []
Object.entries(freq).forEach(function([key, value]) {
  datos.push({'Puesto': key, "name": key, 'Valor': value});
});

datos.sort(
  function (a, b){
    if (a["Valor"] > b["Valor"]){
      return -1;
    }
    if (a["Valor"] < b["Valor"]){
      return 1;
    }
    return 0;
  }

);


var visualization = d3plus
  .viz()
  .order((a,b) =>  a.Valor)
  .container("#viz1")
  .data(datos)
  .type("bar")
  .id("name")
  .x("Valor")
  .y("Puesto")
  .edges(['Valor', 'Puesto'])

  
  .draw();

console.log(conjunto)