let data = [
  {
    name: 'BIG PAPA ',
    age: '90',
    description: 'Otherwise known as the Patriarch.',
  },
  {
    name: 'MAMA',
    age: '82',
    description: 'Otherwise known as the Matriarch.',
  },
  {
    name: 'BENDITO',
    age: '30',
    description: 'Bendito thinks he is from space.',
  },
  {
    name: 'LILY',
    age: '29',
    description: 'Definitely a favorite child',
  },
  {
    name: 'SAM',
    age: '29',
    description: 'Love child from mama from a previous marriage.',
  },
  {
    name: 'ALINKO',
    age: '19',
    description: 'Last child of the Rose family.',
  }
];


const history = document.querySelector('#history');

let info = data.map(function(item) {
  return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + ' ' + 'and' + ' ' + item.description + '</div>';
});

history.innerHTML = info.join('\n');
