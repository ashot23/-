var tetev = 0
var himn = document.getElementsByClassName("but")
var sharq = document.getElementById("xax")
var sksel = document.getElementById("skizb")
var xosh = document.getElementsByClassName("xoshor")
var p1s = document.getElementById("p1")
var p2s = document.getElementById("p2")
var taracel = document.getElementById("taracel")
var dastijenia = document.getElementById("dastijenia")
var game = 0
var fl = 0
var x = localStorage.getItem("game", game)
localStorage.getItem("tetev", tetev)
var fla = localStorage.getItem("flay", fl)
var gamelev = 0
var click1 = 0

var poxvox 
var page = 1
var ej = localStorage.getItem("ej",page)
poxvox = ej
var lev = localStorage.getItem("lev", gamelev)
var cls = 0
var click2 = localStorage.getItem("cl1", cls)

var drosh = document.getElementsByClassName("drosh")
var opshi = document.getElementsByClassName("opshi")
var chap = 2000




               //    0      1           2             3               4          5      
var tarhy = ["Նոր խաղ", "Տարածել", "Նվաճումներ", "Շարունակել", "Մակարդակ","Շնորհավոր !!"]
var tarru = ["Новая игра", "Поделиться", "Достижение", "Продолжать", "Уровень","Шноравор"]
var h1ru = "Найди кота"
var h1hy = "Գտի՛ր կատվին"


var adamand = localStorage.getItem("adam")
var para = localStorage.getItem("para")

p1s.addEventListener("click",newgame)
xosh[0].addEventListener("click",newgame)

// p1s.offsetHeight
// document.addEventListener("keypress",function (params) {
// if (params.key=="d") {
//     aj()
// }
//  if (params.key=="a") {
//      dzax()
//  }
// if (params.code == "Space" ) {
//     doms()
// }
// if (params.key == "Enter" ) {
//     levmyus()
// }
// if (params.key == "0" ) {
//     l0()
// }
// if (params.key == "1" ) {
//     l1()
// }
// console.log(params.key);


// })




p2s.onclick = function () {

    window.open("www.facebook.com", "blank")

}





drosh[0].addEventListener("click",droshinna)




