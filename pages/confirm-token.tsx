import React from "react";
import { default as FailConfirmTokenTemplate } from "../src/ui/templates/user/failConfirmToken";
import { default as SuccessConfirmTokenTemplate } from "../src/ui/templates/user/successConfirmToken";
import { confirmSignUpCase } from "../src/core/user/case";
/**
 * 
 * @param success prop came from server side props
 * @returns 
 */
export default function ConfirmToken({ success }: any) {
  if (success === true) {
    return <SuccessConfirmTokenTemplate />
  }
  return (
    <FailConfirmTokenTemplate />
  );
}

export async function getServerSideProps({ query }: any) {
  if (!query.token) {
    return {
      redirect: {
        permanent: false,
        destination: "/"
      }
    }
  }

  try {
    await confirmSignUpCase.execute(query.token);
    return { props: { success: true } }
  } catch (error) {
    return { props: { success: false } }
  }

}