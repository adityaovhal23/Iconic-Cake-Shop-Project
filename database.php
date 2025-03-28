<?php
$server="localhost";
$username="root";
$password= "";
$database="Pratiksha_cake_shop";
$con=mysqli_connect($server,$username,$password,$database);

if(!$con)
{
    die("Error detected".mysqli_error($con));
}
else
{
    echo "Connected Succssesfully";
}
?>