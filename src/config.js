const dev = {
  HOST_URL: "localhost:3000"
};

const qat = {
  HOST_URL: "stage-bd"
};

const prod = {
  HOST_URL: "costco.com"
};

//console.log("Stage: ", process.env.REACT_APP_STAGE);
console.log(process.env);
let environment = process.env.REACT_APP_ENV;
console.log("environment: ", environment);
let config;
if (environment === "qa") {
  console.log("inside if");
  config = qat;
} else if (environment === "production") {
  config = prod;
}
console.log("Config: ", config);
export { config };
