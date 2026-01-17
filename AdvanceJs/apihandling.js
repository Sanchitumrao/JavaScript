const URL="https://v6.exchangerate-api.com/v6/b4518fb5afc9c905570ed804/pair/INR/USD/80"
const getFact=async()=>{
    let response=await fetch(URL)
    return response.status
}
console.log(getFact)