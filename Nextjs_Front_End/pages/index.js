import Head from "next/head";
import Image from "next/image";
import firstImg from "../public/images.png";
import styles from "../styles/Home.module.css";
import { BiUserPlus } from "react-icons/bi";
import { border } from "@mui/system";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";

import {
  CREATE_CUSTOMER,
  DELETE_CUSTOMER,
  UPDATE_CUSTOMER,
} from "./Graphql/Mutation";

import { GET_ALL_CUSTOMER } from "./Graphql/Queries";
import { GET_SINGLE_CUSTOMER } from "./Graphql/Queries";
import { rootShouldForwardProp } from "@mui/material/styles/styled";

export default function Home() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [searchId, setSeacrhId] = useState("");
  const [customer,setCustomer]=useState("");

  const [createCustomer] = useMutation(CREATE_CUSTOMER,{
    onCompleted:(data)=>{
      alert(data.createCustomer.message)
      window.location.reload();
    }
  });

  const [deleteCustomerById] = useMutation(DELETE_CUSTOMER,{
    onCompleted:(data)=>{
      alert(data.deleteCustomer.message)
      window.location.reload();
    }
  });

  const [updateCustomerRecord] = useMutation(UPDATE_CUSTOMER,{
    onCompleted:(data)=>{
      alert(data.updateCustomer.message)
      window.location.reload();
    }
  });

  const {data} = useQuery(GET_ALL_CUSTOMER);
  const {}=useQuery(GET_SINGLE_CUSTOMER,{
    variables:{
      id:searchId
    },
    onCompleted:(data)=>{
      setCustomer(data)
    }
  });

  const clearInputs = () => {
    setId("");
    setName("");
    setAddress("");
    setEmail("");
    setDob("");
    setMobile("");
  };

  const saveCustomer = () => {
    createCustomer({
      variables: {
        name: name,
        address: address,
        email: email,
        mobile: mobile,
        dob: dob,
      },
    });
    clearInputs();
  };

  const UpdateCustomer = () => {
    updateCustomerRecord(
      {
        variables: {
          id: id,
          name: name,
          address: address,
          email: email,
          mobile: mobile,
          dob: dob,
        },
      });
    clearInputs();
  };

  const deleteCustomer = () => {
    deleteCustomerById({
      variables: {
        id: id,
      },
    });
    clearInputs();
  };

  const searchCustomer = () => {
    setId(customer.getSingleCustomer.id)
    setName(customer.getSingleCustomer.name)
    setEmail(customer.getSingleCustomer.email)
    setMobile(customer.getSingleCustomer.mobile)
    setDob(customer.getSingleCustomer.dob)
    setAddress(customer.getSingleCustomer.address)
  };

  return (
    <>
      <Head>
        <title>Customer Register</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.icon" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
      </Head>

      <body>
        {/* --------nav bar-------------- */}
        <header className={styles.navbar}>
          <nav class="navbar navbar-dark bg-primary">
            <i class="navbar-brand ml-5">SUPER Center</i>
            <form class="form-inline">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSeacrhId(e.target.value)}
                value={searchId}
              />
              <button
                className={styles.search}
                class="btn btn-success my-2 my-sm-0"
                type="button"
                onClick={() => searchCustomer()}
              >
                Search
              </button>
            </form>
          </nav>
        </header>

        {/* --------nav bar-------------- */}
        <main className={styles.main}>
          <section className={styles.form}>
            <h2 class="ml-5 mt-2" className={styles.customer}>
              Customer Management
            </h2>

            <form>
              <div class="form-row mt-3">
                <div class="col-5">
                  <input
                    type="text"
                    class="form-control ml-5 mt-4"
                    placeholder="Customer Id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>
                <div class="col-5">
                  <input
                    type="text"
                    class="form-control ml-5 mt-4"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div class="col-5">
                  <input
                    type="text"
                    class="form-control ml-5 mt-3"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="col-5">
                  <input
                    type="text"
                    class="form-control ml-5 mt-3"
                    placeholder="Contact"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <div class="col-5">
                  <input
                    type="text"
                    class="form-control ml-5 mt-3"
                    placeholder="Birthday"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
                <div class="col-5">
                  <input
                    type="text"
                    class="form-control ml-5 mt-3"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </section>

          {/* --button-- */}

          <section className={styles.button}>
            <button
              type="submit"
              class="btn btn-success mt-3 ml-5"
              onClick={() => saveCustomer()}
            >
              Add Customer
            </button>
            <button
              type="submit"
              class="btn btn-secondary mt-3"
              onClick={() => UpdateCustomer()}
            >
              Update
            </button>
            <button
              type="submit"
              class="btn btn-danger mt-3"
              onClick={() => deleteCustomer()}
            >
              Delete
            </button>
          </section>

          {/* -------------table-------------- */}
          <section className={styles.table}>
            <table class="table mt-4 mb-3 ">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Customer Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact No</th>
                  <th scope="col">Birthday</th>
                  <th scope="col">Address</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.getAllCustomer.map((row, index) => (
                    <tr key={index}>
                      <th scope="row">{row.id}</th>
                      <td>{row.name}</td>
                      <td>{row.email}</td>
                      <td>{row.mobile}</td>
                      <td>{row.dob}</td>
                      <td>{row.address}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </section>
        </main>

        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
        ></script>
      </body>
    </>
  );
}
