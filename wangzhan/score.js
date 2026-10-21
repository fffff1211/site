function add(){
    let score=Number(localStorage.getItem("score"))||0;
    score+=100;
    localStorage.setItem("score",String(score));
}
function show(){
    let score=Number(localStorage.getItem("score"));
    document.getElementById("fenshu").textContent=score;
}
function reset(){
    localStorage.clear();
}