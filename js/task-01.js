const itemList = document.querySelectorAll(".item");

// количество категорий в ul#categories,
console.log(`В списке ${itemList.length} категории`);

// // и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).
itemList.forEach(item =>
    console.log(`Категория: ${item.querySelector("h2").textContent}
Количество элементов: ${item.querySelectorAll("li").length}`)
    );