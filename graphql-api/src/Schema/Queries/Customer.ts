import { GraphQLID, GraphQLList } from "graphql"
import { Customer } from "../../Entity/Customer";
import { CustomerType } from "../TypeDefs/Customer"

export const GET_ALL_CUSTOMER={
    type:new GraphQLList(CustomerType),
    resolve(){
        return Customer.find();
    }
}

export const GET_SINGLE_CUSTOMER={
    type:CustomerType,
    args:{
        id:{type:GraphQLID}
    },

    async resolve(parent:any,args:any){
        const id=args.id
        const customer=await Customer.findBy({id:id})
        console.log(customer)

        if(customer.length === 0){
            throw new Error("Empty Record");
        }else{
            return {
                id:customer[0].id,
                name:customer[0].name,
                address:customer[0].address,
                mobile:customer[0].mobile,
                email:customer[0].email,
                dob:customer[0].dob,
            }
           
        } 
    } 
}
