function press(input) {
  document.getElementById("display").innerHTML += input;
}

function eql() {
  try {
    let value = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = eval(value);
  } catch {
    document.getElementById("display").innerHTML = "wow verry dangerous";
  }
}

function back() {
  const d=document.getElementById("display").innerHTML;
  let bak=Array.from(d);
  
  let p=document.getElementById("display").innerHTML =  bak.slice(0,bak.length-1).join("") ;

  console.log(typeof p);
}

function clean() {
  document.getElementById("display").innerHTML = 0;
}
