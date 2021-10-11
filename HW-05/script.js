
function func(array) { 
  
    //let result = arr.filter(getValue)
    
    for (let i = array.length - 1; i >= 0; i--)
    {
      if (array[i]%2 == 0)
      {
        //console.log(array.length);
        array.splice(i, 1);
        //console.log(array);
      }
    }
    
    console.log(array);
     
  } 
  
  func(new Array(4, 3, 16, 12, 7, 20));
