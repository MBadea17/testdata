function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runWithDelay() {
  const startTime = new Date();
  console.log("Start time:", startTime.toLocaleTimeString());

  console.log("Waiting for 5 minutes...");
  await delay(10 * 60 * 1000); // 5 minutes

  const endTime = new Date();
  console.log("End time:", endTime.toLocaleTimeString());
}

runWithDelay();
