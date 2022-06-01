const url_merchant_register = '/v1/api/provider/sign-contract';
const url_provider_update_form1 = '/v1/api/provider/register/:id/basic-info';
const url_provider_update_form2 = '/v1/api/provider/register/:id/representive'	
const url_get_categories = '/v1/api/provider/register/:type/get-categories'

const url_provider_update_form3 = '/v1/api/provider/register/:id/detail-info'
const url_provider_update_form4 = '/v1/api/provider/register/:id/menu-photo'
const url_provider_update_form5 = '/v1/api/provider/register/:id/bank-info'


const url_provider_product_add = '/v1/api/provider/dashboard/menu-overview/add-item'
const url_provider_product_remove = '/v1/api/provider/dashboard/menu-overview/:product_id/remove-item'
const url_provider_get_menu_items = '/v1/api/provider/dashboard/menu-overview/:id/get-menu-items'
const url_provider_product_update = '/v1/api/provider/dashboard/menu-overview/:id/update-product'
const url_provider_product_getlist = '/v1/api/provider/dashboard/menu-overview/:id/get-list-product'
const url_provider_add_menu_category = '/v1/api/provider/dashboard/menu-overview/:id/add-menu-category'
const url_provider_add_product_into_menu_category = '/v1/api/provider/dashboard/menu-overview/:id/add-product-into-menu-category'
const url_provider_get_info = '/v1/api/provider/dashboard/:provider_id/get-info'
const url_provider_product_update_status = '/v1/api/provider/dashboard/menu-overview/:provider_id/update-product-status'
const url_provider_update_provider = '/v1/api/provider/dashboard/:provider_id/update-provider'
const url_register_ecoupon = '/v1/api/provider/dashboard/register-ecoupon'

const url_provider_get_near_by_provider = '/v1/api/provider/dashboard/home/get-near-by-provider'
const url_provider_get_near_by_provider_with_group = '/v1/api/provider/dashboard/home/get-group-provider'

const url_add_promotion = '/v1/api/tastie/provider/add-promotion'
const url_update_promotion = '/v1/api/tastie/provider/update-promotion'

const url_get_all_order = '/v1/api/provider/order/get-all-order'
const url_get_order_detail = '/v1/api/provider/order/get-all-products-from-order/:order_code'

const add_discount = '/v1/api/provider/dashboard/add-discount'
const update_discount = '/v1/api/provider/dashboard/update-discount'
const get_all_discount = '/v1/api/provider/dashboard/get-all-discount/:provider_id'

const apply_discount_to_product = '/v1/api/provider/dashboard/apply-discount-to-product'
const remove_discount_to_product = '/v1/api/provider/dashboard/remove-discount-to-product/:product_id'

// statistics

const get_provider_revenue_by_time = '/v1/api/provider/dashboard/get-provider-revenue-by-time'
const get_provider_number_order_by_time = '/v1/api/provider/dashboard/get-provider-number-order-by-time'
const get_top_product_by_unit_by_provider = '/v1/api/provider/dashboard/get-top-product-by-unit-by-provider'
const get_top_product_by_sales_by_provider = '/v1/api/provider/dashboard/get-top-product-by-sales-by-provider'

const url_get_voucher_claims = '/v1/api/provider/dashboard/get-voucher-claims/:provider_id'
const url_get_voucher_costs = '/v1/api/provider/dashboard/get-voucher-costs/:provider_id'
const url_get_number_order_by_provider = '/v1/api/provider/dashboard/get-number-order-by-provider/:provider_id'
const url_get_number_order_inclu_voucher_by_provider = '/v1/api/provider/dashboard/get-nb-order-inclu-voucher-by-provider/:provider_id'

const url_get_all_promos = '/v1/api/provider/dashboard/get-all-promos/:provider_id'
const url_get_all_ecoupon = '/v1/api/provider/dashboard/get-all-ecoupon/:provider_id'
const url_add_upcoming_product = '/v1/api/provider/dashboard/add-up-coming-product'
const url_update_upcoming_product = '/v1/api/provider/dashboard/update-up-coming-product'
const url_get_upcoming_product = '/v1/api/provider/dashboard/get-up-coming-product/:provider_id'
const url_get_top_category_by_unit = '/v1/api/provider/dashboard/get-top-category-by-unit-by-provider'

module.exports = {
    url_merchant_register,
    url_provider_update_form1,
    url_provider_update_form2,
    url_get_categories,
    url_provider_update_form3,
    url_provider_update_form4,
    url_provider_update_form5,
    url_provider_product_add,
    url_provider_get_menu_items,
    url_provider_product_update,
    url_provider_product_getlist,
    url_provider_product_remove,
    url_provider_add_menu_category,
    url_provider_add_product_into_menu_category,
    url_provider_get_info,
    url_provider_product_update_status,
    url_provider_update_provider,
    url_provider_get_near_by_provider,
    url_provider_get_near_by_provider_with_group,
    url_add_promotion,
    url_update_promotion,
    url_get_all_order,
    url_get_order_detail,
    url_register_ecoupon,
    add_discount,
    update_discount,
    get_all_discount,
    apply_discount_to_product,
    remove_discount_to_product,
    get_provider_revenue_by_time,
    get_provider_number_order_by_time,
    get_top_product_by_unit_by_provider,
    get_top_product_by_sales_by_provider,
    url_get_voucher_claims,
    url_get_voucher_costs,
    url_get_number_order_by_provider,
    url_get_number_order_inclu_voucher_by_provider,
    url_get_all_promos,
    url_get_all_ecoupon,
    url_add_upcoming_product,
    url_update_upcoming_product,
    url_get_upcoming_product,
    url_get_top_category_by_unit
}