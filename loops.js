function forLoop(arraaaaay) {
  const t = Math.floor(Math.random() * 10)

  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      arraaaaay.push("I am 1 strange loop.");
    }
    else {
      arraaaaay.push("I am " + i + " strange loops.");
    }
  }

  return arraaaaay;
}

function whileLoop(numbz) {

  while (numbz > 0) {
    console.log(--numbz);
    //numbz = numbz - 1;
    //console.log(numbz);
  }

  return "done";
}

function doWhileLoop(doArray) {

  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    doArray.pop()
  } while (doArray.length > 0 && maybeTrue());

  return doArray;
}
