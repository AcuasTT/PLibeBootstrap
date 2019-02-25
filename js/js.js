$(document).ready(function () {
    $("img").click(function () {
        $(this).hide();
    });
    $("#fade").click(function () {
        $("table").fadeToggle();
    });
    $("#toggle").click(function () {
        $("table").toggle();
    });
});