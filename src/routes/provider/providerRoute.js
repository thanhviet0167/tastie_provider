const { url_provider_get_near_by_provider, url_provider_get_near_by_provider_with_group, url_add_promotion, url_update_promotion, url_get_all_order, url_get_order_detail, url_register_ecoupon, add_discount, update_discount, get_all_discount, apply_discount_to_product, remove_discount_to_product, get_provider_revenue_by_time, get_provider_number_order_by_time, get_top_product_by_unit_by_provider, get_top_product_by_sales_by_provider } = require("../../../const/url")
const MerchantController = require("../../controllers.js/merchantController")



const providerRoute = (app) => {

    app.post(url_provider_get_near_by_provider, MerchantController.getNearByProvider)
    app.post(url_provider_get_near_by_provider_with_group, MerchantController.getGroupProvider)
    app.post(url_add_promotion, MerchantController.AddPromotion)
    app.post(url_update_promotion, MerchantController.UpdatePromotion)
    app.post(url_get_all_order, MerchantController.getAllOrder)
    app.get(url_get_order_detail, MerchantController.getOrderDetail)
    app.post(url_register_ecoupon, MerchantController.registerEcoupon)

    app.post(add_discount, MerchantController.addDiscount)
    app.post(update_discount, MerchantController.updateDiscount)
    app.get(get_all_discount, MerchantController.getAllDiscount)

    app.post(apply_discount_to_product, MerchantController.applyDiscountToProduct)
    app.put(remove_discount_to_product, MerchantController.removeDiscountToProduct)

    app.post(get_provider_revenue_by_time, MerchantController.getProviderRevenueByTime)
    app.post(get_provider_number_order_by_time, MerchantController.getProviderNumberOrderByTime)

    app.post(get_top_product_by_unit_by_provider, MerchantController.getTopProductByUnitByProvider)
    app.post(get_top_product_by_sales_by_provider, MerchantController.getTopProductBySalesByProvider)

}

module.exports = providerRoute