function droshinna(params) {
    
    var p1 = document.getElementById("p1")
    var p2 = document.getElementById("p2")
    var p3 = document.getElementById("p3")
    var p4 = document.getElementById("p4")
    var hner = document.getElementsByClassName("s")
    if (localStorage.getItem("tetev", tetev) == 0) {
        fl = 1
        localStorage.setItem("flay", fl)
        fla = 1

        this.src = "img/arm.png"
        this.style.width = "47px"
        this.style.height = "47px"

        tetev = 1
        localStorage.setItem("tetev", tetev)

        p1.innerHTML = tarru[0]
        p2.innerHTML = tarru[1]
        p3.innerHTML = tarru[2]
        hner[0].innerHTML = h1ru
        if (p4) {
            p4.innerHTML = tarru[3]
        }



    }
    else if (localStorage.getItem("tetev", tetev) == 1) {

        fl = 0
        localStorage.setItem("flay", fl)
        fla = 0


        this.src = "img/rus.png"
        this.style.width = "64px"
        this.style.height = "48px"

        tetev = 0
        localStorage.setItem("tetev", tetev)

        p1.innerHTML = tarhy[0]
        p2.innerHTML = tarhy[1]
        p3.innerHTML = tarhy[2]
        hner[0].innerHTML = h1hy
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
    var hner = document.getElementsByClassName("s")
    if (fla == 0) {
        p1.innerHTML = tarhy[0]
        p2.innerHTML = tarhy[1]
        p3.innerHTML = tarhy[2]
        hner[0].innerHTML = h1hy
        drosh[0].src = "img/rus.png"
    }
    else if (fla == 1) {
        hner[0].innerHTML = h1ru
        p1.innerHTML = tarru[0]
        p2.innerHTML = tarru[1]
        p3.innerHTML = tarru[2]
        drosh[0].src = "img/arm.png"
        drosh[0].style.width = "47px"
        drosh[0].style.height = "47px"
    }


}
flag()



function norxax(params) {
    ej = 1
    poxvox = 1
    page = 1
    localStorage.setItem("ej",page)
    game = 0
    x = 0
    localStorage.setItem("game", x)
    lev = 0
    gamelev = 0
    localStorage.setItem("lev", gamelev)
    cl =  0
    sxm = 0
     cls = 0
     click2 = 0
     localStorage.setItem("cl1", cls)
    
adam = 40
localStorage.setItem("adam", adam)
adamand = 40

par = 160
localStorage.setItem("para", par)
para = 160

}





function contineo(params) {
    if (x == 1) {
        var xax = document.getElementsByClassName("xax")
        if (xax[0]) {

            sharq.removeChild(sksel)
            sharq.removeChild(taracel)
            sharq.removeChild(dastijenia)
            var h1 = document.getElementsByClassName("h1")
            // h1[0].style.marginBottom = "64px"

            var shr = document.createElement("div")
            sharq.append(shr)

            shr.setAttribute("class", "sharun")
            var sharim = document.createElement("img")
            shr.append(sharim)
            sharim.setAttribute("src", "img/shar.png")
            sharim.setAttribute("class", "cont")
            sharim.addEventListener("click",levmyus)
            var p = document.createElement("p")
            shr.append(p)
            p.setAttribute("class", "nor")
            p.setAttribute("id", "p4")
          p.addEventListener("click",levmyus)

            if (fla == 0) {
                p.innerHTML = tarhy[3]
            }
            else if (fla == 1) {
                p.innerHTML = tarru[3]
            }



            var norx = document.createElement("div")
            sharq.append(norx)
            norx.setAttribute("class", "sksel")
            //  norx.setAttribute("id","skizb")
            var sharim1 = document.createElement("img")
            norx.append(sharim1)
            sharim1.setAttribute("src", "img/xoshor.png")
            sharim1.setAttribute("class", "xoshor")
            var p1 = document.createElement("p")
            norx.append(p1)
            p1.setAttribute("class", "nor")
            p1.setAttribute("id", "p1")
            if (fla == 0) {
                p1.innerHTML = tarhy[0]
            }
            else if (fla == 1) {
                p1.innerHTML = tarru[0]
            }

          p1.addEventListener("click",norxax)
sharim1.addEventListener("click",norxax)
            var norx1 = document.createElement("div")
            sharq.append(norx1)
            norx1.setAttribute("class", "taracel")
            //   norx1.setAttribute("id","taracel")
            var a = document.createElement("a")
            norx1.append(a)
            a.setAttribute("href", "https://www.youtube.com/watch?v=I1ruXD6POfE")
            a.setAttribute("target", "_blank")
            var sharim2 = document.createElement("img")
            a.append(sharim2)
            sharim2.setAttribute("src", "img/pod.png")
            sharim2.setAttribute("class", "dost")
            var p2 = document.createElement("p")
            a.append(p2)
            p2.setAttribute("class", "nor")
            p2.setAttribute("id", "p2")
            if (fla == 0) {
                p2.innerHTML = tarhy[1]
            }
            else if (fla == 1) {
                p2.innerHTML = tarru[1]
            }



            var norx2 = document.createElement("div")
            sharq.append(norx2)
            norx2.setAttribute("class", "dastijenia")
            //    norx2.setAttribute("id","dastijenia")
            var sharim3 = document.createElement("img")
            norx2.append(sharim3)
            sharim3.setAttribute("src", "img/dost.png")
            sharim3.setAttribute("class", "dost")
            var p3 = document.createElement("p")
            norx2.append(p3)
            p3.setAttribute("class", "nor")
            p3.setAttribute("id", "p3")
            if (fla == 0) {
                p3.innerHTML = tarhy[2]
            }

            else if (fla == 1) {
                p3.innerHTML = tarru[2]
            }



        }



    }

}
contineo()


function doms(params) {
    var levdiv = document.getElementsByClassName("leveldiv")
    var xaxayin = document.getElementsByClassName("xaxayin")
    poxvox = 1
    document.body.style.backgroundImage = "url(img/back.jpg)"
    if (levdiv[0]) {
        document.body.removeChild(levdiv[0])
    }
  else if (xaxayin[0]) {
        document.body.removeChild(xaxayin[0])
    }

    var opshi = document.createElement("div")
    document.body.append(opshi)
    opshi.setAttribute("class", "opshi")

    var h1div = document.createElement("div")
    opshi.append(h1div)
    h1div.setAttribute("class", "h1")


    var h1div2 = document.createElement("div")
    h1div.append(h1div2)
    h1div2.setAttribute("class", "h1div")



    var h1 = document.createElement("h1")
    h1div2.append(h1)
    h1.setAttribute("class", "s")


    if (fla == 0) {
        h1.innerHTML = h1hy
    }
    else if (fla == 1) {
        h1.innerHTML = h1ru
    }



    var xax = document.createElement("div")
    opshi.append(xax)
    xax.setAttribute("class", "xax")
    xax.setAttribute("id", "xax")




    var sharun = document.createElement("div")
    xax.append(sharun)
    sharun.setAttribute("class", "sharun")

    var sharnk = document.createElement("img")
    sharun.append(sharnk)
    sharnk.setAttribute("class", "cont")
    sharnk.setAttribute("src", "img/shar.png")
sharnk.addEventListener("click",levmyus)

    var sharp = document.createElement("p")
    sharun.append(sharp)
    sharp.setAttribute("class", "nor")
    sharp.setAttribute("id", "p4")
    sharp.addEventListener("click",levmyus)
    if (fla == 0) {
        sharp.innerHTML = tarhy[3]
    }
    else if (fla == 1) {
        sharp.innerHTML = tarru[3]
    }
 



    var norx = document.createElement("div")
    xax.append(norx)
    norx.setAttribute("class", "sksel")
    //  norx.setAttribute("id","skizb")
    var sharim1 = document.createElement("img")
    norx.append(sharim1)
    sharim1.setAttribute("src", "img/xoshor.png")
    sharim1.setAttribute("class", "xoshor")
    var p1 = document.createElement("p")
    norx.append(p1)
    p1.setAttribute("class", "nor")
    p1.setAttribute("id", "p1")
    if (fla == 0) {
        p1.innerHTML = tarhy[0]
    }
    else if (fla == 1) {
        p1.innerHTML = tarru[0]
    }

  p1.addEventListener("click",norxax)
sharim1.addEventListener("click",norxax)
    var norx1 = document.createElement("div")
    xax.append(norx1)
    norx1.setAttribute("class", "taracel")
    //   norx1.setAttribute("id","taracel")
    var a = document.createElement("a")
    norx1.append(a)
    a.setAttribute("href", "https://www.youtube.com/watch?v=I1ruXD6POfE")
    a.setAttribute("target", "_blank")
    var sharim2 = document.createElement("img")
    a.append(sharim2)
    sharim2.setAttribute("src", "img/pod.png")
    sharim2.setAttribute("class", "dost")
    var p2 = document.createElement("p")
    a.append(p2)
    p2.setAttribute("class", "nor")
    p2.setAttribute("id", "p2")
    if (fla == 0) {
        p2.innerHTML = tarhy[1]
    }
    else if (fla == 1) {
        p2.innerHTML = tarru[1]
    }



    var norx2 = document.createElement("div")
    xax.append(norx2)
    norx2.setAttribute("class", "dastijenia")
    //    norx2.setAttribute("id","dastijenia")
    var sharim3 = document.createElement("img")
    norx2.append(sharim3)
    sharim3.setAttribute("src", "img/dost.png")
    sharim3.setAttribute("class", "dost")
    var p3 = document.createElement("p")
    norx2.append(p3)
    p3.setAttribute("class", "nor")
    p3.setAttribute("id", "p3")
    if (fla == 0) {
        p3.innerHTML = tarhy[2]
    }

    else if (fla == 1) {
        p3.innerHTML = tarru[2]
    }





    var futer = document.createElement("div")
    opshi.append(futer)
    futer.setAttribute("class", "futer")


    var zvuk = document.createElement("img")
    futer.append(zvuk)
    zvuk.setAttribute("class", "zvuk")
zvuk.src = "img/zvuk.png"

var drosh = document.createElement("img")
futer.append(drosh)
drosh.setAttribute("class", "drosh")
drosh.addEventListener("click",droshinna)
if (fla==0) {
    drosh.src = "img/rus.png"
}
else if (fla==1) {
    
    drosh.src = "img/arm.png"
    drosh.style.width = "47px"
    drosh.style.height = "47px"

}

var harc = document.createElement("img")
futer.append(harc)
harc.setAttribute("class", "harc")
harc.src = "img/harc.png"


}



function paraadam(params) {





    click2 =  0
    cls = 0
  localStorage.setItem("cl1", cls) 
    var td = document.getElementsByClassName("td")
    for (let i = 0; i < td.length; i++) {
        td[i].onclick = "none"

    }

var imgb = document.getElementsByClassName("brl")
var brldiv = document.getElementsByClassName("brldiv")




    adamand = Math.floor(adamand) + 1
    adam = adamand
    localStorage.setItem("adam", adam)

    para = Math.floor(para) + 3
    par = para
    localStorage.setItem("para", par)




    var pb = document.getElementsByClassName('brlp')
    pb[0].innerHTML = adamand
    var pp = document.getElementsByClassName('poxp')
    pp[0].innerHTML = para


    setTimeout(() => {
        var gamediv = document.getElementsByClassName("gamediv")
    var table=  document.getElementsByTagName("table") 
    var w = table[0].offsetWidth    
 var h = table[0].offsetHeight 
 var img 
 
               if (lev==0) {
                img = "url(img/compl/1.png)"
               }
               else if (lev==1) {
                img = "url(img/compl/1.png)"
               }
        
               else if (lev==2) {
                img = "url(img/compl/7.png)"
               }
               else if (lev==3) {
                img = "url(img/compl/5.png)"
               }
               else if (lev==4) {
                img = "url(img/compl/4.png)"
               }
               else if (lev==5) {
                img = "url(img/compl/6.png)"
               }
               else if (lev==6) {
                img = "url(img/compl/9.png)"
               }
               else if (lev==7) {
                img = "url(img/compl/8.png)"
               }
               else if (lev==8) {
                img = "url(img/compl/2.png)"
               }
               else if (lev==9) {
                img = "url(img/compl/10.png)"
               }
               else if (lev==10) {
                img = "url(img/compl/3.png)"
               }
               else if (lev==11) {
                img = "url(img/compl/11.png)"
               }
             gamediv[0].removeChild(table[0])   
            

          var divanc = document.createElement("div")
   
                gamediv[0].append(divanc)
                 divanc.style.width = w + "px"
                divanc.style.height = h + "px"
                divanc.style.backgroundImage = img
                divanc.setAttribute("class","ancnel")
               
                var poqr = document.createElement("div")
   
                divanc.append(poqr)
                poqr.style.width = Math.floor(w-100) + "px"
                poqr.style.height = Math.floor(h-100) + "px"
                poqr.setAttribute("class","poqr")
                
                var h1 = document.createElement("h1")
                poqr.append(h1)
                h1.setAttribute("class","poqrh1")
                if (fla==0) {
                    h1.innerHTML = tarhy[5]
                   
                }
                else if (fla==1) {
                    h1.innerHTML = tarru[5]
                } 


                    var p1 = document.createElement("p")
                    poqr.append(p1)
                    p1.setAttribute("class","p1pox")
                    p1.innerHTML = 3
                    var p2 = document.createElement("p")
                    poqr.append(p2)
                    p2.setAttribute("class","p2pox")
                    p2.innerHTML = 1




setTimeout(() => {
      
}, 2000);


    }, 1000);



}

function paraadamdel(params) {



    adamand = Math.floor(adamand) - 1
    adam = adamand
    localStorage.setItem("adam", adam)




    var pb = document.getElementsByClassName('brlp')
    pb[0].innerHTML = adamand

}


function l0(params) {

   
    var table = document.getElementsByClassName("table")
    var gamediv = document.getElementsByClassName("gamediv")

    if (lev == 0) {

        document.body.style.backgroundImage  = "url(img/back.jpg)";
   
        var xaxayin = document.createElement("div")
        document.body.append(xaxayin)
        xaxayin.setAttribute("class", "xaxayin")


        if (gamediv[0]) {
            gamediv[0].removeChild(table[0])
        }
        else {

            ver()
        }
  


        var gamediv = document.createElement("div")
        gamediv.setAttribute("class", "gamediv")
        xaxayin.append(gamediv)


        var tbl = document.createElement('table')
        gamediv.appendChild(tbl)
        tbl.setAttribute("class", "table")
        if (click2==1) {
            tbl.style.backgroundImage = "url(img/klor/1.png)"
        }
        else  {
            tbl.style.backgroundImage = "url(img/level/0.jpg)"
        }
       


        // tbl.style.margin = 'auto'
        var tbd = document.createElement('tbody')

        tbl.appendChild(tbd)
        var m = 30
        var n = 30
        var xaxh = xaxayin.offsetHeight
        var verh = document.getElementsByClassName("vererv")[0].offsetHeight
        var cach =  54
var tbih = xaxh - (cach+verh)
var verj = tbih/28
        
        for (let i = 0; i < m; i++) {
            var tr = document.createElement('tr')
            tbd.appendChild(tr)
            tr.setAttribute("id", i)
 
            tr.style.height = verj-2 + 'px'

            for (let j = 0; j < n; j++) {
                var td = document.createElement('td')
                tr.appendChild(td)
                td.setAttribute("class", "td")
                td.setAttribute("id", j)
                td.style.backgroundColor = "transparent"
                td.style.width = 30 + 'px'
                // td.style.height = 42 + 'px'
                td.onclick = function (params) {


                    if (this.id == 10 && this.parentElement.id == 6 || this.id == 11 && this.parentElement.id == 6 || this.id == 12 && this.parentElement.id == 6 || this.id == 9 && this.parentElement.id == 7 || this.id == 10 && this.parentElement.id == 7 || this.id == 11 && this.parentElement.id == 7 || this.id == 12 && this.parentElement.id == 7 || this.id == 13 && this.parentElement.id == 7 || this.id == 9 && this.parentElement.id == 8 || this.id == 10 && this.parentElement.id == 8 || this.id == 11 && this.parentElement.id == 8 || this.id == 12 && this.parentElement.id == 8 || this.id == 13 && this.parentElement.id == 8 || this.id == 14 && this.parentElement.id == 8 || this.id == 16 && this.parentElement.id == 8 || this.id == 17 && this.parentElement.id == 8|| this.id == 8 && this.parentElement.id == 9|| this.id == 10 && this.parentElement.id == 9|| this.id == 11 && this.parentElement.id == 9|| this.id == 12 && this.parentElement.id == 9|| this.id == 13 && this.parentElement.id == 9|| this.id == 14 && this.parentElement.id == 9|| this.id == 15 && this.parentElement.id == 9|| this.id == 16 && this.parentElement.id == 9|| this.id == 17 && this.parentElement.id == 9|| this.id == 8 && this.parentElement.id == 10|| this.id == 9 && this.parentElement.id == 10|| this.id == 10 && this.parentElement.id == 10|| this.id == 11 && this.parentElement.id == 10|| this.id == 12 && this.parentElement.id == 10|| this.id == 13 && this.parentElement.id == 10|| this.id == 14 && this.parentElement.id == 10|| this.id == 15 && this.parentElement.id == 10|| this.id == 16 && this.parentElement.id == 10|| this.id == 17 && this.parentElement.id == 10|| this.id == 18 && this.parentElement.id == 10|| this.id == 8 && this.parentElement.id == 11|| this.id == 9 && this.parentElement.id == 11|| this.id == 10 && this.parentElement.id == 11|| this.id == 11 && this.parentElement.id == 11|| this.id == 12 && this.parentElement.id == 11|| this.id == 13 && this.parentElement.id == 11|| this.id == 14 && this.parentElement.id == 11|| this.id == 15 && this.parentElement.id == 11|| this.id == 16 && this.parentElement.id == 11|| this.id == 17 && this.parentElement.id == 11|| this.id == 18 && this.parentElement.id == 11|| this.id == 7 && this.parentElement.id == 12|| this.id == 8 && this.parentElement.id == 12|| this.id == 9 && this.parentElement.id == 12|| this.id == 10 && this.parentElement.id == 11|| this.id == 11 && this.parentElement.id == 12|| this.id == 12 && this.parentElement.id == 12|| this.id == 13 && this.parentElement.id == 12|| this.id == 14 && this.parentElement.id == 12|| this.id == 15 && this.parentElement.id == 12|| this.id == 16 && this.parentElement.id == 12|| this.id == 17 && this.parentElement.id == 12|| this.id == 18 && this.parentElement.id == 12|| this.id == 19 && this.parentElement.id == 12|| this.id == 7 && this.parentElement.id == 13|| this.id == 8 && this.parentElement.id == 13|| this.id == 9 && this.parentElement.id == 13|| this.id == 10 && this.parentElement.id == 13|| this.id == 11 && this.parentElement.id == 13|| this.id == 12 && this.parentElement.id == 13|| this.id == 13 && this.parentElement.id == 13|| this.id == 14 && this.parentElement.id == 13|| this.id == 15 && this.parentElement.id == 13|| this.id == 16 && this.parentElement.id == 13|| this.id == 17 && this.parentElement.id == 13|| this.id == 18 && this.parentElement.id == 13|| this.id == 19 && this.parentElement.id == 13|| this.id == 6 && this.parentElement.id == 14|| this.id == 7 && this.parentElement.id == 14|| this.id == 8 && this.parentElement.id == 14|| this.id == 9 && this.parentElement.id == 14|| this.id == 10 && this.parentElement.id == 14|| this.id == 11 && this.parentElement.id == 14|| this.id == 12 && this.parentElement.id == 14|| this.id == 13 && this.parentElement.id == 14|| this.id == 14 && this.parentElement.id == 14|| this.id == 15 && this.parentElement.id == 14|| this.id == 16 && this.parentElement.id == 14|| this.id == 17 && this.parentElement.id == 14|| this.id == 18 && this.parentElement.id == 14|| this.id == 19 && this.parentElement.id == 15|| this.id == 6 && this.parentElement.id == 15|| this.id == 7 && this.parentElement.id == 15|| this.id == 8 && this.parentElement.id == 15|| this.id == 9 && this.parentElement.id == 15|| this.id == 10 && this.parentElement.id == 15|| this.id == 11 && this.parentElement.id == 15|| this.id == 12 && this.parentElement.id == 15|| this.id == 13 && this.parentElement.id == 15|| this.id == 14 && this.parentElement.id == 15|| this.id == 15 && this.parentElement.id == 15|| this.id == 16 && this.parentElement.id == 15|| this.id == 17|| this.id == 19 && this.parentElement.id == 16|| this.id == 6 && this.parentElement.id == 16|| this.id == 7 && this.parentElement.id == 16|| this.id == 8 && this.parentElement.id == 16|| this.id == 9 && this.parentElement.id == 16|| this.id == 10 && this.parentElement.id == 16|| this.id == 11 && this.parentElement.id == 16|| this.id == 12 && this.parentElement.id == 16|| this.id == 13 && this.parentElement.id == 16|| this.id == 14 && this.parentElement.id == 16|| this.id == 15 && this.parentElement.id == 17||  this.id == 8 && this.parentElement.id == 18|| this.id == 9 && this.parentElement.id == 18|| this.id == 10 && this.parentElement.id == 18|| this.id == 11 && this.parentElement.id == 18|| this.id == 12 && this.parentElement.id == 18|| this.id == 13 && this.parentElement.id == 18|| this.id == 14 && this.parentElement.id == 18|| this.id == 15 && this.parentElement.id == 18|| this.id == 9 && this.parentElement.id == 19|| this.id == 10 && this.parentElement.id == 19|| this.id == 11 && this.parentElement.id == 19|| this.id == 12 && this.parentElement.id == 19|| this.id == 15 && this.parentElement.id == 19) {
                        tbl.setAttribute("class", "comp")

                        paraadam()
                        
                       tbl.style.backgroundImage = "url(img/compl/1.png)"
                        gamelev = 1
                        lev = 1
                        localStorage.setItem("lev", gamelev)


                        setTimeout(() => {
                            l1()
                        }, chap);


                          

                    }
                    else {
                        paraadamdel()

                        tanel(this)
                        //   var divdel = document.createElement("div")
                        //   divdel.setAttribute("class","del")
                        //   this.append(divdel)


                    }

                }

            }
        }
        if (!gamediv[0]) {
            futer()
        }
    
    }


}

function tanel(params) {
    var karimg = document.getElementsByClassName("deli")
var divb  =document.getElementsByClassName("divs")


    var karp = document.getElementsByClassName("delp")
    for (let i = 0; i < karimg.length; i++) {

        if (karimg[i] && karimg[i].parentElement == params) {

            params.removeChild(karimg[i])
            params.removeChild(karp[i])
            // params.style.display = "table-cell"
        }

    }


if (karp.length>0&&karp[0]) {

   
      karp[0].parentElement.style.display = "table-cell"
    karimg[0].parentElement.removeChild(karimg[0].parentElement.children[0])
    karp[0].parentElement.removeChild(karp[0].parentElement.children[0])

  
}


var divs = document.createElement("div")
divs.setAttribute("class", "divs")
params.append(divs)
divs.style.position = "absolute"

divs.style.display = "flex"
divs.style.alignItems = 'center'
    var brlimg = document.createElement("img")
    brlimg.setAttribute("class", "deli")
    brlimg.src = "img/brliand.png"

    divs.append(brlimg)
    var p = document.createElement("p")

    p.setAttribute("class", "delp")
    p.innerHTML = -1
    divs.append(p)

    if (brlimg && p) {


        setTimeout(() => {
            
            
            for (let x = 0; x < divb.length; x++) {
                if (divb[x] && divs.parentElement == params) {
                
                    params.removeChild(divs)
                    // params.removeChild(p)
                    params.style.display = "table-cell"
                }


            }


        }, 400);
    }

}




function l1(params) {

    lner("60px", "19px", 30, 30, 1)

}

function l3() {
    lner("52px", "42px", 30, 30, 2)

}
function l4(params) {
    lner("60px", "19px", 30, 30, 3)
}

function l5(params) {
    lner("60px", "19px", 30, 30, 4)


}




function l6(params) {
    lner("60px", "19px", 30, 30, 5)

}

function l7(params) {
    lner("25px", "27px", 30, 30, 6)

}


function l8(params) {
    lner("56px", "42px", 30, 30, 7)
}
function l9(params) {
    lner("10px", "10px", 30, 30, 8)
}

function l10(params) {
    // lner("40px","40px",10,12,9)
    lner("44px", "42px", 30, 30, 9)
}
function l11(params) {
    lner("19px", "19px", 30, 30, 10)
}








function lner(w, h, m, n, level) {



    var table = document.getElementsByClassName("comp")
    var table2 = document.getElementsByClassName("table")
    var gamedivs = document.getElementsByClassName("gamediv")
    var xaxs = document.getElementsByClassName("xaxayin")
    //  localStorage.setItem("adamand",adam)
    //  localStorage.setItem("para",par)

var ancdiv = document.getElementsByClassName("ancnel")

    if (lev == level) {
        var a = 0
        click1 = 0
    document.body.style.backgroundImage  = "url(img/back.jpg)";
    

        if (gamedivs[0]) {

                   if (table2[0]) {
                    gamedivs[0].removeChild(table2[0]) 
                   }
      
            
else if (ancdiv[0]) {
                gamedivs[0].removeChild(ancdiv[0])
            }
            
            


            var brl = document.getElementsByClassName("levp")
            brl[0].innerHTML = lev

            var tbl = document.createElement('table')
            gamedivs[0].appendChild(tbl)
            tbl.setAttribute("class", "table")
            if (level == 1) {
    
               
                tbl.style.backgroundImage = "url(img/level/1.jpg)"
             
                
            }
            else if (level == 2) {
                tbl.style.backgroundImage = "url(img/level/3.jpg)"
            }
            else if (level == 3) {
                tbl.style.backgroundImage = "url(img/level/4.jpg)"
            }
            else if (level == 4) {
                tbl.style.backgroundImage = "url(img/level/5.jpg)"
            }
            else if (level == 5) {
                tbl.style.backgroundImage = "url(img/level/6.jpg)"
            }
            else if (level == 6) {
                tbl.style.backgroundImage = "url(img/level/7.jpg)"
            }
            else if (level == 7) {
                tbl.style.backgroundImage = "url(img/level/8.jpg)"
            }
            else if (level == 8) {
                tbl.style.backgroundImage = "url(img/level/9.jpg)"
            }
            else if (level == 9) {
                tbl.style.backgroundImage = "url(img/level/10.jpg)"
            }

            else if (level == 10) {
                tbl.style.backgroundImage = "url(img/level/11.jpg)"
            } 


            // tbl.style.margin = 'auto'
            var tbd = document.createElement('tbody')

            tbl.appendChild(tbd)
var xaxayins= document.getElementsByClassName("xaxayin") 
            var xaxh = xaxayins[0].offsetHeight
            var verh = document.getElementsByClassName("vererv")[0].offsetHeight
            var cach =  54
    var tbih = xaxh - (cach+verh)
    var verj = tbih/28
            

            for (let i = 0; i < m; i++) {
                var tr = document.createElement('tr')
                tbd.appendChild(tr)
                tr.setAttribute("id", i)
                tr.style.height = verj-2 + "px"


                for (let j = 0; j < n; j++) {
                    var td = document.createElement('td')
                    tr.appendChild(td)
                    td.setAttribute("class", "td")
                    td.setAttribute("id", j)
                    td.style.backgroundColor = "transparent"
                    td.style.width = "30px"
                    // td.style.height = h
                    td.onclick = function (params) {
                        if (level == 1) {
                            if (this.id == 20 && this.parentElement.id == 11 || this.id == 21 && this.parentElement.id == 11 || this.id == 22 && this.parentElement.id == 12 || this.id == 20 && this.parentElement.id == 12 || this.id == 21 && this.parentElement.id == 12 || this.id == 22 && this.parentElement.id == 12|| this.id == 23 && this.parentElement.id == 12|| this.id == 24 && this.parentElement.id == 12|| this.id == 25 && this.parentElement.id == 12|| this.id == 26 && this.parentElement.id == 12|| this.id == 27 && this.parentElement.id == 12|| this.id == 21 && this.parentElement.id == 13 || this.id == 22 && this.parentElement.id == 13|| this.id == 23 && this.parentElement.id == 13|| this.id == 24 && this.parentElement.id == 13|| this.id == 25 && this.parentElement.id == 13|| this.id == 26 && this.parentElement.id == 13|| this.id == 27 && this.parentElement.id == 13) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/7.png)"
                                gamelev = 2
                                lev = 2
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l3()
                                }, 2000);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 2) {
                            if (this.id == 14 && this.parentElement.id == 11||this.id == 12 && this.parentElement.id == 12||this.id == 13 && this.parentElement.id == 12||this.id == 14 && this.parentElement.id == 12||this.id == 15 && this.parentElement.id == 12||this.id == 13 && this.parentElement.id == 13||this.id == 14 && this.parentElement.id == 13||this.id == 15 && this.parentElement.id == 13||this.id == 13 && this.parentElement.id == 14||this.id == 14 && this.parentElement.id == 14||this.id == 15 && this.parentElement.id == 14||this.id == 13 && this.parentElement.id == 15||this.id == 14 && this.parentElement.id == 15||this.id == 15 && this.parentElement.id == 15) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/5.png)"
                                gamelev = 3
                                lev = 3
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l4()
                                }, chap);
                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 3) {
                            if (this.id == 16 && this.parentElement.id == 7 || this.id == 17 && this.parentElement.id == 7 || this.id == 18 && this.parentElement.id == 7 || this.id == 16 && this.parentElement.id == 8 || this.id == 17 && this.parentElement.id == 8|| this.id == 18 && this.parentElement.id == 8|| this.id == 18 && this.parentElement.id == 9|| this.id == 17 && this.parentElement.id == 9|| this.id == 17 && this.parentElement.id == 10|| this.id == 18 && this.parentElement.id == 10|| this.id == 17 && this.parentElement.id == 11|| this.id == 18 && this.parentElement.id == 11) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/4.png)"
                                gamelev = 4
                                lev = 4
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l5()
                                }, chap);
                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 4) {
                            if (this.id == 13 && this.parentElement.id == 12||this.id == 14 && this.parentElement.id == 12) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/6.png)"
                                gamelev = 5
                                lev = 5
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l6()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 5) {
                            if (this.id == 19 && this.parentElement.id == 15 || this.id == 18 && this.parentElement.id == 16 || this.id == 19 && this.parentElement.id == 16 || this.id == 20 && this.parentElement.id == 16 || this.id == 19 && this.parentElement.id == 17|| this.id == 20 && this.parentElement.id == 17) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/9.png)"
                                gamelev = 6
                                lev = 6
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l7()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 6) {
                            if (this.id == 9 && this.parentElement.id == 7) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/8.png)"
                                gamelev = 7
                                lev = 7
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l8()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 7) {
                            if (this.id == 7 && this.parentElement.id == 9) {
                                tbl.setAttribute("class", "comp")

                                paraadam()
                                tbl.style.backgroundImage = "url(img/compl/2.png)"
                                gamelev = 8
                                lev = 8
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l9()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }

                        else if (level == 8) {
                            if (this.id == 29 && this.parentElement.id == 32 || this.id == 30 && this.parentElement.id == 32 || this.id == 30 && this.parentElement.id == 33 || this.id == 30 && this.parentElement.id == 34) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/10.png)"
                                gamelev = 9
                                lev = 9
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l10()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 9) {
                            if (this.id == 7 && this.parentElement.id == 6) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/3.png)"
                                gamelev = 10
                                lev = 10
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l11()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                          else if (level == 10) {
                            if (this.id == 11 && this.parentElement.id == 9||this.id == 12 && this.parentElement.id == 9||this.id == 13 && this.parentElement.id == 9||this.id == 12 && this.parentElement.id == 10||this.id == 13 && this.parentElement.id == 10||this.id == 14 && this.parentElement.id == 10) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/11.png)"
                                gamelev = 11
                                lev = 11
      
                                localStorage.setItem("lev", gamelev)
                                page = 2
                                ej = 2 
                             localStorage.setItem("ej",page)
                                // setTimeout(() => {
                                //     l10()
                                // }, 2000);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }

                    }


                }
            }
            if (a == 1) {
                futer()
            }
        }
        else {
            if (ancdiv[0]) {
                gamedivs[0].removeChild(ancdiv[0])
            }
            var xaxayin = document.createElement("div")
            document.body.append(xaxayin)
            xaxayin.setAttribute("class", "xaxayin")
            ver()

            a = 1
            var gamediv = document.createElement("div")
            gamediv.setAttribute("class", "gamediv")
            xaxayin.append(gamediv)


            var tbl = document.createElement('table')
            gamediv.appendChild(tbl)
            tbl.setAttribute("class", "table")
            if (level == 1) {
               
                if (click2==1) {
               
               
                    tbl.style.backgroundImage = "url(img/klor/7.png)"
                 }
                 else{
                   
                    tbl.style.backgroundImage = "url(img/level/1.jpg)"
                 }
            }
            else if (level == 2) {
                if (click2==1) {
               
               
                    tbl.style.backgroundImage = "url(img/klor/5.png)"
                 }
                 else{
                   
                    tbl.style.backgroundImage = "url(img/level/3.jpg)"
                 }
              
            }
            else if (level == 3) {
                if (click2==1) {
               
               
                    tbl.style.backgroundImage = "url(img/klor/4.png)"
                 }
                 else{
                   
                    tbl.style.backgroundImage = "url(img/level/4.jpg)"
                 }
            }
            else if (level == 4) {
                if (click2==1) {
               
               
                    tbl.style.backgroundImage = "url(img/klor/6.png)"
                 }
                 else{
                   
                    tbl.style.backgroundImage = "url(img/level/5.jpg)"
                 }
            }
            else if (level == 5) {
                if (click2==1) {
               
               
                    tbl.style.backgroundImage = "url(img/klor/9.png)"
                 }
                 else{
                   
                    tbl.style.backgroundImage = "url(img/level/6.jpg)"
                 }
               
            }
            else if (level == 6) {
                if (click2==1) {
               
               
                    tbl.style.backgroundImage = "url(img/klor/8.png)"
                 }
                 else{
                   
                    tbl.style.backgroundImage = "url(img/level/7.jpg)"
                 }
            }
            else if (level == 7) {
                if (click2==1) {
               
               
                    tbl.style.backgroundImage = "url(img/klor/2.png)"
                 }
                 else{
                   
                    tbl.style.backgroundImage = "url(img/level/8.jpg)"
                 }
            }
            else if (level == 8) {
                if (click2==1) {
               
               
                    tbl.style.backgroundImage = "url(img/klor/10.png)"
                 }
                 else{
                   
                    tbl.style.backgroundImage = "url(img/level/9.jpg)"
                 }
            }
            else if (level == 9) {
         
                if (click2==1) {
               
               
                    tbl.style.backgroundImage = "url(img/klor/3.png)"
                 }
                 else{
                   
                    tbl.style.backgroundImage = "url(img/level/10.jpg)"
                 }
            }
            else if (level == 10) {
         
                if (click2==1) {
               
               
                    tbl.style.backgroundImage = "url(img/klor/11.png)"
                 }
                 else{
                   
                    tbl.style.backgroundImage = "url(img/level/11.jpg)"
                 }
            }
            // tbl.style.margin = 'auto'
            var tbd = document.createElement('tbody')

            tbl.appendChild(tbd)

            var xaxayins= document.getElementsByClassName("xaxayin") 
            // var m = 30
            // var n = 30
            var xaxh = xaxayins[0].offsetHeight
            var verh = document.getElementsByClassName("vererv")[0].offsetHeight
            var cach =  54
    var tbih = xaxh - (cach+verh)
    var verj = tbih/28
            
            for (let i = 0; i < m; i++) {
                var tr = document.createElement('tr')
                tbd.appendChild(tr)
                tr.setAttribute("id", i)
     
                tr.style.height = verj-2 + 'px'
    
                for (let j = 0; j < n; j++) {
                    var td = document.createElement('td')
                    tr.appendChild(td)
                    td.setAttribute("class", "td")
                    td.setAttribute("id", j)
                    td.style.backgroundColor = "transparent"
                    td.style.width = 30 + 'px'

                    td.onclick = function (params) {

                        if (level == 1) {

                            if (this.id == 20 && this.parentElement.id == 11 || this.id == 21 && this.parentElement.id == 11 || this.id == 22 && this.parentElement.id == 12 || this.id == 20 && this.parentElement.id == 12 || this.id == 21 && this.parentElement.id == 12 || this.id == 22 && this.parentElement.id == 12|| this.id == 23 && this.parentElement.id == 12|| this.id == 24 && this.parentElement.id == 12|| this.id == 25 && this.parentElement.id == 12|| this.id == 26 && this.parentElement.id == 12|| this.id == 27 && this.parentElement.id == 12|| this.id == 21 && this.parentElement.id == 13 || this.id == 22 && this.parentElement.id == 13|| this.id == 23 && this.parentElement.id == 13|| this.id == 24 && this.parentElement.id == 13|| this.id == 25 && this.parentElement.id == 13|| this.id == 26 && this.parentElement.id == 13|| this.id == 27 && this.parentElement.id == 13) {
                                tbl.setAttribute("class", "comp")
                                paraadam()


                                tbl.style.backgroundImage = "url(img/compl/7.png)"
                                gamelev = 2
                                lev = 2
                                localStorage.setItem("lev", gamelev)

                                setTimeout(() => {
                                    l3()
                                }, chap);


                            }
                            else {
                                paraadamdel()
                                tanel(this)
                              
                                
                            }

                        }
                        else if (level == 2) {
                            if (this.id == 14 && this.parentElement.id == 11||this.id == 12 && this.parentElement.id == 12||this.id == 13 && this.parentElement.id == 12||this.id == 14 && this.parentElement.id == 12||this.id == 15 && this.parentElement.id == 12||this.id == 13 && this.parentElement.id == 13||this.id == 14 && this.parentElement.id == 13||this.id == 15 && this.parentElement.id == 13||this.id == 13 && this.parentElement.id == 14||this.id == 14 && this.parentElement.id == 14||this.id == 15 && this.parentElement.id == 14||this.id == 13 && this.parentElement.id == 15||this.id == 14 && this.parentElement.id == 15||this.id == 15 && this.parentElement.id == 15) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/5.png)"
                                gamelev = 3
                                lev = 3
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l4()
                                }, chap);
                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }

                        else if (level == 3) {
                            if (this.id == 16 && this.parentElement.id == 7 || this.id == 17 && this.parentElement.id == 7 || this.id == 18 && this.parentElement.id == 7 || this.id == 16 && this.parentElement.id == 8 || this.id == 17 && this.parentElement.id == 8|| this.id == 18 && this.parentElement.id == 8|| this.id == 18 && this.parentElement.id == 9|| this.id == 17 && this.parentElement.id == 9|| this.id == 17 && this.parentElement.id == 10|| this.id == 18 && this.parentElement.id == 10|| this.id == 17 && this.parentElement.id == 11|| this.id == 18 && this.parentElement.id == 11) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/4.png)"
                                gamelev = 4
                                lev = 4
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l5()
                                }, chap);
                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 4) {
                            if (this.id == 13 && this.parentElement.id == 12||this.id == 14 && this.parentElement.id == 12) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/6.png)"
                                gamelev = 5
                                lev = 5
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l6()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 5) {
                            if (this.id == 19 && this.parentElement.id == 15 || this.id == 18 && this.parentElement.id == 16 || this.id == 19 && this.parentElement.id == 16 || this.id == 20 && this.parentElement.id == 16 || this.id == 19 && this.parentElement.id == 17|| this.id == 20 && this.parentElement.id == 17) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/9.png)"
                                gamelev = 6
                                lev = 6
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l7()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 6) {
                            if (this.id == 9 && this.parentElement.id == 7) {
                                tbl.setAttribute("class", "comp")

                                paraadam()
                                tbl.style.backgroundImage = "url(img/compl/8.png)"
                                gamelev = 7
                                lev = 7
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l8()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 7) {
                            if (this.id == 7 && this.parentElement.id == 9) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/2.png)"
                                gamelev = 8
                                lev = 8
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l9()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 8) {
                            if (this.id == 29 && this.parentElement.id == 32 || this.id == 30 && this.parentElement.id == 32 || this.id == 30 && this.parentElement.id == 33 || this.id == 30 && this.parentElement.id == 34) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/10.png)"
                                gamelev = 9
                                lev = 9
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l10()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 9) {

                            if (this.id == 7 && this.parentElement.id == 6) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/3.png)"
                                gamelev = 10
                                lev = 10
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l11()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 10) {

                            if (this.id == 11 && this.parentElement.id == 9||this.id == 12 && this.parentElement.id == 9||this.id == 13 && this.parentElement.id == 9||this.id == 12 && this.parentElement.id == 10||this.id == 13 && this.parentElement.id == 10||this.id == 14 && this.parentElement.id == 10) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/11.png)"
                                gamelev = 11
                                lev = 11
                                localStorage.setItem("lev", gamelev)
                                page = 2
                                ej = 2 
                             localStorage.setItem("ej",page)

                                // setTimeout(() => {
                                //     l11()
                                // }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                    }


                }
            }
            if (a == 1) {
                futer()
            }


        }



    }
}




