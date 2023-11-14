var posts=["posts/jp-7533/","posts/jp-28506/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };