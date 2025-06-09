const btn1 = document.getElementById("btn1");

const nTaker = document.getElementById("nTaker");

btn1.onclick = function(){
    const cl1 = document.getElementById("cl1").value;

    const cl2 = document.getElementById("cl2").value;

    const cl3 = document.getElementById('cl3').value;

    const cl4 = document.getElementById("cl4").value;

    const cl5 = document.getElementById("cl5").value;

    const names = [cl1, cl2, cl3, cl4, cl5].filter(name => name.trim() !== "");

    if (names.length > 0) {
        const randomName = names[Math.floor(Math.random() * names.length)];
        nTaker.textContent = randomName;
    } 
    
    else {
        nTaker.textContent = "Please enter at least one name.";
    }
}