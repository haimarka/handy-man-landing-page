const btn = document.getElementById("goBackBtn");
if(btn){
    btn.addEventListener("click", goBack);
}
function goBack() {
    history.back();
}