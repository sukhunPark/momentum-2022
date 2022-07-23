const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다1",
        author: "키케로1",
    },
    {
        quote: "삶이 있는 한 희망은 있다2",
        author: "키케로2",
    },
    {
        quote: "삶이 있는 한 희망은 있다3",
        author: "키케로3",
    },
    {
        quote: "삶이 있는 한 희망은 있다4",
        author: "키케로4",
    },
    {
        quote: "삶이 있는 한 희망은 있다5",
        author: "키케로5",
    },
    {
        quote: "삶이 있는 한 희망은 있다6",
        author: "키케로6",
    },
    {
        quote: "삶이 있는 한 희망은 있다7",
        author: "키케로7",
    },
    {
        quote: "삶이 있는 한 희망은 있다8",
        author: "키케로8",
    },
    {
        quote: "삶이 있는 한 희망은 있다9",
        author: "키케로9",
    },
    {
        quote: "삶이 있는 한 희망은 있다10",
        author: "키케로10",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes =  quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;