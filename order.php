<?php

// if(isset($_POST['email'])){

// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "order";

// $con = mysqli_connect($servername, $username, $password, $dbname);

// if(!$con){
//     die("connect to this database failed due to" . mysqli_connect_error());
// }

// $name = $_POST['name'];
// $mobile_number = $_POST['mobile_number'];
// $email = $_POST['email'];
// $cake_selection = $_POST['cake_selection'];
// $quantity = $_POST['quantity'];
// $Address = $_POST['Address'];



// $select = "SELECT * FROM `order_details` WHERE  name = '$name' && mobile_number = '$mobile_number' &&  email='$email'  &&  cake_selection ='$cake_selection' &&  quantity =`$quantity` &&  Address =`$Address'";

// $result = mysqli_query($con, $select);

// if(mysqli_num_rows($result) > 0){
//     echo "user already exist!";
// }else{
//   $sql = "INSERT INTO `order_details` (`name`, `mobile_number`, `email`, `cake_selection`, `quantity`, `Address`) VALUES (`$name`, `$mobile_number`, `$email`, `$cake_selection`, `$quantity`, `$Address`)";
//     if($con->query($sql) == true)
//     {
        echo "<b>You're Successfully orderd</b>";

       
//     } 
//     else
//     {
//         echo "Error: $sql <br> $con->error";
//     }
// }



// $con->close();
// }
?>
