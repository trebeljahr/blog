import Layout from "@components/Layout";
import React from "react";

export default function EmailSignupSuccess() {
  return (
    <Layout
      title="Email Signup Success"
      description="This page is displayed when a user couldn't complete signing up to the newsletter of trebeljahr.com"
      url="email-signup-error"
    >
      <h1>Hmm... seems like something went wrong. </h1>
      <p>Maybe try subscribing to the newsletter once more...</p>
    </Layout>
  );
}
