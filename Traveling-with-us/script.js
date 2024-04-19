let tour = {
  name: "Mystical Bali Adventure",
  description: "Explore the enchanting island of Bali, with its lush jungles , vibrant culture, and ancient temples. Visit the iconic Tanah Lot temple, hike to the summit of Mount Batur, and unwind on theristine beaches of Nusa Dua",
  price: 2500,
  duration: "5 днів",
  
  displayInfo: function() {
    console.log("Назва туру:", this.name);
    console.log("Опис:", this.description);
    console.log("Ціна:", this.price + " $ ");
    console.log("Тривалість:", this.duration);
  }
};

tour.displayInfo();

function calculateTotalCost(tour, numberOfTravelers) {
  let totalCost = tour.price * numberOfTravelers;
  console.log("Загальна вартість туру для", numberOfTravelers, "мандрівників:", totalCost + " грн");
}

calculateTotalCost(tour, 4); 
