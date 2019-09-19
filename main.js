const fruits = ['Banana', 'Apple', 'Orange', 'Lemon'];

function createList(fruits) {
  var list = document.getElementById('list_of_fruits');

  fruits.forEach(function(element) {
    var btn = document.createElement('li');
    btn.innerHTML = element === 'Apple' ? 'Only ' + element : element;
    list.appendChild(btn);
  });
}

createList(fruits);
