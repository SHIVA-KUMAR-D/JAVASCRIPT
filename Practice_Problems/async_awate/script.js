async function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(455)
        }, 3000);
    })
}
async function main(){


    console.log("start");
    console.log("fetching data...");

    let data = await getdata();
    console.log(data);
    console.log("data:");
    console.log("process complete");

}
main();
// data.then((v)=>{    
// console.log("data:");
// console.log("process complete");

// })