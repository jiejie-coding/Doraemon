let fl = document.querySelector('#fl');
let cnt = document.querySelector('#cnt');
// console.log(fl);
let string = `/* 你好这里是jiejie
*接下来看我给你演示我的前端功底
*首先来一个盒子
*变成圆的，然后给他上色
*/
#cnt {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0px 0px 1px 1px rgba(0,0,0,.5);
    background: linear-gradient(90deg, 
      rgba(255,255,255,1) 0%, 
      rgba(255,255,255,1) 50%, 
      rgba(0,0,0,1) 50%, 
      rgba(0,0,0,1) 100%);
}
/*然后绘制里面的就可以啦*/
#cnt::before {
    width: 100px;
    height: 100px;
    top:0;
    border-radius: 50%;
    background: radial-gradient(circle, 
      rgba(255,255,255,1) 0%, 
      rgba(255,255,255,1) 25%, 
      rgba(0,0,0,1) 25%, 
      rgba(0,0,0,1) 100%);
}
#cnt::after {
  width: 100px;
    height: 100px;
    bottom: 0;
    border-radius: 50%;
    background: radial-gradient(circle, 
      rgba(0,0,0,1) 0%, 
      rgba(0,0,0,1) 25%, 
      rgba(255,255,255,1) 25%, 
      rgba(255,255,255,1) 100%, 
      rgba(0,0,0,1) 100%);
}`;
let n=0;
let new_str=""
let step = () => {
  setTimeout(()=>{
    if(string[n] == '\n') {
      new_str += "<br>"
    } else if(string[n] == ' ') {
      new_str += '&nbsp;'
    } else {
      new_str += string[n];
    }
    fl.innerHTML = new_str;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    fl.scrollTo(0, 99999);
    n++;
    if(n < string.length) {
      step();
    }
  },10);
}
step()