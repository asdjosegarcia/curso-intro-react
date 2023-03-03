import React from "react";


function useLocalStorage(itemName, initialValue) {//esta funcion nos permite cargar objetos a local storage
    const [error, setError] = React.useState(false);//sumular estado de error, estado inicial false para decir no hay error
    const [loading, setLoading] = React.useState(true);//simular estado de carga, true para simular que ya termino de cargar
    const [item, setItem] = React.useState(initialValue)//estado con el valor de la variable defaultTodo por defecto
  
    React.useEffect(() => { //useEffect va a recargar todo cuando detecte un cambio, asi vemos los cambios en loading, error, etc
      try {
        setTimeout(() => {//usaremos setTimeout para simular el funcionamiento de una api, (reciviendo la informacion con restraso)
          const localStorageItem = localStorage.getItem(itemName);//se extraen los valores del localStorage>TODOS_v1 del navegador y se guardan en la variable LocalStorageTodoss
          let parsedItem;//aqui se van a guardar los objetos en formato JS
  
          if (!localStorageItem) {//si localStorageItem NO tiene algun valor
            localStorage.setItem(itemName, JSON.stringify(initialValue));//creamos el objeto itemName con un array vacio en formato JSON en el localStorage
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem)//transforma los objetos de localStorage tipo JSON a JS y los guarda en parsedItem
          }
  
          setItem(parsedItem)//establecemos el item como parsedItem (lo que tenia adentro localStorage)
          setLoading(false)//establecemos loading como false(la app ya termino de cargar)
        }, 3000)
        } catch (error) {//si hay un error entra como parametro
          setError(error)
      }
    });
  
  
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);//netItem transforma a JSON y almacena en strinfigiedItem
      localStorage.setItem(itemName, stringifiedItem);//se carga stringifiedItem en localStorage
      setItem(newItem);// se cargan los nuevos todos en todos
      }catch(error){
        setError(error)
      }
    }
  
   
    return {//si tenemos mas de 2 estados en el custom react hook es recomendable mandarlo como objeto y no como array
      item,
      saveItem,
      loading,
      error,
    }
  }

  export {useLocalStorage}
