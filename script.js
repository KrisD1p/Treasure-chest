$(".step").hide();
$("#step2").hide();
$("button").click(function() {
    $(".step").toggle();
    $("#step2").toggle();
});
$(".cat").click(function() {
    $(".cat").text("Double Click The Chest With A Cat In It.!");
});

$("#tuff").hide();
$("#step2").dblclick(function() {
    $("#tuff").show();
});
$("#Step3").hide();
$(".almost").hide();
$("#tuff").hover(function() {
    $(".almost").show();
});
$(".wow").hide();
$(".almost").hover(function() {
    $(".wow").show();
});