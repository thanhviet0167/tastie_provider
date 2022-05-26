const StatisticsModel = require("../models.js/statisticsModel")


class StatisticsController {

    static  getVoucherClaims = async (req, res) => {
        try {
            const provider_id = req.params.provider_id
            const count = await StatisticsModel.getVoucherClaims(provider_id)
            res.status(200).json({
                status : true,
                count
            })
        } catch (error) {
            res.status(404).json({
                status : false,
                count : -1
            })
        }
    }

    static  getVoucherCosts = async (req, res) => {
        try {
            const provider_id = req.params.provider_id
            const total_cost = await StatisticsModel.getVoucherCost(provider_id)
            res.status(200).json({
                status : true,
                total_cost
            })
        } catch (error) {
            res.status(404).json({
                status : false,
                count : -1
            })
        }
    }

    static  getNumberOderByProvider = async (req, res) => {
        try {
            const provider_id = req.params.provider_id
            const count = await StatisticsModel.getNumberOrderByProvider(provider_id)
            res.status(200).json({
                status : true,
                count
            })
        } catch (error) {
            res.status(404).json({
                status : false,
                count : -1
            })
        }
    }

    static  getNumberOderIncluVoucherByProvider = async (req, res) => {
        try {
            const provider_id = req.params.provider_id
            const count = await StatisticsModel.getNumberOrderIncluVoucherByProvider(provider_id)
            res.status(200).json({
                status : true,
                count
            })
        } catch (error) {
            res.status(404).json({
                status : false,
                count : -1
            })
        }
    }

    static  getAllPromos = async (req, res) => {
        try {
            const provider_id = req.params.provider_id
            const response = await StatisticsModel.getAllPromos(provider_id)
            res.status(200).json({
                status : true,
                response
            })
        } catch (error) {
            res.status(404).json({
                status : false,
                response : []
            })
        }
    }

    static  getAllEcoupon = async (req, res) => {
        try {
            const provider_id = req.params.provider_id
            const response = await StatisticsModel.getAllEcoupon(provider_id)
            res.status(200).json({
                status : true,
                response
            })
        } catch (error) {
            res.status(404).json({
                status : false,
                response : []
            })
        }
    }
}



module.exports = StatisticsController