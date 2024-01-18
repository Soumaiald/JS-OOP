
const table = document.getElementById("table1");
const table3 = document.getElementById("table3")
const inputSearch = document.getElementById("inputSearch");
const imgSearch = document.getElementById("imgSearch");

const event = new KeyboardEvent('keydown', {
  key: 'Enter',
  code: 'Enter',
  which: 13,
  keyCode: 13,
});

// dispatch the event on some DOM element
inputSearch.dispatchEvent(event);

const API_KEY = "live_ZouqIssLXv1utykx6JX1fypvshKB68oQPdaQtqmYZkXXhoss1stPaNAha9bymWTm";

axios.defaults.baseURL = "https://date.nager.at/api/v3";
axios.defaults.headers.common["x-api-key"] = API_KEY;
var countriesList = []
async function initialLoadAxios(){
  console.log("initload called")
  const response = await axios("/AvailableCountries/")
  const countries = await response.data
  table.innerHTML = "";
  countriesList = []
  //console.log(breeds)
  console.log(inputSearch.value)
  await countries.forEach((country) => {
    if(country.name.startsWith(inputSearch.value)){
      countriesList.push(country.name)
      const tr = document.createElement("tr")
      const td = document.createElement("td")
      const a = document.createElement("a")
      a.textContent = country.name + " (" +country.countryCode +")"
      a.href = `./countryInfo.html?country=${country.countryCode}`
      a.id = country.countryCode
      //a.appendChild(div)
      td.appendChild(a)
      tr.appendChild(td)
      //console.log(tr.outerHTML)
      table.appendChild(tr)
    }
  })
  const response1 = await axios("/NextPublicHolidaysWorldwide")
  const days = await response1.data
  table3.innerHTML = "";
  await days.forEach((day) => {
    
    const tr = document.createElement("tr")
    const date = document.createElement("td")
    const name = document.createElement("td")
    const aCountry = document.getElementById(day.countryCode)
    const country2 = document.createElement("td")
    date.textContent = day.date
    name.textContent = day.name
    country2.textContent = aCountry.textContent
    tr.appendChild(date)
    tr.appendChild(name)
    tr.appendChild(country2)
    //console.log(tr.outerHTML)
    table3.appendChild(tr)
    
  })
}


console.log('"start')
initialLoadAxios()
inputSearch.onkeydown = initialLoadAxios

imgSearch.onclick = initialLoadAxios
function printVal(e){
  console.log(e)
}






https://date.nager.at/api/v3

initialLoadAxios()






