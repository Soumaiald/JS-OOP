
const table = document.getElementById("table2");
const inputSearch = document.getElementById("inputSearch");
const imgSearch = document.getElementById("imgSearch");


const urlParams = new URLSearchParams(window.location.search);
const country = urlParams.get('country');
console.log("the value is : ",country); 
const API_KEY = "live_ZouqIssLXv1utykx6JX1fypvshKB68oQPdaQtqmYZkXXhoss1stPaNAha9bymWTm";

axios.defaults.baseURL = "https://date.nager.at/api/v3";
axios.defaults.headers.common["x-api-key"] = API_KEY;
var countriesList = []
async function initialLoadAxios(){
  console.log("initload called")
  const response = await axios(country)
  const breeds = await response.data
  table.innerHTML = "";
  await breeds.forEach((breed) => {
    
    const tr = document.createElement("tr")
    const tdDate = document.createElement("td")
    const tdLocalName = document.createElement("td")
    const tdName = document.createElement("td")
    tdDate.textContent = breed.date
    tdLocalName.textContent = breed.localName
    tdName.textContent = breed.name
    tr.appendChild(tdDate)
    tr.appendChild(tdLocalName)
    tr.appendChild(tdName)
    //console.log(tr.outerHTML)
    table.appendChild(tr)
    
  })
}

initialLoadAxios()









