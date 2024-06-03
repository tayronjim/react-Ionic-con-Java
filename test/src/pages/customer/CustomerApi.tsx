import Customer from "./Customer"

export async function searchCustomer(){
    
    let url = import.meta.env.VITE_REACT_APP_API
    
    let res =  await fetch(url+'/customers',{
        "method":"GET",
        "headers":{
            "Content-Type":"application/json"
        }
    })
    
    return await res.json()

    /*
    if(!localStorage['customers']){
        const datos = [
            {
              id:"id1",
              nombre:"nombre1",
              telefono:"tel1",
              direccion:"dir1"
            }
          ]
        localStorage['customers'] = JSON.stringify(datos)

    }
    let customers = localStorage['customers']
    return JSON.parse(customers)
    */
    
}

export async function searchCustomerById(id:any){
    let url = import.meta.env.VITE_REACT_APP_API
    
    let res =  await fetch(url+'/customer/'+id,{
        "method":"GET",
        "headers":{
            "Content-Type":"application/json"
        }
    })
    return await res.json()
    
    //let customers = localStorage['customers']
    //customers = JSON.parse(customers)
    //return customers.find((c:Customer)=>c.id===id)||[]
}

export async function removeCustomer(id:any){
    let url = import.meta.env.VITE_REACT_APP_API
    
    await fetch(url+'/removecustomer'+'/'+id,{
        "method":"DELETE",
        "headers":{
            "Content-Type":"application/json"
        }
    })

    /*
    let customers = await searchCustomer()
    let index = customers.findIndex((c:Customer)=>c.id===id)
    customers.splice(index,1)
    
    localStorage['customers'] = JSON.stringify(customers)
    */
}

export async function saveCustomer(customer: Customer){
    let url = import.meta.env.VITE_REACT_APP_API+'/savecustomer'
    
    await fetch(url,{
        "method":"POST",
        "body":JSON.stringify(customer),
        "headers":{
            "Content-Type":"application/json"
        }
    })
    
    /*
    let customers = await searchCustomer()
    if(customer.id){
        customers = customers.map((c:Customer)=>{
            if(c.id===customer.id){c=customer}
            return c
        })
    }
    else{
        customer.id = Math.trunc( Math.random()*1000000 ).toString()
        customers.push(customer)
    }
    
    localStorage['customers'] = JSON.stringify(customers)

    */
}