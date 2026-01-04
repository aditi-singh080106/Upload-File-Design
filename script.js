let btn = document.querySelector("#btn");
let inp = document.querySelector("#file-inp");
btn.addEventListener("click",function(){
    inp.click();
});
inp.addEventListener("change",function(dets){
    btn.textContent=`${dets.target?.files[0].name}`;
})