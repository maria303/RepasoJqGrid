<?php

$nombre = $_POST['nombre'];

$conn = mysqli_connect('localhost', 'root', '', 'jurassicpets');

$sql = ("INSERT INTO categoria (nombre) VALUES('".$nombre."')");

if(mysqli_query($conn, $sql)){
    echo "INSERTADO";
}else{
    echo "ERROR";
}

mysqli_close($conn);

?>