// write your code here!
fetch("http://localhost:3000/ducks")
    .then((resp) => resp.json())
    .then((data) => renderDucks(data))

function renderDucks(duckArray) {
    const div = document.querySelector('#duck-nav')
    duckArray.forEach((duckObj) => {
        const duckImg = document.createElement('img')
        duckImg.src = duckObj.img_url
        div.appendChild(duckImg)

        duckImg.addEventListener('click', handleClick)
        function handleClick() {
            const nameDisplay = document.querySelector('#duck-display-name')
            nameDisplay.textContent = duckObj.name
            const imageDisplay = document.querySelector('#duck-display-image')
            imageDisplay.src = duckObj.img_url
            const likesDisplay = document.querySelector('#duck-display-likes')
            let currLikes = duckObj.likes
            likesDisplay.innerText = `${duckObj.likes} likes` 
            
            const btn = document.querySelector('button')
            btn.addEventListener('click', incrementLikes)
            function incrementLikes() {
                currLikes++
                likesDisplay.innerText = `${currLikes} likes`
            }
        }  
    });
    const form = document.querySelector('form')
        form.addEventListener('submit', (e) => createNewDuck(e))
        
        function createNewDuck(e) {
            e.preventDefault()
            const newDuckName = e.target['duck-name-input'].value
            const newDuckURL = e.target['duck-image-input'].value

            const newDuckObj = {
                id :  8, 
                name : newDuckName,
                img_url : newDuckURL,
                likes : 0, 

            }
            renderDucks([newDuckObj])
        }
}    
