const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
            books: [
                {title: 'The Name of the Wind', author: 'Patrick Rothfuss', image: 'assets/nameOfTheWind.jfif', isFav: true},
                {title: 'The Final Empire', author: 'Brandon Sanderson', image: 'assets/theFinalEmpire.jpg', isFav: false},
                {title: 'Sharpe\'s Eagle', author: 'Bernard Cornwell', image: 'assets/sharpesEagle.jpg', isFav: true}
            ],
            url: 'https://www.thenetninja.co.uk'
        }
    },
    methods: {
        changeTitle(title) {
            console.log('I have been clicked.')
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            console.log(this.books[0].isFav)
            if (data) {
                console.log(data, data+2)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleBookIsFav(book) {
            book.isFav = !book.isFav
            console.log(book.isFav)
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')