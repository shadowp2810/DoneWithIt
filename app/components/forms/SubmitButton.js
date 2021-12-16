import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../Button";

function SubmitButton({ title }) {
  /* 
     We call useFormikContext() function 
     which returns an object 
     and destructure it and pick handlesubmit property.
  */
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
