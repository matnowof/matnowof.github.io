<?php

$hostname = "localhost";
$bancodedados = "Site1";
$usuario = "root";
$senha = "";

$conexao = new mysqli($hostname, $usuario, $senha, $bancodedados);

if($conexao->connect_errno)
{
	echo "Erro";
}
else
{
   // echo "Conexão efetuada com sucesso ";
}

?>