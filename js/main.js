let list =  document.querySelector('.movies-list')
let input1 = document.querySelector('#input1')
let input2 = document.querySelector('#input2')
// let input3 = document.querySelector('#input3')
let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#filter')
let form1 =  document.querySelector('form')
let form2 =  document.querySelector('#filterer')

// let database = [
// 	// { title:'Garry Potter', genre:'fantastic', src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/m6xSTVy7N9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
// 	{ title:'Garry Potter', genre:'fantastic', src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/m6xSTVy7N9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
// 	{ title:'Umar ib Hattob', genre:'religious', src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Wn9MYWgcIR8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
// 	{ title:'Charlie chaplin', genre:'comedy', src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/389cemZpkb4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
// 	{ title:'Avangers', genre:'fantastic', src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/lS2z1j28MWM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }
// ]

// window.localStorage.setItem('database',JSON.stringify(database))
let database= window.localStorage.getItem('database')
if(!database) database = []
database =  JSON.parse(database)

function addMovie (data) {
	list.innerHTML = null
	for (element of data) {
		let li = document.createElement('li')
		let movie = document.createElement('div')
		let movieWr = document.createElement('div')
		let movieAb = document.createElement('div')
		let h3 = document.createElement('h3')
		let text = document.createElement('p')
		let linkV = document.createElement('a')

		li.classList.add('movies-item')
		movie.classList.add('movie')
		movieAb.classList.add('movie-first-about')
		h3.classList.add('heading-tertiary')
		text.classList.add('text-movie-about')
		linkV.classList.add('link-buying')

		movie.innerHTML = element.src
		h3.textContent = element.title
		text.textContent = element.genre
		linkV.innerHTML = 'https://www.warnerbros.com/movies/justice-league'
		linkV.textContent= "Visit now"

		movieAb.appendChild(h3)
		movieAb.appendChild(text)
		movieAb.appendChild(linkV)

		li.appendChild(movie)
		li.appendChild(movieAb)
		list.appendChild(li)
	}
}
addMovie(database)

// filterer.addEventListener('change', () => {
// 	function mySort (array, instuction) {
// 		let sorted
// 		if(selector.value === "fantastic")  {
// 			sorted = database.filter(el => el.genre === 'fantastic')
// 			return sorted;
// 		}
// 		// else if(instuction === "score") {
// 		// 	sorted = array.sort(function(a, b) {
// 		// 		return a.score - b.score
// 		// 	})
// 		// }
// 		// else if(instuction === "name") {
// 		// 	sorted = array.sort(function(a, b) {
// 		// 		return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
// 		// 	})
// 		// }
// 		return sorted
// 	}
// } )

	// const relmovies = database.filter(el => el.genre === 'religious');

form1.addEventListener('submit', (hodisa) =>{
	event.preventDefault()
		let obj = {
			title: input1.value,
			genre: 'fantastic',
			src: input2.value
		}
		// let newData = {title, genre, src}
		// let database =window.localStorage.getItem('database')
		// database = JSON.parse(database)
		database.push(obj)
		addMovie(database)
		window.localStorage.setItem('database',JSON.stringify(database))
		

		input1.value = null
        input2.value = null
        // input3.value = null  


})

