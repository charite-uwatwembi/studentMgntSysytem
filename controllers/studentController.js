import studentModel from "../models/studentModel.js";

const studentController ={
    createNewStudent : async(req,res)=>{
        try {
         const newStudent = await studentModel.create(req.body)
         res.status(201).json({
            message:"student created successfully!!!",
            student:newStudent
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
            const getStudents = await studentModel.find()
            res.status(200).json({
            message:"students retrieved successfully!!!",
            students:getStudents
         }) 
        } catch (error) {
            console.log(error.message)
            res.status(500).json({
                message:"Internal Server Error"
            })
        }

    },
    // getStudentById:async(req,res)=>{
    //   try {
    //     const retrievedStudent = await studentModel.findById(req.params.id)
    //     if(!retrievedStudent){
    //         res.status(404).json({
    //             message:"Student not found"
    //         })
    //         res.status(200).json(retrievedStudent)
    //     }
    //   } catch (error) {
    //     res.status(500).json({
    //         message:"Internal Server Error"
    //     })
    //   }
    // },

    getStudentById: async (req, res) => {
        try {
           const retrievedStudent = await studentModel.findById(req.params.id);
           if (!retrievedStudent) {
             // If the student is not found, send a 404 response and stop further execution
             return res.status(404).json({
               message: "Student not found",
             });
           }
           // If the student is found, send a 200 response with the student data
           res.status(200).json(retrievedStudent);
        } catch (error) {
           // If there's an error, send a 500 response
           res.status(500).json({
             message: "Internal Server Error",
           });
        }
       },       
    
    // getStudentByEmail:async(req,res)=>{
    //     try {
    //       const retrievedStudent = await studentModel.findOne(req.params.email)
    //       if(!retrievedStudent){
    //           res.status(404).json({
    //               message:"Student not found"
    //           })
    //           res.status(200).json(retrievedStudent)
    //       }
    //     } catch (error) {
    //       res.status(500).json({
    //           message:"Internal Server Error"
    //       })
    //     }
    //   },

    getStudentByEmail: async (req, res) => {
        try {
           // Assuming 'email' is the field you're querying against in your studentModel
           const retrievedStudent = await studentModel.findOne({ email: req.params.email });
           if (!retrievedStudent) {
             // If the student is not found, send a 404 response and stop further execution
             return res.status(404).json({
               message: "Student not found",
             });
           }
           // If the student is found, send a 200 response with the student data
           res.status(200).json(retrievedStudent);
        } catch (error) {
           // If there's an error, send a 500 response
           res.status(500).json({
             message: "Internal Server Error",
           });
        }
       },       

    // updateStudent: async(req,res)=>{
    //     try {
    //         const updatedStudent = await studentModel.findByIdAndUpdate(req.params.id, req.body,{set:true});
    //         if(!updatedStudent){
    //             res.status(404).json({
    //                 message:"Student not found"
    //             })
    //             res.status(200).json(updatedStudent)
    //         }
            
    //     } catch (error) {
    //         res.status(500).json({
    //             message:"Internal Server Error"
    //         }) 
    //     }

    // },

    updateStudent: async (req, res) => {
        try {
            // Assuming 'req.body' contains the fields to update
            const updatedStudent = await studentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedStudent) {
                // If the student is not found, send a 404 response and stop further execution
                return res.status(404).json({
                    message: "Student not found",
                });
            }
            // If the student is found and updated, send a 200 response with the updated student data
            res.status(200).json(updatedStudent);
        } catch (error) {
            // If there's an error, send a 500 response
            res.status(500).json({
                message: "Internal Server Error",
            });
        }
    },

    // deleteStudent: async(req,res)=>{
    //     try {
    //         const id =req.params.id;
    //         const deletedStudent = await studentModel.findByIdAndDelete(id);
    //         if(!deletedStudent){
    //             res.status(404).json({
    //                 message:"Student not found"
    //             })
    //             res.status(200).json(deletedStudent)
    //         }
            
    //     } catch (error) {
    //         res.status(500).json({
    //             message:"Internal Server Error"
    //         }) 
    //     }

    // }

    deleteStudent: async (req, res) => {
        try {
            const id = req.params.id;
            const deletedStudent = await studentModel.findByIdAndDelete(id);
            if (!deletedStudent) {
                // If the student is not found, send a 404 response and stop further execution
                return res.status(404).json({
                    message: "Student not found",
                });
            }
            // If the student is found and deleted, send a 200 response indicating success
            res.status(200).json({
                message: "Student deleted successfully",
            });
        } catch (error) {
            // If there's an error, send a 500 response
            res.status(500).json({
                message: "Internal Server Error",
            });
        }
    },    

}
export default studentController