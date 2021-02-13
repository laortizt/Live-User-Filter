const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() { //se agrega async
    const res = await fetch('https://randomuser.me/api?results=50') //se agega await y link

    const {results} = await res.json() //se agrega results y await res.json()

    // Clear result
    result.innerHTML = ''

    results.forEach(user => { //se agreg results.forEach
        const li = document.createElement('li')

        listItems.push(li)

        //aqui
        li.innerHTML = ` 
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        result.appendChild(li)
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}