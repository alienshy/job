let url = "http://localhost:3000/card"

let card = document.querySelector(".sectiondiv");
let srcinput = document.querySelector("#search");
let yaddasarr = [];
let filter = [];
let maxuz = 3;
let loadbtn = document.querySelector("#load");



////////getall?????
async function cards(){
    let res = await axios.get(url)
    let data =  await res.data;
    yaddasarr = data;
    card.innerHTML = "";
    filter = filter.length || srcinput.value ? filter :data;
    filter.slice(0,maxuz).forEach(element => {
        card.innerHTML+=`
        <div>
        <h2><a href="#">${element.name}</a></h2>
        <img src="${element.img}" alt="">
        <p>${element.text}</p>
    </div>
        `
    });
}
cards()


//////load more///
loadbtn.addEventListener("click",()=>{
    maxuz+=3;
    cards()
})


/////serch/////
srcinput.addEventListener("input",(e)=>{
    filter = yaddasarr;
    filter = filter.filter((local)=>{
       return   local.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())

    })
    cards();
})



