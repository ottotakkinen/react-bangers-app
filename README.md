# React Bangers App

A React app to post your favourite songs on Spotify. Can be used to check out what music others are diggin' right now!

## Live Site

This project is live on Netlify here:

[https://bangerthursday.netlify.app/](https://bangerthursday.netlify.app/ 'Live Site')

[https://github.com/ottotakkinen/express-bangers-api](https://github.com/ottotakkinen/express-bangers-api 'Backend code')



## Technologies

- React 
- Axios  
- CSS Modules
- Express
- Netlify Functions
- MondoDB

## About

The website consist of a form to add songs to the list of previews. From there, the users can listen to snippets and then open the songs on Spotify to add to their playlists or collections. The song ids are saved to a MongoDB database by the Express backend, and fetched from the database when the user loads the page.

In our DJ accosiation we have had this #bangerthursday thing for a while now and this website can be used in a similar fashion, to post your favourite songs for everyone to see.

## Things I learned

- CSS modules
- Embedding Spotify tracks to websites
- Using Netlify Functions with Express

## Todo

- Querying the songs in smaller batches from the API
- Creating loaders while the embedded songs load
