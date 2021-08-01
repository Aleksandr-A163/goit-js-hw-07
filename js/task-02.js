  
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
    
  ];
  
  const ingredientsEl = document.querySelector ('#ingredients');
  
  const element = ingredients.forEach(el => { 
  const liElement = document.createElement('li');
  liElement.textContent = `${el}`;
  ingredientsEl.append(liElement);
  });