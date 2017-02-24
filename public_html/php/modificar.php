<?php

$id = $_POST['id'];
$nombre = $_POST['nombre'];

$conn = mysqli_connect('localhost', 'root', '', 'jurassicpets');

$sql = "UPDATE categoria SET nombre = '$nombre' WHERE id = $id";

mysqli_query($conn, $sql);

mysqli_close($conn);

?>