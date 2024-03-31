// var modalTrigger = document.getElementById("modal-trigger");
// // Mendapatkan referensi modal
// var modal = new bootstrap.Modal(document.getElementById("exampleModal"));

// // Menambahkan event listener untuk tombol modal
// modalTrigger.addEventListener("click", function () {
//   // Memunculkan modal
//   modal.show();
// });

function searchMovie() {
  $("#movie-list").html("");

  $.ajax({
    url: "http://omdbapi.com",
    type: "get",
    dataType: "json",
    data: {
      apikey: "7f30e883",
      s: $("#search-input").val(),
    },
    success: function (result) {
      if (result.Response == "True") {
        let movies = result.Search;
        $.each(movies, function (i, data) {
          $("#movie-list").append(`
          <div class="col-md-4 md-4">
            <div class="card">
                <img src="${data.Poster}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${data.Year}</h6>
                    <button href="#" class="btn btn-primary see-detail"  data-toggle="modal"  data-target="#exampleModal" data-id="${data.imdbID}">See Detail</button>
                </div>
            </div>
            </div>
            `);
        });
        $("#search-input").val("");
        // console.log(movies);
      } else {
        $("#movie-list").html(`
        <h1 class="text-center">  ${result.Error}  </h1>
        `);
      }
    },
  });
}

$("#search-button").on("click", function () {
  searchMovie();
});
$("#search-input").on("keyup", function (e) {
  if (e.keyCode == 13) {
    searchMovie();
  }
});
$("#movie-list").on("click", ".see-detail", function () {
  $.ajax({
    url: "http://omdbapi.com",
    dataType: "json",
    type: "get",
    data: {
      apikey: "7f30e883",
      i: $(this).data("id"),
    },
    success: function (movie) {
      if (movie.Response === "True") {
        $(".modal-body").html(`
        <div class="container-fluid">
        <div class="row">
            <div class="col-md-4">
            <img src="${movie.Poster}" class="img-fluid" alt="" />
            </div>
            <div class="col-md-8">
            <ul class="list-group">
                <li class="list-group-item"><h3>${movie.Title}</h3></li>
                <li class="list-group-item">Release: ${movie.Year}</li>
                <li class="list-group-item">Release: ${movie.Genre}</li>
                <li class="list-group-item">Release: ${movie.Director}</li>
                <li class="list-group-item">Release: ${movie.Actors}</li>
            </ul>
            </div>
        </div>
        </div>
        `);
      }
    },
  });
  console.log($(this).data("id"));
});
