import express from 'express'
import subjectController from "../../../../controllers/subjectController.js"
import subjectRepo from "../../../../application/repositories/subjectRepo.js"
import subjectRepositoryMongo from "../../../database/mongoDB/repositories/subjectRepository.js"

const router = express.Router()

const subjectContrlr =  subjectController(subjectRepo,subjectRepositoryMongo)


router.post('/createSub',subjectContrlr.addNewSubject)



export default router