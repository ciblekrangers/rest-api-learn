<?php
$data = file_get_contents('JSON/coba.json');
$mahasiswa = json_decode($data, true);
$mahasiswae = json_decode($data);
// var_dump($mahasiswae);
var_dump($mahasiswa);
echo $mahasiswa[0]['pembimbing']['pembimbing1'];
