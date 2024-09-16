// import Add from "./components/add";
// import Greetings from "./components/greetings";
// import { Fragment } from "react";
// import { FaLuggageCart } from "react-icons/fa";  

// import { useReducer } from "react";

// import { useState,useEffect } from "react";

// // class based component
// class App extends Component{
//   render(){
//     return<h1>pranjajl chutiya hai</h1>
//   }
// }
// functional component
// function App(){
//   return <Fragment>
// <Greetings/>
// <Add/>
// </Fragment>
// }
// function App(){
//   const name ="krish yadav";
//   const multiply= (a,b) => a*b;
//   const simpleclass= "not-a-simple-class";
//   return(
//   <>
//   <h1>{name}</h1>
//   <h1>2*2={2*2}</h1>
//   <p>4*4={multiply(4,4)}</p>
//   <p>my friends list :{["ansh","vansh","suresh","mahesh"]}</p>
//   <h1>{multiply}</h1>
//   <p className="simpleclass"> {simpleclass}</p>

//   </>
//   )
// }
// function App(){
//   const numbers=[1,2,3,4,5];
//   return(
//     <>
//     {numbers.map((number)=>(
//       <ul key={Math.random()*10}>
//         <li>{number}</li>
//       </ul>
//     ))}
//     </>
//   )
// }
// function App(){
//   const userinfo = [
//     {
//       usename: "babuji",
//       email:"babuji@mail.com",
//       location:"gahr me"
//     },
//     {
//       usename: "babitaji",
//       email:"babitaji@mail.com",
//       location:"lund  me"
//     },
//     {
//       usename: "bahuji",
//       email:"bahuji@mail.com",
//       location:"land pe"
//     },
//   ]
//   return(
//     <>
//     {userinfo.map((user)=>(
//       <ul key={Math.random*10}>
//         <li>{user.usename}</li>
//         <li>{user.email}</li>
//         <li>{user.location}</li>


//       </ul>
//     ))}
//     </>
//   )
// }/
// *************************************props code**********************************************
// *******normal props code
// const User = (props)=>{
//   return (<section>
//     <h1>name:{props.name}</h1>
//     <h2>age:{props.age}</h2>
//     <h3>hobbies:{props.hobbies}</h3>

//   </section>
//   );
// };
// *****after destructuring
// const User = (img,age,hobbies)=>{
  //   return (<section>
  //     <h1>name:{props.name}</h1>
  //     <h2>age:{props.age}</h2>
  //     <h3>hobbies:{props.hobbies}</h3>
  
  //   </section>
  //   );
  // };

// function App(){
//   return(
//     <>
//     <User
//     name="tomar sahab"
//     age={18}
//     hobbies={["masturbate","selfie","hastamithun"]}
//     />
//     </>

//   );
// }
// *****************************************************************************
// using children in props
// const User = ({name,age,hobbies,children})=>{
//     return (<section>
//       <h1>name:{name}</h1>
//       <h2>age:{age}</h2>
//       <h3>hobbies:{hobbies}</h3>
//       {children}
  
//     </section>
//     );
//   };

// function App(){
//   return(
//     <>
//     <User
//     name="tomar sahab"
//     age={18}
//     hobbies={["masturbate","selfie","hastamithun"]}
//    >
//     <h3> baap hoon mai tera</h3>
//     </User>
//     </>

//   );
// }
// ***********conditional rendering(if else)

// const Vaildpassword=()=><h1>valid password</h1>
// const InVaildpassword=()=><h1>invalid password</h1>
// const Password = ({isValid})=>{
//   if(isValid){
//     return <Vaildpassword/>;
//   }
//   return <InVaildpassword/>;

// };
// function App(){
//   return(
//   <Password 
//   isValid={true}
//   >

//   </Password>
//   )
//
// *************************************
// const Cart=()=>{
// const Items =["jeans","shirt","pant","condom"];
// return(
//   <>

//   <h1>cart</h1>
//   <ul>
//     <h4>Products</h4>
//     {Items.map((item)=>(
//       <li key = {Math.random()}>{item}</li>
//     ))}
//   </ul>
//   </>
// )

// }
// function App(){
//   return <Cart/>
// }

// ********************Adding styles
// function App(){
//   return(
//     <h1 style={{color:"pink",backgroundColor:"grey"}}>Hello this is what it is</h1>
//     <FaLuggageCart/>
//   )
// }
// EVENT HANDLERS=> onMouseMove OnCopy OnClick***************
// const Button=()=>{
//   const handleclick=()=>{
//     alert("you just clicked the button");
//   }
//   return <button onClick={handleclick}>Click me </button>

// }
// const Copy=()=>{
//   const handlecopy=()=>{
//     alert("why the fuck younstealig my content bitch");
//   }
//   return(
//   <p onCopy={handlecopy}>2NF (Second Normal Form)Must be in 1NF:
//   A table must first be in First Normal Form (1NF) before it can be in 2NF.All non-key attributes must be fully dependent on the candidate key:
//   This means that if a non-key column is partially dependent on the candidate key (which could be a subset of columns forming the candidate key), then it should be split into separate tables.If a non-key column is partially dependent on the candidate key:
//   Such columns should be moved to a different table to remove partial dependency.Every table should have a primary key and relationships between the tables should be formed using foreign keys:
//   </p>
//   )
// }
// const Move=()=>{
//   const handlemove=()=>{
//     alert("you just hover ove rme");
//   }
//   return(
//   <p onMouseMove={handlemove}>2NF (Second Normal Form)Must be in 1NF:
//   A table must first be in First Normal Form (1NF) before it can be in 2NF.All non-key attributes must be fully dependent on the candidate key:
//   This means that if a non-key column is partially dependent on the candidate key (which could be a subset of columns forming the candidate key), then it should be split into separate tables.If a non-key column is partially dependent on the candidate key:
//   Such columns should be moved to a different table to remove partial dependency.Every table should have a primary key and relationships between the tables should be formed using foreign keys:
//   </p>
//   )
// }
// function App(){
//   return(
//   <>
//   <Button/>
//   <Copy/>
//   <Move/>
//   </>
//   )
// }
//  &&&&&&&&&&&&&&& STATE AND HOOKS&&&&&&&&&&&&&&&&
// CHANGING NUMBERS USING STATE
// const Counter=()=>{
//   const[count,setcount]= useState(0);
//   const increemnt=()=>{
//     setcount(count+1);
//   }
//   const decrement=()=>{
//     setcount(count-1);
//   }
//   return(
//     <>
//     <h1>{count}</h1>
//     <button onClick={decrement}>+</button>
//     <button onClick={increemnt}>-</button>

