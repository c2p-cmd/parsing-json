document.addEventListener("DOMContentLoaded", fetchData);

async function fetchData() {
    const decoder = new TextDecoder("utf-8");

    let url = "https://shortstories-api.onrender.com/";
    const response = await fetch(url);
    const data = await response.arrayBuffer();

    const textData = decoder.decode(data);
    const jsonData = JSON.parse(textData);

    console.log(jsonData);

    document.getElementById("response").innerHTML = "<h2>JSONData we got:\n</h2><br>" + textData + "\n<h2>After parsing\n</h2><h3>" 
    + jsonData["title"] + "</h3><br>" + jsonData["story"];
}