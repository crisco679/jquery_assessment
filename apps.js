$(function(){

  var generateCounter = 0;
  $(".generate").on("click",function(){
    generateCounter++;
    $("#buttonHolder").show("#buttonHolder");
    $(".dSpan").text(generateCounter);
    $(".cSpan").text(generateCounter);

  });
  $(".delete").on("click",function(){
    $("#buttonHolder").remove();
  });
  $(".change").on("click",function(){
    $("html").toggleClass("yellow");
  })







});
