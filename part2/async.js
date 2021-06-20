let posts = [
    {title: 'Post1', detail: 'detail1'}
];

console.log(posts);

const addPost = (post) => {
    return new Promise((res, rej) => {
        let control = posts.length;
        // alttaki satır kapatılınca hata verir.
        posts.push(post);
        if (control < posts.length) {
            res(posts);
        } else {
            rej('Kayıt eklenemedi.');
        }
    });
};

(async function showPosts(){
    try{
        await addPost({title:'New Post', detail:'lorem'});
        console.log(posts);
    } catch (err) {
        console.error(err);
    }
})();