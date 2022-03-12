<?php
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];
$gender =$_POST['gender'];

if ( !empty($username) || !empty($email) || !empty($password) || !empty($confirm_password)  || !empty($gender)) {
    $host ="localhost";
    $dbUsername = "root";
    $dbPassword ="";
    $dbname ="login";


    //creating connection over here 
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
    if (mysqli_connect_error()){
        die('Connect Error('. mysqli_connect_error().')'. mysqli_connect_error());
    } else {
        $SELECT = "SELECT email From register Where email = ? Limit 1";
        $INSERT = "INSERT Into register (username, email, password, confirm_password, gender) values(?, ?, ?, ?, ?)";

        $stmt =$conn->prepare($SELECT);
        $stmt->bind_param("s", $email);  
        $stmt->execute(); 
        $stmt->bind_result($email); 
        $stmt->store_result();
        $rnum = $stmt->num_rows;    

        if ($rnum==0)  {
            $stmt->close();
            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("ssssii", $username, $email, $password, $confirm_password, $gender);
            $stmt->execute();
            echo "New record inserted sucessfully";

        } else {
            echo "Someone already registered using this email";

        }
        $stmt->close();
        $conn->close();

    }
} else{
    echo "all fields are reqiured";
    die();

}

?>