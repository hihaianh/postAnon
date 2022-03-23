const form = document.getElementById('storyForm')

form.addEventListener('submit', submitStory)


function submitStory(event) {
    event.preventDefault()
    
    const data = {
        title: event.target.title.value,
        author: event.target.author.value,
        message: event.target.story.value,
        date: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
    }
    console.log(data)
    const options = {
        method: 'POST',
        body:JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    }
    fetch('http://localhost:3000', options)
    .then(response => response.json())
    .then((data) => {console.log(data)})

}
