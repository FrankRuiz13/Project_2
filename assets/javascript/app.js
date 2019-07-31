$('.settingsExpand').slideToggle(0);
$(".feed").scrollTop($(".feed")[0].scrollHeight);
document.getElementById("message").addEventListener('keypress', function (e) {
  var currentTime = new Date()
  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()
    var key = e.which || e.keyCode;
    if (key == 13) { // 13 is enter
      var message = this.value;
      $('.feed').append("<div class='me'><div class='profile'><img src='https://lh6.googleusercontent.com/-AATxOZ5T388/AAAAAAAAAAI/AAAAAAAAAoA/-Cx4-0B9K2s/s32-c-k-no/photo.jpg'></div><div class='message'>"+(this.value)+"<div class='meta'>11/19/13, "+hours+":"+minutes+" PM</div></div></div>");
      $(".feed").scrollTop($(".feed")[0].scrollHeight);
      this.value = "";
    }
});
$('#chathead').click(function() {
  $('#togglearea').slideToggle();
});
$('#settings').click(function() {
  $('.settingsExpand').slideToggle();
});
(function($) {
  $(document).ready(function() {
     $('[data-corin-checkbox="true"]')
       .addClass('corin-checkbox')
       .wrap('<div class="corin-checkbox-container"></div>')
       .after('<div class="corin-checkbox-sub"></div>')
       .each(function() {
         if (this.checked) {
           $(this).siblings('.corin-checkbox-sub').addClass('checked');
         } else {
           $(this).siblings('.corin-checkbox-sub').addClass('unchecked');
       }
       })
       .parent()
       .on('click','.corin-checkbox-sub', function() {
           var theCheckbox = $(this).siblings('.corin-checkbox');
         var isChecked = theCheckbox.is(':checked');
         
         if (isChecked) {
           theCheckbox.prop('checked',false);
           $(this).removeClass('checked').addClass('unchecked');
         } else {
           theCheckbox.prop('checked',true);
           $(this).removeClass('unchecked').addClass('checked');
         }
         
       });
  });
  
}(jQuery));
                    