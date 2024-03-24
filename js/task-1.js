
//////////////////////////Task-1///////////////////////////////////
const categoriesAll = document.getElementById(`categories`)
const categoriesItem = categoriesAll.querySelectorAll(`.item`);
console.log(`Общее колличество категорий ${categoriesItem.length}`);
/////////////////////////Task-2////////////////////////////////////
categoriesItem.forEach(item => {
   const categoryTitles = item.querySelector(`h2`).textContent;
   const categoryItem = item.querySelectorAll(`ul > li`);
   console.log(`Category: ${categoryTitles}`);
   console.log(`Elements: ${categoryItem.length}`)
});
