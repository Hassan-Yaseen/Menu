const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "item-1.jpeg",
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet omnis ad labore provident quaerat beatae nulla expedita magni dolor in?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, reiciendis?`,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "item-2.jpeg",
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet omnis ad labore provident quaerat beatae nulla expedita magni dolor in?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, reiciendis?`,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "item-3.jpeg",
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet omnis ad labore provident quaerat beatae nulla expedita magni dolor in?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, reiciendis?`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "item-4.jpeg",
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet omnis ad labore provident quaerat beatae nulla expedita magni dolor in?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, reiciendis?`,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "item-5.jpeg",
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet omnis ad labore provident quaerat beatae nulla expedita magni dolor in?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, reiciendis?`,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "item-6.jpeg",
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet omnis ad labore provident quaerat beatae nulla expedita magni dolor in?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, reiciendis?`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "item-7.jpeg",
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet omnis ad labore provident quaerat beatae nulla expedita magni dolor in?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, reiciendis?`,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "item-8.jpeg",
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet omnis ad labore provident quaerat beatae nulla expedita magni dolor in?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, reiciendis?`,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "item-9.jpeg",
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet omnis ad labore provident quaerat beatae nulla expedita magni dolor in?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, reiciendis?`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "item-10.jpeg",
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet omnis ad labore provident quaerat beatae nulla expedita magni dolor in?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, reiciendis?`,
    },
  ];

  let menuItems=document.querySelector(".menu-items");
  let button_container=document.querySelector(".filter-buttons");

  window.addEventListener("DOMContentLoaded",()=>{
    displayMenuItems(menu);
    displayButtonsMenu();
  })

  
  
  function displayMenuItems(MenuItems){
    let displayMenu=MenuItems.map((item)=>{
        return`<div class="item">
                <div class="item-image">
                    <img src=${item.img} class="image">
                </div>
                <div class="item-content">
                    <div class="item-title">
                        <h4>${item.title}</h4>
                        <p>$${item.price}</p>
                    </div>
                    <div class="item-info">
                        ${item.desc}
                    </div>
                </div>
            </div>`;
    })
    displayMenu=displayMenu.join("");
    menuItems.innerHTML=displayMenu;
  }

  function displayButtonsMenu(){
    let categories=menu.reduce((values,item)=>{
        if(!values.includes(item.category)){
            values.push(item.category)
        }
        return values;
    },['all'])
    let displayButtons=categories.map((category)=>{
        return`<button class="button" class="${category}" data-id="${category}">${category}</button>`
    }).join("");
    button_container.innerHTML=displayButtons;

    let buttons=document.querySelectorAll(".button");
  
  buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let category=e.currentTarget.dataset.id;
        let menuCategory=menu.filter((menuItem)=>{
            const category2=menuItem.category;
            if(category2==category){
                return menuItem;
            }
        })
        if(category=="all"){
            displayMenuItems(menu);
        }
        else{
            displayMenuItems(menuCategory);
        }
    })
  })
  }