function ver(params) {

    var ids = 0

    var levsa = document.getElementsByClassName("leveldiv")
    document.body.removeChild(levsa[0])


    var xaxayin = document.getElementsByClassName("xaxayin")



    var verev = document.createElement("div")
    verev.setAttribute("class", "vererv")
    xaxayin[0].append(verev)

    var brldiv = document.createElement("div")
    brldiv.setAttribute("class", "brldiv")
    verev.append(brldiv)

    var brlplus = document.createElement("img")
    brlplus.setAttribute("src", "img/plus.png")
    brlplus.setAttribute("class", "plus")
    brldiv.append(brlplus)


    var brl = document.createElement("img")
    brl.setAttribute("src", "img/brliand.png")
    brl.setAttribute("class", "brl")
    brl.setAttribute("id", "adamans")
    brldiv.append(brl)

    var brlp = document.createElement("p")
    brlp.setAttribute("class", "brlp")
    brlp.innerHTML = adamand
    brldiv.append(brlp)

    var levdiv = document.createElement("div")
    levdiv.setAttribute("class", "levdiv")
    verev.append(levdiv)


    var levin = document.createElement("h1")
    levin.setAttribute("class", "levin")
    levdiv.append(levin)
    if (fla == 0) {
        levin.innerHTML = tarhy[4]
        levin.style.fontSize = "17px"
    }
    else {
        levin.innerHTML = tarru[4]


    }
    var levp = document.createElement("p")
    levp.setAttribute("class", "levp")
    levp.innerHTML = lev
    levdiv.append(levp)
    levp.setAttribute("align", "center")


    var poxdiv = document.createElement("div")
    poxdiv.setAttribute("class", "poxdiv")
    verev.append(poxdiv)

    var poxp = document.createElement("p")
    poxp.setAttribute("class", "poxp")
    poxp.innerHTML = para
    poxdiv.append(poxp)



    var pox = document.createElement("img")
    pox.setAttribute("src", "img/pox.png")
    pox.setAttribute("class", "pox")
    poxdiv.append(pox)
    var poxplus = document.createElement("img")
    poxplus.setAttribute("src", "img/poxplus.png")
    poxplus.setAttribute("class", "poxplus")
    poxdiv.append(poxplus)


}



