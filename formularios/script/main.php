<?php
$salt = "JEDR2020";
echo md5($_POST['clave'].$salt);
?>