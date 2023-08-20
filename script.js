let products = {
    data: [
      {
        productName: "Brainstorming Session",
        category: "past",
        
        image: "1.png",
        url: "eventpage1",
      },
      {
        productName: "LinkedIn+ Twitter Workshop",
        category: "upcoming",
        
        image: "2.png",
        url: "eventpage2",
      },

      {
        productName: "Business Plan Competition  ",
        category: "ongoing",
        
        image: "1.png",
        url: "eventpage3",
      },
      {
        productName: "Internship Startup Fair ",
        category: "upcoming",
        url: "eventpage4",
        image: "bee.jpeg",
      },


    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    card.setAttribute("data-category", i.category);
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
   
    
    var a = document.createElement('a'); 
                  
                // Create the text node for anchor element.
                var link = document.createTextNode(i.category);
                  
                // Append the text node to anchor element.
                a.appendChild(link); 
                  
                // Set the title.
                a.title = i.category; 
                  
                // Set the href property.
                a.href = i.url; 
                  
                // Append the anchor element to the body.
                container.appendChild(a);
    
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if (value === button.getAttribute("data-filter")) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
    //select all cards
   let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        let eventCategory = element.getAttribute("data-category");
        element.classList.add("hide");

        if (value === "all" || value === eventCategory) {
            element.classList.remove("hide");
        }
    });
}
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
};