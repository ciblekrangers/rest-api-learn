$.getJSON("data/Restaurant.json", function (data) {
  let menu = data.menu;
  $.each(menu, function (i, data) {
    console.log(data);
    $("#daftar-menu").append(
      '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' +
        data.gambar +
        '" class="card-img-top"><div class="card-body"></divclass><h5 class="card-title">' +
        data.nama +
        '</h5><p class="card-text">' +
        data.harga +
        '</p><h5 class="card-title">435453</h5><a href="#" class="btn btn-primary">Buy Now</a></div></div></div>'
    );
  });
});
