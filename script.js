const books = [
    {
      author: "Chinua Achebe",
      country: "Nigeria",
      imageLink: "images/things-fall-apart.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      pages: 209,
      title: "Things Fall Apart",
      year: 1958
    },
    {
      author: "Hans Christian Andersen",
      country: "Denmark",
      imageLink: "images/fairy-tales.jpg",
      language: "Danish",
      link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      pages: 784,
      title: "Fairy tales",
      year: 1836
    },
    {
      author: "Dante Alighieri",
      country: "Italy",
      imageLink: "images/the-divine-comedy.jpg",
      language: "Italian",
      link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      pages: 928,
      title: "The Divine Comedy",
      year: 1315
    },
    {
      author: "Unknown",
      country: "Sumer and Akkadian Empire",
      imageLink: "images/the-epic-of-gilgamesh.jpg",
      language: "Akkadian",
      link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      pages: 160,
      title: "The Epic Of Gilgamesh",
      year: -1700
    },
    {
      author: "Unknown",
      country: "Achaemenid Empire",
      imageLink: "images/the-book-of-job.jpg",
      language: "Hebrew",
      link: "https://en.wikipedia.org/wiki/Book_of_Job\n",
      pages: 176,
      title: "The Book Of Job",
      year: -600
    }]


//FASE 1

let section = document.createElement("section");
section.id = "lista1"
document.querySelector("body").appendChild(section);

for (let i = 0; i < books.length; i++) {
    let article = document.createElement("article");
    article.className = "book-card"

    let image = document.createElement("img");
    image.src = books[i].imageLink;

    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let a = document.createElement("a")
    a.href = books[i].link
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");

    let textTitle = document.createTextNode(books[i].title);
    li1.appendChild(textTitle);

    let textAuthor = document.createTextNode("Author: " + books[i].author);
    li2.appendChild(textAuthor);

    let textLanguage = document.createTextNode("Language: " + books[i].language);
    li3.appendChild(textLanguage);

    li4.appendChild(a);
    let wikipedia = document.createTextNode("Wikipedia");
    a.appendChild(wikipedia)

    let textPages = document.createTextNode("Pages: " + books[i].pages);
    li5.appendChild(textPages);

    let textYear = document.createTextNode("Year: " + books[i].year);
    li6.appendChild(textYear);
    
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)
    ul.appendChild(li5)
    ul.appendChild(li6)

    
    article.appendChild(image)
    article.appendChild(ul)
    

    section.appendChild(article)
}





// FASE 2

let lista = ``

for (let i = 0; i < books.length; i++) {

     lista += `<article class="book-card">
                <img src="${books[i].imageLink}"></img>
                <ul>  
                    <li><b>${books[i].title}</b></li>
                    <li><b>Author:</b> ${books[i].author}</li>
                    <li><b>Language:</b> ${books[i].language}</li>
                    <li><a href="${books[i].link}">Wikipedia</a></li>
                    <li>${books[i].pages} pages</li>
                    <li><b>Year:</b> ${books[i].year}</li>
                </ul>
                </article>`
}

document.getElementById("lista2").innerHTML = lista;

