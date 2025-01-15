// const buttons = document.querySelectorAll(".bt2");
// const background = document.querySelector(".image");
// const img = './image/marval3.jpg';

// buttons.forEach(button => {
//   button.addEventListener("mouseover", function() {
//     background.style.backgroundImage = `url('${img}')`;
//   });
// });
const buttons = document.querySelectorAll(".bt2"); 
const background = document.querySelector(".image");
const originalBg = background.style.backgroundImage;
 buttons.forEach(button => { button.addEventListener("mouseover", function () {
     background.style.backgroundColor = 'white';
     background.style.backgroundImage = 'none'; 
    }); 
     button.addEventListener("mouseout", function () { 
        background.style.backgroundColor = 'initial';
        background.style.backgroundImage = originalBg;
     });
     });