function futer(params) {
    var xaxayin = document.getElementsByClassName("xaxayin")
    var futerdiv = document.createElement("div")
    futerdiv.setAttribute("class", "futerdiv")
    xaxayin[0].append(futerdiv)



    var zvuk = document.createElement('img')
    futerdiv.appendChild(zvuk)
    zvuk.setAttribute("class", "zvuk")
    zvuk.src = "img/zvuk.png"

    var dom = document.createElement('img')
    futerdiv.appendChild(dom)
    dom.setAttribute("class", "tun")
    dom.src = "img/home.png"
dom.addEventListener("click",doms)

    var ogndiv = document.createElement('div')
    futerdiv.appendChild(ogndiv)
    ogndiv.setAttribute("class", "ogndiv")


    var ogn1 = document.createElement('img')
    ogndiv.appendChild(ogn1)
    ogn1.setAttribute("class", "ogn1")
    ogn1.src = "img/ogn.png"

         ogn1.onclick = function (params) {
            var table = document.getElementsByClassName("table")
          
                if (para>=60) {
                    if (click2==0) {
                    para = Math.floor(para) - 60
                    par = para
                    localStorage.setItem("para", par)
                
                
                
                
                    var pb = document.getElementsByClassName('poxp')
                    pb[0].innerHTML = para
                
                        if (lev==0) {
                      // cl =  1
                        //    sxm = 1
                        //  localStorage.setItem("click", sxm)   
                            table[0].style.backgroundImage = "url(img/klor/1.png)"
                                table[0].setAttribute("class",'klor')
                             
                                  
                        } 
                else if (lev==1) {
                
                    table[0].style.backgroundImage = "url(img/klor/7.png)"
                        table[0].setAttribute("class",'klor')
                     
                          
                } 
                else if (lev==2) {
                
                    table[0].style.backgroundImage = "url(img/klor/5.png)"
                        table[0].setAttribute("class",'klor')
                     
                          
                } 
                else if (lev==3) {
                
                    table[0].style.backgroundImage = "url(img/klor/4.png)"
                        table[0].setAttribute("class",'klor')
                     
                          
                } 
                else if (lev==4) {
                
                    table[0].style.backgroundImage = "url(img/klor/6.png)"
                        table[0].setAttribute("class",'klor')
                     
                          
                } 
                else if (lev==5) {
                
                    table[0].style.backgroundImage = "url(img/klor/9.png)"
                        table[0].setAttribute("class",'klor')
                     
                          
                } 
                else if (lev==6) {
                
                    table[0].style.backgroundImage = "url(img/klor/8.png)"
                        table[0].setAttribute("class",'klor')
                     
                          
                } 
                else if (lev==7) {
                
                    table[0].style.backgroundImage = "url(img/klor/2.png)"
                        table[0].setAttribute("class",'klor')
                     
                          
                } 
                else if (lev==8) {
                
                    table[0].style.backgroundImage = "url(img/klor/10.png)"
                        table[0].setAttribute("class",'klor')
                     
                          
                } 
                else if (lev==9) {
                
                    table[0].style.backgroundImage = "url(img/klor/3.png)"
                        table[0].setAttribute("class",'klor')
                     
                          
                } 
                else if (lev==10) {
                
                    table[0].style.backgroundImage = "url(img/klor/11.png)"
                        table[0].setAttribute("class",'klor')
                     
                          
                } 
        
                click2 = 1
                cls = 1
                 localStorage.setItem("cl1", cls)
            }
            }
         


         }


    var ogn2 = document.createElement('img')
    ogndiv.appendChild(ogn2)
    ogn2.setAttribute("class", "sos")
    ogn2.src = "img/sos.png"
ogn2.onclick = function (params) {
    
if (click1==0) {
    
if (para>=90) {
    var table = document.getElementsByTagName("table")


                    
para = Math.floor(para) - 90
par = para
localStorage.setItem("para", par)

var pb = document.getElementsByClassName('poxp')
pb[0].innerHTML = para
   

if (lev == 0) {

   
    table[0].setAttribute("class", "comp")
    paraadam()

    table[0].style.backgroundImage = "url(img/compl/1.png)"
    gamelev = 1
    lev = 1
    localStorage.setItem("lev", gamelev)


    setTimeout(() => {
        l1()
    }, 2000);

}

else if (lev == 1) {
    
    table[0].setAttribute("class", "comp")
        paraadam()

        table[0].style.backgroundImage = "url(img/compl/7.png)"
        gamelev = 2
        lev = 2
        localStorage.setItem("lev", gamelev)


        setTimeout(() => {
            l3()
        }, 2000);

}
   

else if (lev == 2) {

    table[0].setAttribute("class", "comp")
        paraadam()

        table[0].style.backgroundImage = "url(img/compl/5.png)"
        gamelev = 3
        lev = 3
        localStorage.setItem("lev", gamelev)


        setTimeout(() => {
            l4()
        }, 2000);
    }
 
else if (lev == 3) {
   
    table[0].setAttribute("class", "comp")
        paraadam()

        table[0].style.backgroundImage = "url(img/compl/4.png)"
        gamelev = 4
        lev = 4
        localStorage.setItem("lev", gamelev)


        setTimeout(() => {
            l5()
        }, 2000);
    }
  

else if (lev == 4) {

    table[0].setAttribute("class", "comp")
        paraadam()

        table[0].style.backgroundImage = "url(img/compl/6.png)"
        gamelev = 5
        lev = 5
        localStorage.setItem("lev", gamelev)


        setTimeout(() => {
            l6()
        }, 2000);

    }
  

else if (lev == 5) {
   
    table[0].setAttribute("class", "comp")
        paraadam()

        table[0].style.backgroundImage = "url(img/compl/9.png)"
        gamelev = 6
        lev = 6
        localStorage.setItem("lev", gamelev)


        setTimeout(() => {
            l7()
        }, 2000);

    }

else if (lev == 6) {
   
    table[0].setAttribute("class", "comp")
        paraadam()

        table[0].style.backgroundImage = "url(img/compl/8.png)"
        gamelev = 7
        lev = 7
        localStorage.setItem("lev", gamelev)


        setTimeout(() => {
            l8()
        }, 2000);

    }

else if (lev == 7) {

    table[0].setAttribute("class", "comp")

        paraadam()
        table[0].style.backgroundImage = "url(img/compl/2.png)"
        gamelev = 8
        lev = 8
        localStorage.setItem("lev", gamelev)


        setTimeout(() => {
            l9()
        }, 2000);

    }


else if (lev == 8) {
    
    table[0].setAttribute("class", "comp")
        paraadam()

        table[0].style.backgroundImage = "url(img/compl/10.png)"
        gamelev = 9
        lev = 9
        localStorage.setItem("lev", gamelev)


        setTimeout(() => {
            l10()
        }, 2000);

    }

else if (lev == 9) {

    table[0].setAttribute("class", "comp")
        paraadam()

        table[0].style.backgroundImage = "url(img/compl/3.png)"
        gamelev = 10
        lev = 10
        localStorage.setItem("lev", gamelev)


        setTimeout(() => {
            l11()
        }, 2000);

}


else if (lev == 10) {

    table[0].setAttribute("class", "comp")
        paraadam()

        table[0].style.backgroundImage = "url(img/compl/11.png)"
        gamelev = 11
        lev = 11
        localStorage.setItem("lev", gamelev)


        // setTimeout(() => {
        //     l11()
        // }, 2000);

}


click1 = 1
}

}

}

//innerHeight: 736
//innerWidth: 414\


       
     


}