//     </>
//   )
// }
//  CHANGING STRING VALUES USING STATE
// const Name=()=>{
//   const[username,setusername]=useState("unknown");
//   const handlechange =()=>{
//     setusername("pranjal ka baap");
//   }
//   return(<>
//     <h1>{username}</h1>
//     <button onClick={handlechange}>Change name</button>
//     </>
//   )
// }
// CHANGING ARRAY VALUE SUSING STATE
// const Array=()=>{
//   const[friends,setfriends]=useState(["jeetu","shubbu","himanshi"]);
//   const addone=()=>setfriends([...friends,"tomar shaab"])
//   const deleteone=()=>setfriends(friends.filter((f=>f!=="jeetu")));
//   const updateone=()=>setfriends(friends.map((f)=>(f==="jeetu"?"jeetuchmaar":f)))
//   return(
//     <>
//     {friends.map((f)=>(
//       <li key={Math.random()}>{f}</li>
//     ))}
//     <button onClick={addone}>addone</button>
//     <button onClick={deleteone}>deleteone</button>
//     <button onClick={updateone}>updateone</button>

//     </>
//   )
// USEEFFECTEXAMPLE
// function App(){
//   const[value,setvalue]=useState(0);
//   // render for the (first time)
//   // anytime we do(sideeffect)
//   // dependency list
//   useEffect(()=>{
//     console.log("hello beta");
//     document.title=`increment(${value})`;
//   },[])
// empty array randers only once initially
// if i pass the value then wehenevr the value changes then it renders


//   return(
//     <>
//     <h1>{value}</h1>
//     <button onClick={()=>setvalue(value+1)}>Click me </button>

   
//     </>
//   )
// }
// function App(){
//   const[data,setdata]=useState([]);
//   useEffect(()=>{
//     async function getData(){
//       const response = await fetch(
//         "http://jsonplaceholder.typicode.com/posts"
//       );
//       const data = await response.json();
//       if(data&&data.length)setdata(data);
//     }
//     getData();
//   },[]);
//   return (
//     <>
//       <ul>
//         {data.map((item) => (
//           <li key={Math.random()}>{item.title}</li>
//         ))}
//       </ul>
//     </>
//   );

  
// }
// this is we are doing using prop drilling
// import ComponentA from "./componentA.js";
// function App(){
//   const name = "tomar saab";
//   return(
//     <>
//     <ComponentA name ={name}/>
//   </>
//   )
// }
// by usiig context Api instead of prop drilling
// 1. import(createContext)
// import {createContext} from "react";
// import ComponentC from "./componentC.js"

// // creatinf instance of (create Context)
// export const Data= createContext();
// export const Data1= createContext();
// function App(){
//   const name ="tomar sahab";
//   const age ="18";
//   return(
//     // 3. wrap our component into provider component
//     <>
//     <Data.Provider value ={name}>
//       <Data1.Provider value ={age}>
//     <ComponentC/>
//     </Data1.Provider>
//     </Data.Provider>
//     </>
//   )
// }

// USEREDUCERHOOK
// import { useReducer } from "react";
// function App(){
//   const[state,dispatch]=useReducer[useReducer,initialState];
//   return(
//     <>
//     <h1>{state.count}</h1>
//     <button onClick={()=>dispatch({type:"increment"})}>+</button>
//     <button onClick={()=>dispatch({type:"decrement"})}>+</button>
//     <button onClick={()=>dispatch({type:"reset"})}>+</button>


//     </>
//   );
// }
// const initialState={count:0};
// const reducer =(state,action)=>{
//   switch(action.type){
//     case "increment":
//     return{
//       ...state,
//       count:state.count+1,
//     };
//     case "decrement":
//     return{
//       ...state,
//       count:state.count-1,
//     };
//     case "reset":
//     return{
//       ...state,
//       count:0,
//     };
//     default:
//       return state;
//   }
// };
// export default App;
//  USEREFHOOK

// import{useRef} from "react";
// function App(){
//   const inputElement=useRef(null);

//   const focusInput=()=>{
//     inputElement.current.focus();
//     inputElement.current.value="Huxn";

//   };
//   return (
//     <>
//     <input type = "text" ref={inputElement}/>
//     <button onClick={()=>focusInput()}>Focus & write Huxn</button>
//     </>
//   );
// CUSTOM HOOKS
import { useState,useEffect } from "react";
import useFetch from "./useFetch";
function App(){
  const[data]=useFetch("http://jsonplaceholder.typicode.com/todos");
 
  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={Math.random()}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}
export default App;

// rules to be remember
// 1. return should have only one parent elemnt
// 2. every tag should be closed
// 3. whenever we are giving the class name we should use className instead of class
// 4. in label tag inside the form we have to use htmlFor instead of for 
