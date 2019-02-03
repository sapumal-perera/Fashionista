$(document).ready(function () {
    $("#test").click(function (e) {
        alert("in");
        $.mobile.changePage('#gallery_recent', { transition: "flip" });
    });
});