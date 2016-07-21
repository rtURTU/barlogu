 <?php 
$output = shell_exec("python user_info.py");
$obj = json_decode($output, true);
foreach ($obj["ia"] as $v) {
	echo $v;
	echo "<br>";
}
?>