function brlilus(params) {
    


}
function liver(params) {
    var levon = document.getElementsByClassName("leveldiv")
    var verev = document.createElement("div")
    verev.setAttribute("class", "vererv")
    levon[0].append(verev)

    var brldiv = document.createElement("div")
    brldiv.setAttribute("class", "brldiv")
    verev.append(brldiv)

    var brlplus = document.createElement("img")
    brlplus.setAttribute("src", "img/plus.png")
    brlplus.setAttribute("class", "plus")
    brldiv.append(brlplus)


    var brl = document.createElement("img")
    brl.setAttribute("src", "img/brliand.png")
    brl.setAttribute("class", "brl")
    brl.setAttribute("id", "adamans")
    brldiv.append(brl)

    var brlp = document.createElement("p")
    brlp.setAttribute("class", "brlp")
    brlp.innerHTML = adamand
    brldiv.append(brlp)

    var h1 = document.createElement("div")
    verev.append(h1)
    h1.setAttribute("class", "hlev")
    var h1p = document.createElement("h1")
    h1.append(h1p)
    h1p.setAttribute("class", "h1p")
    if (fla == 0) {
        h1p.innerHTML = tarhy[4]
        h1p.style.fontSize = "17px"
    }
    else {
        h1p.innerHTML = tarru[4]
    }



    var poxdiv = document.createElement("div")
    poxdiv.setAttribute("class", "poxdiv")
    verev.append(poxdiv)

    var poxp = document.createElement("p")
    poxp.setAttribute("class", "poxp")
    poxp.innerHTML = para
    poxdiv.append(poxp)



    var pox = document.createElement("img")
    pox.setAttribute("src", "img/pox.png")
    pox.setAttribute("class", "pox")
    poxdiv.append(pox)
    var poxplus = document.createElement("img")
    poxplus.setAttribute("src", "img/poxplus.png")
    poxplus.setAttribute("class", "poxplus")
    poxdiv.append(poxplus)

}

