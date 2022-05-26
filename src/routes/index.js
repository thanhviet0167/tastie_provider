const productRouter = require("./product/product");
const StatisticsRoute = require("./product/statistics");
const providerRoute = require("./provider/providerRoute");
const merchantRouter = require("./register/merchantRoute");





const indexRoute = (app) => {
    merchantRouter(app)
    productRouter(app)
    providerRoute(app)
    StatisticsRoute(app)
}


module.exports = indexRoute;