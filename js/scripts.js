$(document).ready(function(){
  $("#form1").submit(function(e){
    e.preventDefault();
    const quest5Ans=parseInt($("#quest5").val());
    
    if(quest5Ans===1){
      $('.javaScriptResult').show();
      $(".survey").slideUp();
    }else if (quest5Ans===2){
      $('.rubyResult').show();
      $(".survey").slideUp();
    }else if (quest5Ans===3){
      $('.cResult').show();
      $(".survey").slideUp();
    }else if (quest5Ans===4){
      $('.confussedResult').show();
      $(".survey").slideUp();
    }else {
      $('.danceResult').show();
      $(".survey").slideUp();
    }
    
  });
  $("#again1").click(function(){ 
    $(".survey").slideDown();
    $('.javaScriptResult').hide();
    $("#redo").click();
  });

  $("#again2").click(function(){ 
    $(".survey").slideDown();
    $('.rubyResult').hide();
    $("#redo").click();
  });
  
  $("#again3").click(function(){ 
    $(".survey").slideDown();
    $('.cResult').hide();
    $("#redo").click();
  });
  
  $("#again4").click(function(){ 
    $(".survey").slideDown();
    $('.confussedResult').hide();
    $("#redo").click();
  });

  $("#again5").click(function(){ 
    $(".survey").slideDown();
    $('.danceResult').hide();
    $("#redo").click();
  });

});