import React from "react";
import Layout from "../../components/Layout";
import ClientsList from "./ClientsList";
import Intro from "./Intro";
import Numbers from "./Numbers";

const Clients = () => {
  return (
    <Layout>
      <div>
        <Intro />
        <ClientsList />
     
      </div>
    </Layout>
  );
};

export default Clients;
