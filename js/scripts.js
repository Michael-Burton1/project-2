$(document).ready(function(){
  $("#form1").submit(function(e){
    e.preventDefault();
    const quest5Ans=parseInt($("#quest5").val());
    console.log($("#quest5").val())
    // alert(quest5Ans) 
    // let quest5=5
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
    }else if (quest5Ans===5){
      $('.danceResult').show();$(".survey").slideUp();
    }
    // else{
      // (".results").hide();
      // }
    });
    
  

});