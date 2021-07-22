$(function(){
  $("#second_3").children().hide();
  $("#second_3").children().eq(0).show();

  
  $("#sec_sub1").click(function(){
    $("#sec_box_1").show();
  });

  $("#sec_sub2").click(function(){
    $("#sec_box_2").show();
  });

  $("#sec_sub3").click(function(){
    $("#sec_box_3").show();
  });

  $("#sec_sub4").click(function(){
    $("#sec_box_4").show();
  });

});