window.addEventListener("load",()=>{
    let burger = document.getElementById("hamburguesa")
    let util = 0;
    
    burger.addEventListener("click",()=>{
        console.log("hola");
        let menu = document.getElementsByClassName("barraN");
        let menuXXL = document.getElementsByClassName("navbar");
        console.log(menu);
        if(util==0)
        {
            for(let i=0; i<=3; i++){
                menu[i].style.display = "list-item";
            }
            menuXXL[0].style.height = "240px";
            util=1;
        }else{
            for(let i=0; i<=3; i++){
                menu[i].style.display = "none";
            }
            menuXXL[0].style.height = "50px";
            util=0;
        }
        })
})