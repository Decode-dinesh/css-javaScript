let obj = [{
        img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Vermin_Supreme_USA_flag.svg",
        name: "USA",
        population: "331,449,281",
        region: "North America",
        capital: "Washington, D.C.",
    },

    {
        img: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg",
        name: "RUSSIA",
        population: "145,934,462",
        region: "northern Eurasia",
        capital: "Moscow",
    },

    {
        img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",
        name: "JAPAN",
        population: "126,476,461",
        region: "Asia",
        capital: "Tokyo",
    },

    {
        img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
        name: "AUSTRALIA",
        population: "25,694,393",
        region: "Oceania",
        capital: "Canberra",
    },

    {
        img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931958%29.svg",
        name: "FRANCE",
        population: "65,273,511",
        region: "Europe",
        capital: "Paris",
    },

    {
        img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
        name: "CHINA",
        population: "1,439,323,776",
        region: "Asia",
        capital: "Beijing",
    },
];



const mainheader = document.createElement("h1");
mainheader.innerHTML = "Country Details";
document.body.append(mainheader);

const startcont = document.createElement("div");
startcont.setAttribute("id", "main-div");
document.body.append(startcont);

function countries(obj) {
    const container = document.createElement("div");
    container.setAttribute("class", "main-container");
    startcont.append(container);

    const flag = document.createElement("img");
    flag.setAttribute("class", "img");
    flag.setAttribute("src", obj.img);
    container.append(flag);

    const country = document.createElement("div");
    country.setAttribute("class", "country");
    container.append(country);

    const header = document.createElement("h3");
    header.innerHTML = `<h2><b>${obj.name}</b></h2>
    <p>population : ${obj.population}</p>
    <p>Region : ${obj.region}</p>
    <p>Capital : ${obj.capital}</p>`
    country.append(header);

}

for (let i = 0; i < obj.length; i++) {
    countries(obj[i]);
}