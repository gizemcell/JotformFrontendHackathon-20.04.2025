const apiKey="3d7de76a958a271367c591c1e8e352da";


export const  getAllProducts=async ()=>{
    const response=await fetch(`https://api.jotform.com/form/251073995620965/payment-info?apiKey=${apiKey}`);
    const data= await response.json();
    console.log("bbbbb");
    console.log(data.content.products);
    return data.content.products;
}


  