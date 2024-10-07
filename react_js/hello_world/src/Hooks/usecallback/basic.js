/*  use callback is a hook that will return a memoized version  of the call back function that only chnages if one of hte dependencies 
 why? it is useful whne passing the callbacks to optimized child component that rely on referece equaity to prevent unneceessary render.. react.memo is used ot optimize 
  step1 import from react 
   usecallbacks takes two parameter one is callback function  and another one is array os dependencies .*/