let frm, correo;

    window.onload = ()=>{
      frm = document.getElementById('login');
      correo = document.getElementById("correo");

      frm.addEventListener("submit",function(e){
        e.preventDefault();
          procesarDatos();
      });
    }
    function validarLogin(json)
    {
      let usuario = JSON.parse(localStorage.getItem(correo.value));

      console.log(usuario);
      console.log(json);

      if(usuario.clave == json.clave)
      {
        alert("Usuario logeado");
        location.href = "contenido.html";
      }
      else
      {
        alert("Datos incorrectos");
        frm.reset();
      }
      
    }
    function procesarDatos(){
      
      let usuario = localStorage.getItem(correo.value);

      if(usuario)
      {
          fetch('script/main.php', {
            method: 'post',
            body: new FormData(frm)
          }).then(function(response) {
            return response.json();
          }).then(function(json){
            validarLogin(json);
          }).catch(function(err) {
            // Error :(
          });
      }
      else
      {
        alert("Datos incorrectos");
      }
    }