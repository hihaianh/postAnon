const db = connect("mongo://localhost:27017")


db.blogPosts.drop()

db.blogPosts.insertMany([
    {title: 'first', author:'idris', description:'I love lamp', date: new Date()}
])
