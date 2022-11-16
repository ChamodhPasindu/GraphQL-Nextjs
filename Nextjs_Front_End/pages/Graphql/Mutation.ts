import { gql } from "@apollo/client";

export const CREATE_CUSTOMER=gql`
mutation createCustomer($name:String!,$address:String!,$email:String!,$mobile:String!,$dob:String!){
    createCustomer(name:$name,address:$address,email:$email,mobile:$mobile,dob:$dob){
         successful,
        message
    }
  }
`;