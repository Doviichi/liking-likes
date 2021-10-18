

// var neil = document.querySelector("#neilLike").innerHTML;

var neilLike = 0;
function like(){
    neilLike ++;
    console.log(neilLike);
    document.querySelector("#neilLike").innerHTML = neilLike + " like(s)";
}
var nLike = 0;
function nicholeLike(){
    nLike ++;
    console.log(nLike);
    document.querySelector("#nichole").innerHTML = nLike + " like(s)";
}

var jLike = 0;
function jimLike(){
    jLike ++;
    console.log(jLike);
    document.querySelector("#jim").innerHTML = jLike + " like(s)";
}