
<?php

if(isset($_POST['email'])){


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user";
$con = mysqli_connect($servername, $username, $password, $dbname);

if(!$con){
    die("connect to this database failed due to" . mysqli_connect_error());
}

$email = $_POST['email'];
$password = $_POST['password'];
$select = "SELECT * FROM `user_details` WHERE email = '$email' && password = '$password' ";

$result = mysqli_query($con, $select);

if(mysqli_num_rows($result) > 0){
    header('location:index.html');
} else {
    echo "Invalid Email or Password";
    echo "forget password";
}
$con->close();

}

?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
   
</head>
<body>
    <div class="container">
        <div class="containertwo">
            <form action="" method="post" name="myForm">
                <h1>login</h1>
                <input type="email" name="email" placeholder="Enter Your Email Address" id="email">
                <input type="password" name="password" placeholder="Enter Your Password" id="password">
               <button id="button">login</button>
            </form>
        </div>
    </div>

    <script>
        const btn =document.getElementById("button");

        btn.addEventListener('click', Checked);

        function Checked(){
            if(document.myForm.email.value == ""){
                alert("Please Enter Email Address");
                document.myForm.email.focus();
                return false;
            } else if(document.myForm.password.value == "") {
                alert("Please Enter Password");
                document.myForm.password.focus();
                return false;
            } 
            else{
                document.myForm.submit();
                return true;
            }
        }

    </script>
</body>
</html>