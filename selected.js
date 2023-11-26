const selectedContainer = document.querySelector('#selected')
const selectedRecipe = JSON.parse(localStorage.getItem('selectedRecipe'))
console.log(selectedRecipe)

selectedContainer.innerHTML = `
<div>
<img src="${selectedRecipe.image}"/>
</div>
<p>${selectedRecipe.label}</p>
<div>
${selectedRecipe.ingredients.map((ingredients)=>{
    return `<p>${ingredients.text}</p>`
})}
</div>`