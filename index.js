const data = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];



const cardContainer = document.getElementById("card_container");

let inputValue;

document.getElementById("search_item").addEventListener("input",(ev)=>{
    let manipulatedData = [...data]
    inputValue = ev.target.value;

    manipulatedData = data.filter((val)=>{
        if(val.name.toLocaleLowerCase().includes(inputValue)){
            return val;
        }else{

        }
    });

    renderRecipeCard(manipulatedData);

});

document.getElementById("searchBtn").addEventListener("click",(ev)=>{
inputValue = ev.target.value;

    manipulatedData = data.filter((val)=>{
        if(val.name.toLocaleLowerCase().includes(inputValue)){
            return val;
        }else{

        }
    });

    renderRecipeCard(manipulatedData);

});


document.getElementById("allRecipes").addEventListener("click",(ev)=>{
    renderRecipeCard(data);
});


document.getElementById("vegRecipes").addEventListener("click",(ev)=>{
    let manipulatedData = [...data]
    manipulatedData = data.filter((val)=>{
        if(val.type.toLocaleLowerCase() === "veg"){
            return val;
        }else{

        }
    });

    renderRecipeCard(manipulatedData);
});


document.getElementById("nonVegRecipes").addEventListener("click",(ev)=>{
    let manipulatedData = [...data]
    manipulatedData = data.filter((val)=>{
        if(val.type.toLocaleLowerCase() === "non-veg"){
            return val;
        }else{

        }
    });

    renderRecipeCard(manipulatedData);
});








renderRecipeCard(manipulatedData);



function renderRecipeCard(data) { 

    for (let i = 0; i < data.length; i++) {
       
    
    

   const card = document.createElement("div");

    card.className="recipe_card";

    card.innerHTML = `
    <img src="${data[i].imageSrc}" alt="">

    <span class="fade small">${data[i].type}</span>

    <div class="name_rating">
    <span class="recipe_name">${data[i].name}</span>
    <span class="rating fade small"><img src="assets/Frame 28.svg" alt="">${data[i].rating}</span>
    </div>
      
    <div>
        <span class="time">${data[i].time}</span>
        <span class="liked"></span>
        <span class="comment">
            <img src="assets/comments.svg" alt="">
        </span>
    </div>
   </div>
    
    `

    cardContainer.appendChild(card);
   }
}



