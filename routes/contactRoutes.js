import express from "express";
import {getContacts,getContact,createContact,deleteContact,updateContact} from "../controllers/contactController.js";

const router = express.Router();

router.route("/").get(getContacts).post(createContact);

router.route("/:id").put(updateContact).delete(deleteContact).get(getContact);



export default router;