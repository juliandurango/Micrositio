function change(departamento, ciudad){
    departamento = document.getElementById(departamento);
    ciudad = document.getElementById(ciudad);
    ciudad.value ="";
    ciudad.innerHTML = "";
    if(departamento.value == "Amazonas"){
    var optionArray = ["|","Leticia|Leticia"];
    }else if(departamento.value == "Antioquia"){
    var optionArray = ["|","Bello|Bello", "Envigado|Envigado", "Itagui|Itagui", "La Estrella|La Estrella", "Medellín|Medellín", "Sabaneta|Sabaneta"];
    };

  for(option = 0;option < optionArray.length; option++){
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    ciudad.options.add(newOption);
  };    
}