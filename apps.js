$(function(){
  var counter = 0;
  $('#generate').on('click',function(){
    counter++
    $('body').append('<div class=\'yellow red\'><p>Generate has been pressed '  + counter + ' time(s)'  + '</p><button class=\'delete\'>Delete</button><button class=\'change\'>Change</button></div>')
  });
  $(document).on('click','.delete',function(){
    $(this).parent().remove();
  });
  $(document).on('click','.change',function(){
    $(this).parent().toggleClass('yellow');
  });



});
