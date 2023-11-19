var posts=["posts/jp-7533/","posts/jp-28506/","posts/jp-34818/","posts/jp-19539/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };