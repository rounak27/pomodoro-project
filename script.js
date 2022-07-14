//Develop  tab functionality
//Timer to develop
const pomodoroTab=document.getElementById("pomodoro");
const shortbreaktab=document.getElementById("shortbreak");
const longbreaktab=document.getElementById("longbreak");
const pomodoroTab_content=document.getElementById("Pomodoro-content");
const shortbreakTab_content=document.getElementById("ShortBreaK-content");
const longbreakTab_content=document.getElementById("LongBreak-content");
const bo=document.querySelector("body")
const pomodorobut=document.getElementById('pomodorobut');
const shortbut=document.getElementById('shortbut');
const longbut=document.getElementById('longbut');

pomodoroTab.addEventListener('click',function(){
    //console.log('pomodoro.clicked')
    shortbreaktab.classList.remove("active");
    longbreaktab.classList.remove("active");
    pomodoroTab.classList.add("active");
    pomodoroTab_content.classList.add("active");
    shortbreakTab_content.classList.remove("active");
    longbreakTab_content.classList.remove("active");
    bo.classList.remove('blue');
    bo.classList.remove('purple');
    bo.classList.add('red');
});
shortbreaktab.addEventListener('click',function(){
    //console.log('shortbreak.clicked')
    shortbreaktab.classList.add("active");
    longbreaktab.classList.remove("active");
    pomodoroTab.classList.remove("active");
    pomodoroTab_content.classList.remove("active");
    shortbreakTab_content.classList.add("active");
    longbreakTab_content.classList.remove("active");
    bo.classList.add('blue');
    bo.classList.remove('purple');
    bo.classList.remove('red');

});
longbreaktab.addEventListener('click',function(){
    //console.log('longbreak.clicked')
    shortbreaktab.classList.remove("active");
    longbreaktab.classList.add("active");
    pomodoroTab.classList.remove("active");
    pomodoroTab_content.classList.remove("active");
    shortbreakTab_content.classList.remove("active");
    longbreakTab_content.classList.add("active");
    bo.classList.add('purple')
    bo.classList.remove('red');
    bo.classList.remove('blue');
});

function timer(seconds){
const now=Date.now();
const then= now + (seconds*1000);
const timerinterval =setInterval(function(){
  const secondsleft= Math.floor((then -Date.now())/1000);
  displaytime(secondsleft,pomodorotime);
 // 
  if (secondsleft<=-0){
    clearInterval(timerinterval);
    return;
}
},1000)
};
function displaytime(seconds,element){
    const minute=Math.floor(seconds/60);
    const second=seconds%60;
    console.log({minute,second});
    element.innerText=minute+':'+second;
}
const pomodorotime=document.getElementById("pomodorotime");
const shortbreaktime=document.getElementById("shortbreaktime");

pomodorobut.addEventListener('click',function(){
    const pomodorototaltime =1500;
    timer(pomodorototaltime);
})
shortbut.addEventListener('click',function(){
    const shorttotaltime =300;
    timer(shorttotaltime);
})
//console.log(secondsleft);