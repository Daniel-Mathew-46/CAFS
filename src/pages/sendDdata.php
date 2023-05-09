<?php 

	header('Access-Control-Allow-Origin: *');
	
	$conn = new mysqli("localhost","root","","cafs");
	
	if(mysqli_connect_error()){
		echo mysqli_connect_error();
		exit();
	}
	else{
		$jobtitle = $_POST['jobtitle'];
		$jobtrequirements = $_POST['jobtrequirements'];
		
		$sql = "INSERT INTO job(job_title,requirements) VALUES(,'$job_title','$requirements','');";
		$res = mysqli_query($conn, $sql);
		
		if($res){
			echo "Success!";
		}
		else{
			echo "Error!";
		}
		$conn->close();
	}

?>
