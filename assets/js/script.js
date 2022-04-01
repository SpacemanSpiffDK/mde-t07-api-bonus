// // JS by Dan Høegh
// // UCN MMD 2021

// // .substring()
// // .indexOf()
// // .split

// const nameStr = "Sophie Ellis Baxter";
// const nameSplit = nameStr.split(" ");
// let initials = "";
// nameSplit.forEach((item) =>{
//     initials += item.substring(0,1);
// });
// document.querySelector("#app")
// .innerHTML = `${nameStr} (${initials})`;
    

const typeStuff = () => {
    const typeDiv = document.querySelector("#typewriter");
    let currentText = "";
    const text = typeDiv.innerHTML;

    let i = 0;
    let timer = setInterval(() => {
        currentText = text.substring(0, i + 1);
        typeDiv.innerHTML = currentText;
        i++;
        if (i == text.length) {
            clearInterval(timer);
            setTimeout(typeStuff, 2000);
        }
    }, 50);
}

typeStuff();