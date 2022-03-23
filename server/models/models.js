const init = require('../dbConfig')


class Story {
    constructor(data){
       this.id = data.id
       this.title = data.title
       this.name = data.name
       this.message = data.message
    }

    
    static create (title, name, message) { 
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let storyData = await db.collection('blogPosts').insertOne({ title, name, message})
                let newStory = new Story(storyData.ops[0]);
                resolve(newStory)
            }
            catch(err) {
                reject('Error: story is not submitted');
            }
        })
    }


    static findStoryById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let storyData = await db.collection('blogPosts').filter({_id: ObjectId(id)})
                let story = new Story({...storyData[0], id: storyData[0]._id})
                resolve(story)
            } catch(err) {
                reject('Blog post does not exist')
            }
        })
    }


}


module.exports = Story
