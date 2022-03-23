const db = connect("mongodb://localhost:27017/anon_db")


db.blogPosts.drop()

db.blogPosts.insertMany([
    {title:'also first', author:"Anh", message:"I also love lamp", date:"test"},
    {title: 'first', author:'idris', message:'I love lamp', date: 'test'}
])
