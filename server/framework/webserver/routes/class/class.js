import express from 'express'
import classController from '../../../../controllers/classController.js'
import classRepositoryMongo from '../../../database/mongoDB/repositories/classRepository.js'
import classRepo from '../../../../application/repositories/classRepo.js'

const router = express.Router()

const classContrlr= classController(classRepo,classRepositoryMongo)



router.post('/create',classContrlr.addNewClass)
// router.delete('/delete',classContrlr)



export default router