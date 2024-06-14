
# moviearea-api

provide a movie api for react.js app.


### import commands

1. `npm install`
2. `npm install express`
3. `git init`
4. `git add .`
5. `git commit -m "your massage"`
6. `git push -u origin main or git push`
7. `npm install mongodb`
8. `npm install mongoose`


### database noSQL

1. mongodb
2. mongoose

### connecting the databse using mongoose 
how to connect?
1. step-1: create const eg:
            const dbURI= ( get url from mongodb server and paste it (note: dont use the space insid a url link) )
2. step-2: connect a mongodb and mongoose
            const mongoose = require(" mongoose ")
3. step-3: create a promise for this fucntion
            mongoose.connect(dbURI)
                .then( result => app.listen(3000) )
                .catch ( err => console.log(err) )

### env is called environment variable this is used to hide a infomation from git 
1. step-1: create a .env file
2. step-2: create a name and paste a url for mongodb
        MongodbUrl = url from mongodb
3. step-3: install a dotenv
        npm install dotenv
4. step-4: config the env file
5. step-5: paste it in main.js
        const dburl = process.env.MongodbUrl
        mongoose.connect(dbURI)........
        ....
6. step-6: add the file in gitignore.
7. step-7: create a env exmaple file