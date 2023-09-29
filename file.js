// var header = document.getElementById("header");
// var namee = document.getElementById("name");
// var box = document.getElementById("box");
// var job = document.getElementById("job");
// var des = document.getElementById("des");
// var icons = document.getElementsByClassName("icns");


// var onresize = function() {
//     if(window.screen.width > 1100){ 
//         namee.style.fontSize = "7.5rem";
//         namee.style.lineHeight = "6rem";
//         job.style.fontSize = "4rem";

//         // header.style.marginTop = "5%";
//         // document.body.style.backgroundPositionX= "initial";
//         // header.style.backgroundColor = "initial";
//     }
//     else if(window.screen.width > 920)
//     {
//         namee.style.fontSize = "6rem";
//         namee.style.lineHeight = "5rem";
//         job.style.fontSize = "3rem";

//         header.style.backgroundColor = "initial";
//         header.style.marginLeft = "40%";
//         document.body.style.backgroundPositionX= "-100px";
//         // header.style.marginTop = "10%";
//         // document.body.style.backgroundPositionX= "-150px";
//         // header.style.backgroundColor = "rgba(255,255,255,0.7)";
//     }
//     // else
//     else if(window.screen.width > 800)
//     {
//         header.style.backgroundColor = "rgba(255,255,255,0.7)";
//         header.style.marginLeft = "25%";
//         document.body.style.backgroundPositionX= "-200px";

//         namee.style.fontSize = "6rem";
//         namee.style.lineHeight = "5rem";
//         job.style.fontSize = "3rem";

//         Array.from(icons).forEach(function(icons) {
//             icons.style.height = "30px"
//         });
        
//         des.fontSize = "1.2rem";

//         header.style.marginTop = "5%";  
//         header.style.marginLeft = "25%";  
//     }
//     else{
//         header.style.backgroundColor = "rgba(255,255,255,0.7)";
//         header.style.marginLeft = "25%";
//         document.body.style.backgroundPositionX = "10%";

//         namee.style.fontSize = "4rem";
//         namee.style.lineHeight = "3rem";
//         job.style.fontSize = "2rem";

//         Array.from(icons).forEach(function(icons) {
//             icons.style.height = "20px"
//         });
        
//         des.fontSize = "1rem";

//         header.style.marginTop = "100%";  
//         header.style.marginLeft = "40%";  


//         // header.style.backgroundColor = "rgba(255,255,255,0.7)";
              
//         // document.body.style.backgroundPositionX= "-200px";
//     }
// }

// onresize();
// window.addEventListener("resize", onresize);

$(function () {
    $(document).scroll(function(){
      var $nav = $("#mainNavbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});




