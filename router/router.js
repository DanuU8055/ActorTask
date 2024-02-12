import * as movieController from "../controller/controller.js";
import exp from "express";

const router=exp.Router();

router.get('/movies', movieController.getMoviesByActor);
router.get('/actors', movieController.getActorsByMovie);
router.post("/register",movieController.register);

export default router;