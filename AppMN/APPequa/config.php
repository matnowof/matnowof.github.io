<?php

$hostname = "aws.connect.psdb.cloud";
$bancodedados = "testefuncaoes";
$usuario = "buqjojz7zrgpqyc6f7bk";
$senha = "pscale_pw_uatnhlItC6Zw433UXTErCuIs5FT0eUxnsVzAO5rgtHc";

$conexao = new mysqli($hostname, $usuario, $senha, $bancodedados);

if($conexao->connect_errno)
{
	echo "Erro";
}
else
{
    echo "Conexão efetuada com sucesso";
}

?>