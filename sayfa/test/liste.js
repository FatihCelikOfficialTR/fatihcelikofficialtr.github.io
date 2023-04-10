let min_price = 0;
let max_price = 100;

$(document).ready(function () {
  showAllItems(); //Display all items with no filter applied
});

$("#min-price").on("change mousemove", function () {
  min_price = parseInt($("#min-price").val());
  $("#min-price-txt").text("$" + min_price);
  showItemsFiltered();
});

$("#max-price").on("change mousemove", function () {
  max_price = parseInt($("#max-price").val());
  $("#max-price-txt").text("$" + max_price);
  showItemsFiltered();
});

let category_items = [
  {
    id: 1,
    category_id: 8,
    title: "Shoes with id #1",
    thumbnail:
      "https://static.rollercoin.com/static/img/market/miners/61532146db5008102f9f77f1.gif?v=1.0.3",
    sizes: ["US-MEN-10", "US-MEN-11"]
  },
  {
    id: 2,
    category_id: 8,
    price: 31.93,
    title: "Shoes with id #2",
    thumbnail:
      "https://www.transparentpng.com/download/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
    sizes: ["US-MEN-13"]
  },
  {
    id: 3,
    category_id: 8,
    price: 49.44,
    title: "Shoes with id #3",
    thumbnail:
      "https://www.transparentpng.com/download/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
    sizes: ["US-MEN-14"]
  },
  {
    id: 4,
    category_id: 58,
    price: 65.38,
    title: "Shoes with id #4",
    thumbnail:
      "https://www.transparentpng.com/download/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
    sizes: ["US-MEN-13"]
  },
  {
    id: 5,
    category_id: 8,
    price: 27.21,
    title: "Shoes with id #5",
    thumbnail:
      "https://www.transparentpng.com/download/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
    sizes: ["US-MEN-9", "US-MEN-8", "US-MEN-10", "US-MEN-11", "US-MEN-12"]
  },
  {
    id: 6,
    category_id: 8,
    price: 73.05,
    title: "Shoes with id #6",
    thumbnail:
      "https://www.transparentpng.com/download/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
    sizes: [
      "US-MEN-9",
      "US-MEN-8",
      "US-MEN-10",
      "US-MEN-11",
      "US-MEN-12",
      "US-MEN-13"
    ]
  },
  {
    id: 7,
    category_id: 8,
    price: 51.96,
    title: "Shoes with id #7",
    thumbnail:
      "https://www.transparentpng.com/download/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
    sizes: ["US-MEN-9", "US-MEN-8", "US-MEN-10", "US-MEN-11"]
  },
  {
    id: 8,
    category_id: 8,
    price: 29.35,
    title: "Shoes with id #8",
    thumbnail:
      "https://www.transparentpng.com/download/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
    sizes: ["US-MEN-11", "US-MEN-12", "US-MEN-13"]
  },
  {
    id: 9,
    category_id: 8,
    price: 80.0,
    title: "Shoes with id #9",
    thumbnail:
      "https://www.transparentpng.com/download/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
    sizes: ["US-MEN-9", "US-MEN-8", "US-MEN-10", "US-MEN-11"]
  },
  {
    id: 10,
    category_id: 8,
    price: 70.07,
    title: "Shoes with id #10",
    thumbnail:
      "https://www.transparentpng.com/download/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
    sizes: ["US-MEN-9", "US-MEN-8", "US-MEN-10"]
  },
  {
    id: 11,
    category_id: 8,
    price: 79.37,
    title: "Shoes with id #11",
    thumbnail:
      "https://www.transparentpng.com/download/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
    sizes: ["US-MEN-9", "US-MEN-8", "US-MEN-10", "US-MEN-11", "US-MEN-12"]
  },
  {
    id: 12,
    category_id: 8,
    price: 27.14,
    title: "Shoes with id #12",
    thumbnail:
      "https://www.transparentpng.com/download/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
    sizes: ["US-MEN-9", "US-MEN-8", "US-MEN-10", "US-MEN-11"]
  }
];

function showAllItems() {
  //Default grid to show all items on page load in
  $("#display-items-div").empty();
  for (let i = 0; i < category_items.length; i++) {
    let item_content =
      '<div class="col-12 col-md-4 text-center product-card" data-available-sizes="' +
      category_items[i]["sizes"] +
      '"><b>' +
      category_items[i]["title"] +
      '</b><br><img src="' +
      category_items[i]["thumbnail"] +
      '" height="64" width="64" alt="shoe thumbnail"><p>$' +
      "</p></div>";
    $("#display-items-div").append(item_content);
  }
}

function showItemsFiltered() {
  //Default grid to show all items on page load in
  $("#display-items-div").empty();
  for (let i = 0; i < category_items.length; i++) {
    //Go through the items but only show items that have size from show_sizes_array
    if (
      category_items[i]["price"] <= max_price &&
      category_items[i]["price"] >= min_price
    ) {
      let item_content =
        '<div class="col-12 col-md-4 text-center product-card" data-available-sizes="' +
        category_items[i]["sizes"] +
        '"><b>' +
        category_items[i]["title"] +
        '</b><br><img src="' +
        category_items[i]["thumbnail"] +
        '" height="64" width="64" alt="shoe thumbnail"><p>$' +
        category_items[i]["price"] +
        "</p></div>";
      $("#display-items-div").append(item_content); //Display in grid
    }
  }
}
