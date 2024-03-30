<?php
$json = file_get_contents('JSON/coba.json');
$mahasiswa = [
    [
        "nama" => "faisal sidauruk",
        "nrp" => "23423423",
        "email" => "faisal@email.com"
    ],
    [
        "nama" =>  "Sandhhika Galih",
        "nrp" => 23423423423,
        "email" => "sandhika@email.com"
    ]
];
$dbh = new PDO("mysql:host=localhost;dbname=laraspace", 'root');
$db = $dbh->prepare('SELECT * FROM users');
$db->execute();
$users = $db->fetchAll(PDO::FETCH_ASSOC);
$data = json_encode($users);
echo $data;
