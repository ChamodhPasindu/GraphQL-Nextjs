import { gql } from "@apollo/client";

export const GET_ALL_CUSTOMER = gql`
  query getAllCustomer {
    getAllCustomer {
      id
      name
      address
      mobile
      email
      dob
    }
  }
`;

export const GET_SINGLE_CUSTOMER = gql`
  query getSingleCustomer {
    getSingleCustomer(id: 5) {
      id
      name
      address
      mobile
      email
      dob
    }
  }
`;
