const host = require('../../config/connectMySQL')


class StatisticsModel{

    static getBackSevenDay(){
        var date = new Date();
        date.setDate(date.getDate() - 7);
        return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    }


    static async getVoucherClaims(provider_id){
        try {
            const date = this.getBackSevenDay()
            const [nbVoucherClaims, _] = await host.execute(`CALL Get_Voucher_Claims(${provider_id}, '${date}')`)

            return nbVoucherClaims[0]
        } catch (error) {
            console.log(error)
            return -1
        }
    }

    static async getVoucherCost(provider_id){
        try {
            const date = this.getBackSevenDay()
            
            const [listVoucherCosts, _] = await host.execute(`CALL Get_Voucher_Cost(${provider_id}, '${date}')`)
            console.log(`CALL Get_Voucher_Cost(${provider_id}, '${date}')`)
            const _listVoucherCosts = listVoucherCosts[0]
            console.log(_listVoucherCosts)
            var total_voccher_cost = 0
            _listVoucherCosts.forEach(voucher_cost => {
                total_voccher_cost += (voucher_cost['subtotal'] ? voucher_cost['subtotal'] : 0)*(voucher_cost['promotion_value'] ? voucher_cost['promotion_value'] : 0) 
                + (voucher_cost['price'] ? voucher_cost['price'] : 0)*(voucher_cost['discount_value'] ? voucher_cost['discount_value'] : 0)
            })

            return total_voccher_cost
        } catch (error) {
            

            return -1
        }
    }

    static async getNumberOrderByProvider(provider_id){
        try {
            const date = this.getBackSevenDay()
            const [nbOrderByProvider, _] = await host.execute(`CALL Get_Num_Order_By_Provider(${provider_id}, '${date}')`)

            return nbOrderByProvider[0][0]['total_num_orders']
        } catch (error) {
            console.log(error)
            return -1
        }
    }


    static async getNumberOrderIncluVoucherByProvider(provider_id){
        try {
            const date = this.getBackSevenDay()
            const [nbOrderByProvider, _] = await host.execute(`CALL Get_Num_Orders_Inclu_Vouchers_By_Provider(${provider_id}, '${date}')`)

            return nbOrderByProvider[0][0]['total_num']
        } catch (error) {
            console.log(error)
            return -1
        }
    }

    static async getAllPromos(provider_id){
        try {
            const list_promos = await host.execute(`CALL Get_All_Promos(${provider_id})`)
            const list_discount = await host.execute(`CALL Get_All_Discounts(${provider_id});`)
            return {
                promotion : list_promos[0][0],
                discount : list_discount[0][0]
            }

        } catch (error) {
            
            return {}
        }
    }

    static async getAllEcoupon(provider_id){
        try {
            const list_ecoupon_registered = await host.execute(`CALL Get_All_Ecoupon(${provider_id});`)
        //    console.log(list_ecoupon_registered[0][0])
            const _list_ecoupon = await host.execute('SELECT * FROM Tastie.Ecoupon')

            const list_ecoupon = _list_ecoupon[0].filter(ecoupon => {
                return list_ecoupon_registered[0][0].findIndex(ecp => {
                    return ecp['ecoupon_id'] === ecoupon['ecoupon_id']
                }) < 0
            })

            return {
                ecoupon_registered : list_ecoupon_registered[0][0],
                ecoupon : list_ecoupon
            }
        } catch (error) {
            console.log(error)
            return []
        }
    }

    static async getTopCategoryByUnitByProvider(data){
        try {
            const {provider_id, start_month, end_month, year} = data
            const [result, _] =  await host.execute(`CALL Get_Top_Category_By_Unit_By_Provider(${provider_id}, ${start_month}, ${end_month}, ${year});`)
            return result[0]
        } catch (error) {
            return -1
        }
    }

}


module.exports = StatisticsModel