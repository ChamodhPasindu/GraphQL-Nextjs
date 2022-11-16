import { GraphQLID, GraphQLList, GraphQLString } from "graphql";
import { resolve } from "path";
import { Customer } from "../../Entity/Customer";

import { MessageType } from "../TypeDefs/Message";
import { CustomerType } from "../TypeDefs/Customer";

export const CREATE_CUSTOMER={
    type:MessageType,
    args:{
        name:{type:GraphQLString},
        address:{type:GraphQLString},
        mobile:{type:GraphQLString},
        email:{type:GraphQLString},
        dob:{type:GraphQLString},
    },
    resolve(parent:any,args:any){
            const {name,address,mobile,email,dob}=args;
            Customer.insert({name,address,mobile,email,dob})
            return { successful: true, message: "Customer Added Successfylly" };
    }
}

export const DELETE_CUSTOMER={
    type:MessageType,
    args:{
        id:{type:GraphQLID}
    },
    async resolve(parent:any,args:any){
        const id=args.id
        await Customer.delete(id)
        return { successful: true, message: "Customer Deleted Successfylly" };
    }
}

export const UPDATE_CUSTOMER={
    type:MessageType,
    args:{
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        address:{type:GraphQLString},
        mobile:{type:GraphQLString},
        email:{type:GraphQLString},
        dob:{type:GraphQLString},
    },
    async resolve(parent:any,args:any){
        const {id,name,address,mobile,email,dob}=args;
        const customer=await Customer.findBy({id:id})

        if(customer.length === 0){
            throw new Error("Customer ID is not valid!");
        }else{
            await Customer.update({id:id},{name:name,address:address,mobile:mobile,email:email,dob:dob})
            return { successful: true, message: "Customer Updated" };
        }        
    }
}

