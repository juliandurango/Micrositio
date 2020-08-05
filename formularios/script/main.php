<?php
    $salt = "JEDR2020";
    $usuario = array();
    if(isset($_POST["nombre"]) && isset($_POST["apellido"]) && isset($_POST["correo"]) && isset($_POST["edad"])
        && isset($_POST["departamento"]) && isset($_POST["ciudad"])){

        $usuario["nombre"] = $_POST["nombre"];
        $usuario["apellido"] = $_POST["apellido"];
        $usuario["correo"] = $_POST["correo"];
        $usuario["edad"] = $_POST["edad"];
        $usuario["departamento"] = $_POST["departamento"];
        $usuario["ciudad"] = $_POST["ciudad"];
    }
    $usuario["clave"] = md5($salt.$_POST["clave"]);

    echo json_encode($usuario);
?>