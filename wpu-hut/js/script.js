function tamppilkanSemuaMenu() {
  $.getJSON("data/Restaurant.json", function (data) {
    let menu = data.menu;
    $.each(menu, function (i, data) {
      $("#daftar-menu").append(
        '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' +
          data.gambar +
          '" class="card-img-top"><div class="card-body"></divclass><h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text">' +
          data.deskripsi +
          '</p><h5 class="card-title">' +
          data.harga +
          '</h5><a href="#" class="btn btn-primary">Buy Now</a></div></div></div>'
      );
    });
  });
}

tamppilkanSemuaMenu();
$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let category = $(this).html();
  $("h1").html(category);
  //   console.log(category.toLowerCase());
  $("h1").html(category);
  if (category == "All Menu") {
    $("#daftar-menu").html(tamppilkanSemuaMenu());
    return false;
  }
  $.getJSON("data/Restaurant.json", function (data) {
    let menu = data.menu;
    let content = "";
    $.each(menu, function (i, data) {
      if (data.kategori == category.toLowerCase()) {
        content +=
          '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' +
          data.gambar +
          '" class="card-img-top"><div class="card-body"></divclass><h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text">' +
          data.deskripsi +
          '</p><h5 class="card-title">' +
          data.harga +
          '</h5><a href="#" class="btn btn-primary">Buy Now</a></div></div></div>';
      }
    });
    $("#daftar-menu").html(content);
  });
});
