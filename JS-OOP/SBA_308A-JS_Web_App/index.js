
const table = document.getElementById("table1");
const inputSearch = document.getElementById("inputSearch");
const imgSearch = document.getElementById("imgSearch");
var currYear = new Date()
const year = currYear.getFullYear()
// const event = new KeyboardEvent('keydown', {
//   key: 'Enter',
//   code: 'Enter',
//   which: 13,
//   keyCode: 13,
// });

// dispatch the event on some DOM element
//inputSearch.dispatchEvent(event);
// Step 0: Store your API key here for reference and easy access.
const API_KEY = "live_ZouqIssLXv1utykx6JX1fypvshKB68oQPdaQtqmYZkXXhoss1stPaNAha9bymWTm";

axios.defaults.baseURL = "https://date.nager.at/api/v3";
axios.defaults.headers.common["x-api-key"] = API_KEY;
var countriesList = []
async function initialLoadAxios(){
  console.log("initload called")
  const response = await axios("/AvailableCountries/")
  const breeds = await response.data
  table.innerHTML = "";
  countriesList = []
  //console.log(breeds)
  console.log(inputSearch.value)
  await breeds.forEach((breed) => {
    if(breed.name.startsWith(inputSearch.value)){
      countriesList.push(breed.name)
      const tr = document.createElement("tr")
      const td = document.createElement("td")
      //td.id = breed.countryCode
      const a = document.createElement("a")
      //const div = document.createElement("div")
      a.textContent = breed.name + " (" +breed.countryCode +")"
      a.href = `./countryInfo.html?country=/PublicHolidays/${year}/${breed.countryCode}`
      //a.appendChild(div)
      td.appendChild(a)
      tr.appendChild(td)
      //console.log(tr.outerHTML)
      table.appendChild(tr)
    }
  })
}


console.log('"start')
initialLoadAxios()
//console.log(countriesList)
//inputSearch.onkeydown = initialLoadAxios

imgSearch.onclick = initialLoadAxios
function printVal(e){
  console.log(e)
}

async function getNextPublicHolidays() {
  
  console.log("need to see",this)
}

//table.onclick = getNextPublicHolidays








