const mongoose = require('mongoose');
const Product = require('./models/product');

const products = [
    {
        name:"Air Jordan 1 Retro High OG",
        img :"https://images.unsplash.com/photo-1615420830426-a3484174cf1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG5pa2UlMjBqb3JkYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 130,
        desc:"Familiar but always fresh, the iconic Air Jordan 1 is remastered for today's sneakerhead culture. This Retro High OG version goes all in with premium leather, comfortable cushioning and classic design details."
    },
    {
        name:"Nike Air Force 1 LE",
        img :"https://images.unsplash.com/photo-1641792669610-83e23d551bec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5pa2UlMjBhaXIlMjBqb3JkYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 90,
        desc:"This is what legends are made of. The Nike Air Force 1 LE brings back the ’82 hardwood icon into an everyday style in all-white or all-black. The durability,feel and Air are still there for those who love a classic"
    },
    {
        name:"Nike Air Jorden 3",
        img :"https://images.unsplash.com/photo-1618961325465-2f22265cb62b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ1fHxuaWtlJTIwam9yZGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 160,
        desc:"Crossing hardwood comfort with off-court flair, the b-ball original gets you ready for fall. Premium materials like slub canvas underlays bring a classic look, while textured leather adds sophistication to any outfit. Vintage Sail accents on the outsole and Swoosh pair with throwback labeling for a retro boost."
    },
    {
        name:"Nike SB Dunk Low",
        img :"https://images.unsplash.com/photo-1624005340901-e6cffc4e3a32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc0fHxuaWtlJTIwam9yZGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 90,
        desc:"The Nike SB Dunk Low Pro “What The Paul” was released to celebrate Nike’s longstanding partnership with eight-time X-Game medalist Paul Rodriguez, who now has 10 signature shoe designs to his name. As tribute to those designs,this Dunk features some of the most iconic colorways and design details found in P-Rod’s extensive sneaker line."
    },
    {
        name:"Nike Air jorden 4",
        img :"https://images.unsplash.com/photo-1634525950737-91f322cb05eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgzfHxuaWtlJTIwam9yZGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 170,
        desc:"Naturally, this bold Air Jordan 4 will be easy to spot in the streets.Featuring a classic full-grain nubuck leather upper in Tour Yellow with Dark Blue Grey accents and a white midsole, this colourway is perfectly coordinated for striking fits—just let the sneakers do all the talking. If you couldn't feel the energy enough from the pictures alone, these Air Jordan 4s are certainly loud enough for any show-stopping event."
    },
    {
        name:"Nike Air Jordan 6",
        img :"https://images.unsplash.com/photo-1643584549037-96e2a1652a1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMyfHxuaWtlJTIwam9yZGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 210,
        desc:"Like many Air Jordan Retros, the AJ 6 is going to be most appreciated by people who won't play in it. Yes, it still has the chops that once made it great, but today's game has already seen a lot of better and cheaper techs. Though still functional, the AJ 6 just cannot compare anymore performance-wise."
    },
    {
        name:"Nike Air force 1 yellow",
        img :"https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzQzfHxuaWtlJTIwam9yZGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 110,
        desc:"Sports Matirial Imported Rubber sole Flywire cables extend from midfoot to wrap around your heel for lockdown Four independent Zoom Air units on the forefoot for low-profile, flexible, and responsive cushioning.. Two Zoom Air units located under the heel and first met head are 13mm thick for response Synthetic Rubber sole."
    },
    {
        name:"Nike Air Jorden 5",
        img :"https://images.unsplash.com/photo-1645833889386-2782e290ee3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fG5pa2UlMjBqb3JkYW4lMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price: 190,
        desc:"The Air Jordan 5 Retro, inspired by the World War 2 Mustang Fighter Jet, was meant to be an attacker on the court, ready to charge aggressively into the enemy. But like other retro Jordans (including the Air Jordan 1 Retro High and retro version of the Air Jordan 6), its purpose has shifted from being a performance shoe to an iconic fashion sneaker."
    },
    {
        name:"Nike Air Jorden 13 Greay surface ",
        img :"https://images.unsplash.com/photo-1533681018184-68bd1d883b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc0fHxuaWtlJTIwam9yZGFuJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 260,
        desc:"The Air Jordan 13 Retro brings back the memorable game shoe that Michael Jordan wore during the '97–98 season, all the way to his 6th championship title. All the classic details are there like the quilted overlay, iconic sculpted midsole and holographic eye."
    },
    {
        name:"Nike Men's Air Jordan 16 XVI Retro",
        img :"https://images.unsplash.com/photo-1643584549108-f97bf8b969f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjU5fHxuaWtlJTIwam9yZGFuJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 290,
        desc:"Designed by Nike Senior Footwear designer Wilson Smith, the Air Jordan 16 debuted in 2001 and was the first signature Air Jordan sneaker after the Air Jordan 3 to not be designed by Tinker Hatfield. The Jordan 16 borrows several design cues from previous Jordans which include the patent leather from the Air Jordan 11 and the clear outsole from the Air Jordan 5. A first for the Jordan line, the 16 introduced a gaiter which served both aesthetic and performance purposes."
    },
    {
        name:"Nike Air force 1 Black",
        img :"https://images.unsplash.com/photo-1581067675122-a07ed597f1ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE5fHxuaWtlJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 80,
        desc:"This iteration of our iconic Nike Air Force 1 '07 LV8 has hoops-inspired performance features that provide a comfortable base with flashing-light-activated design details."
    },
    {
        name:"Nike Air Jordan 1 PSG",
        img :"https://images.unsplash.com/photo-1634320498229-0b8c7d009fe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjUzfHxuaWtlJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 110,
        desc:"Step into style with the Air Jordan 1 Zoom Air Comfort x Paris Saint-Germain. Adding another chapter to the iconic silhouette's history, this version uses a soft suede with a microfibre lining and upgraded full-length Zoom cushioning underfoot. Building on a long-time partnership with Jordan Brand, this colourway features hues and details inspired by the historic French football club."
    },
    {
        name:"Nike killshot 2",
        img :"https://images.unsplash.com/photo-1612199909898-2d8341f72ff1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzc1fHxuaWtlJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 140,
        desc:"Nike Killshot 2 throws out a perfectly executed classic tennis styling that's simple and clean. Tossing it with different wardrobes is fun and easy. If there's something this go-to killer kick is guilty of, it has a well-cushioned foam that's gentle on the feet and legs. If you're up for reasonably-priced sneaks, you might find this Nike retro arresting."
    },
    {
        name:"PUMA Smash v2 Unisex Sneakers",
        img :"https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 115,
        desc:"Smash was such a hit on the courts, we’ve decided to take these classic sports shoes and deem them an all-around fashion icon. Updated with an improved feel and fit, we’re pretty sure they’ll earn top-seed status."
    }
]


// //simple way
// const seedDB = async() =>{
//         await Product.insertMany(products);
//         console.log("DB Seeded");
// }



//another way
let iSTrue = true;

const seedDB = async() =>{

    if(iSTrue){
        await Product.insertMany(products);
        console.log("DB Seeded");
        iSTrue = false;
    }  
}



module.exports = seedDB;

