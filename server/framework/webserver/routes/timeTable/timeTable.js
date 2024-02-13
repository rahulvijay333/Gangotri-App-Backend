import express from'express'
import tableController from '../../../../controllers/timeTableController'
import timeTableRepoImpl from '../../../database/mongoDB/repositories/timeTableRepo'
import timeTableRepoInt from '../../../../application/repositories/timeTableRepo'

const router = express.Router()


const tableController  = tableController(timeTableRepoInt,timeTableRepoImpl)