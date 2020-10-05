
$(function () {
  $('#playground .main').hide().eq(0).show();
  
  $('#mediaLinkList li').click(function () {
      $('#playground .main').hide()
      num = $('#mediaLinkList li').index(this);
      $('#playground .main').hide().eq(num).show();
  });
});