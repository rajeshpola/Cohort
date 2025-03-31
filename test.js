
let t;
const debouncer = (fun, interval) => {
  clearTimeout(t);

  console.log(interval);

  t = setTimeout(fun, interval);
};

const deb = (params)=>(params)=>console.log("fuinction called " +params)

function deb (params){
    return function(){
        console.log("gettinng thhere")
    }
}
console.log(deb("test"));
debouncer(deb('est'),5000);
