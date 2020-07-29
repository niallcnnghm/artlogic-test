$.ajax({
  url: 'data.json',
  dataType: 'json',
  type: 'get',
  cache: true,
  success: function(data) {
    document.getElementById('question-list').innerHTML = `
    ${data.rows.map(function(q) {
      return `
      <div class="faq-container">
      <div class="question">${q.title} <span>&darr;</span></div>
      <div class="answer">${q.content}</div>
      </div>
      `
    }).join('')}
    `
  }
})

$(document).ready(function(){
  $('.question').click(function() {
    $(this).next('.answer').toggle('slide');
  });
});