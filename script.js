const url = 'https://type.fit/api/quotes';
const nextBtn = document.querySelector('.btn');
const newQoute = document.getElementById('quote');
const newAuthor = document.getElementById('author');
const createJokes = () => {
    fetch(url)
    .then(res => res.json())
    .then((data) =>{
        const x = Math.floor((Math.random() * 1642));
        newQoute.innerHTML = data[x].text;
        if(data[x].author) newAuthor.innerHTML = data[x].author;
        else newAuthor.innerHTML = 'Unknown';
    })
    .catch(err => console.error(err));
};

nextBtn.addEventListener('click', createJokes);
createJokes();