function delayedResultPromise(n1, n2, delayTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delayTime >= 0) {
        resolve(n1 + n2);
      } else {
        reject(
          Error(
            `That's an invalid input: delayTime is ${delayTime}, must be positive.`
          )
        );
      }
    }, delayTime);
  });
  // your code here
}
delayedResultPromise(4, 5, 4000)
  .then((val) => console.log(val))
  .catch((e) => console.log(e));
// 9 (4+5) will be shown in the console after 3 seconds

async function main() {
  const response = await delayedResultPromise(6, 7, 7000);
  console.log(response);

  // your code here, you should call delayedResultPromise here and
  //get the result using async/await.
}
main(); // result will be shown in the console after <delayTime> seconds
