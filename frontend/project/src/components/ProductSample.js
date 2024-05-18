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
        "productQuantity": 59,
        "price": "357.00",
        "img": ""
    },
    {
        "productId": "0003",
        "productName": "Bike",
        "productDescription": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "productType": 1,
        "productQuantity": 692,
        "price": "883.00",
        "img": ""
    },
    {
        "productId": "0004",
        "productName": "Gloves",
        "productDescription": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "productType": "Vegetables",
        "productQuantity": 295,
        "price": "977.00",
        "img": ""
    },
    {
        "productId": "0005",
        "productName": "Chair",
        "productDescription": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "productType": "Baked Goods",
        "productQuantity": 352,
        "price": "488.00",
        "img": ""
    },
    {
        "productId": "0006",
        "productName": "Shirt",
        "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "productType": 1,
        "productQuantity": 679,
        "price": "249.00",
        "img": ""
    },
    {
        "productId": "0007",
        "productName": "Towels",
        "productDescription": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "productType": 1,
        "productQuantity": 570,
        "price": "540.00",
        "img": ""
    },
    {
        "productId": "0008",
        "productName": "Towels",
        "productDescription": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "productType": 1,
        "productQuantity": 137,
        "price": "503.00",
        "img": ""
    },
    {
        "productId": "0009",
        "productName": "Hat",
        "productDescription": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "productType": "Processed Meats",
        "productQuantity": 727,
        "price": "317.00",
        "img": ""
    },
    {
        "productId": "0010",
        "productName": "Keyboard",
        "productDescription": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "productType": "Baked Goods",
        "productQuantity": 868,
        "price": "864.00",
        "img": ""
    },
    {
        "productId": "0011",
        "productName": "Pizza",
        "productDescription": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "productType": "Others",
        "productQuantity": 775,
        "price": "771.00",
        "img": ""
    },
    {
        "productId": "0012",
        "productName": "Computer",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": "Processed Meats",
        "productQuantity": 108,
        "price": "499.00",
        "img": ""
    },
    {
        "productId": "0013",
        "productName": "Bacon",
        "productDescription": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "productType": 1,
        "productQuantity": 950,
        "price": "110.00",
        "img": ""
    },
    {
        "productId": "0014",
        "productName": "Mouse",
        "productDescription": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "productType": "Flowers",
        "productQuantity": 563,
        "price": "411.00",
        "img": ""
    },
    {
        "productId": "0015",
        "productName": "Ball",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": "Decorative Plants",
        "productQuantity": 797,
        "price": "606.00",
        "img": ""
    },
    {
        "productId": "0016",
        "productName": "Computer",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": "Beef",
        "productQuantity": 192,
        "price": "995.00",
        "img": ""
    },
    {
        "productId": "0017",
        "productName": "Mouse",
        "productDescription": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "productType": "Vegetables",
        "productQuantity": 647,
        "price": "692.00",
        "img": ""
    },
    {
        "productId": "0018",
        "productName": "Table",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": "Eggs",
        "productQuantity": 427,
        "price": "309.00",
        "img": ""
    },
    {
        "productId": "0019",
        "productName": "Bike",
        "productDescription": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "productType": 1,
        "productQuantity": 389,
        "price": "885.00",
        "img": ""
    },
    {
        "productId": "0020",
        "productName": "Towels",
        "productDescription": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "productType": 1,
        "productQuantity": 234,
        "price": "258.00",
        "img": ""
    },
    {
        "productId": "0021",
        "productName": "Keyboard",
        "productDescription": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "productType": "Vegetables",
        "productQuantity": 761,
        "price": "340.00",
        "img": ""
    },
    {
        "productId": "0022",
        "productName": "Towels",
        "productDescription": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "productType": "Decorative Plants",
        "productQuantity": 988,
        "price": "819.00",
        "img": ""
    },
    {
        "productId": "0023",
        "productName": "Bike",
        "productDescription": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "productType": "Pork",
        "productQuantity": 675,
        "price": "171.00",
        "img": ""
    },
    {
        "productId": "0024",
        "productName": "Tuna",
        "productDescription": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "productType": "Juices",
        "productQuantity": 99,
        "price": "68.00",
        "img": ""
    },
    {
        "productId": "0025",
        "productName": "Chips",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": "Processed Meats",
        "productQuantity": 689,
        "price": "3.00",
        "img": ""
    },
    {
        "productId": "0026",
        "productName": "Computer",
        "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "productType": "Beef",
        "productQuantity": 501,
        "price": "744.00",
        "img": ""
    },
    {
        "productId": "0027",
        "productName": "Computer",
        "productDescription": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "productType": "Vegetables",
        "productQuantity": 500,
        "price": "202.00",
        "img": ""
    },
    {
        "productId": "0028",
        "productName": "Pants",
        "productDescription": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "productType": "Beef",
        "productQuantity": 993,
        "price": "733.00",
        "img": ""
    },
    {
        "productId": "0029",
        "productName": "Chair",
        "productDescription": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "productType": "Chicken",
        "productQuantity": 812,
        "price": "2.00",
        "img": ""
    },
    {
        "productId": "0030",
        "productName": "Car",
        "productDescription": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "productType": 1,
        "productQuantity": 933,
        "price": "788.00",
        "img": ""
    },
    {
        "productId": "0031",
        "productName": "Cheese",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": "Flowers",
        "productQuantity": 681,
        "price": "254.00",
        "img": ""
    },
    {
        "productId": "0032",
        "productName": "Bacon",
        "productDescription": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "productType": "Flowers",
        "productQuantity": 116,
        "price": "536.00",
        "img": ""
    },
    {
        "productId": "0033",
        "productName": "Car",
        "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "productType": "Flowers",
        "productQuantity": 741,
        "price": "965.00",
        "img": ""
    },
    {
        "productId": "0034",
        "productName": "Gloves",
        "productDescription": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "productType": "Pork",
        "productQuantity": 789,
        "price": "71.00",
        "img": ""
    },
    {
        "productId": "0035",
        "productName": "Car",
        "productDescription": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "productType": "Decorative Plants",
        "productQuantity": 224,
        "price": "104.00",
        "img": ""
    },
    {
        "productId": "0036",
        "productName": "Hat",
        "productDescription": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "productType": "Processed Meats",
        "productQuantity": 41,
        "price": "906.00",
        "img": ""
    },
    {
        "productId": "0037",
        "productName": "Chicken",
        "productDescription": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "productType": "Arts and Crafts",
        "productQuantity": 167,
        "price": "923.00",
        "img": ""
    },
    {
        "productId": "0038",
        "productName": "Bacon",
        "productDescription": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "productType": "Juices",
        "productQuantity": 137,
        "price": "125.00",
        "img": ""
    },
    {
        "productId": "0039",
        "productName": "Pants",
        "productDescription": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "productType": "Baked Goods",
        "productQuantity": 231,
        "price": "231.00",
        "img": ""
    },
    {
        "productId": "0040",
        "productName": "Pants",
        "productDescription": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "productType": "Vegetables",
        "productQuantity": 973,
        "price": "225.00",
        "img": ""
    },
    {
        "productId": "0041",
        "productName": "Cheese",
        "productDescription": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "productType": "Pork",
        "productQuantity": 209,
        "price": "93.00",
        "img": ""
    },
    {
        "productId": "0042",
        "productName": "Car",
        "productDescription": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "productType": 2,
        "productQuantity": 468,
        "price": "686.00",
        "img": ""
    },
    {
        "productId": "0043",
        "productName": "Cheese",
        "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "productType": "Beef",
        "productQuantity": 351,
        "price": "216.00",
        "img": ""
    },
    {
        "productId": "0044",
        "productName": "Sausages",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": "Eggs",
        "productQuantity": 987,
        "price": "72.00",
        "img": ""
    },
    {
        "productId": "0045",
        "productName": "Soap",
        "productDescription": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "productType": "Pork",
        "productQuantity": 49,
        "price": "492.00",
        "img": ""
    },
    {
        "productId": "0046",
        "productName": "Cheese",
        "productDescription": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "productType": "Pork",
        "productQuantity": 396,
        "price": "779.00",
        "img": ""
    },
    {
        "productId": "0047",
        "productName": "Chair",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": "Pork",
        "productQuantity": 152,
        "price": "110.00",
        "img": ""
    },
    {
        "productId": "0048",
        "productName": "Computer",
        "productDescription": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "productType": 1,
        "productQuantity": 513,
        "price": "534.00",
        "img": ""
    },
    {
        "productId": "0049",
        "productName": "Chips",
        "productDescription": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "productType": "Pork",
        "productQuantity": 101,
        "price": "359.00",
        "img": ""
    },
    {
        "productId": "0050",
        "productName": "Ball",
        "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "productType": "Decorative Plants",
        "productQuantity": 841,
        "price": "66.00",
        "img": ""
    },
    {
        "productId": "0051",
        "productName": "Fish",
        "productDescription": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "productType": "Chicken",
        "productQuantity": 354,
        "price": "959.00",
        "img": ""
    },
    {
        "productId": "0052",
        "productName": "Computer",
        "productDescription": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "productType": 1,
        "productQuantity": 682,
        "price": "541.00",
        "img": ""
    },
    {
        "productId": "0053",
        "productName": "Computer",
        "productDescription": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "productType": "Decorative Plants",
        "productQuantity": 607,
        "price": "441.00",
        "img": ""
    },
    {
        "productId": "0054",
        "productName": "Fish",
        "productDescription": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "productType": 1,
        "productQuantity": 572,
        "price": "435.00",
        "img": ""
    },
    {
        "productId": "0055",
        "productName": "Shirt",
        "productDescription": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "productType": "Vegetables",
        "productQuantity": 767,
        "price": "47.00",
        "img": ""
    },
    {
        "productId": "0056",
        "productName": "Bacon",
        "productDescription": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "productType": "Pork",
        "productQuantity": 67,
        "price": "309.00",
        "img": ""
    },
    {
        "productId": "0057",
        "productName": "Table",
        "productDescription": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "productType": "Baked Goods",
        "productQuantity": 608,
        "price": "574.00",
        "img": ""
    },
    {
        "productId": "0058",
        "productName": "Shirt",
        "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "productType": "Arts and Crafts",
        "productQuantity": 468,
        "price": "745.00",
        "img": ""
    },
    {
        "productId": "0059",
        "productName": "Sausages",
        "productDescription": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "productType": "Vegetables",
        "productQuantity": 483,
        "price": "404.00",
        "img": ""
    },
    {
        "productId": "0060",
        "productName": "Towels",
        "productDescription": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "productType": 1,
        "productQuantity": 746,
        "price": "18.00",
        "img": ""
    },
    {
        "productId": "0061",
        "productName": "Chips",
        "productDescription": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "productType": 1,
        "productQuantity": 993,
        "price": "612.00",
        "img": ""
    },
    {
        "productId": "0062",
        "productName": "Soap",
        "productDescription": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "productType": "Vegetables",
        "productQuantity": 620,
        "price": "670.00",
        "img": ""
    },
    {
        "productId": "0063",
        "productName": "Table",
        "productDescription": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "productType": "Processed Meats",
        "productQuantity": 659,
        "price": "589.00",
        "img": ""
    },
    {
        "productId": "0064",
        "productName": "Cheese",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": "Vegetables",
        "productQuantity": 66,
        "price": "533.00",
        "img": ""
    },
    {
        "productId": "0065",
        "productName": "Hat",
        "productDescription": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "productType": "Juices",
        "productQuantity": 22,
        "price": "298.00",
        "img": ""
    },
    {
        "productId": "0066",
        "productName": "Bacon",
        "productDescription": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "productType": "Arts and Crafts",
        "productQuantity": 37,
        "price": "82.00",
        "img": ""
    },
    {
        "productId": "0067",
        "productName": "Bacon",
        "productDescription": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "productType": 1,
        "productQuantity": 31,
        "price": "375.00",
        "img": ""
    },
    {
        "productId": "0068",
        "productName": "Shoes",
        "productDescription": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "productType": "Baked Goods",
        "productQuantity": 792,
        "price": "371.00",
        "img": ""
    },
    {
        "productId": "0069",
        "productName": "Computer",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": 1,
        "productQuantity": 333,
        "price": "990.00",
        "img": ""
    },
    {
        "productId": "0070",
        "productName": "Shoes",
        "productDescription": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "productType": 1,
        "productQuantity": 365,
        "price": "759.00",
        "img": ""
    },
    {
        "productId": "0071",
        "productName": "Tuna",
        "productDescription": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "productType": "Chicken",
        "productQuantity": 473,
        "price": "675.00",
        "img": ""
    },
    {
        "productId": "0072",
        "productName": "Chicken",
        "productDescription": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "productType": "Decorative Plants",
        "productQuantity": 443,
        "price": "729.00",
        "img": ""
    },
    {
        "productId": "0073",
        "productName": "Sausages",
        "productDescription": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "productType": "Chicken",
        "productQuantity": 757,
        "price": "231.00",
        "img": ""
    },
    {
        "productId": "0074",
        "productName": "Car",
        "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "productType": "Juices",
        "productQuantity": 610,
        "price": "171.00",
        "img": ""
    },
    {
        "productId": "0075",
        "productName": "Fish",
        "productDescription": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "productType": 1,
        "productQuantity": 979,
        "price": "250.00",
        "img": ""
    },
    {
        "productId": "0076",
        "productName": "Pants",
        "productDescription": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "productType": "Baked Goods",
        "productQuantity": 348,
        "price": "295.00",
        "img": ""
    },
    {
        "productId": "0077",
        "productName": "Sausages",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": 1,
        "productQuantity": 128,
        "price": "748.00",
        "img": ""
    },
    {
        "productId": "0078",
        "productName": "Sausages",
        "productDescription": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "productType": "Beef",
        "productQuantity": 175,
        "price": "260.00",
        "img": ""
    },
    {
        "productId": "0079",
        "productName": "Keyboard",
        "productDescription": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "productType": "Juices",
        "productQuantity": 697,
        "price": "43.00",
        "img": ""
    },
    {
        "productId": "0080",
        "productName": "Cheese",
        "productDescription": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "productType": "Decorative Plants",
        "productQuantity": 333,
        "price": "471.00",
        "img": ""
    },
    {
        "productId": "0081",
        "productName": "Fish",
        "productDescription": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "productType": "Flowers",
        "productQuantity": 387,
        "price": "686.00",
        "img": ""
    },
    {
        "productId": "0082",
        "productName": "Pants",
        "productDescription": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "productType": "Baked Goods",
        "productQuantity": 158,
        "price": "854.00",
        "img": ""
    },
    {
        "productId": "0083",
        "productName": "Salad",
        "productDescription": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "productType": "Others",
        "productQuantity": 840,
        "price": "221.00",
        "img": ""
    },
    {
        "productId": "0084",
        "productName": "Chips",
        "productDescription": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "productType": "Vegetables",
        "productQuantity": 747,
        "price": "267.00",
        "img": ""
    },
    {
        "productId": "0085",
        "productName": "Shoes",
        "productDescription": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "productType": "Baked Goods",
        "productQuantity": 420,
        "price": "842.00",
        "img": ""
    },
    {
        "productId": "0086",
        "productName": "Mouse",
        "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "productType": "Pork",
        "productQuantity": 825,
        "price": "383.00",
        "img": ""
    },
    {
        "productId": "0087",
        "productName": "Cheese",
        "productDescription": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "productType": "Flowers",
        "productQuantity": 861,
        "price": "981.00",
        "img": ""
    },
    {
        "productId": "0088",
        "productName": "Towels",
        "productDescription": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "productType": "Decorative Plants",
        "productQuantity": 423,
        "price": "648.00",
        "img": ""
    },
    {
        "productId": "0089",
        "productName": "Ball",
        "productDescription": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "productType": "Eggs",
        "productQuantity": 924,
        "price": "930.00",
        "img": ""
    },
    {
        "productId": "0090",
        "productName": "Cheese",
        "productDescription": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "productType": "Beef",
        "productQuantity": 782,
        "price": "954.00",
        "img": ""
    },
    {
        "productId": "0091",
        "productName": "Chair",
        "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "productType": "Processed Meats",
        "productQuantity": 438,
        "price": "542.00",
        "img": ""
    },
    {
        "productId": "0092",
        "productName": "Tuna",
        "productDescription": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "productType": 2,
        "productQuantity": 749,
        "price": "49.00",
        "img": ""
    },
    {
        "productId": "0093",
        "productName": "Ball",
        "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "productType": "Pork",
        "productQuantity": 247,
        "price": "491.00",
        "img": ""
    },
    {
        "productId": "0094",
        "productName": "Hat",
        "productDescription": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "productType": 1,
        "productQuantity": 216,
        "price": "581.00",
        "img": ""
    },
    {
        "productId": "0095",
        "productName": "Chips",
        "productDescription": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "productType": 2,
        "productQuantity": 593,
        "price": "941.00",
        "img": ""
    },
    {
        "productId": "0096",
        "productName": "Chair",
        "productDescription": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "productType": "Baked Goods",
        "productQuantity": 623,
        "price": "892.00",
        "img": ""
    },
    {
        "productId": "0097",
        "productName": "Car",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productType": "Flowers",
        "productQuantity": 99,
        "price": "499.00",
        "img": ""
    },
    {
        "productId": "0098",
        "productName": "Chicken",
        "productDescription": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "productType": 1,
        "productQuantity": 570,
        "price": "140.00",
        "img": ""
    },
    {
        "productId": "0099",
        "productName": "Hat",
        "productDescription": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "productType": "Vegetables",
        "productQuantity": 37,
        "price": "102.00",
        "img": ""
    },
    {
        "productId": "0100",
        "productName": "Keyboard",
        "productDescription": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "productType": "Processed Meats",
        "productQuantity": 696,
        "price": "280.00",
        "img": ""
    }
]

export {
    PRODUCT_SAMPLE_DATA
}