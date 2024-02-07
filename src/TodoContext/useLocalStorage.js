import React from "react";

function useLocalStorage(itemName, initialValue){

    const [item,setItem]=React.useState(initialValue);
    const [loading,setLoading]=React.useState(true);
    const [error,setError]=React.useState(false);
    // const [test,setTest]=React.useState("prueba");
  

    // console.log(1);
    // console.log(initialValue);
    React.useEffect( ()=>{
      setTimeout(()=>{
        try{
         
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
    
          if(!localStorageItem){
            // console.log(2);
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parsedItem=initialValue;
          }
          else{
            // console.log(3);
            // console.log(localStorageItem)
            parsedItem= JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
    
          // console.log(parsedItem);
          setLoading(false);
        }
        catch(error){
  
          setLoading(false);
          setError(true);
        }
      },2000)
    }, [])
    
    
   
    const saveItem =(newItem)=>{
      console.log(4);
      console.log("--",newItem);
      localStorage.setItem(itemName,JSON.stringify(newItem));
      setItem(newItem);
      
    }
    
    // setTest("aslkgjasfldf")
    // console.log(test);  
    // console.log(itemName);
  
    return {
      item,
      saveItem,
      loading,
      error,
      // test
    };
  }

  export {
    useLocalStorage
  }

  // localStorage.removeItem("todos_v1");

// const defaultTodos=[
//   {text:'Cortar cebotlla',completed:true},
//   {text:'Tomar el curso',completed:false},
//   {text:'Llorar con la Llorona',completed:false},
//   {text:'Otro',completed:false},
//   {text:'Nuevo',completed:true},
// ];

// localStorage.setItem("todos_v1",JSON.stringify(defaultTodos))