function newgame(params) {
    
poxvox = 1
    document.body.style.backgroundImage = "url(img/backa.jpg)"
        click2 =  0
        cls = 0
      localStorage.setItem("cl1", cls) 
      click1 = 0
        game = 1
        localStorage.setItem("game", game)
    
        document.body.removeChild(opshi[0]) //են առաջի էջը կորավ 
        var leveldiv = document.createElement("div")
        document.body.append(leveldiv)
        leveldiv.setAttribute("class", "leveldiv")
    
        liver()
    
        var levelner = document.createElement("div")
        leveldiv.append(levelner)
        levelner.setAttribute("class", "levelner")
    
    
        for (let i = 0; i <= 10; i++) {
            var level = document.createElement("div")
            levelner.append(level)
            level.setAttribute("id", i)
    
            level.setAttribute("class", "levels")
    
    
    
            var p = document.createElement("p")
            p.setAttribute("class", "pner")
            p.innerHTML = i
            level.append(p)
        }
    
        var levs = document.getElementsByClassName("levels")
    
    
        if (lev == 0) {
            levs[0].style.backgroundImage = "url(img/l6.png)"
            for (let i = 1; i < levs.length; i++) {
                levs[i].style.backgroundImage = "url(img/l7.png)"
                levs[i].style.borderColor = "white"
                levs[i].children[0].style.color = "gray"
            }
        }
        else {
            levs[0].style.backgroundImage = "url(img/l6.png)"
            for (let x = 1; x <= 10; x++) {
    
                if (lev == x) {
    
                    levs[x].style.backgroundImage = "url(img/l6.png)"
                    for (let l = 0; l < levs.length; l++) {
                        levs[x - l].style.backgroundImage = "url(img/l6.png)"
    
                    }
    
                    for (let i = x + 1; i < levs.length; i++) {
                        levs[i].style.backgroundImage = "url(img/l7.png)"
                        levs[i].style.borderColor = "white"
                    }
                }
            }
    
        }
    
    
    
    
    
        levs[0].addEventListener("click", l0)
        levs[1].addEventListener("click", l1)
        levs[2].addEventListener("click", l3)
        levs[3].addEventListener("click", l4)
        levs[4].addEventListener("click", l5)
        levs[5].addEventListener("click", l6)
        levs[6].addEventListener("click", l7)
        levs[7].addEventListener("click", l8)
        levs[8].addEventListener("click", l9)
        levs[9].addEventListener("click", l10)
        levs[10].addEventListener("click", l11)
        var slak = document.createElement("div")
        levelner.append(slak)
        slak.setAttribute("class", "slak")
  
        var slakimg = document.createElement("img")
        slakimg.setAttribute("class", "slakimg")
        slak.append(slakimg)
        slakimg.src = "img/aj.png"
        slakimg.addEventListener("click",aj)
        var futer = document.createElement("div")
        leveldiv.append(futer)
        futer.setAttribute("class", "futer")
        var zv = document.createElement("img")
        futer.append(zv)
        zv.setAttribute("class", "zvuk")
        zv.src = "img/zvuk.png"
    
        var tun = document.createElement("img")
        futer.append(tun)
        tun.setAttribute("class", "tun")
        tun.src = "img/home.png"
        tun.addEventListener("click", doms)
    
    
    
        var harcs = document.createElement("img")
        futer.append(harcs)
        harcs.setAttribute("class", "harc")
        harcs.src = "img/harc.png"
    
    
}
function levmyus(params) {
   

             
    document.body.style.backgroundImage = "url(img/backa.jpg)"
            game = 1
            localStorage.setItem("game", game)
    
            document.body.removeChild(opshi[0]) //են առաջի էջը կորավ 
            var leveldiv = document.createElement("div")
            document.body.append(leveldiv)
            leveldiv.setAttribute("class", "leveldiv")
            liver()
         
    
    
    
            var levelner = document.createElement("div")
            leveldiv.append(levelner)
            levelner.setAttribute("class", "levelner")
    
            if (ej==1) {
                
            for (let i = 0; i <= 10; i++) {
                var level = document.createElement("div")
                levelner.append(level)
                level.setAttribute("id", i)
    
    
                level.setAttribute("class", "levels")
    
                var p = document.createElement("p")
                p.setAttribute("class", "pner")
                p.innerHTML = i
                level.append(p)

                if (lev<i) {
     
        
                    level.style.backgroundImage = "url(img/l7.png)"
                    level.style.borderColor = "white"
                    p.style.color = "gray" 
                }
                else if (lev==i) {
                      
                    level.style.backgroundImage = "url(img/l6.png)"
                    level.style.borderColor = "aqua"
                    p.style.color = "white" 
                }
                else if (lev>i) {
                    level.style.backgroundImage = "url(img/l2.png)"
                    level.style.borderColor = "white"
                    p.style.color = "black" 
                }

            }
    
            var levs = document.getElementsByClassName("levels")
    
          
          
    
    
            levs[0].addEventListener("click", l0)
            levs[1].addEventListener("click", l1)
            levs[2].addEventListener("click", l3)
            levs[3].addEventListener("click", l4)
            levs[4].addEventListener("click", l5)
            levs[5].addEventListener("click", l6)
            levs[6].addEventListener("click", l7)
            levs[7].addEventListener("click", l8)
            levs[8].addEventListener("click", l9)
            levs[9].addEventListener("click", l10)
            levs[10].addEventListener("click", l11)
    
            }  
            
            else if (ej==2) {
            
                var slakdzax = document.createElement("div")
                levelner.append(slakdzax)
                slakdzax.setAttribute("class", "slak")
             
                var slakdaximg = document.createElement("img")
                slakdaximg.setAttribute("class", "slakimg")
                slakdzax.append(slakdaximg)
                slakdaximg.src = "img/dzax.png"
                slakdaximg.addEventListener("click",dzax)
    
                for (let i = 11; i <= 20; i++) {
                    var level = document.createElement("div")
                    levelner.append(level)
                    level.setAttribute("id", i)
        
        
                    level.setAttribute("class", "levels")
        
                    var p = document.createElement("p")
                    p.setAttribute("class", "pner")
                    p.innerHTML = i
                    level.append(p)
                    
                if (lev<i) {
     
        
                    level.style.backgroundImage = "url(img/l7.png)"
                    level.style.borderColor = "white"
                    p.style.color = "gray" 
                }
                else if (lev==i) {
                      
                    level.style.backgroundImage = "url(img/l6.png)"
                    level.style.borderColor = "aqua"
                    p.style.color = "white" 
                }
                else if (lev>i) {
                    level.style.backgroundImage = "url(img/l2.png)"
                    level.style.borderColor = "white"
                    p.style.color = "black" 
                }
                }
        
        
        }
        
        var slak = document.createElement("div")
        levelner.append(slak)
        slak.setAttribute("class", "slak")
        // slak.addEventListener("click",aj)
        var slakimg = document.createElement("img")
        slakimg.setAttribute("class", "slakimg")
        slak.append(slakimg)
        slakimg.src = "img/aj.png"
        slakimg.addEventListener("click",aj)
        var futer = document.createElement("div")
        leveldiv.append(futer)
        futer.setAttribute("class", "futer")
        var zv = document.createElement("img")
        futer.append(zv)
        zv.setAttribute("class", "zvuk")
        zv.src = "img/zvuk.png"
    
        var tun = document.createElement("img")
        futer.append(tun)
        tun.setAttribute("class", "tun")
        tun.src = "img/home.png"
        tun.addEventListener("click", doms)
    
    
    
        var harcs = document.createElement("img")
        futer.append(harcs)
        harcs.setAttribute("class", "harc")
        harcs.src = "img/harc.png"
    
     
        
    }


