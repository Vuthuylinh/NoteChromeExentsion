
// $(function(){
//  chrome.storage.sync.get(['total','listSearching'],function(searching){
//   $('#total').text(searching.listSearching.length)
//   $.each(listSearching, function(index,value){
//     $("#"+value).text(value)
//   })
//  });

//   $("#saveTerm").click(function(){

//     chrome.storage.sync.get(['total',
//   'listSearching'],function(searching){

//       if(searching.total){
//         searching.listSearching.push(searching.addedTerm);
//       }

//       var newTerm = $("#newTerm").val();
//       if(newTerm){
//         searching.listSearching
//       }
//     })
//   })
// })

// var testArray = ["test", "teste", "testes"];
// $("#saveTerm").click(function(){

//   chrome.storage.sync.set({listSearching: testArray}, function(){
//     console.log("added to list");
//   });

//   chrome.storage.sync.get({listSearching:[]},function(data){
//     console.log(data.listSearching);
//     update(data.listSearching)
//    }
//   );

//   function update(array){
//     array.push("newTerm");
//     chrome.storage.sync.set({
//       listSearching:array
//     },function(){
//       console.log("add new value")
//     })
//   }

//   }
// )

// $(document).ready(function(){
//   $("#saveTerm").click(function(){
//     $("ol").prepend("<li>Prepended item</li>");
//   });
// });
//chrome.storage.sync.clear()

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
