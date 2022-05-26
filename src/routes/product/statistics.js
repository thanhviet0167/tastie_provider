const { url_get_voucher_claims, url_get_number_order_by_provider, url_get_number_order_inclu_voucher_by_provider, url_get_voucher_costs, url_get_all_promos } = require("../../../const/url")
const StatisticsController = require("../../controllers.js/statisticsController")


const StatisticsRoute = (app) => {

    app.get(url_get_voucher_claims, StatisticsController.getVoucherClaims)
    app.get(url_get_number_order_by_provider, StatisticsController.getNumberOderByProvider)
    app.get(url_get_number_order_inclu_voucher_by_provider, StatisticsController.getNumberOderIncluVoucherByProvider)
    app.get(url_get_voucher_costs, StatisticsController.getVoucherCosts)
    app.get(url_get_all_promos, StatisticsController.getAllPromos)
}

module.exports = StatisticsRoute