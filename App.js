/*
To implement validation we will use a popular library called yup.
We used another library called Joi in the react and node course.
Here we are using yup because it has built in support for formik.
`npm i yup@0.28.5`
import * as Yup from "yup";
Defined outside function component 
because we don't want object to be redefined 
everytime our function is rerendered.
Yup has different methods for validation.
Yup.object(),Yup.string(),Yup.number(), etc.
We use shape method to define shape of object.
    email: Yup.string().required().email()
With this we don't have to write reqular expression to validate email,
we can change validation method to build a complex schema.
In formik we specify validationSchema={validationSchema}
In formik we also have errors function.
            <AppText style={{ color: "red" }}>{errors.email}</AppText>

*/

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return <LoginScreen />;
}

// <View
//   style={{
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "3%",
//   }}
// >
// </View>
