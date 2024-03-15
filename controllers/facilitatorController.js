import facilitatorModel from "../models/facilitatorModel.js";

const facilitatorController ={
    createNewStudent : async(req,res)=>{
        try {
         const newFacilitator = await facilitatorModel.create(req.body)
         res.status(201).json({
            message:"facilitator created successfully!!!",
            facilitator:newFacilitator
         })

        } catch (error) {
            console.log(error.message)
            res.status(500).json({
                message:"Internal Server Error"
            })
            
        }
    },
    getAllStudents : async (req,res)=>{
        try {
            const getFacilitator = await facilitatorModel.find()
            res.status(200).json({
            message:"Facilitator retrieved successfully!!!",
            facilitator:getFacilitator
         }) 
        } catch (error) {
            console.log(error.message)
            res.status(500).json({
                message:"Internal Server Error"
            })
        }

    },

    getStudentById: async (req, res) => {
        try {
           const retrievedFacilitator = await facilitatorModel.findById(req.params.id);
           if (!retrievedFacilitator) {
             // If the student is not found, send a 404 response and stop further execution
             return res.status(404).json({
               message: "Facilitator not found",
             });
           }
           // If the student is found, send a 200 response with the student data
           res.status(200).json(retrievedFacilitator);
        } catch (error) {
           // If there's an error, send a 500 response
           res.status(500).json({
             message: "Internal Server Error",
           });
        }
       },       

       getStudentByEmail: async (req, res) => {
        try {
           // Assuming 'email' is the field you're querying against in your studentModel
           const retrievedFacilitator = await facilitatorModel.findOne({ email: req.params.email });
           if (!retrievedFacilitator) {
             // If the student is not found, send a 404 response and stop further execution
             return res.status(404).json({
               message: "Facilitator not found",
             });
           }
           // If the student is found, send a 200 response with the student data
           res.status(200).json(retrievedFacilitator);
        } catch (error) {
           // If there's an error, send a 500 response
           res.status(500).json({
             message: "Internal Server Error",
           });
        }
       },

       updateStudent: async (req, res) => {
        try {
            // Assuming 'req.body' contains the fields to update
            const updatedFacilitator = await facilitatorModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedFacilitator) {
                // If the student is not found, send a 404 response and stop further execution
                return res.status(404).json({
                    message: "Facilitator not found",
                });
            }
            // If the student is found and updated, send a 200 response with the updated student data
            res.status(200).json(updatedFacilitator);
        } catch (error) {
            // If there's an error, send a 500 response
            res.status(500).json({
                message: "Internal Server Error",
            });
        }
    },

    deleteStudent: async (req, res) => {
        try {
            const id = req.params.id;
            const deletedFacilitator = await facilitatorModel.findByIdAndDelete(id);
            if (!deletedFacilitator) {
                // If the student is not found, send a 404 response and stop further execution
                return res.status(404).json({
                    message: "Facilitator not found",
                });
            }
            // If the student is found and deleted, send a 200 response indicating success
            res.status(200).json({
                message: "Facilitator deleted successfully",
            });
        } catch (error) {
            // If there's an error, send a 500 response
            res.status(500).json({
                message: "Internal Server Error",
            });
        }
    },    

}
export default facilitatorController