const PRODUCT_SAMPLE_DATA = [
    {
        "productId": "0001",
        "productName": "Gloves",
        "productDescription": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "productType": 1,
        "productQuantity": 661,
        "price": "921.00",
        "img": ""
    },
    {
        "productId": "0002",
        "productName": "Bacon",
        "productDescription": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "productType": 2,
        "product_quantity": 59,
        "price": "357.00",
        "img": ""
    },
    {
        "productId": "0003",
        "productName": "Bike",
        "productDescription": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "productType": 1,
        "product_quantity": 692,
        "price": "883.00",
        "img": ""
    },
    {
        "productId": "0004",
        "productName": "Gloves",
        "productDescription": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "productType": "Vegetables",
        "product_quantity": 295,
        "price": "977.00",
        "img": ""
    },
    {
        "productId": "0005",
        "productName": "Chair",
        "productDescription": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "productType": "Baked Goods",
        "product_quantity": 352,
        "price": "488.00",
        "img": ""
    },
    {
        "productId": "0006",
        "productName": "Shirt",
        "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "productType": 1,
        "product_quantity": 679,
        "price": "249.00",
        "img": ""
    },
    {
        "productId": "0007",
        "productName": "Towels",
        "productDescription": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "productType": 1,
        "product_quantity": 570,
        "price": "540.00",
        "img": ""
    },
    {
        "productId": "0008",
        "productName": "Towels",
        "productDescription": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "productType": 1,
        "product_quantity": 137,
        "price": "503.00",
        "img": ""
    },
    {
        "productId": "0009",
        "productName": "Hat",
        "productDescription": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "productType": "Processed Meats",
        "product_quantity": 727,
        "price": "317.00",
        "img": ""
    },
    {
        "productId": "0010",
        "productName": "Keyboard",
        "productDescription": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "productType": "Baked Goods",
        "product_quantity": 868,
        "price": "864.00",
        "img": ""
    },
    {
        "productId": "0011",
        "productName": "Pizza",
        "productDescription": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "productType": "Others",
        "product_quantity": 775,
        "price": "771.00",
        "img": ""
    },
    {
        "productId": "0012",
        "productName": "Computer",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": "Processed Meats",
        "product_quantity": 108,
        "price": "499.00",
        "img": ""
    },
    {
        "productId": "0013",
        "productName": "Bacon",
        "productDescription": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "productType": 1,
        "product_quantity": 950,
        "price": "110.00",
        "img": ""
    },
    {
        "productId": "0014",
        "productName": "Mouse",
        "productDescription": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "productType": "Flowers",
        "product_quantity": 563,
        "price": "411.00",
        "img": ""
    },
    {
        "productId": "0015",
        "productName": "Ball",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": "Decorative Plants",
        "product_quantity": 797,
        "price": "606.00",
        "img": ""
    },
    {
        "productId": "0016",
        "productName": "Computer",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": "Beef",
        "product_quantity": 192,
        "price": "995.00",
        "img": ""
    },
    {
        "productId": "0017",
        "productName": "Mouse",
        "productDescription": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "productType": "Vegetables",
        "product_quantity": 647,
        "price": "692.00",
        "img": ""
    },
    {
        "productId": "0018",
        "productName": "Table",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": "Eggs",
        "product_quantity": 427,
        "price": "309.00",
        "img": ""
    },
    {
        "productId": "0019",
        "productName": "Bike",
        "productDescription": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "productType": 1,
        "product_quantity": 389,
        "price": "885.00",
        "img": ""
    },
    {
        "productId": "0020",
        "productName": "Towels",
        "productDescription": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "productType": 1,
        "product_quantity": 234,
        "price": "258.00",
        "img": ""
    },
    {
        "productId": "0021",
        "productName": "Keyboard",
        "productDescription": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "productType": "Vegetables",
        "product_quantity": 761,
        "price": "340.00",
        "img": ""
    },
    {
        "productId": "0022",
        "productName": "Towels",
        "productDescription": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "productType": "Decorative Plants",
        "product_quantity": 988,
        "price": "819.00",
        "img": ""
    },
    {
        "productId": "0023",
        "productName": "Bike",
        "productDescription": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "productType": "Pork",
        "product_quantity": 675,
        "price": "171.00",
        "img": ""
    },
    {
        "productId": "0024",
        "productName": "Tuna",
        "productDescription": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "productType": "Juices",
        "product_quantity": 99,
        "price": "68.00",
        "img": ""
    },
    {
        "productId": "0025",
        "productName": "Chips",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": "Processed Meats",
        "product_quantity": 689,
        "price": "3.00",
        "img": ""
    },
    {
        "productId": "0026",
        "productName": "Computer",
        "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "productType": "Beef",
        "product_quantity": 501,
        "price": "744.00",
        "img": ""
    },
    {
        "productId": "0027",
        "productName": "Computer",
        "productDescription": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "productType": "Vegetables",
        "product_quantity": 500,
        "price": "202.00",
        "img": ""
    },
    {
        "productId": "0028",
        "productName": "Pants",
        "productDescription": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "productType": "Beef",
        "product_quantity": 993,
        "price": "733.00",
        "img": ""
    },
    {
        "productId": "0029",
        "productName": "Chair",
        "productDescription": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "productType": "Chicken",
        "product_quantity": 812,
        "price": "2.00",
        "img": ""
    },
    {
        "productId": "0030",
        "productName": "Car",
        "productDescription": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "productType": 1,
        "product_quantity": 933,
        "price": "788.00",
        "img": ""
    },
    {
        "productId": "0031",
        "productName": "Cheese",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": "Flowers",
        "product_quantity": 681,
        "price": "254.00",
        "img": ""
    },
    {
        "productId": "0032",
        "productName": "Bacon",
        "productDescription": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "productType": "Flowers",
        "product_quantity": 116,
        "price": "536.00",
        "img": ""
    },
    {
        "productId": "0033",
        "productName": "Car",
        "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "productType": "Flowers",
        "product_quantity": 741,
        "price": "965.00",
        "img": ""
    },
    {
        "productId": "0034",
        "productName": "Gloves",
        "productDescription": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "productType": "Pork",
        "product_quantity": 789,
        "price": "71.00",
        "img": ""
    },
    {
        "productId": "0035",
        "productName": "Car",
        "productDescription": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "productType": "Decorative Plants",
        "product_quantity": 224,
        "price": "104.00",
        "img": ""
    },
    {
        "productId": "0036",
        "productName": "Hat",
        "productDescription": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "productType": "Processed Meats",
        "product_quantity": 41,
        "price": "906.00",
        "img": ""
    },
    {
        "productId": "0037",
        "productName": "Chicken",
        "productDescription": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "productType": "Arts and Crafts",
        "product_quantity": 167,
        "price": "923.00",
        "img": ""
    },
    {
        "productId": "0038",
        "productName": "Bacon",
        "productDescription": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "productType": "Juices",
        "product_quantity": 137,
        "price": "125.00",
        "img": ""
    },
    {
        "productId": "0039",
        "productName": "Pants",
        "productDescription": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "productType": "Baked Goods",
        "product_quantity": 231,
        "price": "231.00",
        "img": ""
    },
    {
        "productId": "0040",
        "productName": "Pants",
        "productDescription": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "productType": "Vegetables",
        "product_quantity": 973,
        "price": "225.00",
        "img": ""
    },
    {
        "productId": "0041",
        "productName": "Cheese",
        "productDescription": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "productType": "Pork",
        "product_quantity": 209,
        "price": "93.00",
        "img": ""
    },
    {
        "productId": "0042",
        "productName": "Car",
        "productDescription": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "productType": 2,
        "product_quantity": 468,
        "price": "686.00",
        "img": ""
    },
    {
        "productId": "0043",
        "productName": "Cheese",
        "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "productType": "Beef",
        "product_quantity": 351,
        "price": "216.00",
        "img": ""
    },
    {
        "productId": "0044",
        "productName": "Sausages",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": "Eggs",
        "product_quantity": 987,
        "price": "72.00",
        "img": ""
    },
    {
        "productId": "0045",
        "productName": "Soap",
        "productDescription": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "productType": "Pork",
        "product_quantity": 49,
        "price": "492.00",
        "img": ""
    },
    {
        "productId": "0046",
        "productName": "Cheese",
        "productDescription": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "productType": "Pork",
        "product_quantity": 396,
        "price": "779.00",
        "img": ""
    },
    {
        "productId": "0047",
        "productName": "Chair",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": "Pork",
        "product_quantity": 152,
        "price": "110.00",
        "img": ""
    },
    {
        "productId": "0048",
        "productName": "Computer",
        "productDescription": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "productType": 1,
        "product_quantity": 513,
        "price": "534.00",
        "img": ""
    },
    {
        "productId": "0049",
        "productName": "Chips",
        "productDescription": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "productType": "Pork",
        "product_quantity": 101,
        "price": "359.00",
        "img": ""
    },
    {
        "productId": "0050",
        "productName": "Ball",
        "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "productType": "Decorative Plants",
        "product_quantity": 841,
        "price": "66.00",
        "img": ""
    },
    {
        "productId": "0051",
        "productName": "Fish",
        "productDescription": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "productType": "Chicken",
        "product_quantity": 354,
        "price": "959.00",
        "img": ""
    },
    {
        "productId": "0052",
        "productName": "Computer",
        "productDescription": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "productType": 1,
        "product_quantity": 682,
        "price": "541.00",
        "img": ""
    },
    {
        "productId": "0053",
        "productName": "Computer",
        "productDescription": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "productType": "Decorative Plants",
        "product_quantity": 607,
        "price": "441.00",
        "img": ""
    },
    {
        "productId": "0054",
        "productName": "Fish",
        "productDescription": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "productType": 1,
        "product_quantity": 572,
        "price": "435.00",
        "img": ""
    },
    {
        "productId": "0055",
        "productName": "Shirt",
        "productDescription": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "productType": "Vegetables",
        "product_quantity": 767,
        "price": "47.00",
        "img": ""
    },
    {
        "productId": "0056",
        "productName": "Bacon",
        "productDescription": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "productType": "Pork",
        "product_quantity": 67,
        "price": "309.00",
        "img": ""
    },
    {
        "productId": "0057",
        "productName": "Table",
        "productDescription": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "productType": "Baked Goods",
        "product_quantity": 608,
        "price": "574.00",
        "img": ""
    },
    {
        "productId": "0058",
        "productName": "Shirt",
        "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "productType": "Arts and Crafts",
        "product_quantity": 468,
        "price": "745.00",
        "img": ""
    },
    {
        "productId": "0059",
        "productName": "Sausages",
        "productDescription": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "productType": "Vegetables",
        "product_quantity": 483,
        "price": "404.00",
        "img": ""
    },
    {
        "productId": "0060",
        "productName": "Towels",
        "productDescription": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "productType": 1,
        "product_quantity": 746,
        "price": "18.00",
        "img": ""
    },
    {
        "productId": "0061",
        "productName": "Chips",
        "productDescription": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "productType": 1,
        "product_quantity": 993,
        "price": "612.00",
        "img": ""
    },
    {
        "productId": "0062",
        "productName": "Soap",
        "productDescription": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "productType": "Vegetables",
        "product_quantity": 620,
        "price": "670.00",
        "img": ""
    },
    {
        "productId": "0063",
        "productName": "Table",
        "productDescription": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "productType": "Processed Meats",
        "product_quantity": 659,
        "price": "589.00",
        "img": ""
    },
    {
        "productId": "0064",
        "productName": "Cheese",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": "Vegetables",
        "product_quantity": 66,
        "price": "533.00",
        "img": ""
    },
    {
        "productId": "0065",
        "productName": "Hat",
        "productDescription": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "productType": "Juices",
        "product_quantity": 22,
        "price": "298.00",
        "img": ""
    },
    {
        "productId": "0066",
        "productName": "Bacon",
        "productDescription": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "productType": "Arts and Crafts",
        "product_quantity": 37,
        "price": "82.00",
        "img": ""
    },
    {
        "productId": "0067",
        "productName": "Bacon",
        "productDescription": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "productType": 1,
        "product_quantity": 31,
        "price": "375.00",
        "img": ""
    },
    {
        "productId": "0068",
        "productName": "Shoes",
        "productDescription": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "productType": "Baked Goods",
        "product_quantity": 792,
        "price": "371.00",
        "img": ""
    },
    {
        "productId": "0069",
        "productName": "Computer",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": 1,
        "product_quantity": 333,
        "price": "990.00",
        "img": ""
    },
    {
        "productId": "0070",
        "productName": "Shoes",
        "productDescription": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "productType": 1,
        "product_quantity": 365,
        "price": "759.00",
        "img": ""
    },
    {
        "productId": "0071",
        "productName": "Tuna",
        "productDescription": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "productType": "Chicken",
        "product_quantity": 473,
        "price": "675.00",
        "img": ""
    },
    {
        "productId": "0072",
        "productName": "Chicken",
        "productDescription": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "productType": "Decorative Plants",
        "product_quantity": 443,
        "price": "729.00",
        "img": ""
    },
    {
        "productId": "0073",
        "productName": "Sausages",
        "productDescription": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "productType": "Chicken",
        "product_quantity": 757,
        "price": "231.00",
        "img": ""
    },
    {
        "productId": "0074",
        "productName": "Car",
        "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "productType": "Juices",
        "product_quantity": 610,
        "price": "171.00",
        "img": ""
    },
    {
        "productId": "0075",
        "productName": "Fish",
        "productDescription": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "productType": 1,
        "product_quantity": 979,
        "price": "250.00",
        "img": ""
    },
    {
        "productId": "0076",
        "productName": "Pants",
        "productDescription": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "productType": "Baked Goods",
        "product_quantity": 348,
        "price": "295.00",
        "img": ""
    },
    {
        "productId": "0077",
        "productName": "Sausages",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": 1,
        "product_quantity": 128,
        "price": "748.00",
        "img": ""
    },
    {
        "productId": "0078",
        "productName": "Sausages",
        "productDescription": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "productType": "Beef",
        "product_quantity": 175,
        "price": "260.00",
        "img": ""
    },
    {
        "productId": "0079",
        "productName": "Keyboard",
        "productDescription": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "productType": "Juices",
        "product_quantity": 697,
        "price": "43.00",
        "img": ""
    },
    {
        "productId": "0080",
        "productName": "Cheese",
        "productDescription": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "productType": "Decorative Plants",
        "product_quantity": 333,
        "price": "471.00",
        "img": ""
    },
    {
        "productId": "0081",
        "productName": "Fish",
        "productDescription": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "productType": "Flowers",
        "product_quantity": 387,
        "price": "686.00",
        "img": ""
    },
    {
        "productId": "0082",
        "productName": "Pants",
        "productDescription": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "productType": "Baked Goods",
        "product_quantity": 158,
        "price": "854.00",
        "img": ""
    },
    {
        "productId": "0083",
        "productName": "Salad",
        "productDescription": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "productType": "Others",
        "product_quantity": 840,
        "price": "221.00",
        "img": ""
    },
    {
        "productId": "0084",
        "productName": "Chips",
        "productDescription": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "productType": "Vegetables",
        "product_quantity": 747,
        "price": "267.00",
        "img": ""
    },
    {
        "productId": "0085",
        "productName": "Shoes",
        "productDescription": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "productType": "Baked Goods",
        "product_quantity": 420,
        "price": "842.00",
        "img": ""
    },
    {
        "productId": "0086",
        "productName": "Mouse",
        "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "productType": "Pork",
        "product_quantity": 825,
        "price": "383.00",
        "img": ""
    },
    {
        "productId": "0087",
        "productName": "Cheese",
        "productDescription": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "productType": "Flowers",
        "product_quantity": 861,
        "price": "981.00",
        "img": ""
    },
    {
        "productId": "0088",
        "productName": "Towels",
        "productDescription": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "productType": "Decorative Plants",
        "product_quantity": 423,
        "price": "648.00",
        "img": ""
    },
    {
        "productId": "0089",
        "productName": "Ball",
        "productDescription": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "productType": "Eggs",
        "product_quantity": 924,
        "price": "930.00",
        "img": ""
    },
    {
        "productId": "0090",
        "productName": "Cheese",
        "productDescription": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "productType": "Beef",
        "product_quantity": 782,
        "price": "954.00",
        "img": ""
    },
    {
        "productId": "0091",
        "productName": "Chair",
        "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "productType": "Processed Meats",
        "product_quantity": 438,
        "price": "542.00",
        "img": ""
    },
    {
        "productId": "0092",
        "productName": "Tuna",
        "productDescription": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "productType": 2,
        "product_quantity": 749,
        "price": "49.00",
        "img": ""
    },
    {
        "productId": "0093",
        "productName": "Ball",
        "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "productType": "Pork",
        "product_quantity": 247,
        "price": "491.00",
        "img": ""
    },
    {
        "productId": "0094",
        "productName": "Hat",
        "productDescription": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "productType": 1,
        "product_quantity": 216,
        "price": "581.00",
        "img": ""
    },
    {
        "productId": "0095",
        "productName": "Chips",
        "productDescription": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "productType": 2,
        "product_quantity": 593,
        "price": "941.00",
        "img": ""
    },
    {
        "productId": "0096",
        "productName": "Chair",
        "productDescription": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "productType": "Baked Goods",
        "product_quantity": 623,
        "price": "892.00",
        "img": ""
    },
    {
        "productId": "0097",
        "productName": "Car",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": "Flowers",
        "product_quantity": 99,
        "price": "499.00",
        "img": ""
    },
    {
        "productId": "0098",
        "productName": "Chicken",
        "productDescription": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "productType": 1,
        "product_quantity": 570,
        "price": "140.00",
        "img": ""
    },
    {
        "productId": "0099",
        "productName": "Hat",
        "productDescription": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "productType": "Vegetables",
        "product_quantity": 37,
        "price": "102.00",
        "img": ""
    },
    {
        "productId": "0100",
        "productName": "Keyboard",
        "productDescription": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "productType": "Processed Meats",
        "product_quantity": 696,
        "price": "280.00",
        "img": ""
    }
]

export {
    PRODUCT_SAMPLE_DATA
}