
const table = document.getElementById("table2");
const inputSearch = document.getElementById("inputSearch");
const imgSearch = document.getElementById("imgSearch");
const selectYear = document.getElementById("selectYear")
const countryPH = document.getElementById("countryPH")
const urlParams = new URLSearchParams(window.location.search);
const country = urlParams.get('country');
console.log("the value is : ",country); 
const API_KEY = "live_ZouqIssLXv1utykx6JX1fypvshKB68oQPdaQtqmYZkXXhoss1stPaNAha9bymWTm";
var currYear = new Date()
var year = currYear.getFullYear()
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
axios.defaults.baseURL = "https://date.nager.at/api/v3";
axios.defaults.headers.common["x-api-key"] = API_KEY;
var countriesList = []
async function initialLoadAxios(){
  console.log("initload called")
  const response = await axios(`/PublicHolidays/${year}/${country}`)
  const breeds = await response.data
  countryPH.textContent = "Public Holidays for " + year
  table.innerHTML = "";
  await breeds.forEach((breed) => {
    
    const tr = document.createElement("tr")
    const tdDate = document.createElement("td")
    const tdLocalName = document.createElement("td")
    const tdName = document.createElement("td")
    const date = new Date(breed.date)
    tdDate.textContent = `${weekday[date.getDay()]}, ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`
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

function selectYearClick(e){
    year = e.target.innerHTML
    console.log(year)
    initialLoadAxios()
}

selectYear.onclick = selectYearClick





