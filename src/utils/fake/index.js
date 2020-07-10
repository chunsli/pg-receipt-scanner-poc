const data = [
  {
    "name": "Bakery / Cereals / Spreads",
    ...require('./data/001.json'),
    img: '/static/images/cat-001.png',
    "code": "001",
    "subs": [
      {
        "name": "Cakes",
        "code": "001",
        "subs": [
          {
            "name": "Sponge cakes",
            "code": "001"
          },
          {
            "name": "Chiffon cakes",
            "code": "002"
          },
          {
            "name": "Swiss rolls",
            "code": "003"
          },
          {
            "name": "Cheese cakes",
            "code": "004"
          },
          {
            "name": "Chocolate pies / Chocolate cakes",
            "code": "020"
          },
          {
            "name": "Chocolate brownies",
            "code": "030"
          },
          {
            "name": "Frozen cakes",
            "code": "100"
          }
        ]
      },
      {
        "name": "Breads",
        "code": "002",
        "subs": [
          {
            "name": "Bread loaf",
            "code": "001"
          },
          {
            "name": "Bread rolls",
            "code": "004"
          },
          {
            "name": "Pastry",
            "code": "100"
          },
          {
            "name": "Other bread",
            "code": "200"
          }
        ]
      },
      {
        "name": "Breakfast cereals",
        "code": "003",
        "subs": [
          {
            "name": "Instant oatmeal in sachets",
            "code": "001"
          },
          {
            "name": "Instant oatmeals",
            "code": "002"
          },
          {
            "name": "Quick cooking oatmeals",
            "code": "003"
          },
          {
            "name": "Rolled oats",
            "code": "005"
          },
          {
            "name": "Corn flakes / Cereals / Muesli",
            "code": "010"
          }
        ]
      },
      {
        "name": "Spreads",
        "code": "010",
        "subs": [
          {
            "name": "Peanut butter",
            "code": "011"
          },
          {
            "name": "Fruit jams / Fruit preserves",
            "code": "021"
          },
          {
            "name": "Tuna spreads",
            "code": "031"
          },
          {
            "name": "Hazelnut spreads",
            "code": "041"
          }
        ]
      },
      {
        "name": "Honey / Syrup",
        "code": "030",
        "subs": [
          {
            "name": "Honey",
            "code": "001"
          },
          {
            "name": "Honey with syrup",
            "code": "010"
          },
          {
            "name": "Syrup",
            "code": "020"
          }
        ]
      }
    ]
  },
  {
    "name": "Dairy / Soy products / Eggs",
    "code": "004",
    ...require('./data/004.json'),
    img: '/static/images/cat-004.png',
    "subs": [
      {
        "name": "Milk / Milk drinks",
        "code": "001",
        "subs": [
          {
            "name": "Chilled fresh milk/milk drinks",
            "code": "001"
          },
          {
            "name": "UHT milk/milk drinks",
            "code": "002"
          },
          {
            "name": "Evaporated milk",
            "code": "003"
          },
          {
            "name": "Sweetened condensed milk",
            "code": "010"
          }
        ]
      },
      {
        "name": "Cream",
        "code": "004",
        "subs": [
          {
            "name": "Whipping cream",
            "code": "001"
          }
        ]
      },
      {
        "name": "Cheese / Yoghurt products",
        "code": "002",
        "subs": [
          {
            "name": "Yoghurt",
            "code": "001"
          },
          {
            "name": "Yoghurt drinks / Lactic drinks",
            "code": "002"
          },
          {
            "name": "Yoghurt flavour drinks",
            "code": "003"
          },
          {
            "name": "Cheese slices",
            "code": "007"
          },
          {
            "name": "Cheese spreads / Cheese snacks",
            "code": "011"
          }
        ]
      },
      {
        "name": "Butter / Margarine",
        "code": "003",
        "subs": [
          {
            "name": "Butter",
            "code": "001"
          },
          {
            "name": "Margarine",
            "code": "002"
          },
          {
            "name": "Butter with vegetable oil",
            "code": "003"
          }
        ]
      },
      {
        "name": "Frozen confections",
        "code": "007",
        "subs": [
          {
            "name": "Ice cream",
            "code": "001"
          },
          {
            "name": "Ice cream bars / Ice sticks",
            "code": "003"
          }
        ]
      },
      {
        "name": "Soy drinks / Instant Soy Milk",
        "code": "020",
        "subs": [
          {
            "name": "Chilled fresh soy milk",
            "code": "001"
          },
          {
            "name": "Soy milk",
            "code": "005"
          },
          {
            "name": "Instant soy milk",
            "code": "009"
          }
        ]
      },
      {
        "name": "Bean curd products",
        "code": "030",
        "subs": [
          {
            "name": "Bean curds",
            "code": "001"
          },
          {
            "name": "Bean curd desserts",
            "code": "005"
          }
        ]
      },
      {
        "name": "Eggs",
        "code": "110",
        "subs": [
          {
            "name": "Chicken eggs",
            "code": "001"
          }
        ]
      }
    ]
  },
  {
    "name": "Candies / Biscuits / Snacks",
    "code": "009",
    ...require('./data/009.json'),
    img: '/static/images/cat-009.jpg',
    "subs": [
      {
        "name": "Candies / Confectioneries",
        "code": "003",
        "subs": [
          {
            "name": "Chocolates",
            "code": "001"
          },
          {
            "name": "Candies",
            "code": "003"
          },
          {
            "name": "Chewing gums",
            "code": "005"
          },
          {
            "name": "Jelly",
            "code": "010"
          }
        ]
      },
      {
        "name": "Dried fruits",
        "code": "009",
        "subs": [
          {
            "name": "Dried mangoes",
            "code": "009"
          },
          {
            "name": "Raisins",
            "code": "015"
          },
          {
            "name": "Dried Prunes",
            "code": "021"
          }
        ]
      },
      {
        "name": "Snack bars / Energy bars",
        "code": "501",
        "subs": [
          {
            "name": "Energy bars / Snack bars",
            "code": "205"
          },
          {
            "name": "Soya bars",
            "code": "101"
          }
        ]
      },
      {
        "name": "Biscuits",
        "code": "002",
        "subs": [
          {
            "name": "Sandwich crackers",
            "code": "001"
          },
          {
            "name": "Cookies",
            "code": "002"
          },
          {
            "name": "Wafers",
            "code": "003"
          },
          {
            "name": "Saltine crackers / Soda crackers / Cream crackers",
            "code": "004"
          },
          {
            "name": "Cheese crackers",
            "code": "005"
          },
          {
            "name": "Biscuit sticks",
            "code": "007"
          },
          {
            "name": "Others",
            "code": "008"
          }
        ]
      },
      {
        "name": "Snacks",
        "code": "001",
        "subs": [
          {
            "name": "Potato chips",
            "code": "001"
          },
          {
            "name": "Corn chips / Tortilla chips",
            "code": "002"
          },
          {
            "name": "Crispy crackers",
            "code": "003"
          },
          {
            "name": "Noodle snacks",
            "code": "005"
          },
          {
            "name": "Nuts",
            "code": "020"
          },
          {
            "name": "Seaweeds",
            "code": "025"
          },
          {
            "name": "Egg rolls",
            "code": "029"
          }
        ]
      }
    ]
  },
  {
    "name": "Rice / Fruits / Vegetables / Meat",
    "code": "015",
    ...require('./data/015.json'),
    img: '/static/images/cat-015.png',
    "subs": [
      {
        "name": "Rice",
        "code": "001",
        "subs": [
          {
            "name": "White rice",
            "code": "001"
          },
          {
            "name": "Red / Brown / Mixed rice",
            "code": "002"
          },
          {
            "name": "Oat rice",
            "code": "009"
          },
          {
            "name": "Glutinous rice",
            "code": "020"
          }
        ]
      },
      {
        "name": "Edible oil / Cooking oil",
        "code": "002",
        "subs": [
          {
            "name": "Peanut oil",
            "code": "001"
          },
          {
            "name": "Corn oil",
            "code": "003"
          },
          {
            "name": "Canola oil",
            "code": "004"
          },
          {
            "name": "Sunflower oil",
            "code": "006"
          },
          {
            "name": "Grapeseed oil",
            "code": "008"
          },
          {
            "name": "Extra virgin olive oil",
            "code": "010"
          },
          {
            "name": "Olive oil",
            "code": "012"
          },
          {
            "name": "Extra light olive oil",
            "code": "013"
          },
          {
            "name": "Blended pomace olive oil",
            "code": "015"
          },
          {
            "name": "Rice bran oil",
            "code": "018"
          },
          {
            "name": "Canola oil blends",
            "code": "005"
          },
          {
            "name": "Peanut oil blends",
            "code": "002"
          },
          {
            "name": "Corn oil blends",
            "code": "025"
          },
          {
            "name": "Sunflower oil blends",
            "code": "007"
          },
          {
            "name": "Soybean/Rapeseed oil and oil blends",
            "code": "020"
          }
        ]
      },
      {
        "name": "Canned food",
        "code": "003",
        "subs": [
          {
            "name": "Canned ham / luncheon meat",
            "code": "111"
          },
          {
            "name": "Canned pork cubes",
            "code": "121"
          },
          {
            "name": "Canned shredded pork",
            "code": "131"
          },
          {
            "name": "Canned sliced pork",
            "code": "141"
          },
          {
            "name": "Canned sausages",
            "code": "181"
          },
          {
            "name": "Canned sardines",
            "code": "501"
          },
          {
            "name": "Canned dace",
            "code": "531"
          },
          {
            "name": "Canned tuna",
            "code": "561"
          },
          {
            "name": "Canned fish fillets",
            "code": "591"
          },
          {
            "name": "Canned Abalone",
            "code": "601"
          },
          {
            "name": "Canned pineapples",
            "code": "801"
          },
          {
            "name": "Canned corn (whole kernel)",
            "code": "821"
          },
          {
            "name": "Canned corn (cream style)",
            "code": "823"
          },
          {
            "name": "Canned mushrooms",
            "code": "831"
          },
          {
            "name": "Canned peaches",
            "code": "851"
          },
          {
            "name": "Canned fruit mix",
            "code": "861"
          },
          {
            "name": "Canned kidney beans",
            "code": "881"
          },
          {
            "name": "Canned baked beans",
            "code": "901"
          },
          {
            "name": "Canned soups",
            "code": "951"
          }
        ]
      },
      {
        "name": "Aseptically packaged food",
        "code": "004",
        "subs": [
          {
            "name": "Soups",
            "code": "001"
          },
          {
            "name": "Fruits / Vegetables",
            "code": "002"
          }
        ]
      },
      {
        "name": "Fresh vegetables",
        "code": "051",
        "subs": [
          {
            "name": "Choy sum",
            "code": "051"
          },
          {
            "name": "Pak choy / Shanghai pak choy",
            "code": "071"
          },
          {
            "name": "Lettuce",
            "code": "101"
          },
          {
            "name": "Chinese lettuce",
            "code": "105"
          },
          {
            "name": "Romaine hearts",
            "code": "111"
          },
          {
            "name": "Green cabbage",
            "code": "129"
          },
          {
            "name": "Long cabbage",
            "code": "131"
          },
          {
            "name": "Baby cabbage",
            "code": "139"
          },
          {
            "name": "Cauliflower",
            "code": "151"
          },
          {
            "name": "Broccoli",
            "code": "161"
          },
          {
            "name": "Celery",
            "code": "201"
          },
          {
            "name": "Corn",
            "code": "301"
          },
          {
            "name": "Baby Corn",
            "code": "311"
          },
          {
            "name": "French bean",
            "code": "451"
          },
          {
            "name": "Sweet bean / Sugar snap",
            "code": "453"
          },
          {
            "name": "Dutch bean",
            "code": "455"
          },
          {
            "name": "Bell pepper / Capsicum",
            "code": "551"
          },
          {
            "name": "Tomatoes",
            "code": "651"
          },
          {
            "name": "Hairy gourd",
            "code": "705"
          },
          {
            "name": "Bitter cucumber",
            "code": "710"
          },
          {
            "name": "Carrots",
            "code": "751"
          },
          {
            "name": "Onions",
            "code": "781"
          },
          {
            "name": "Potatoes",
            "code": "801"
          },
          {
            "name": "Sweet Potatoes",
            "code": "805"
          },
          {
            "name": "Water Chestnuts",
            "code": "807"
          },
          {
            "name": "Garlics",
            "code": "900"
          }
        ]
      },
      {
        "name": "Fresh fruits",
        "code": "101",
        "subs": [
          {
            "name": "Apples",
            "code": "111"
          },
          {
            "name": "Bananas",
            "code": "101"
          },
          {
            "name": "Pears",
            "code": "121"
          },
          {
            "name": "Oranges",
            "code": "131"
          },
          {
            "name": "Grapefruits",
            "code": "135"
          },
          {
            "name": "Lemons",
            "code": "139"
          },
          {
            "name": "Pineapples",
            "code": "151"
          },
          {
            "name": "Strawberries",
            "code": "201"
          },
          {
            "name": "Kiwifruits",
            "code": "301"
          },
          {
            "name": "Grapes",
            "code": "401"
          },
          {
            "name": "Dragon fruit",
            "code": "551"
          },
          {
            "name": "Blueberries",
            "code": "589"
          }
        ]
      },
      {
        "name": "Chilled / Fresh meat",
        "code": "201",
        "subs": [
          {
            "name": "Chilled pork",
            "code": "101"
          },
          {
            "name": "Chilled whole chicken",
            "code": "131"
          }
        ]
      },
      {
        "name": "Previously frozen meat",
        "code": "221",
        "subs": [
          {
            "name": "Previously frozen pork",
            "code": "201"
          },
          {
            "name": "Previously frozen chicken wings",
            "code": "101"
          },
          {
            "name": "Previously frozen whole chicken",
            "code": "131"
          }
        ]
      },
      {
        "name": "Frozen meat / poultry",
        "code": "251",
        "subs": [
          {
            "name": "Frozen pork chops / steaks",
            "code": "201"
          },
          {
            "name": "Frozen chicken wings",
            "code": "101"
          },
          {
            "name": "Frozen chicken thighs",
            "code": "111"
          },
          {
            "name": "Frozen chicken breast",
            "code": "251"
          },
          {
            "name": "Frozen chicken fillets",
            "code": "261"
          },
          {
            "name": "Frozen whole chicken",
            "code": "131"
          }
        ]
      },
      {
        "name": "Frozen seafood",
        "code": "501",
        "subs": [
          {
            "name": "Frozen pacific saury",
            "code": "101"
          },
          {
            "name": "Frozen mackerel",
            "code": "111"
          },
          {
            "name": "Frozen Pollock Fillets",
            "code": "121"
          },
          {
            "name": "Frozen Halibut",
            "code": "131"
          },
          {
            "name": "Frozen Pompano",
            "code": "141"
          },
          {
            "name": "Frozen Salmon",
            "code": "151"
          },
          {
            "name": "Frozen Yellow Coraker",
            "code": "161"
          }
        ]
      },
      {
        "name": "Frozen vegetables",
        "code": "601",
        "subs": [
          {
            "name": "Frozen mixed vegetables",
            "code": "011"
          },
          {
            "name": "Frozen peas",
            "code": "101"
          },
          {
            "name": "Frozen baby peas",
            "code": "105"
          },
          {
            "name": "Frozen corn kernels",
            "code": "111"
          }
        ]
      }
    ]
  },
  {
    "name": "Cooking needs / Processed food",
    "code": "018",
    ...require('./data/018.json'),
    img: '/static/images/cat-018.png',
    "subs": [
      {
        "name": "Instant noodles",
        "code": "001",
        "subs": [
          {
            "name": "Packs",
            "code": "001"
          },
          {
            "name": "Cups / Bowls / Trays",
            "code": "002"
          }
        ]
      },
      {
        "name": "Udon noodles",
        "code": "002",
        "subs": [
          {
            "name": "Wet noodles",
            "code": "001"
          }
        ]
      },
      {
        "name": "Non-instant oriental noodles",
        "code": "003",
        "subs": [
          {
            "name": "Plain noodles / Somen noodles / Ramen noodles",
            "code": "001"
          },
          {
            "name": "Buckwheat noodles / Soba Noodles",
            "code": "003"
          },
          {
            "name": "Chinese noodles",
            "code": "005"
          },
          {
            "name": "Rice vermicelli / Rice noodles / Rice sticks",
            "code": "010"
          },
          {
            "name": "Green bean threads / Green bean vermicelli",
            "code": "015"
          }
        ]
      },
      {
        "name": "Non-instant Italian pasta",
        "code": "004",
        "subs": [
          {
            "name": "Long Italian pasta",
            "code": "001"
          },
          {
            "name": "Shaped Italian pasta",
            "code": "002"
          }
        ]
      },
      {
        "name": "Condiments & sauces / Cooking needs",
        "code": "005",
        "subs": [
          {
            "name": "Light soy sauces",
            "code": "031"
          },
          {
            "name": "Reduced salt light soy sauces",
            "code": "015"
          },
          {
            "name": "Soy sauces",
            "code": "001"
          },
          {
            "name": "Sweet soy sauces / Soy sauces for seafood",
            "code": "035"
          },
          {
            "name": "Dark soy sauces",
            "code": "033"
          },
          {
            "name": "Liquid seasoning / Wheat sauces",
            "code": "013"
          },
          {
            "name": "Oyster sauces",
            "code": "002"
          },
          {
            "name": "Bean sauces",
            "code": "003"
          },
          {
            "name": "XO sauces",
            "code": "023"
          },
          {
            "name": "Chili sauces / Chili bean sauces",
            "code": "004"
          },
          {
            "name": "Satay sauces",
            "code": "005"
          },
          {
            "name": "Curry sauces / Coconut curry sauces",
            "code": "006"
          },
          {
            "name": "Other sauces",
            "code": "007"
          },
          {
            "name": "Coconut milk / Coconut cream",
            "code": "008"
          },
          {
            "name": "Ketchup",
            "code": "010"
          },
          {
            "name": "Tomato paste / Tomato puree",
            "code": "009"
          },
          {
            "name": "Pasta sauce",
            "code": "225"
          },
          {
            "name": "Salad Dressing",
            "code": "305"
          },
          {
            "name": "Dry spices",
            "code": "105"
          },
          {
            "name": "Marinades / Pickles",
            "code": "011"
          },
          {
            "name": "Hot pot soup base",
            "code": "200"
          },
          {
            "name": "Chicken broth / Chicken soup base",
            "code": "201"
          },
          {
            "name": "Chicken broth concentrate",
            "code": "205"
          },
          {
            "name": "Chicken broth cubes",
            "code": "211"
          },
          {
            "name": "Chicken powder / Mushroom powder",
            "code": "221"
          },
          {
            "name": "MSG",
            "code": "016"
          },
          {
            "name": "Salt",
            "code": "017"
          },
          {
            "name": "Sugar / Sweeteners",
            "code": "018"
          },
          {
            "name": "Corn starch",
            "code": "020"
          },
          {
            "name": "Gelatine",
            "code": "710"
          },
          {
            "name": "Water chestnut flour",
            "code": "650"
          },
          {
            "name": "Rice flour / Glutinous rice flour",
            "code": "025"
          },
          {
            "name": "Chinese soup packs (Herbal soup base)",
            "code": "301"
          },
          {
            "name": "Instant Dessert",
            "code": "309"
          }
        ]
      },
      {
        "name": "Baking needs / Wheat flour",
        "code": "007",
        "subs": [
          {
            "name": "Self-raising flour",
            "code": "101"
          },
          {
            "name": "Cake flour / Low gluten flour",
            "code": "106"
          },
          {
            "name": "Plain flour / All purpose flour",
            "code": "111"
          },
          {
            "name": "Bread flour / High gluten flour / Strong flour",
            "code": "121"
          },
          {
            "name": "Bread mix / Bread premix",
            "code": "131"
          },
          {
            "name": "Cake mix / Cake premix",
            "code": "136"
          },
          {
            "name": "Pancake mix / Pancake premix",
            "code": "141"
          },
          {
            "name": "Bread yeast",
            "code": "151"
          },
          {
            "name": "Baking soda",
            "code": "161"
          }
        ]
      },
      {
        "name": "Frozen / Chilled processed food",
        "code": "010",
        "subs": [
          {
            "name": "Dim sum",
            "code": "010"
          },
          {
            "name": "Ham",
            "code": "020"
          },
          {
            "name": "Bacon",
            "code": "030"
          },
          {
            "name": "Sausages",
            "code": "040"
          },
          {
            "name": "Pig knuckles",
            "code": "045"
          },
          {
            "name": "Fish balls",
            "code": "050"
          },
          {
            "name": "Congee / Noodles",
            "code": "060"
          },
          {
            "name": "Desserts",
            "code": "070"
          }
        ]
      }
    ]
  },
  {
    "name": "Drinks",
    "code": "027",
    ...require('./data/027.json'),
    img: '/static/images/cat-027.png',
    "subs": [
      {
        "name": "Carbonated drinks",
        "code": "001",
        "subs": [
          {
            "name": "Bottles",
            "code": "001"
          },
          {
            "name": "Canned",
            "code": "002"
          }
        ]
      },
      {
        "name": "Coffee / Tea bags / Milk tea / Yuan yang",
        "code": "003",
        "subs": [
          {
            "name": "Chinese tea bags",
            "code": "001"
          },
          {
            "name": "Western tea bags",
            "code": "002"
          },
          {
            "name": "Instant coffee",
            "code": "003"
          },
          {
            "name": "Coffee drinks",
            "code": "004"
          },
          {
            "name": "Instant milk tea",
            "code": "005"
          },
          {
            "name": "Milk tea drinks",
            "code": "006"
          },
          {
            "name": "Yuan Yang drinks",
            "code": "007"
          }
        ]
      },
      {
        "name": "Fruit Juices / Cordials",
        "code": "004",
        "subs": [
          {
            "name": "Chilled juices/juice drinks",
            "code": "001"
          },
          {
            "name": "Ambient juices/juice drinks",
            "code": "002"
          },
          {
            "name": "Cordials",
            "code": "003"
          }
        ]
      },
      {
        "name": "Oriental drinks",
        "code": "005",
        "subs": [
          {
            "name": "Juices",
            "code": "001"
          },
          {
            "name": "Health drinks",
            "code": "002"
          },
          {
            "name": "Tea",
            "code": "003"
          },
          {
            "name": "Green tea",
            "code": "004"
          },
          {
            "name": "Lemon tea",
            "code": "005"
          },
          {
            "name": "Honey Citron Tea",
            "code": "006"
          }
        ]
      },
      {
        "name": "Bottled water / Sports drinks / Energy drinks",
        "code": "006",
        "subs": [
          {
            "name": "Pure distilled water",
            "code": "001"
          },
          {
            "name": "Distilled water with minerals",
            "code": "005"
          },
          {
            "name": "Mineralized water",
            "code": "010"
          },
          {
            "name": "Mineral water / Spring water / Artesian water",
            "code": "110"
          },
          {
            "name": "Sports drinks",
            "code": "301"
          },
          {
            "name": "Energy drinks",
            "code": "601"
          },
          {
            "name": "Enhanced waters",
            "code": "701"
          }
        ]
      },
      {
        "name": "Cereal drinks / Malted drinks / Chocolate drinks",
        "code": "009",
        "subs": [
          {
            "name": "Cereal drinks / Malted drinks",
            "code": "005"
          }
        ]
      },
      {
        "name": "Desserts",
        "code": "011",
        "subs": [
          {
            "name": "Mango Smoothie",
            "code": "001"
          }
        ]
      }
    ]
  },
  {
    "name": "Milk powder / Baby care",
    "code": "037",
    ...require('./data/037.json'),
    img: '/static/images/cat-037.png',
    "subs": [
      {
        "name": "Infant formula / Growing-up formula",
        "code": "001",
        "subs": [
          {
            "name": "Infant formula / Follow-on formula / Toddler formula / Growing-up formula",
            "code": "001"
          },
          {
            "name": "Children's nutrition supplements",
            "code": "003"
          }
        ]
      },
      {
        "name": "Pregnant women's milk powder",
        "code": "002",
        "subs": [
          {
            "name": "Pregnant women's milk powder",
            "code": "001"
          }
        ]
      },
      {
        "name": "Adult milk powder",
        "code": "003",
        "subs": [
          {
            "name": "Full cream milk powder",
            "code": "001"
          },
          {
            "name": "Low fat / Skimmed milk powder",
            "code": "002"
          },
          {
            "name": "Senior formula",
            "code": "003"
          },
          {
            "name": "Nutrition supplements",
            "code": "010"
          }
        ]
      },
      {
        "name": "Baby foods / Infant foods",
        "code": "011",
        "subs": [
          {
            "name": "Infant rice cereals / Baby rice cereals",
            "code": "101"
          },
          {
            "name": "Baby snacks",
            "code": "105"
          }
        ]
      },
      {
        "name": "Baby products",
        "code": "020",
        "subs": [
          {
            "name": "Diapers",
            "code": "010"
          },
          {
            "name": "Diaper pants",
            "code": "015"
          },
          {
            "name": "Baby wipes",
            "code": "020"
          },
          {
            "name": "Shampoos",
            "code": "040"
          },
          {
            "name": "Body washes",
            "code": "030"
          },
          {
            "name": "Baby Oils",
            "code": "050"
          }
        ]
      }
    ]
  },
  {
    "name": "Personal care",
    "code": "040",
    ...require('./data/040.json'),
    img: '/static/images/cat-040.jpg',
    "subs": [
      {
        "name": "Oral care",
        "code": "001",
        "subs": [
          {
            "name": "Toothpastes",
            "code": "001"
          },
          {
            "name": "Floss",
            "code": "002"
          },
          {
            "name": "Mouthwashes",
            "code": "003"
          },
          {
            "name": "Toothbrushes",
            "code": "004"
          },
          {
            "name": "Electric toothbrush brushheads",
            "code": "005"
          },
          {
            "name": "Electric toothbrushes (alkaline Battery)",
            "code": "006"
          },
          {
            "name": "Electric toothbrushes (rechargeable)",
            "code": "007"
          }
        ]
      },
      {
        "name": "Feminine care",
        "code": "002",
        "subs": [
          {
            "name": "Sanitary napkins",
            "code": "001"
          },
          {
            "name": "Sanitary pads",
            "code": "002"
          },
          {
            "name": "Sanitary tampons",
            "code": "008"
          },
          {
            "name": "Feminine washes",
            "code": "012"
          }
        ]
      },
      {
        "name": "Hair care",
        "code": "004",
        "subs": [
          {
            "name": "Shampoos",
            "code": "001"
          },
          {
            "name": "Conditioners",
            "code": "003"
          },
          {
            "name": "Hair stylings",
            "code": "010"
          },
          {
            "name": "Hair Colourings",
            "code": "012"
          }
        ]
      },
      {
        "name": "Bathing lotions / Liquid soap / Soap",
        "code": "003",
        "subs": [
          {
            "name": "Body washes / Shower gels",
            "code": "001"
          },
          {
            "name": "Hand washes",
            "code": "002"
          },
          {
            "name": "Soaps",
            "code": "007"
          }
        ]
      },
      {
        "name": "Hand sanitation",
        "code": "009",
        "subs": [
          {
            "name": "Hand sanitizers",
            "code": "001"
          },
          {
            "name": "Hand sanitizing moist wipes",
            "code": "002"
          }
        ]
      },
      {
        "name": "Wet wipes",
        "code": "011",
        "subs": [
          {
            "name": "Disposable wet wipes",
            "code": "001"
          },
          {
            "name": "Wet bath tissues",
            "code": "002"
          }
        ]
      },
      {
        "name": "Skin care",
        "code": "005",
        "subs": [
          {
            "name": "Face cleansing foams / Facial cleansers / Face cleansing gels",
            "code": "001"
          },
          {
            "name": "Face moisturising creams/gel creams/lotions",
            "code": "002"
          },
          {
            "name": "Body lotions/creams",
            "code": "003"
          },
          {
            "name": "Body oils",
            "code": "004"
          },
          {
            "name": "Petroleum jelly",
            "code": "005"
          },
          {
            "name": "Sunscreen products",
            "code": "007"
          },
          {
            "name": "Lip balms",
            "code": "009"
          },
          {
            "name": "Cleansing cotton",
            "code": "015"
          },
          {
            "name": "Facial masks / Eye masks",
            "code": "018"
          }
        ]
      },
      {
        "name": "Women's hair removers",
        "code": "006",
        "subs": [
          {
            "name": "Women's razor sets",
            "code": "001"
          },
          {
            "name": "Women's razor blade refill cartridges",
            "code": "011"
          },
          {
            "name": "Women's disposable razors",
            "code": "021"
          }
        ]
      },
      {
        "name": "Men's care",
        "code": "007",
        "subs": [
          {
            "name": "Razor kits",
            "code": "001"
          },
          {
            "name": "Razor blade refill cartridges",
            "code": "003"
          },
          {
            "name": "razors",
            "code": "005"
          },
          {
            "name": "Shaving foam / Shaving cream / Shaving gel",
            "code": "007"
          }
        ]
      },
      {
        "name": "Antiperspirants / Deodorants",
        "code": "008",
        "subs": [
          {
            "name": "Sprays",
            "code": "001"
          },
          {
            "name": "Roll on",
            "code": "002"
          },
          {
            "name": "Sticks",
            "code": "003"
          }
        ]
      },
      {
        "name": "Drugs / Herbs",
        "code": "010",
        "subs": [
          {
            "name": "Pain / Fever / Cold / Flu medicines",
            "code": "001"
          },
          {
            "name": "Cough medicines",
            "code": "003"
          },
          {
            "name": "Ointments",
            "code": "009"
          },
          {
            "name": "Proprietary Chinese medicines - Oral",
            "code": "019"
          },
          {
            "name": "Proprietary Chinese medicines - powder for oral solution",
            "code": "020"
          },
          {
            "name": "Proprietary Chinese medicines - Medicinal oils",
            "code": "022"
          },
          {
            "name": "Gastro-intestinal drugs",
            "code": "029"
          },
          {
            "name": "Other health supplements",
            "code": "190"
          },
          {
            "name": "Alcohol of mint / Essential oil of peppermint",
            "code": "200"
          },
          {
            "name": "Insect repellents",
            "code": "210"
          },
          {
            "name": "Pain relief patches",
            "code": "230"
          }
        ]
      },
      {
        "name": "Health supplements / Dietary supplements",
        "code": "013",
        "subs": [
          {
            "name": "Lozenges",
            "code": "001"
          },
          {
            "name": "Bird's nest",
            "code": "003"
          },
          {
            "name": "Chicken essence",
            "code": "008"
          },
          {
            "name": "Vitamins / Minerals",
            "code": "015"
          },
          {
            "name": "Fish oil / Fish liver oil / Liver oil",
            "code": "019"
          }
        ]
      },
      {
        "name": "First aid",
        "code": "015",
        "subs": [
          {
            "name": "Tape",
            "code": "003"
          },
          {
            "name": "Cooling gel sheets",
            "code": "005"
          }
        ]
      },
      {
        "name": "Health protection products",
        "code": "805",
        "subs": [
          {
            "name": "Face masks / Surgical masks",
            "code": "001"
          }
        ]
      },
      {
        "name": "Medical equipment",
        "code": "801",
        "subs": [
          {
            "name": "Medical thermometers",
            "code": "001"
          },
          {
            "name": "Blood pressure monitors",
            "code": "002"
          }
        ]
      },
      {
        "name": "Contraceptives",
        "code": "110",
        "subs": [
          {
            "name": "Condoms",
            "code": "101"
          }
        ]
      },
      {
        "name": "Adult diapers / diaper pants",
        "code": "210",
        "subs": [
          {
            "name": "Adult Diapers/Diaper Pants",
            "code": "301"
          },
          {
            "name": "Underpads",
            "code": "303"
          }
        ]
      }
    ]
  },
  {
    "name": "Household",
    "code": "045",
    ...require('./data/045.json'),
    img: '/static/images/cat-045.png',
    "subs": [
      {
        "name": "Laundry needs",
        "code": "001",
        "subs": [
          {
            "name": "Laundry powder detergents",
            "code": "001"
          },
          {
            "name": "Liquid laundry detergents",
            "code": "002"
          },
          {
            "name": "Stain Removers",
            "code": "004"
          },
          {
            "name": "Softeners",
            "code": "003"
          }
        ]
      },
      {
        "name": "Household cleaning",
        "code": "002",
        "subs": [
          {
            "name": "Dishwashing liquid",
            "code": "001"
          },
          {
            "name": "General cleaners",
            "code": "002"
          },
          {
            "name": "Glass cleaners",
            "code": "003"
          },
          {
            "name": "Bathroom cleaners",
            "code": "005"
          },
          {
            "name": "Kitchen cleaners",
            "code": "011"
          },
          {
            "name": "Toilet cleaners",
            "code": "007"
          },
          {
            "name": "Furniture polish",
            "code": "009"
          },
          {
            "name": "Bleach",
            "code": "015"
          },
          {
            "name": "Disinfectants",
            "code": "017"
          },
          {
            "name": "Drain cleaners",
            "code": "020"
          },
          {
            "name": "Air Conditioner Cleaner",
            "code": "251"
          },
          {
            "name": "Gloves",
            "code": "025"
          },
          {
            "name": "Scourers / Sponges",
            "code": "031"
          },
          {
            "name": "Mops",
            "code": "111"
          }
        ]
      },
      {
        "name": "Paper",
        "code": "003",
        "subs": [
          {
            "name": "Boxed facial tissues",
            "code": "001"
          },
          {
            "name": "Soft pack facial tissues",
            "code": "101"
          },
          {
            "name": "Pocket size facial tissues",
            "code": "111"
          },
          {
            "name": "Bathroom tissues / Toilet tissues / Toilet rolls / Toilet paper",
            "code": "002"
          },
          {
            "name": "Kitchen paper towels",
            "code": "003"
          },
          {
            "name": "Hand paper towels",
            "code": "020"
          }
        ]
      },
      {
        "name": "Wraps / Food bags / Foil",
        "code": "004",
        "subs": [
          {
            "name": "Cling wraps",
            "code": "001"
          },
          {
            "name": "Storage bags",
            "code": "003"
          },
          {
            "name": "Aluminium foil",
            "code": "005"
          }
        ]
      },
      {
        "name": "Dehumidfiers / Mold prevention",
        "code": "020",
        "subs": [
          {
            "name": "Dehumidifiers - tank",
            "code": "010"
          },
          {
            "name": "Dehumidifying bags",
            "code": "020"
          }
        ]
      },
      {
        "name": "Insecticides",
        "code": "027",
        "subs": [
          {
            "name": "Insecticides",
            "code": "005"
          },
          {
            "name": "Mosquito repellent",
            "code": "033"
          }
        ]
      },
      {
        "name": "Electrical products",
        "code": "801",
        "subs": [
          {
            "name": "Compact fluorescent lamps / Energy saving lamps",
            "code": "201"
          },
          {
            "name": "LED lamps",
            "code": "211"
          }
        ]
      },
      {
        "name": "Batteries",
        "code": "803",
        "subs": [
          {
            "name": "AA batteries",
            "code": "001"
          },
          {
            "name": "AAA batteries",
            "code": "005"
          }
        ]
      },
      {
        "name": "Pet food",
        "code": "805",
        "subs": [
          {
            "name": "Dry Dog Foods",
            "code": "001"
          },
          {
            "name": "Canned Dog Foods",
            "code": "003"
          },
          {
            "name": "Dry Cat Foods",
            "code": "005"
          },
          {
            "name": "Canned Cat Foods",
            "code": "007"
          }
        ]
      },
      {
        "name": "Pet care",
        "code": "809",
        "subs": [
          {
            "name": "Cat Litter",
            "code": "001"
          }
        ]
      }
    ]
  },
  {
    "name": "Beer / Wines / Spirits",
    "code": "046",
    ...require('./data/046.json'),
    img: '/static/images/cat-046.png',
    "subs": [
      {
        "name": "Beer",
        "code": "001",
        "subs": [
          {
            "name": "Canned",
            "code": "002"
          },
          {
            "name": "Bottles",
            "code": "101"
          }
        ]
      },
      {
        "name": "Shandy",
        "code": "002",
        "subs": [
          {
            "name": "Bottles",
            "code": "001"
          },
          {
            "name": "Canned",
            "code": "002"
          }
        ]
      },
      {
        "name": "Red wines",
        "code": "003",
        "subs": [
          {
            "name": "Australian",
            "code": "001"
          },
          {
            "name": "French",
            "code": "002"
          },
          {
            "name": "American (US)",
            "code": "010"
          }
        ]
      },
      {
        "name": "White wines",
        "code": "004",
        "subs": [
          {
            "name": "Australian",
            "code": "001"
          },
          {
            "name": "French",
            "code": "002"
          },
          {
            "name": "American (US)",
            "code": "003"
          }
        ]
      },
      {
        "name": "Shaoxing wines",
        "code": "005",
        "subs": [
          {
            "name": "Chinese",
            "code": "001"
          }
        ]
      },
      {
        "name": "Rice wines",
        "code": "006",
        "subs": [
          {
            "name": "Chinese",
            "code": "001"
          }
        ]
      }
    ]
  }
]

