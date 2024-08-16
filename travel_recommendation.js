const images = ["pic1.png","pic2.png","pic3.png","pic4.png"];
let curr=0;
function changeBackground() {
    const bgdiv = document.querySelector(".main");
    bgdiv.style.backgroundImage = `url(${images[curr]})`
    curr = (curr+1)% images.length;
}

setInterval(changeBackground, 2500);

changeBackground();

const searchbtn = document.getElementById('searchbtn');
const resetbtn = document.getElementById('resetbtn');
const searchresult = document.getElementById("searchResult");

function searchPlace(){
    
    const searchInput = document.getElementById("travelSearch").value;
    searchresult.innerHTML = '';
    
    function seacrchkeys(locations,sinput){
        const regex = new RegExp(sinput, 'i'); 
        for(let key in locations){
            if(regex.test(key)){
                return key;
            }
        };
        if(regex.test("country"))
            return "countries";
        if(regex.test("cities"))
            return "countries";
        if(regex.test("city"))
            return "countries";
        return null;
    };

    fetch('./travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        let key = seacrchkeys(data,searchInput)
        if(key){
            let resultset = []
            if(key=="countries"){
                data[key].forEach((country) => {
                    country.cities.forEach((city)=>{
                        resultset.push(city);
                    })
                });
            }
            else{
                resultset = data[key]
            }
            console.log(resultset)

            resultset.forEach((place) => {
                const placediv = document.createElement('div');
                placediv.className = "place";
                placediv.innerHTML = `<img src="${place.imageUrl}" alt="ref"><h3>${place.name}</h3><p>${place.description}</p><button>View</button>`
                searchresult.append(placediv)
            });
        }
        // else{
        //     const placediv = document.createElement('div');
        //     placediv.className = "place";
        //     placediv.innerHTML = `<h1>No results found</h1>`
        //     searchresult.append(placediv)
        // }
    })

}
searchbtn.addEventListener("click",searchPlace);


function clearResults() {
    searchresult.innerHTML = '';
}

resetbtn.addEventListener("click",clearResults);