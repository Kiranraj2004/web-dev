//  1 create the context
// 2 provide a context value
// 3 consume the context value
import React from "react";
const Usercontext=React.createContext();
const Userprovider=Usercontext.Provider
const Userconsumer=Usercontext.Consumer
export {Userprovider,Userconsumer}
