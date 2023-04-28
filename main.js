
const masinfo = document.querySelectorAll(".mascaracteristicas");
const servicionsPlan = document.querySelectorAll(".servicios__plan")
const info = document.querySelectorAll(".masinfo");
let infobot = [false,false,false]
for (let i = 0; i<masinfo.length; i++) {
    masinfo[i].addEventListener("click",(e)=> {
        if (infobot[i] == false) {
            masinfo[i].children[0].style.display = "block"
            info[i].style.display = "block"
            masinfo[i].style.paddingTop = "0"
            infobot[i] = true
        } else {
            masinfo[i].children[0].style.display = "none"
            info[i].style.display = "none"
            infobot[i] = false
            masinfo[i].style.paddingTop = "10px"
        }
    })
    
}
