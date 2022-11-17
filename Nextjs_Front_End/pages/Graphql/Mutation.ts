import { gql } from "@apollo/client";

export const CREATE_CUSTOMER=gql`
mutation createCustomer($name:String!,$address:String!,$email:String!,$mobile:String!,$dob:String!){
    createCustomer(name:$name,address:$address,email:$email,mobile:$mobile,dob:$dob){
      successful,
      message
    }
  }
`;

export const DELETE_CUSTOMER=gql`
mutation deleteCustomer($id: ID!){
  deleteCustomer(id:$id){
    message
    successful
  }
}
`;

export const UPDATE_CUSTOMER=gql`
mutation updateCustomer($id:ID!,$name:String!,$address:String!,$email:String!,$mobile:String!,$dob:String!){
  updateCustomer(id:$id,name:$name,address:$address,email:$email,mobile:$mobile,dob:$dob){
    message
    successful
  }
}
`;