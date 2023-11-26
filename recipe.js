const root = document.querySelector("#root")
const searchForm = document.querySelector('.search-form')
const searchBar = document.querySelector('.search-bar')

searchForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    root.innerHTML = ''
    const search = searchBar.value
    fetchRecipes(search)
})

const fetchRecipes = async(search)=>{
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=e430b7ab&app_key=fe3f38b567072c416e903be1eae664e8`)
    const data = await response.json()
    const hits = data.hits

    hits.forEach((recipe)=>{
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
        <div class = "image">
            <img src = "${recipe.recipe.image}"/>
        </div>
        <p>${recipe.recipe.label}</p>
        <button class = "store-button"> View Recipe </button>
        `
        root.appendChild(card)

        const button = card.querySelector('.store-button')
        button.addEventListener('click', () =>{
            localStorage.setItem('selectedRecipe', JSON.stringify(recipe.recipe))
            window.location.href = 'selected.html'
        })
    })
    console.log(hits)
}


const fetchRandom = async()=>{
    const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=e430b7ab&app_key=fe3f38b567072c416e903be1eae664e8')
    const data = await response.json()
    const hits = data.hits

    hits.forEach((recipe)=>{
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
        <div class = "image">
            <img src = "${recipe.recipe.image}"/>
        </div>
        <p>${recipe.recipe.label}</p>
        <button class = "store-button"> View Recipe </button>
        `
        root.appendChild(card)

        const button = card.querySelector('.store-button')
        button.addEventListener('click', () =>{
            localStorage.setItem('selectedRecipe', JSON.stringify(recipe.recipe))
            window.location.href = 'selected.html'
        })
    })
}
fetchRandom()