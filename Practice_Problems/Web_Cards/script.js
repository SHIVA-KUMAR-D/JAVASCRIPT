let con=document.querySelector(".container");

console.log("Script loaded");

function createCard(title,Cname,views,monthOld,duration,thumbnail) {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h2>${title}</h2>
        <p>Course Name: ${Cname}</p>
        <p>Views: ${views}</p>
        <p>Months Old: ${monthOld}</p>
        <p>Duration: ${duration}</p>
        <img src="${thumbnail}" alt="Thumbnail" class="thumbnail" style="width: 100%; height: auto;"/>
        <button class="btn">Watch Now</button>
    `;
    con.appendChild(card);
}
createCard("Introduction to JavaScript","JavaScript",100000,2,"30:02","https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB4h3uLYCuzx1GRi4VEg_QRgdPr0w");