export const isPgBrand = (brand) => [
  "all good",
  "luvs",
  "pampers",
  "ace",
  "ariel",
  "bounce",
  "cheer",
  "downy",
  "dreft",
  "era",
  "gain",
  "rindex 3en1",
  "tide",
  "bounty",
  "charmin",
  "puffs",
  "always",
  "always discreet",
  "just",
  "tampax",
  "this is l",
  "braun",
  "gillette",
  "joy+glee",
  "venus",
  "the art of shaving",
  "aussie",
  "head & shoulders",
  "herbal essences",
  "old spice",
  "pantene",
  "ambi pur",
  "cascade",
  "comet",
  "dawn",
  "febreze",
  "gain",
  "joy",
  "microban 24",
  "mr. clean",
  "salvo",
  "swiffer",
  "zevo",
  "crest",
  "fixodent",
  "oral-b",
  "scope",
  "align",
  "clearblue",
  "meta",
  "pepto-bismol",
  "prilosec otc",
  "vicks",
  "zzzquil",
  "gillette",
  "ivory",
  "native",
  "olay",
  "old spice",
  "safeguard",
  "secret",
  "snowberry",
  "sk-ii "
].includes(brand.toLowerCase())

export const logo = (brand) => {
  return {
    JASONS: '/static/images/mpj logo.png',
    PARKNSHOP: '/static/images/pns_logo.png',
    WATSONS: '/static/images/watsons_logo.png',
    WELLCOME: '/static/images/wellcome_logo.jpg',
  }[brand]
}

export const brandName = (brand) => {
  return {
    JASONS: 'Market Place',
    PARKNSHOP: '百佳',
    WATSONS: '屈臣氏',
    WELLCOME: '惠康',
    AEON: 'AEON',
  }[brand]
}


export default data
