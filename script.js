var tetev = 0
var himn = document.getElementsByClassName("but")
var sharq = document.getElementById("xax")
var sksel = document.getElementById("skizb")
var taracel  = document.getElementById("taracel")
var dastijenia= document.getElementById("dastijenia")
var game = 0
var fl = 0
var  x = localStorage.getItem("game",game)
var fla = localStorage.getItem("flay",fl)
var drosh = document.getElementsByClassName("drosh")
var tarhy = ["Նոր խաղ","Տարածել","Նվաճումներ","Շարունակել"]
var tarru = ["Новая игра","Поделиться","Достижение","Продолжать"]

drosh[0].onclick = function () {

    var p1 = document.getElementById("p1")
    var p2 = document.getElementById("p2")
    var p3 = document.getElementById("p3")
    var p4 = document.getElementById("p4")

    if (localStorage.getItem("tetev",tetev) == 0) {
        fl  =1
        localStorage.setItem("flay",fl)
        fla = 1   

        this.src = "img/arm.png"
        this.style.width = "47px"  
        this.style.height = "47px" 

        tetev = 1
        localStorage.setItem("tetev",tetev) 

        p1.innerHTML = tarru[0]
        p2.innerHTML = tarru[1]
        p3.innerHTML = tarru[2] 
        if (p4) {
            p4.innerHTML = tarru[3]
           }


        
    }
else if (localStorage.getItem("tetev",tetev) == 1) {
    
    fl  =0
        localStorage.setItem("flay",fl)
        fla = 0


        this.src = "img/rus.png"
        this.style.width = "64px"  
        this.style.height = "48px" 

        tetev = 0
        localStorage.setItem("tetev",tetev) 
          
           p1.innerHTML = tarhy[0]
           p2.innerHTML = tarhy[1]
           p3.innerHTML = tarhy[2]
              if (p4) {
               p4.innerHTML = tarhy[3]
              }
   

}


}





function flag(params) {
    var p1 = document.getElementById("p1")
    var p2 = document.getElementById("p2")
    var p3 = document.getElementById("p3")
    var p4 = document.getElementById("p4")
    if (fla==0) {
      p1.innerHTML = tarhy[0]
      p2.innerHTML = tarhy[1]
      p3.innerHTML = tarhy[2]
      drosh[0].src = "img/rus.png"
    }
else if (fla==1) {
    p1.innerHTML = tarru[0]
      p2.innerHTML = tarru[1]
      p3.innerHTML = tarru[2] 
      drosh[0].src = "img/arm.png"
      drosh[0].style.width = "47px"
      drosh[0].style.height = "47px"  
}


}
flag()

// localStorage.setItem("game",game)

sksel.onclick = function (params) {
    
    game = 1
    localStorage.setItem("game",game)
    
}

function contineo(params) {
    if (x == 1) {
       
         if (sharq) {
                 
            sharq.removeChild(sksel)
            sharq.removeChild(taracel)
            sharq.removeChild(dastijenia)


            var shr = document.createElement("div")
            sharq.append(shr)
            shr.setAttribute("class","sharun")
             var sharim = document.createElement("img")
             shr.append(sharim)
             sharim.setAttribute("src","img/shar.png")
             sharim.setAttribute("class","cont")
             var p = document.createElement("p")
             shr.append(p)
             p.setAttribute("class","nor")
             p.setAttribute("id","p4")
             if (fla==0) {
                p.innerHTML =tarhy[3]
             }
             else if (fla==1) {
                p.innerHTML =tarru[3]
            }
            
       

             var norx = document.createElement("div")
             sharq.append(norx)
             norx.setAttribute("class","sksel")
            //  norx.setAttribute("id","skizb")
              var sharim1 = document.createElement("img")
              norx.append(sharim1)
              sharim1.setAttribute("src","img/xoshor.png")
              sharim1.setAttribute("class","xoshor")
              var p1 = document.createElement("p")
              norx.append(p1)
              p1.setAttribute("class","nor")
              p1.setAttribute("id","p1")
              if (fla==0) {
                p1.innerHTML =tarhy[0]
             }
             else if (fla==1) {
                p1.innerHTML =tarru[0]
            }

              norx.onclick = function (params) {
                  
                game = 0
                x=0
                localStorage.setItem("game",x)
                
                        }

              var norx1 = document.createElement("div")
              sharq.append(norx1)
              norx1.setAttribute("class","taracel")
            //   norx1.setAttribute("id","taracel")
               var sharim2 = document.createElement("img")
               norx1.append(sharim2)
               sharim2.setAttribute("src","img/pod.png")
               sharim2.setAttribute("class","dost")
               var p2 = document.createElement("p")
               norx1.append(p2)
               p2.setAttribute("class","nor")
               p2.setAttribute("id","p2")
               if (fla==0) {
                p2.innerHTML =tarhy[1]
             }
             else if (fla==1) {
                p2.innerHTML =tarru[1]
            }



               var norx2 = document.createElement("div")
               sharq.append(norx2)
               norx2.setAttribute("class","dastijenia")
            //    norx2.setAttribute("id","dastijenia")
                var sharim3 = document.createElement("img")
                norx2.append(sharim3)
                sharim3.setAttribute("src","img/dost.png")
                sharim3.setAttribute("class","dost")
                var p3 = document.createElement("p")
                norx2.append(p3)
                p3.setAttribute("class","nor")
                p3.setAttribute("id","p3")
                if (fla==0) {
                    p3.innerHTML =tarhy[2]
                 }
 
else if (fla==1) {
    p3.innerHTML =tarru[2]
}



         }


  
    }
   
}
contineo()

