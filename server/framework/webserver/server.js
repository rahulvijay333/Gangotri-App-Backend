import config from "../../config/config.js"

export default function serverConfig(app){
    function startServer(){
        //Mongoose connection should be provided here asynchrounously
         app.listen(config.port,()=>{
            console.log(`Server is listening at http://localhost:${config.port}`)
        })
    }
    return {startServer}
}