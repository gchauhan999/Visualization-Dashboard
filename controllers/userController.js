const chartModel = require('../models/chartModel');

class userController {
    static async getDataByID (req, res) {
        try {
            const {params} = req;
            const Chart = await chartModel.findOne({
                where : {
                    id : params.id
                }
            });
            if(typeof Chart != "string") {
                return res.status(200).json({status:true,message:"Data fetched successfully.", data:chart});
             } else {
                return res.status(400).json({status:false,message:user, data:{}});
             }
        } catch (error) {
            return res.status(500).json({ status:false, message: error.message });
        }
    };
    
}

module.exports = userController;