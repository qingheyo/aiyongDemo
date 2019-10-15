<?php
$servername = "dhb:3306";
$username = "root";
$password = "dhb1997.";
$dbname = "mysql";
// 连接数据库
$conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}


// 存入数据
$calc=$_POST['calc'];
$calcRes=$_POST['calcRes'];

$insert = "INSERT INTO calc_history (calc_expression,res)
VALUES ('$calc',$calcRes)";
 
 if ($conn->query($insert) === TRUE) {
  echo "新记录插入成功";
} 


// 查询数据
$sql = "SELECT calc_expression,res FROM calc_history";
$result = $conn->query($sql);
$data = array();//初始化数组;

class Alteration
{
	public $calc_expression;
	public $res;
}
while ($row = mysqli_fetch_assoc($result)) {
	$alter = new Alteration();//实例化对象;
	$alter->calc_expression= $row['calc_expression'];
	$alter->res = $row['res'];
	$data[] = $alter;
}
echo json_encode($data);

?>