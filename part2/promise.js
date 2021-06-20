let posts = [
    {title: 'Post1', detail: 'detail1'}
];

console.log(posts);

const addPost = new Promise((res, rej) => {
        let control = posts.length;
        posts.push({title:'New Post', detail:'lorem'});
        if (control < posts.length) {
            res(posts);
        } else {
            rej('Kayıt eklenemedi.');
        }
});

addPost.
    then( val => {
        console.log(val);
    })
    .catch( err => {
        console.error(err);
    });
