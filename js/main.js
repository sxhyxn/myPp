/* prevent */
$(function(){
    $('a:not(.blank)').on("click",function(e){
        e.preventDefault();
    });
 });

/* cursor */
const cursor = document.querySelector("#cursor")

let mouse = { x: -100, y: -100 }
let pos = { x: 0, y: 0 }
const speed = 0.5

const updateCoordinates = (e) => {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

window.addEventListener("mousemove", updateCoordinates)

const updatePosition = () => {
  pos.x += (mouse.x - pos.x) * speed
  pos.y += (mouse.y - pos.y) * speed
  cursor.style.transform =
    "translate3d(" + pos.x + "px ," + pos.y + "px, 0)"
}

const loop = () => {
  updatePosition()
  requestAnimationFrame(loop)
}

requestAnimationFrame(loop)

const cursorModifiers = document.querySelectorAll("[cursor-class]")

cursorModifiers.forEach((cursorModifier) => {
  cursorModifier.addEventListener("mouseenter", function () {
    let attribute = this.getAttribute("cursor-class")
    cursor.classList.add(attribute)
  })
  
  cursorModifier.addEventListener("mouseleave", function () {
    let attribute = this.getAttribute("cursor-class")
    cursor.classList.remove(attribute)
  })
})

    
/* notice */
let currentCookie = document.cookie;
let cookieCheck = currentCookie.indexOf("hyun");
console.log(cookieCheck);

if (cookieCheck > -1) {
  document.querySelector(".notice").style.display = "none";
} else {
  document.querySelector(".notice").style.display = "block";
}

document.querySelector(".close").addEventListener("click", function () {
  console.log(this);
  const isCheckboxChecked = document.querySelector("#cb").checked;
  if (isCheckboxChecked) {
    let date = new Date();
    date.setDate(date.getDate() + 1);
    let setCookie = "CookieName=hyun;";
    setCookie += "expires=" + date.toUTCString();

    document.cookie = setCookie;
  }
  this.parentElement.style.display = "none";
});




/* loading ani */

const loadingAni = gsap.timeline({
    onComplete: function () {
        introAni.play();
    }
})
loadingAni.addLabel('a')
    .to('.loading .list1', {
        y: '-140vw',
        duration: 3
    }, 'a')
    .to('.loading .list2', {
        y: '-480vw',
        duration: 2
    }, 'a')
    .to('.loading .list3', {
        y: '-400vw',
        duration: 3
    }, 'a')
    .to('.loading .list4', {
        y: '-240vw',
        duration: 4
    }, 'a')
    .to('.loading', {
        yPercent: -100,
        display: 'none'
    }, 'a+=5')




/* text-motion */

gsap.set(".txt-motion", {
    yPercent: 110,
    transformStyle: "preserve-3d",
    opacity: 0,
    rotationX: -45,
    transformOrigin: "0% 50% -100%",
});

const introAni = gsap.to('.intro .txt-motion', {
    transformStyle: "preserve-3d",
    opacity: 1,
    rotationX: 0,
    transformOrigin: "50% 50%",
    yPercent: 0,
    duration: 1.2,
    stagger: 0.1,
    paused: true
});

gsap.to("#notice", {opacity: 1, duration: 0.5, delay: 5.5});
gsap.to("#clock", {opacity: 1, duration: 0.5, delay: 5.5});




/* clock */
const date = document.querySelector('.date');
const time = document.querySelector('.time');
	
function setDate() {
	const now = new Date();
	const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
	const day = dayNames[now.getDay()];
	
	let second = now.getSeconds();
	let minute = now.getMinutes();
	let hour = now.getHours();		
	let month = now.getMonth() + 1;
	let today = now.getDate();
	
	hour = hour < 10 ? '0' + hour : hour;
	today = today < 10 ? '0' + today : today;
	month = month < 10 ? '0' + month : month;
	minute = minute < 10 ? '0' + minute : minute;
	second = second < 10 ? '0' + second : second;		
			
	date.innerText = now.getFullYear()+ "-" + month + "-" + today + " " + day;
	time.innerText = hour + ":" + minute + ":" + second;
	 
}
setInterval(setDate, 1000);
setDate();


/* me circle */

const circle = document.querySelector(".circle");
const text = circle.innerHTML; // Note I am being lazy here and assuming the string has no unwanted whitespace
circle.innerHTML = "";
circle.style.setProperty("--numchs", text.length);
for (let i = 0; i < text.length; i++) {
    circle.innerHTML =
        circle.innerHTML +
        '<div class="char" style="--char-index: ' +
        i +
        ';">' +
        text.charAt(i) +
        "</div>";
}

const circle2 = document.querySelector(".circle2");
const text2 = circle2.innerHTML; // Note I am being lazy here and assuming the string has no unwanted whitespace
circle2.innerHTML = "";
circle2.style.setProperty("--numchs", text2.length);
for (let i = 0; i < text2.length; i++) {
    circle2.innerHTML =
        circle2.innerHTML +
        '<div class="char" style="--char-index: ' +
        i +
        ';">' +
        text2.charAt(i) +
        "</div>";
}


/* layer popup */
$('.skills .box').click(function(event){
    event.preventDefault();
    $('#layer1').fadeIn();
    pieChart()
});
$('.activity .box').click(function(event){
    event.preventDefault();
    $('#layer2').fadeIn();
});
$('.personal .box').click(function(event){
    event.preventDefault();
    $('#layer3').fadeIn();
});
$('.love .box').click(function(event){
    event.preventDefault();
    $('#layer4').fadeIn();
});



$('#layer1 .close').click(function(event){
    event.preventDefault();
    $('#layer1').fadeOut();
});
$('#layer2 .close').click(function(event){
    event.preventDefault();
    $('#layer2').fadeOut();
});
$('#layer3 .close').click(function(event){
    event.preventDefault();
    $('#layer3').fadeOut();
});
$('#layer4 .close').click(function(event){
    event.preventDefault();
    $('#layer4').fadeOut();
});



//skills
function pieChart(){
   $('.chart').easyPieChart({
    //your options goes here
    barColor:'#17d3e6',
    scaleColor:false,
    trackColor:'#303030',
    lineWidth:15,
    size:130,
    animate:2000,
    lineCap:'butt'
    });
}


//activity
let button= $('.nextBtn');
let contentWrap= $('.contentWrap');
let imgArr= $('img');
let title = $('h1');
let pageNum = 0;
let totalNum= 0;


totalNum = contentWrap.length; 
//length => contentWrap의 총갯수를알수 있음
//console.log(totalNum);//3

pageSetFunc();


button.click(function(){
    nextFunc();
});



function nextFunc(){//012012
    if(pageNum<totalNum - 1){
            pageNum ++;
    }else{
            pageNum = 0;
    }
    pageSetFunc();
}



function pageSetFunc(){
    imgArr.removeClass('active');
    contentWrap.eq(pageNum).find('img').addClass('active');
}


//love
let rotationX = 0;
let rotationY = 0;
let cube = document.querySelector('.box-area');
let six = document.querySelector('.box-bottom video');
let three = document.querySelector('.box-back video');
let four = document.querySelector('.box-left video');


cube.style.transform = `rotateX(0deg) rotateY(0deg)`;
four.style.transform=`rotateY(180deg)`;
six.style.transform=`rotateX(180deg)`;

function front(){
    cube.style.transform = `rotateX(0deg) rotateY(0deg)`;
}

function rotateXAxis(n){
    rotationX += (90*n);
    cube.style.transform = `rotateX(${rotationX}deg) rotateY(0deg)`;
    three.style.transform = `rotateX(180deg)`;
}

function rotateYAxis(n){
    rotationY += (90*n);
    cube.style.transform = `rotateX(0deg) rotateY(${rotationY}deg)`;
    three.style.transform = `rotateY(180deg)`;
}




/* other */


//tab
function openpj(evt,pjName){
    let tabcontent=document.getElementsByClassName("contents")
    console.log(tabcontent)//배열
    for(let i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display="none";
    }

    let tab_mn=document.getElementsByClassName("tab_mn")
    for(let i=0; i<tab_mn.length; i++){
        tab_mn[i].classList.remove('active');
    }
    console.log(evt.currentTarget);
    evt.currentTarget.classList.add("active");
    //currentTarget랑 this는 거의 비슷한 뜻
    document.getElementById(pjName).style.display="flex";
}

document.getElementById('defaultOpen').click();

//video
let video = Array.from(document.querySelectorAll('.bg_video'));

video.forEach((item) => {
    let videoItem = item.querySelector('video');

    item.addEventListener('mouseenter',()=>{
        item.classList.add('active');
        !videoItem.play() ? videoItem.play() : '';
    });

    item.addEventListener('mouseleave',()=>{
        item.classList.remove('active');
        !videoItem.pause() ? videoItem.pause() : '';
    });
})
