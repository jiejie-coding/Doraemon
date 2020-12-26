import string from './css.js'
let n = 0;
let t = 10;
let demo = document.querySelector('.demo');
let demo2 = document.querySelector('.demo2');
let show = document.querySelector('.show');

let fn = ()=>{
  n += 1;
  demo.innerHTML = string.substr(0,n);
  demo2.innerText = string.substr(0,n);

  show.scrollTo(0, 99999);
  if(n == string.length) {
    window.clearInterval(id);
  }
}
let id = setInterval(()=>{
  fn()
},t)

let pause = document.querySelector('.btn-pause');
pause.addEventListener('click',()=>{
  window.clearInterval(id);
})

let play = document.querySelector('.btn-play');
play.addEventListener('click',()=>{
  id = window.setInterval(()=>{
    fn();
  },t)
})

let btn1 = document.querySelector(".btn-speed-1");
btn1.addEventListener('click',()=>{
  window.clearInterval(id);
  t = 100;
  id = window.setInterval(()=>{
    fn();
  },t)
})

let btn2 = document.querySelector(".btn-speed-2");
btn2.addEventListener('click',()=>{
  window.clearInterval(id);
  t = 10;
  id = window.setInterval(()=>{
    fn();
  },t)
})

let btn3 = document.querySelector(".btn-speed-3");
btn3.addEventListener('click',()=>{
  window.clearInterval(id);
  t = 0;
  id = window.setInterval(()=>{
    fn();
  },t)
})