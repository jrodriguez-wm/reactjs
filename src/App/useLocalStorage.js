import React from "react";

function useLocalStorage(itemName, initialValue){

    const [item,setItem]=React.useState(initialValue);
    const [loading,setLoading]=React.useState(true);
    const [error,setError]=React.useState(false);
  
    console.log(1);
    // console.log(initialValue);
    React.useEffect( ()=>{
      setTimeout(()=>{
        try{
          console.log(2);
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
    
          if(!localStorageItem){
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parsedItem=initialValue;
          }
          else{
            parsedItem= JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
    
          console.log(parsedItem);
          setLoading(false);
        }
        catch(error){
  
          setLoading(false);
          setError(true);
        }
      },2000)
    },[])
    
    
   
    const saveItem =(newItem)=>{
      console.log(3);
      localStorage.setItem(itemName,JSON.stringify(newItem));
      setItem(newItem);
    }
    
    // console.log(item);
  
    return [{
      item,
      saveItem,
      loading,
      error
    }];
  }

  export {
    useLocalStorage
  }