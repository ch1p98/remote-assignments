function delayedResult(n1, n2, delayTime, cb) {
  setTimeout(() => cb(n1 + n2), delayTime);
}

//document.getElementById("show1").innerHTML = '';
delayedResult(4, 5, 3000, (result) => console.log(result)); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, (result) => console.log(result));
