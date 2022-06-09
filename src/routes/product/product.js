const { url_provider_product_add, url_provider_get_menu_items, url_provider_product_update, url_provider_product_getlist, url_provider_product_remove, url_provider_add_menu_category, url_provider_add_product_into_menu_category, url_provider_product_update_status, url_add_upcoming_product, url_update_upcoming_product, url_get_upcoming_product, add_survey_question, update_survey_question } = require("../../../const/url")
const ProductController = require("../../controllers.js/productController")





const productRouter = (app) => {

    app.post(url_provider_product_add, ProductController.addProduct)
    app.get(url_provider_get_menu_items, ProductController.getMenuItems)
    app.post(url_provider_product_update, ProductController.updateProduct)
    app.get(url_provider_product_getlist, ProductController.getListProduct)
    app.delete(url_provider_product_remove, ProductController.removeProduct)
    app.post(url_provider_add_menu_category, ProductController.addMenuCategory)
    app.post(url_provider_add_product_into_menu_category, ProductController.addProductIntoMenuCategory)
    app.post(url_provider_product_update_status, ProductController.updateProductStatus)
    app.post(url_add_upcoming_product, ProductController.addUpComingProduct)
    app.post(url_update_upcoming_product, ProductController.updateUpComingProduct)
    app.get(url_get_upcoming_product, ProductController.getUpComingProduct)

    app.post(add_survey_question, ProductController.addSurveyQuestion)
    app.post(update_survey_question, ProductController.updateSurveyQuestion)
}


module.exports = productRouter