import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { DataSource} from "typeorm";
import { schema } from "./Schema";
import { Customer } from "./Entity/Customer";


const main=async()=>{

    const AppDataSource=new DataSource({
        type:"mysql",
        database:"graphqlCRUD",
        username:"root",
        password:"root1234",
        logging:true,
        synchronize: true,
        entities:  [Customer],
    });

    AppDataSource.initialize()
    .then(() => {
        console.log("Database Connected")
    })
    .catch((error) => console.log(error))
   

    const app=express()
    app.use(cors())
    app.use(express.json())
    app.use(
        "/graphql",
        graphqlHTTP({
          schema,
          graphiql: true,
        })
      );

    app.listen(3000,()=>{
        console.log("SERVER RUNNING ON PORT 3000")
    })

};

main().catch((err)=>{
    console.log(err);
});