// PART 1
let stopButton = document.getElementById("stopButton");
let slowButton = document.getElementById("slowButton");
let goButton = document.getElementById("goButton");

let stopLight = document.getElementById("stopLight");
let slowLight = document.getElementById("slowLight");
let goLight = document.getElementById("goLight");



stopButton.addEventListener('click', function ()  {
  stopLight.classList.toggle("stop")
});

slowButton.addEventListener('click', function ()  {
  slowLight.classList.toggle("slow")
});

goButton.addEventListener('click', function ()  {
  goLight.classList.toggle("go")
});


// PART 2

function handelMouseEntered(event){
  console.log(`"Entered ${event.target.textContent} button"`);
}
stopButton.addEventListener('mouseenter', handelMouseEntered);
slowButton.addEventListener('mouseenter',handelMouseEntered);
goButton.addEventListener('mouseleave', handelMouseEntered);

function handelMouseLeft(event){
  console.log(`"Left ${event.target.textContent} button"`);
}
stopButton.addEventListener('mouseleave',handelMouseLeft);
slowButton.addEventListener('mouseleave', handelMouseLeft);
goButton.addEventListener('mouseenter', handelMouseLeft);



// BONUS

let controls = document.getElementById("controls");

document.body.addEventListener('click', function (event){
  if(event.target === stopButton){
    if(stopLight.classList.contains('stop')){
      console.log(`${event.target.textContent} bulb on`);
    }else{
      console.log(`${event.target.textContent}bulb off`);
    }
  }else if (event.target === slowButton){
    if(slowLight.classList.contains("slow")){
      console.log(`${event.target.textContent} bulb on`);
    }else{
      console.log(`${event.target.textContent}bulb off`);
    }
  }else if (event.target === goButton){
    if(goLight.classList.contains("go")){
      console.log(`${event.target.textContent} bulb on`);
    }else{
      console.log(`${event.target.textContent}bulb off`);
    }
  }
});