/*
Make picker screen look preetier with icons and color.
We pass PickerItemComponent,
where first letter of every word is capitalised,
so we pass component here.
In AppPicker function we say that if it is not specified we use PickerItem,
PickerItemComponent = PickerItem,
<PickerItemComponent
In AppFormPicker function we say in param PickerItemComponent,
and <AppPicker, has  PickerItemComponent={PickerItemComponent}
In ListingEditScreen we take AppFormPicker as <Picker, takes PickerItemComponent={CategoryPickerItem}
So we create new component CategoryPickerItem.
For now we have it return null.
This is called flexible architecture.
If items are designed properly, 
you can always replace them, combine them.
*/

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return <ListingEditScreen />;
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
