import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_CUSTOMER, DELETE_CUSTOMER, UPDATE_CUSTOMER } from "./Mutation/Customer";
import { GET_ALL_CUSTOMER , GET_SINGLE_CUSTOMER} from "./Queries/Customer";

const RootQuery=new GraphQLObjectType({
    name:"RootQuery",
    fields:{
        getAllCustomer:GET_ALL_CUSTOMER,
        getSingleCustomer:GET_SINGLE_CUSTOMER

    }
})

const Mutation=new GraphQLObjectType({
    name:"Mutation",
    fields:{
        createCustomer:CREATE_CUSTOMER,
        deleteCustomer:DELETE_CUSTOMER ,
        updateCustomer:UPDATE_CUSTOMER,

    }
})

export const schema =new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
})