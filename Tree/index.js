function tree(data, prefix = '') {
    console.log(prefix + data.name);
    if (data.items) {
      prefix += '├── ';
      data.items.forEach(item => tree(item, prefix + '│   '));
    }
  }
  
  const data = {
    "name": 1,
    "items": [{
      "name": 2,
      "items": [{ "name": 3 }, { "name": 4 }]
    }, {
      "name": 5,
      "items": [{ "name": 6 }]
    }]
  };
  
  tree(data);