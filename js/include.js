$(function(){
    var includes = $('.include');
    jQuery.each(includes, function(){
      var file = 'slides/' + $(this).data('include') + '.html';
      $(this).load(file);
    });
  });