export const Posts = [{
    id : 1,
    title : "ASUS ROG STRIX X570-E GAMING Bundkort - AMD X570 - AMD AM4 socket - DDR4 RAM - ATX", 
    username : "pineapple",
    image : 'https://images.unsplash.com/photo-1505480449763-8f5c78af9caa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description : "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
},{
    id : 2,
    title : "Logitech k4001 keyboard", 
    username : "franzharvin",
    image : 'https://images.unsplash.com/photo-1511963211013-83bba110595d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description : "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
},{
    id : 3,
    title : "hello dads adasd1212312312 sad", 
    username : "nikfrdszrsln_",
    image : 'https://images.unsplash.com/photo-1521112376370-0a3b01544ab1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description : "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
},{
    id : 4,
    title : "jsdkl fsdfjdsl jkldsa ", 
    username : "ryirwansyah",
    image : 'https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg',
    description : "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
},{
    id : 5,
    title : "hello dads adasdas da sad", 
    username : "nasa",
    image : 'https://cdn.wallpaperhub.app/cloudcache/1/b/5/8/e/f/1b58ef6e3d36a42e01992accf5c52d6eea244353.jpg',
    description : "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}];

export const Comments = [{
    id : 1,
    postId : 1,
    username : Posts.find(x => x.id === 1).username,
    text : "Ayyy cool ma maaaaan"
},{
    id : 2,
    postId : 1,
    username : Posts.find(x => x.id === 1).username,
    text : "Ayyy cool"
},{
    id : 3,
    postId : 1,
    username : Posts.find(x => x.id === 1).username,
    text : "testinng los comment"
},{
    id : 4,
    postId : 2,
    username : Posts.find(x => x.id === 2).username,
    text : "Ayyy cool ma maaaaan"
},{
    id : 5,
    postId : 2,
    username : Posts.find(x => x.id === 2).username,
    text : "Ayyy cool"
},{
    id : 6,
    postId : 2,
    username : Posts.find(x => x.id === 2).username,
    text : "testinng los comment"
},{
    id : 7,
    postId : 1,
    username : Posts.find(x => x.id === 1).username,
    text : "Ayyy cool ma maaaaan"
},{
    id : 8,
    postId : 1,
    username : Posts.find(x => x.id === 1).username,
    text : "Ayyy cool"
},{
    id : 9,
    postId : 1,
    username : Posts.find(x => x.id === 1).username,
    text : "testinng los comment"
}]