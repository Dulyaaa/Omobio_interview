<?php

//Declaring Variable
$host = "localhost";
$user = "root";
$password = "";
$dbname = "exam";

//Establishing connection
$db_conn  = mysqli_connect($host, $user, $password, $dbname);

//Connection not established
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}
