async function  getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}

(async function main(){

    let data = await getdata();
    console.log(data);
   
})();
