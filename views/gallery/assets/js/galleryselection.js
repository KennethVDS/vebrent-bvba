
$(function () {
  $('#playground div').hide().eq(0).show();
  
  $('#mediaLinkList li').click(function () {
      $('#playground div').hide()
      num = $('#mediaLinkList li').index(this);
      $('#playground div').hide().eq(num).show();
  });
});