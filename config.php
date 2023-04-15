<?php

$hostname = "aws.connect.psdb.cloud";
$bancodedados = "site1";
$usuario = "q6jdxmzducc5upz0uvez";
$senha = "pscale_pw_tzptJZIAEPIcrTDLs4Wt0Rn8yFkETOdJS5AA02oDa0x";

$conexao = new mysqli($hostname, $usuario, $senha, $bancodedados);

if($conexao->connect_errno)
{
	echo "Erro";
}
else
{
    echo "Conexão efetuada com sucesso ";
}

?>
