// Code here!

// **1.** Byt *namn* på första hoodien från *Ash* till *Potato*.

const containerWithHoodies = document.querySelector(".art-1");
const oldText = containerWithHoodies.querySelector("h3");
const newText = document.createElement("h3");
newText.innerText = "Potato";

containerWithHoodies.replaceChild(newText, oldText);

// **2.** Byt *namn* på *Home* till *Start*.


 const changeNameHomeLink = "<a>Start</a>"

 const startLink= document.querySelector("a");
 startLink.innerHTML = changeNameHomeLink;

// **3.** Byt *namn* på *Contact* till *Mail Us*.

const navBar = document.querySelector("nav");
const links =  navBar.querySelectorAll ("a");

const oldStatment = links [3];

if (oldStatment){
    const changeContactName = document.createElement("a") 
    changeContactName.innerText = "Mail us";

    navBar.replaceChild(changeContactName, oldStatment);
}


// **4.** Byt ut informationen om *Sinus Hoodie  - Fire*.

const containerHoodieInfo = document.querySelector(".art-2");
const oldInfoHoodie = containerHoodieInfo.querySelector("p");
const newInfoHoodie = document.createElement("p");

newInfoHoodie.innerText = "Red hoodie for everyday use";

containerHoodieInfo.replaceChild(newInfoHoodie, oldInfoHoodie);

// **5.** Byt *bakgrundsfärg* och *text* på en knapp.
 
const button = document.querySelector(".art-1 button");
button.textContent = "Sold out";
button.style.backgroundColor = "darkgreen";

// **6.** Byt bakgrundsfärg på någon av produkterna.

containerHoodieInfo.style.backgroundColor = "lightblue";



// **7.** Byt ut adressen på sidan.

const changeAdress = document.querySelector("section article p")
const oldAdress = changeAdress.querySelector("p");
const newAdress = document.createElement("p");
newAdress.innerText = "Topasvägen 40, Löddeköpinge";

changeAdress.replaceWith(newAdress);

// **8.** Byt färg på samtliga ```<p>```.
// <details>
//     <summary>Tips</summary>
//     använd .querySelectorAll()
// </details>

const changeColorOnPTag = document.querySelectorAll("p");

changeColorOnPTag.forEach(p => {

    p.style.color= "blue";

});

// **9.** Ändra text på samtliga knappar till *add to cart*.

const allButtons = document.querySelectorAll("button");
allButtons.forEach(button => {
    button.textContent = "add to cart";
});


// **10.** Lägg till classen *active* på menyalternativet *home*.
// <details>
//     <summary>Tips</summary>
//     använd el.classList.add()
// </details>

const allLinksA = document.querySelectorAll("a");

allLinksA.forEach(link => {
    if (link.textContent === "Home") {
        link.classList.add ("active")
    }
});

// **11.** Ta bort classen *logo* på logotypen.
//<details>
  //  <summary>Tips</summary>
    //använd el.classList.remove()
//</details>
// 

const logo = document.querySelector ("header img");
logo.classList.remove("logo");

// ## Add Content
// 
// **12.** Lägg till ett nytt menyalternativ.

const updateMenu = document.querySelector("footer a");
const updateMenuAtag = document.createElement("a");
updateMenuAtag.innerText = "About us";

updateMenu.insertAdjacentElement("afterend", updateMenuAtag);




// **13.** Lägg till en ny produkt med följande info.
// 
// |el|beskrivning|
// |---|---|
// |img |hoodie-forrest.png|
// |h2 | Sinus Hoodie |
// |h3 |Forrest|
// |p|Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.|
// 
//<details>
  //  <summary>Tips</summary>
   // använd el.insertAdjecentHTML('beforeend',...)
//</details>

const main = document.querySelector("main");
const newHoodie = `
<article class="art-4">
            <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
            <h2>Sinus Hoodie</h2>
            <h3>Forrest</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>
            <button>Add to cart</button>
        </article>
`;

main.insertAdjacentHTML("beforeend", newHoodie);
// 
// ## Events
// **14.** Lyssna efter ett klick på logotypen (```.logo```). När den registrerar 
// ett klick skall du console.log:a "found you!";


logo.addEventListener("click", (event) => {
  console.log("Found you!");
});

// **15.** Lyssna efter klick på samtliga produkter ( ```<article>```). När den 
// registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".



const articles = document.querySelectorAll("article");
    articles.forEach(article => {
        article.addEventListener("click", (e) => {
            const hoodieName= article.querySelector("h3").innerText;
            console.log(`Hi, I'm article ${hoodieName}`);
        });
    });