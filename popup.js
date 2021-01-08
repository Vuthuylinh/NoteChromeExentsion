
var mysearchList = [];
$(function () {

  chrome.storage.sync.get(['total'], function (data) {
    $('#total').text(data.total);
  });
  $("#saveTerm").click(function () {
    chrome.storage.sync.get('total', function (data) {
      var newTerm = $("#newTerm").val();
      if (newTerm){
        mysearchList.push(newTerm);
      }

      chrome.storage.sync.set({ 'total': mysearchList })
      $('#total').text(data.total);
      $("#newTerm").val('');
    })

  })
})
