$(document).ready(function () {
  $('#btn-login').on('click', loadGrowls);
  $('#growl-form').on('submit', createGrowl);
})

function createGrowl(e) {
  e.preventDefault();
  $.ajax({
    url: 'http://localhost:3000/growls',
    method: 'POST',
    data: {
      title: $('#title').val(),
      content: $('#text-area').val()
    }
  })
  .done(function (growl) {
    console.log('createGrowl');
    loadGrowl(growl);
  })

}

function loadGrowls() {
  console.log('loadGrowls');
  $.ajax({
    url: 'http://localhost:3000/growls'
  })
  .done(function (data) {
    data.forEach(function (datum) {
      loadGrowl(datum);
    });
  });
}

function loadGrowl(growl) {
  console.log(growl);
  var img = $('.growlImage');
  img.attr('src', growl.posterIcon);
  
  var growlPost = $('.growlpost');
  growlpost.text(growl.content);

  var postTitle = $('.postTitle');
  postTitle.text(growl.title);




  growlpost.append(img);


  $('#growl-list').append(li);
}
