import express from "express"
import facilitatorController from "../controllers/facilitatorController.js"
const routess= express.Router();


routess.post("/facilitator/create",facilitatorController.createNewFacilitator);
routess.get("/facilitator/list",facilitatorController.getAllFacilitator)
routess.get("/facilitator/:id",facilitatorController.getFacilitatorById)
routess.get("/facilitator/email/:email",facilitatorController.getFacilitatorByEmail)
routess.put("/facilitator/:id",facilitatorController.updateFacilitator);
routess.delete("/facilitator/:id",facilitatorController.deleteFacilitator)

export default routess;