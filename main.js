const url = "https://api.quotable.io/random"

const container = document.querySelector('.cont')
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const btn = document.querySelector('.btn')



let getQuote = () => {
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            const itens = []
            quote.innerHTML = item.content
            author.innerHTML = item.author

        })
}



window.addEventListener("load", getQuote)
btn.addEventListener("click", getQuote)
