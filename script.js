let url = "http://localhost:3000/card/"

let card = document.querySelector(".sectiondiv");
let srcinput = document.querySelector("#search");
let yaddasarr = [];
let filter = [];
let maxuz = 3;
let loadbtn = document.querySelector("#load");





////////getall?????
async function cards() {
    let res = await axios.get(url)
    let data = await res.data;
    yaddasarr = data;
    card.innerHTML = "";
    filter = filter.length || srcinput.value ? filter : data;
    filter.slice(0, maxuz).forEach(element => {
        card.innerHTML += `
        <div>
        <h2><a href="#">${element.name}</a></h2>
        <img src="${element.img}" alt="">
        <p>${element.text}</p>
        <span>
        <button class="first" onclick="deletecards(${element.id})" ><i class="bi bi-trash-fill"></i><a>Delete</a></button>
        <button class="second"><i class="bi bi-arrow-clockwise"></i><a>Update</a></button>
        <button class="sort"><i class="bi bi-info-circle-fill"></i><a>Info</a></button>
        </span>
    </div>
        `
    });
}
cards()

//////load more///
loadbtn.addEventListener("click", () => {
    maxuz += 3;
    cards()
})



/////serch/////
srcinput.addEventListener("input", (e) => {
    filter = yaddasarr;
    filter = filter.filter((local) => {
        return local.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())

    })
    cards();
})


//////delete////
async function deletecards(id){
    let res = axios.delete(url + id)
    window.location.reload()
    return res.data
}



