<?php

$idCategoria = $_POST['id'];

$conn = mysqli_connect('localhost', 'root', '', 'jurassicpets');

$sql = "DELETE FROM categoria WHERE id = $idCategoria";

mysqli_query($conn, $sql);

mysqli_close($conn);

?>