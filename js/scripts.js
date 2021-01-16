$(document).ready(function(){
  const quest1Ans=$("#quest1").val();
  const quest2Ans=$("#quest2").val();
  const quest3Ans=$("#quest3").val();
  const quest4Ans=$("#quest4").val();
  const quest5Ans=parseInt($("#quest5").val());
  // alert(quest5Ans) 

  if(quest5===1){
    $('.JavaScriptResult').show();
  }else if (quest5===2){
      $('.rubyResult').show();
  }else if (quest5===3){
    $('c#Result').show();
  }else if (quest5===4){
    $('.confussedResult').show();
  }else if (quest5===5){
    $('.danceResult').show();
  }
    
  

});