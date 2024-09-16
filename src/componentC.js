// import { Data } from "./App.js";
// contextapi
// const ComponentC = () => {
//   return (
//     <>
//       <Data.Consumer>
//         {(name) => {
//           return <h1>My name is: {name}</h1>;
//         }}
//       </Data.Consumer>
//     </>
//   );
// }

// usecontexthook
import { useContext } from "react";
import{Data,Data1} from "./App.js";


 const ComponentC = () => {
    const name = useContext(Data);
    const age = useContext(Data1);
  return (
   <>
   <h1>
    My name is :{name} & im {age} years old
   </h1>
   </>
  )
}



export default ComponentC;
