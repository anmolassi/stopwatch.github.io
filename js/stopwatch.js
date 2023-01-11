var time = document.getElementById("time");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var reset = document.getElementById("reset");
var lap = document.getElementById("lap");
let milliseconds = 0; //to record millisecond after every 100ms
let seconds = 0; // to get seconds from milliseconds
let milli = 0;
let sec = 0;
let min = 0; // for minutes
let hour = 0; // for hours
let pauseTime = true;
let count = 0;
// to pause the timer
pause.addEventListener("click", function () {
  pauseTime = true;
});
// to start the timer
start.addEventListener("click", function () {
  pauseTime = false;
  count = 0;
});
// to reset the timer
reset.addEventListener("click", function () {
  pauseTime = true;
  milliseconds = milli = sec = seconds = min = hour = count = 0;
  time.innerHTML = `00:00:00<span>.00</span>`;
  document.getElementById("lap-container").innerHTML='';
});
var lapIt = function () {
  var div = document.createElement("div");
  div.innerHTML = `${hour}:${min}:${sec}<span>.${milli}</span>`;
  document.getElementById("lap-container").appendChild(div);
};
// to reset the timer
lap.addEventListener("click", function () {
  if (milliseconds) {
    if (!pauseTime) {
      lapIt();
    } else {
      if (count == 0) {
        count = 1;
        lapIt();
      }
    }
  }
});
setInterval(function () {
  if (!pauseTime) {
    milliseconds++;
    milli = Math.floor(milliseconds % 100);
    seconds = Math.floor(milliseconds / 100);
    sec = seconds % 600;
    hour = Math.floor(seconds / 36000);
    min = Math.floor(seconds / 600) - hour * 600;
    if (milli < 10) {
      milli = `0${milli}`;
    }
    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }
    if (hour < 10) {
      hour = `0${hour}`;
    }
    time.innerHTML = `${hour}:${min}:${sec}<span>.${milli}</span>`;
  }
}, 10);













// var time1 = document.getElementById("time1");
// var time2 = document.getElementById("time2");
// var time3 = document.getElementById("time3");
// var time4 = document.getElementById("time4");
// var start = document.getElementById("start");
// var pause = document.getElementById("pause");
// var reset = document.getElementById("reset");
// let t1 = 0;
// let t2 = 0;
// let t3 = 0;
// let t4 = 0;
// let pauseTime = true;
// pause.addEventListener("click", function () {
//   pauseTime = true;
// });
// start.addEventListener("click", function () {
//   pauseTime = false;
// });
// reset.addEventListener("click", function () {
//   pauseTime = true;
//   t1=t2=t3=t4=0;
//   time4.innerHTML = `${t4}`;
//   time3.innerHTML = `${t3}`;
//   time2.innerHTML = `${t2}`;
//   time1.innerHTML = `${t1}`;
// });
// setInterval(function () {
//   if (!pauseTime) {

//     t4++;
//     if (t4 == 10) {
//       t3++;
//       t4 = 0;
//       if (t3 == 6) {
//         t2++;
//         t3 = 0;
//         if (t2 == 10) {
//           t1++;
//           t2 = 0;
//         }
//       }
//     }
//     time4.innerHTML = `${t4}`;
//     time3.innerHTML = `${t3}`;
//     time2.innerHTML = `${t2}`;
//     time1.innerHTML = `${t1}`;
//   }
// }, 1000);