const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

function getData() {
    const res = 

    const {  } = json()

    // Clear result
    result.innerHTML = ''

    (user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
 
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