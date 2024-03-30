// let mahasiswa = {
//   nama: "Sandhika Galih",
//   nrp: 234234234,
//   email: "Sandhihka@email.com",
// };
// console.log(JSON.stringify(mahasiswa));

// let json = new XMLHttpRequest();
// json.onreadystatechange = function () {
//   if (json.readyState === 4 && json.status === 200) {
//     let orang = JSON.parse(this.responseText);
//     // let orang = this.responseText;
//     console.log(orang);
//   }
// };
// json.open("GET", "JSON/coba.json", true);
// json.send();

$.getJSON("JSON/coba.json", function (data) {
  console.log(data);
});
