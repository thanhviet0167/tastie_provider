const MerchantModel = require("../models.js/merchantModel");

require("dotenv").config();




class MerchantController{

    static register_Merchant = async (req, res) => {
        try {
            const result = await MerchantModel.addProvider(req.body)
            if(result !== null){
                res.status(200).json({
                    status : true,
                    result
                })
            }
            else{
                res.status(200).json({
                    status : false,
                    result : null
                })
            }
            
        } catch (error) {
            res.status(404).json({
                status : false,
                result : null
            })
        }
    }


    static providerUpdateForm1 = async (req, res) => {
        const provider_id = req.params.id
        try {
            const result = await MerchantModel.providerUpdate_Form1(provider_id, req.body)
            res.status(200).json({
                state : result
            })
        } catch (error) {
            
            console.log(error)
            res.status(404).json({
                state : false
            })
        }
    }
    static providerUpdateForm2 = async (req, res) => {
        const provider_id = req.params.id
        try {
            const result = await MerchantModel.providerUpdate_Form2(provider_id, req.body)
            res.status(200).json({
                state : result
            })
        } catch (error) {
            
            console.log(error)
            res.status(404).json({
                state : false
            })
        }
    }


    static getCategories = async (req, res) => {
        try {
            const typeCategory = req.params.type
            const result = await MerchantModel.getCategories(typeCategory)
            res.json({
                status : true,
                result : result
            })
        } catch (error) {
            console.log(error)
            res.json({
                status : false,
                result : null
            })
        }
    }

    static providerUpdateForm3 = async (req, res) => {
        const provider_id = req.params.id
        try {
            const result = await MerchantModel.providerUpdate_Form3(provider_id, req.body)
            res.status(200).json({
                state : result
            })
        } catch (error) {
            
            console.log(error)
            res.status(404).json({
                state : false
            })
        }
    }

    static providerUpdateForm4 = async (req, res) => {
        const provider_id = req.params.id
        try {
            const result = await MerchantModel.providerUpdate_Form4(provider_id, req.body)
            res.status(200).json({
                state : result
            })
        } catch (error) {
            
            console.log(error)
            res.status(404).json({
                state : false
            })
        }
    }

    static providerUpdateForm5 = async (req, res) => {
        const provider_id = req.params.id
        try {
            const result = await MerchantModel.providerUpdate_Form5(provider_id, req.body)
            res.status(200).json({
                state : result
            })
        } catch (error) {
            
            console.log(error)
            res.status(404).json({
                state : false
            })
        }
    }

    static providerUpdateForm0 = async (req, res) => {
        try {
            const result = await MerchantModel.providerUpdate_Form0(req.body)
            res.status(200).json({
                state : result.length > 0 ? true : false,
                providerID : result.length > 0 ? result[0]['provider_id'] : 0
            })
        } catch (error) {
            
            console.log(error)
            res.status(404).json({
                state : false,
                providerID : -1
            })
        }
    }

    static getProviderInfo = async (req, res) => {
        try {
            const provider_info = await MerchantModel.getProviderInfo(req.body)
            if(provider_info)
            {
                res.status(200).json({
                    state : true,
                    provider_info 
                })
            }
            else{
                res.status(200).json({
                    state : false,
                    provider_info : null
                })
            }
            
        } catch (error) {
            console.log(error)
            res.status(401).json({
                state : false,
                provider_info : null
            })
        }
    }

    static updateProvider = async (req, res) => {
        try {
            const provider_id = req.params.provider_id
            const result = await MerchantModel.updateProvider(provider_id, req.body)
            res.status(200).json({
                result
            })
        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false,
                response : null
            })
        }
    }


    static getNearByProvider = async (req, res) => {
        try {
            
            const result = await MerchantModel.getNearByProvider(req.body)

            res.status(200).json({
                status : true,
                response : result
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false,
                response : null
            })
        }
    }

    static getGroupProvider = async (req, res) => {
        try {
            
            const result = await MerchantModel.getGroupProvider(req.body)
           
            res.status(200).json({
                status : true,
                response : result
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false,
                response : null
            })
        }
    }

    static AddPromotion = async (req, res) => {
        try {
            
            const result = await MerchantModel.AddPromotion(req.body)
        
            res.status(200).json({
                status : result
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false
            })
        }
    }
    static UpdatePromotion = async (req, res) => {
        try {
            
            const result = await MerchantModel.UpdatePromotion(req.body)
           
            res.status(200).json({
                status : result
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false
            })
        }
    }
    static getAllOrder = async (req, res) => {
        try {
            
            const result = await MerchantModel.getAllOrder(req.body)
           
            res.status(200).json({
                status : true,
                response : result
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false,
                response : []
            })
        }
    }

   

    static  getOrderDetail = async (req, res) => {
        try {
            const order_code = req.params.order_code
            const response = await MerchantModel.getOrderDetail(order_code)
            res.status(200).json({
                status : true,
                response
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false,
                response : null
            })
        }
    }

    static registerEcoupon = async (req, res) => {
        try {
            
            const status = await MerchantModel.registerEcoupon(req.body)
           
            res.status(200).json({
                status
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false
            })
        }
    }

    static addDiscount = async (req, res) => {
        try {
            
            const status = await MerchantModel.addDiscount(req.body)
           
            res.status(200).json({
                status
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false
            })
        }
    }

    static updateDiscount = async (req, res) => {
        try {
            
            const status = await MerchantModel.updateDiscount(req.body)
           
            res.status(200).json({
                status
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false
            })
        }
    }

    static getAllDiscount = async (req, res) => {
        try {
            const provider_id = req.params.provider_id
            const list_discount = await MerchantModel.getAllDiscount(provider_id)
           
            res.status(200).json({
                status : true,
                list_discount
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false,
                list_discount : []
            })
        }
    }

    static applyDiscountToProduct = async (req, res) => {
        try {
            
            const status = await MerchantModel.applyDiscountToProduct(req.body)
           
            res.status(200).json({
                status
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false
            })
        }
    }
    static removeDiscountToProduct = async (req, res) => {
        try {
            const product_id = req.params.product_id
            const status = await MerchantModel.removeDiscountToProduct(product_id)
           
            res.status(200).json({
                status
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false
            })
        }
    }

    static getProviderRevenueByTime = async (req, res) => {
        try {
          
            const total_revenue = await MerchantModel.getProviderRevenueByTime(req.body)
           
            res.status(200).json({
                status : true,
                total_revenue
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false,
                total_revenue : -1
            })
        }
    }


    static getProviderNumberOrderByTime = async (req, res) => {
        try {
          
            const number_order = await MerchantModel.getProviderNumberOrderByTime(req.body)
           
            res.status(200).json({
                status : true,
                number_order
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false,
                number_order : -1
            })
        }
    }

    static getTopProductByUnitByProvider = async (req, res) => {
        try {
          
            const list_product = await MerchantModel.getTopProductByUnitByProvider(req.body)
           
            res.status(200).json({
                status : true,
                list_product
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false,
                list_product : []
            })
        }
    }

    static getTopProductBySalesByProvider = async (req, res) => {
        try {
          
            const list_product = await MerchantModel.getTopProductBySalesByProvider(req.body)
           
            res.status(200).json({
                status : true,
                list_product
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                status : false,
                list_product : []
            })
        }
    }
}



module.exports = MerchantController