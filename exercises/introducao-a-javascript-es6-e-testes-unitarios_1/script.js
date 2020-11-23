const addCount = document.getElementById('addCount');
const divCount = document.getElementById('div-count');

var count = 0;

addCount.addEventListener('click', function(){
  divCount.innerHTML = count;
  count++;
});