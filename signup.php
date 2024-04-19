<?php
      $conn=mysqli_connect("localhost","root","","dairykart");
      if($conn===false){
          die("ERROR:could not connect.".mysqli_connect_error());
      }
      $name=$_REQUEST['name'];
      $email=$_REQUEST['emaill']
      $password=$_REQUEST['pass'];
      $confirmpassword=$_REQUEST['Confirmpass'];
      $sql="INSERT INTO signup (name,email,password,confirmpassword) values ('$name','$email',$password','$confirmpassword')";
      if(mysqli_query($conn,$sql)){
        echo "successs";
      }
      else{
        echo "error";
      }
      mysqli_close($conn);
?>              
