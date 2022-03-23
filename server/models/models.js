const { init } = require ('../dbConfig')
const  {ObjectId} = require('mongodb')


class Story {
    constructor(data){
       this.id = data.id
       this.title = data.title
       this.name = data.name
       this.message = data.message
    }
    
    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const storyData = await db.collection('blogPost')
                const stories = storyData.map(s => new Story(s))
                resolve(stories)
            } catch(err) {
                reject("Error: no stories")
            }
        })
    }

    static create (title, name, message, date) { 
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let storyData = await db.collection('blogPosts').insertOne({ title, name, message, date})
                let newStory = new Story(storyData.ops[0]);
                resolve(newStory)
            }
            catch(err) {
                reject(`Error: story is not submitted ${err}`);
            }
        })
    }


    static findStoryById (id) {
        return new Promise (async (resolve, reject) => {

            
            try {
                const db = await init();
                let storyData = await db.collection('blogPosts').find({_id: ObjectId(id)}).toArray()
                console.log('test',storyData)
                let story = new Story({...storyData[0], id: storyData[0]._id})

                resolve(story)
            } catch(err) {
                reject(`Blog post does not exist: ${err}`)
            }
        })
    }


}


module.exports = Story