function aj(params) {
 
    if (poxvox==1&&ej==1) {
        chancac(1,11,21,"+")
        
    }
    else if (poxvox==2) {
        chancac(2,21,31,"+")
    }
    else if (poxvox==3) {
        chancac(3,31,41,"+")
    }
    else if (poxvox==1) {
        chancac(1,11,21,"+")
    }
    else if (poxvox==2) {
        chancac(2,21,31,"+")
    }  
     else if (poxvox==3) {
        chancac(3,31,41,"+")
    }
    else if (poxvox==4) {
        chancac(4,41,51,"+")
    }
    else if (poxvox==5) {
        chancac(5,51,61,"+")
    }

}

function chancac(par1,skiz,verj,nsh) {
        var levelner = document.getElementsByClassName("levelner")
    var ldiv = document.getElementsByClassName("levels")
    var slak =   document.getElementsByClassName("slak")
    if (nsh == "+") {
        poxvox = par1 + 1  
    }
    else{
        poxvox = par1 - 1  
    }
 
    if (par1==1) {

        for (let i = 0; i < 11; i++) {
            levelner[0].removeChild(ldiv[0])
            
        }
        levelner[0].removeChild(slak[0])

    }
else {
    for (let i = 0; i < 10; i++) {
        levelner[0].removeChild(ldiv[0])
        
    }
    levelner[0].removeChild(slak[0])
    levelner[0].removeChild(slak[0])


}
if (poxvox!=1) {
    var slakhet = document.createElement("div")
    levelner[0].append(slakhet)
    slakhet.setAttribute("class", "slak")
    
    var slakimghet = document.createElement("img")
    slakimghet.setAttribute("class", "slakimg")
    slakimghet.addEventListener("click",dzax)
    slakhet.append(slakimghet)
    slakimghet.src = "img/dzax.png"
      
}


for (let x = skiz; x < verj; x++) {
    
    

    var level = document.createElement("div")
    levelner[0].append(level)
    level.setAttribute("id", x)

    level.setAttribute("class", "levels")



    var p = document.createElement("p")
    p.setAttribute("class", "pner")
    p.innerHTML = x
    level.append(p)
    if (lev<x) {
     
        
        level.style.backgroundImage = "url(img/l7.png)"
        level.style.borderColor = "white"
        p.style.color = "gray" 
    }
    else if (lev==x) {
          
        level.style.backgroundImage = "url(img/l6.png)"
        level.style.borderColor = "aqua"
        p.style.color = "white" 
    }
    else if (lev>x) {
        level.style.backgroundImage = "url(img/l2.png)"
        level.style.borderColor = "white"
        p.style.color = "black" 
    }
 
}
var levs = document.getElementsByClassName("levels")
if (ej==1&&poxvox==1) {
    levs[0].addEventListener("click", l0)
levs[1].addEventListener("click", l1)
levs[2].addEventListener("click", l3)
levs[3].addEventListener("click", l4)
levs[4].addEventListener("click", l5)
levs[5].addEventListener("click", l6)
levs[6].addEventListener("click", l7)
levs[7].addEventListener("click", l8)
levs[8].addEventListener("click", l9)
levs[9].addEventListener("click", l10)
levs[10].addEventListener("click", l11)
}



var slak = document.createElement("div")
levelner[0].append(slak)
slak.setAttribute("class", "slak")

var slakimg = document.createElement("img")
slakimg.setAttribute("class", "slakimg")
slak.append(slakimg)
slakimg.src = "img/aj.png"
slakimg.addEventListener("click",aj)
}







function dzax(params) {
    if (poxvox==2) {
        chancac(2,0,11,"-")
    }
  else  if (poxvox==3) {
        chancac(3,11,21,"-")
    }

    else if (poxvox==2) {
        chancac(2,0,11,"-")
    }
    else if (poxvox==3) {
        chancac(3,11,21,"-")
    }
    else if (poxvox==4) {
        chancac(4,21,31,"-")
    }
    else if (poxvox==5) {
        chancac(5,31,41,"-")
    }
    else if (poxvox==6) {
        chancac(6,41,51,"-")
    }

}


