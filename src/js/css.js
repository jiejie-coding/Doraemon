const string = `
<style>

/* 你好呀！我是一名前端的小白,学习了css3动画和JavaScript，
我就用这两样给你绘制一个可爱的哆啦A梦吧 ！！*/

/* 首先我们绘制哆啦A梦的头 */

.head {
  position: relative;
  width: 200px;
  height: 190px;
  background-color: #30a7da;
  border-radius: 50%;
}

/* 然后绘制他的脸 */

.face {
  position: absolute;
  width: 90%;
  height: 85%;
  bottom: 0px;
  left: 5%;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 50%;
}

/* 绘制他的两个小眼睛 */

.eye1,
.eye2 {
  position: absolute;
  width: 35px;
  height: 40px;
  background-color: #fcfffa;
  border: 1px solid #000;
  border-radius: 50%;
  top: -10%;
  left: 30%;
}
.eye2 {
  left: 48%;
}

/* 给眼睛添加两颗炯炯有神的眼珠子 */

.eye1::before,
.eye2::before {
  content: '';
  display: block;
  position: absolute;
  width: 2px;
  height: 4px;
  border: 3px solid #000;
  border-radius: 50%;
  left: 42%;
  bottom: 23%;
}

/* 画上他的红鼻子 */

.nose {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #f04835;
  left: 50%;
  transform: translate(-50%);
  top: 8%;
  border-radius: 50%;
  border: 1px solid #000;
}

/* 给他的鼻子来点高光，增加立体感 */

.nose::after,
.nose::before {
  content: '';
  display: block;
  position: absolute; 
}

.nose::after {
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #fff;
}

/* 发现鼻子下方有一条线，也给他加上 */

.nose::before {
  width: .5px;
  height: 50px;
  background-color: #000;
  left: 50%;
  top:100%;
}

/* 现在来绘制胡子了，
先绘制左边的胡子 */

.mustacheLeft > div{
  position: absolute;
  width: 45px;
  height: .5px;
  left: 10px;
  background-color: #000;
  z-index: 1;
}

/* 第一根胡子 */

.m1 {
	top: 14%;
	transform: rotate(15deg);
}

/* 第二根胡子 */

.m2 {
	top: 25%;
	transform: rotate(2deg);
}

/* 第三根胡子 */

.m3 {
	top: 35%;
	transform: rotate(-15deg);
}

/* 轮到右边的胡子了 */

.mustacheRight > div{
  position: absolute;
  width: 45px;
  height: .5px;
  right: 10px;
  background-color: #000;
}

/* 右边的第一根胡子 */

.m4 {
	top: 14%;
	transform: rotate(-15deg);
}

/* 右边的第二根胡子 */

.m5 {
	top: 25%;
	transform: rotate(-2deg);
}

/* 右边的第三根胡子 */

.m6 {
	top: 35%;
	transform: rotate(15deg);
}

/* 来绘制嘴巴 */

.month {
  position: absolute;
  width: 130px;
  height: 60px;
  background-color: #5D000A;
  border-radius: 0px 0px 60px 60px;
  left: 50%;
  transform: translate(-50%);
  top: 50%;
  overflow: hidden;
  z-index: 3;
}

/* 这是舌头阴影 */

.tou1,
.tou2 {
  position: relative;
  background-color: #971112;
  border-radius: 30px;
}

.tou1 {
  width: 40px;
  height: 50px;
  top: 40%;
  left: 25%;
  transform: rotate(-45deg);
  border: 1px solid transparent;
}

.tou2 {
  width: 42px;
  height: 45px;
  left: 50%;
  bottom: 45%;
  transform: rotate(51deg);
  border: 1px solid transparent;
}

/* 舌头的爱心形状就是这么来的呢 */

.tou1::before,
.tou2::before {
  content: '';
  display: block;
  width: 90%;
  height: 180%;
  background-color: #DB301F;
  border-radius: 30px;
  margin: 10% auto;
}
.tou1::before {
  position: relative;
}

/* 害羞 */

.face::after,
.face::before {
  content:'';
  position: absolute;
  width: 40px;
  height: 20px;
  top: 40px;
  display:block;
  background-color: rgba(255,0,0,.4);;
  box-shadow: 0px 0px 10px 10px rgba(255,0,0,.4);
  border-radius: 50%;
  animation: 1s face-be-red alternate infinite;
}
.face::after {
  left: 25px;
}
.face::before {
  right: 25px;
}


@keyframes face-be-red {
  0% {
    transform:scale(0.8);
  }
  100% {
    transform:scale(1.2);
  }
}
/* 绘制身体 */
.body {
  position: relative;
  width: 115px;
  height: 70px;
  background-color: #30a7da;
  border-top-left-radius: 5px;
  margin: -15px auto;
  
}

/* 小铃铛的红线 */
.bellLine {
  width: 110px;
  height: 7px;
  background-color: #B70117;
  border-radius: 5px;
  margin: auto;
  z-index: 9999;
}
/* 小铃铛 */
.bell {
  position: absolute;
  border-radius: 50%;
  background-color: #FDAC29;
  width: 25px;
  height: 25px;
  border: 1px solid #000;
  left: 50%;
  transform: translate(-50%);
  z-index: 11;
}
/* 小铃铛上的缝隙 */
.bell::before,
.bell::after {
  content: '';
  display: block;
  position: absolute;
}
.bell::before {
  width: 10px;
  height: 10px;
  background-color: #5F3800;
  border-radius: 50%;
  left: 30%;
  top: 30%;
}
/* 小铃铛上的黑洞 */
.bell::after {
  width: 0px;
  height: 6px;
  border: 1px solid #000;
  left: 48%;
  bottom: 0;
}

/* 绘制肚皮，最开始看错了，看成口袋了呜呜，后面才发现是肚皮 */
.pocket {
  position: absolute;
  width: 90px;
  height: 65px;
  border: 1px solid #000;
  background-color: #fff;
  border-radius: 30% 30% 50% 50%;
  left: 50%;
  transform: translate(-50%);
  z-index: 10;
}
/* 绘制万能的口袋 */
.pocket::before {
  content: '';
  position: absolute;
  display: block;
  height: 30px;
  width: 60px;
  border: 1px solid #000;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%);
  border-radius: 0 0 30px 30px;
}
/* 右边的手臂 */
.armR,
.armL {
  position: absolute;
  height: 25px;
  background-color: #30a7da;
}
.armR {
  width: 80px;
  top: 23%;
  left: 78%;
  border-bottom-right-radius: 50%;
  transform-origin: 0px 15px;
  animation: .2s wave-armR alternate infinite;
}
/* 左边的手臂 */
.armL {
  width: 75px;
  transform: rotate(-30deg);
  top: 25%;
  right: 85%;
  border-top-left-radius: 50%;
}


@keyframes wave-armR {
  0% {
    transform: rotate(-50deg);
  }
  100% {
    transform: rotate(-20deg);
  }
}
/* 他的小手 */
.armR .hand,
.armL .hand {
   position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #000;
}

.armR .hand {
  left: 85%;
  top: -25%;
}

/* 他的左手 */
.armL .hand {
  left: -5%;
}

/* 终于到腿了 */
#footer {
  position: relative;
  width: 115px;
  height: 50px;
  margin: auto;
}
/* 他的大长腿 */
.legL,
.legR {
  float: left;
  width: 45px;
  height: 100%;
  background-color: #30a7da;
}

.legR {
  float: right;
}

/* 小裤裆 */
.legL::after,
.legR::after {
  content: '';
  display: block;
  width: 25px;
  height: 50px;  
  background-color: #30a7da;
  
}
.legL::after {
  margin-left: 80%;
  transform: rotate(30deg);
  z-index: -1;
}

.legR::after {
  transform: rotate(-30deg) translate(-40%);
  z-index: -1;
}
/* 他的左右脚 */
.footL,
.footR {
  position: absolute;
  width: 55px;
  height: 30px;
  border-radius: 100%;
  background-color: white;
  border: 1px solid #000;
  top: 85%;
  left: -5%;
} 
.footR {
  left: 55%;
}
/* 你喜欢这个哆啦A梦吗，送给你，嘻嘻 */
</style>`

export default string;