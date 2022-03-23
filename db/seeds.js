const db = connect("mongo://localhost:27017")


db.blogPosts.drop()

db.blogPosts.insertMany([
    {title: 'first', author:'idris', message:'I love lamp', date: 'test'}
])
