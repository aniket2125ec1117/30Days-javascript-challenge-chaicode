// Understanding promises
//1. Create a promise that resolve with a message after a 2 second time out and log the message to the console
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved");
  }, 2000);
});

promise
  .then((message) => {
    console.log(message);
    console.log("done");
  })
  .catch((err) => {
    console.log(err);
  });

//2. Create a promise that will reject with an error message after 2 second timeout and handle the error using.catch().

var isActive = false;
const promise1 = new Promise((resolve, reject) => {
  if (isActive) {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("rejected");
    }, 2000);
  }
});
promise1.then((res) => console.log(res)).catch((err) => console.log(err));

// Chaining promises
//3. Create a sequence of promise that simulate fetching data from a server chain the promise to log message in a specific order

const fetchData1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched data 1");
      resolve("Data 1");
    }, 1000);
  });
};

const fetchData2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched data 2");
      resolve("Data 2");
    }, 1000);
  });
};

const fetchData3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched data 3");
      resolve("Data 3");
    }, 1000);
  });
};

fetchData1()
  .then((data1) => {
    console.log("Processing", data1);
    return fetchData2();
  })
  .then((data2) => {
    console.log("Processing", data2);
    return fetchData3();
  })
  .then((data3) => {
    console.log("Processing", data3);
    console.log("All data fetched and processed");
  })
  .catch((err) => {
    console.error("Error fetching data:", err);
  });

// Using async and await
// 1. Write an async function that will wait for a promise to resolve and then log the result
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("done");
  }, 5000);
});

async function logPromiseResult(promise) {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

logPromiseResult(pr);

// 2. Write an async function that handle a rejected promise using try and catch and log the error in the console
var isTrue = false;
const pr2 = new Promise((resolve, reject) => {
  if (isTrue) {
    resolve("resolved pr2");
  } else {
    reject("rejected pr2");
  }
});

async function logPromise(promise) {
  try {
    const result = await pr2;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

logPromise(pr2);

// Fetching data from an api
//1. Use the fetch api to get data from the public api an dlog the response to the console  using promise
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

fetch(apiUrl)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok " + res.statusText);
    }

    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

//2. Use the fetch api to get data from a public url and log the response data to the console using async await
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const finalRes = await response.json();
    console.log(finalRes);
  } catch (err) {
    console.log.log(err);
  }
}
fetchData(apiUrl)


//Concurrent promise
//1. Use Promise.all to wait for multiple promises to resolve and log the result
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('p1'), 1000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('p2'), 2000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('p3'), 3000);
});
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('p4'), 4000);
});

Promise.all([p1, p2, p3, p4])
    .then((results) => {
        console.log(results);
        
    })
    .catch((err) => {
        console.log(err);
    });
// 2. Use promise.race to log the value of the first promise returned by the promise that resolve among the multiple promises returned

Promise.race([p1, p2, p3, p4])
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });

// Day 11 Completed successfully 
