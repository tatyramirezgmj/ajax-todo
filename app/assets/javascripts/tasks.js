// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// $(function(){
$(document).on('turbolinks:load', function(){
  $("#task_name").focus();

  console.log($('.modal-footer .btn-primary'));
  $('.modal-footer .btn-primary').click(function(){
    console.log('click');
    console.log($('.modal-body form'));
    $('.modal-body form').submit();
  });
});
