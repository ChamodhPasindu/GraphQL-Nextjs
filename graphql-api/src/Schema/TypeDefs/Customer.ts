import { GraphQLObjectType,GraphQLID,GraphQLString } from "graphql";

export const CustomerType=new GraphQLObjectType({
    name:"Customer",
    fields:()=> ({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        address:{type:GraphQLString},
        mobile:{type:GraphQLString},
        email:{type:GraphQLString},
        dob:{type:GraphQLString},
    }),
})