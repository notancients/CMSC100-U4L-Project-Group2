const PRODUCT_SAMPLE_DATA = [
    {
        "product_name": "Gloves",
        "product_description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "product_type": "Fruits",
        "product_quantity": 661,
        "price": "921.00"
    },
    {
        "product_name": "Bacon",
        "product_description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "product_type": "Dairy",
        "product_quantity": 59,
        "price": "357.00"
    },
    {
        "product_name": "Bike",
        "product_description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "product_type": "Jams",
        "product_quantity": 692,
        "price": "883.00"
    },
    {
        "product_name": "Gloves",
        "product_description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "product_type": "Vegetables",
        "product_quantity": 295,
        "price": "977.00"
    },
    {
        "product_name": "Chair",
        "product_description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "product_type": "Baked Goods",
        "product_quantity": 352,
        "price": "488.00"
    },
    {
        "product_name": "Shirt",
        "product_description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "product_type": "Fruits",
        "product_quantity": 679,
        "price": "249.00"
    },
    {
        "product_name": "Towels",
        "product_description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "product_type": "Fruits",
        "product_quantity": 570,
        "price": "540.00"
    },
    {
        "product_name": "Towels",
        "product_description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "product_type": "Jams",
        "product_quantity": 137,
        "price": "503.00"
    },
    {
        "product_name": "Hat",
        "product_description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "product_type": "Processed Meats",
        "product_quantity": 727,
        "price": "317.00"
    },
    {
        "product_name": "Keyboard",
        "product_description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "product_type": "Baked Goods",
        "product_quantity": 868,
        "price": "864.00"
    },
    {
        "product_name": "Pizza",
        "product_description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "product_type": "Others",
        "product_quantity": 775,
        "price": "771.00"
    },
    {
        "product_name": "Computer",
        "product_description": "The Football Is Good For Training And Recreational Purposes",
        "product_type": "Processed Meats",
        "product_quantity": 108,
        "price": "499.00"
    },
    {
        "product_name": "Bacon",
        "product_description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "product_type": "Fruits",
        "product_quantity": 950,
        "price": "110.00"
    },
    {
        "product_name": "Mouse",
        "product_description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "product_type": "Flowers",
        "product_quantity": 563,
        "price": "411.00"
    },
    {
        "product_name": "Ball",
        "product_description": "The Football Is Good For Training And Recreational Purposes",
        "product_type": "Decorative Plants",
        "product_quantity": 797,
        "price": "606.00"
    },
    {
        "product_name": "Computer",
        "product_description": "The Football Is Good For Training And Recreational Purposes",
        "product_type": "Beef",
        "product_quantity": 192,
        "price": "995.00"
    },
    {
        "product_name": "Mouse",
        "product_description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "product_type": "Vegetables",
        "product_quantity": 647,
        "price": "692.00"
    },
    {
        "product_name": "Table",
        "product_description": "The Football Is Good For Training And Recreational Purposes",
        "product_type": "Eggs",
        "product_quantity": 427,
        "price": "309.00"
    },
    {
        "product_name": "Bike",
        "product_description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "product_type": "Jams",
        "product_quantity": 389,
        "price": "885.00"
    },
    {
        "product_name": "Towels",
        "product_description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "product_type": "Jams",
        "product_quantity": 234,
        "price": "258.00"
    },
    {
        "product_name": "Keyboard",
        "product_description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "product_type": "Vegetables",
        "product_quantity": 761,
        "price": "340.00"
    },
    {
        "product_name": "Towels",
        "product_description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "product_type": "Decorative Plants",
        "product_quantity": 988,
        "price": "819.00"
    },
    {
        "product_name": "Bike",
        "product_description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "product_type": "Pork",
        "product_quantity": 675,
        "price": "171.00"
    },
    {
        "product_name": "Tuna",
        "product_description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "product_type": "Juices",
        "product_quantity": 99,
        "price": "68.00"
    },
    {
        "product_name": "Chips",
        "product_description": "The Football Is Good For Training And Recreational Purposes",
        "product_type": "Processed Meats",
        "product_quantity": 689,
        "price": "3.00"
    },
    {
        "product_name": "Computer",
        "product_description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "product_type": "Beef",
        "product_quantity": 501,
        "price": "744.00"
    },
    {
        "product_name": "Computer",
        "product_description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "product_type": "Vegetables",
        "product_quantity": 500,
        "price": "202.00"
    },
    {
        "product_name": "Pants",
        "product_description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "product_type": "Beef",
        "product_quantity": 993,
        "price": "733.00"
    },
    {
        "product_name": "Chair",
        "product_description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "product_type": "Chicken",
        "product_quantity": 812,
        "price": "2.00"
    },
    {
        "product_name": "Car",
        "product_description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "product_type": "Jams",
        "product_quantity": 933,
        "price": "788.00"
    },
    {
        "product_name": "Cheese",
        "product_description": "The Football Is Good For Training And Recreational Purposes",
        "product_type": "Flowers",
        "product_quantity": 681,
        "price": "254.00"
    },
    {
        "product_name": "Bacon",
        "product_description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "product_type": "Flowers",
        "product_quantity": 116,
        "price": "536.00"
    },
    {
        "product_name": "Car",
        "product_description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "product_type": "Flowers",
        "product_quantity": 741,
        "price": "965.00"
    },
    {
        "product_name": "Gloves",
        "product_description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "product_type": "Pork",
        "product_quantity": 789,
        "price": "71.00"
    },
    {
        "product_name": "Car",
        "product_description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "product_type": "Decorative Plants",
        "product_quantity": 224,
        "price": "104.00"
    },
    {
        "product_name": "Hat",
        "product_description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "product_type": "Processed Meats",
        "product_quantity": 41,
        "price": "906.00"
    },
    {
        "product_name": "Chicken",
        "product_description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "product_type": "Arts and Crafts",
        "product_quantity": 167,
        "price": "923.00"
    },
    {
        "product_name": "Bacon",
        "product_description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "product_type": "Juices",
        "product_quantity": 137,
        "price": "125.00"
    },
    {
        "product_name": "Pants",
        "product_description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "product_type": "Baked Goods",
        "product_quantity": 231,
        "price": "231.00"
    },
    {
        "product_name": "Pants",
        "product_description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "product_type": "Vegetables",
        "product_quantity": 973,
        "price": "225.00"
    },
    {
        "product_name": "Cheese",
        "product_description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "product_type": "Pork",
        "product_quantity": 209,
        "price": "93.00"
    },
    {
        "product_name": "Car",
        "product_description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "product_type": "Dairy",
        "product_quantity": 468,
        "price": "686.00"
    },
    {
        "product_name": "Cheese",
        "product_description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "product_type": "Beef",
        "product_quantity": 351,
        "price": "216.00"
    },
    {
        "product_name": "Sausages",
        "product_description": "The Football Is Good For Training And Recreational Purposes",
        "product_type": "Eggs",
        "product_quantity": 987,
        "price": "72.00"
    },
    {
        "product_name": "Soap",
        "product_description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "product_type": "Pork",
        "product_quantity": 49,
        "price": "492.00"
    },
    {
        "product_name": "Cheese",
        "product_description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "product_type": "Pork",
        "product_quantity": 396,
        "price": "779.00"
    },
    {
        "product_name": "Chair",
        "product_description": "The Football Is Good For Training And Recreational Purposes",
        "product_type": "Pork",
        "product_quantity": 152,
        "price": "110.00"
    },
    {
        "product_name": "Computer",
        "product_description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "product_type": "Jams",
        "product_quantity": 513,
        "price": "534.00"
    },
    {
        "product_name": "Chips",
        "product_description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "product_type": "Pork",
        "product_quantity": 101,
        "price": "359.00"
    },
    {
        "product_name": "Ball",
        "product_description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "product_type": "Decorative Plants",
        "product_quantity": 841,
        "price": "66.00"
    },
    {
        "product_name": "Fish",
        "product_description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "product_type": "Chicken",
        "product_quantity": 354,
        "price": "959.00"
    },
    {
        "product_name": "Computer",
        "product_description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "product_type": "Jams",
        "product_quantity": 682,
        "price": "541.00"
    },
    {
        "product_name": "Computer",
        "product_description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "product_type": "Decorative Plants",
        "product_quantity": 607,
        "price": "441.00"
    },
    {
        "product_name": "Fish",
        "product_description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "product_type": "Fruits",
        "product_quantity": 572,
        "price": "435.00"
    },
    {
        "product_name": "Shirt",
        "product_description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "product_type": "Vegetables",
        "product_quantity": 767,
        "price": "47.00"
    },
    {
        "product_name": "Bacon",
        "product_description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "product_type": "Pork",
        "product_quantity": 67,
        "price": "309.00"
    },
    {
        "product_name": "Table",
        "product_description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "product_type": "Baked Goods",
        "product_quantity": 608,
        "price": "574.00"
    },
    {
        "product_name": "Shirt",
        "product_description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "product_type": "Arts and Crafts",
        "product_quantity": 468,
        "price": "745.00"
    },
    {
        "product_name": "Sausages",
        "product_description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "product_type": "Vegetables",
        "product_quantity": 483,
        "price": "404.00"
    },
    {
        "product_name": "Towels",
        "product_description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "product_type": "Jams",
        "product_quantity": 746,
        "price": "18.00"
    },
    {
        "product_name": "Chips",
        "product_description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "product_type": "Fruits",
        "product_quantity": 993,
        "price": "612.00"
    },
    {
        "product_name": "Soap",
        "product_description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "product_type": "Vegetables",
        "product_quantity": 620,
        "price": "670.00"
    },
    {
        "product_name": "Table",
        "product_description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "product_type": "Processed Meats",
        "product_quantity": 659,
        "price": "589.00"
    },
    {
        "product_name": "Cheese",
        "product_description": "The Football Is Good For Training And Recreational Purposes",
        "product_type": "Vegetables",
        "product_quantity": 66,
        "price": "533.00"
    },
    {
        "product_name": "Hat",
        "product_description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "product_type": "Juices",
        "product_quantity": 22,
        "price": "298.00"
    },
    {
        "product_name": "Bacon",
        "product_description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "product_type": "Arts and Crafts",
        "product_quantity": 37,
        "price": "82.00"
    },
    {
        "product_name": "Bacon",
        "product_description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "product_type": "Fruits",
        "product_quantity": 31,
        "price": "375.00"
    },
    {
        "product_name": "Shoes",
        "product_description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "product_type": "Baked Goods",
        "product_quantity": 792,
        "price": "371.00"
    },
    {
        "product_name": "Computer",
        "product_description": "The Football Is Good For Training And Recreational Purposes",
        "product_type": "Fruits",
        "product_quantity": 333,
        "price": "990.00"
    },
    {
        "product_name": "Shoes",
        "product_description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "product_type": "Fruits",
        "product_quantity": 365,
        "price": "759.00"
    },
    {
        "product_name": "Tuna",
        "product_description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "product_type": "Chicken",
        "product_quantity": 473,
        "price": "675.00"
    },
    {
        "product_name": "Chicken",
        "product_description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "product_type": "Decorative Plants",
        "product_quantity": 443,
        "price": "729.00"
    },
    {
        "product_name": "Sausages",
        "product_description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "product_type": "Chicken",
        "product_quantity": 757,
        "price": "231.00"
    },
    {
        "product_name": "Car",
        "product_description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "product_type": "Juices",
        "product_quantity": 610,
        "price": "171.00"
    },
    {
        "product_name": "Fish",
        "product_description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "product_type": "Jams",
        "product_quantity": 979,
        "price": "250.00"
    },
    {
        "product_name": "Pants",
        "product_description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "product_type": "Baked Goods",
        "product_quantity": 348,
        "price": "295.00"
    },
    {
        "product_name": "Sausages",
        "product_description": "The Football Is Good For Training And Recreational Purposes",
        "product_type": "Jams",
        "product_quantity": 128,
        "price": "748.00"
    },
    {
        "product_name": "Sausages",
        "product_description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "product_type": "Beef",
        "product_quantity": 175,
        "price": "260.00"
    },
    {
        "product_name": "Keyboard",
        "product_description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "product_type": "Juices",
        "product_quantity": 697,
        "price": "43.00"
    },
    {
        "product_name": "Cheese",
        "product_description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "product_type": "Decorative Plants",
        "product_quantity": 333,
        "price": "471.00"
    },
    {
        "product_name": "Fish",
        "product_description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "product_type": "Flowers",
        "product_quantity": 387,
        "price": "686.00"
    },
    {
        "product_name": "Pants",
        "product_description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "product_type": "Baked Goods",
        "product_quantity": 158,
        "price": "854.00"
    },
    {
        "product_name": "Salad",
        "product_description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "product_type": "Others",
        "product_quantity": 840,
        "price": "221.00"
    },
    {
        "product_name": "Chips",
        "product_description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "product_type": "Vegetables",
        "product_quantity": 747,
        "price": "267.00"
    },
    {
        "product_name": "Shoes",
        "product_description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "product_type": "Baked Goods",
        "product_quantity": 420,
        "price": "842.00"
    },
    {
        "product_name": "Mouse",
        "product_description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "product_type": "Pork",
        "product_quantity": 825,
        "price": "383.00"
    },
    {
        "product_name": "Cheese",
        "product_description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "product_type": "Flowers",
        "product_quantity": 861,
        "price": "981.00"
    },
    {
        "product_name": "Towels",
        "product_description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "product_type": "Decorative Plants",
        "product_quantity": 423,
        "price": "648.00"
    },
    {
        "product_name": "Ball",
        "product_description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "product_type": "Eggs",
        "product_quantity": 924,
        "price": "930.00"
    },
    {
        "product_name": "Cheese",
        "product_description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "product_type": "Beef",
        "product_quantity": 782,
        "price": "954.00"
    },
    {
        "product_name": "Chair",
        "product_description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "product_type": "Processed Meats",
        "product_quantity": 438,
        "price": "542.00"
    },
    {
        "product_name": "Tuna",
        "product_description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "product_type": "Dairy",
        "product_quantity": 749,
        "price": "49.00"
    },
    {
        "product_name": "Ball",
        "product_description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "product_type": "Pork",
        "product_quantity": 247,
        "price": "491.00"
    },
    {
        "product_name": "Hat",
        "product_description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "product_type": "Jams",
        "product_quantity": 216,
        "price": "581.00"
    },
    {
        "product_name": "Chips",
        "product_description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "product_type": "Dairy",
        "product_quantity": 593,
        "price": "941.00"
    },
    {
        "product_name": "Chair",
        "product_description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "product_type": "Baked Goods",
        "product_quantity": 623,
        "price": "892.00"
    },
    {
        "product_name": "Car",
        "product_description": "The Football Is Good For Training And Recreational Purposes",
        "product_type": "Flowers",
        "product_quantity": 99,
        "price": "499.00"
    },
    {
        "product_name": "Chicken",
        "product_description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "product_type": "Jams",
        "product_quantity": 570,
        "price": "140.00"
    },
    {
        "product_name": "Hat",
        "product_description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "product_type": "Vegetables",
        "product_quantity": 37,
        "price": "102.00"
    },
    {
        "product_name": "Keyboard",
        "product_description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "product_type": "Processed Meats",
        "product_quantity": 696,
        "price": "280.00"
    },
    {
        "product_name": "Mouse",
        "product_description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "product_type": "Processed Meats",
        "product_quantity": 748,
        "price": "203.00"
    },
    {
        "product_name": "Chair",
        "product_description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "product_type": "Flowers",
        "product_quantity": 132,
        "price": "17.00"
    },
    {
        "product_name": "Bacon",
        "product_description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "product_type": "Fruits",
        "product_quantity": 980,
        "price": "35.00"
    },
    {
        "product_name": "Salad",
        "product_description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "product_type": "Processed Meats",
        "product_quantity": 86,
        "price": "183.00"
    },
    {
        "product_name": "Salad",
        "product_description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "product_type": "Others",
        "product_quantity": 326,
        "price": "778.00"
    },
    {
        "product_name": "Tuna",
        "product_description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "product_type": "Arts and Crafts",
        "product_quantity": 444,
        "price": "104.00"
    },
    {
        "product_name": "Shirt",
        "product_description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "product_type": "Jams",
        "product_quantity": 69,
        "price": "868.00"
    },
    {
        "product_name": "Hat",
        "product_description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "product_type": "Processed Meats",
        "product_quantity": 898,
        "price": "938.00"
    },
    {
        "product_name": "Hat",
        "product_description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "product_type": "Others",
        "product_quantity": 322,
        "price": "572.00"
    },
    {
        "product_name": "Chicken",
        "product_description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "product_type": "Processed Meats",
        "product_quantity": 423,
        "price": "149.00"
    },
    {
        "product_name": "Shirt",
        "product_description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "product_type": "Chicken",
        "product_quantity": 931,
        "price": "898.00"
    },
    {
        "product_name": "Mouse",
        "product_description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "product_type": "Arts and Crafts",
        "product_quantity": 335,
        "price": "889.00"
    },
    {
        "product_name": "Chair",
        "product_description": "The Football Is Good For Training And Recreational Purposes",
        "product_type": "Jams",
        "product_quantity": 545,
        "price": "236.00"
    },
    {
        "product_name": "Mouse",
        "product_description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "product_type": "Beef",
        "product_quantity": 926,
        "price": "551.00"
    },
    {
        "product_name": "Computer",
        "product_description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "product_type": "Pork",
        "product_quantity": 354,
        "price": "503.00"
    },
    {
        "product_name": "Tuna",
        "product_description": "The Football Is Good For Training And Recreational Purposes",
        "product_type": "Beef",
        "product_quantity": 438,
        "price": "599.00"
    },
    {
        "product_name": "Car",
        "product_description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "product_type": "Juices",
        "product_quantity": 137,
        "price": "264.00"
    },
    {
        "product_name": "Hat",
        "product_description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "product_type": "Dairy",
        "product_quantity": 914,
        "price": "241.00"
    },
    {
        "product_name": "Soap",
        "product_description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "product_type": "Flowers",
        "product_quantity": 94,
        "price": "48.00"
    },
    {
        "product_name": "Cheese",
        "product_description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "product_type": "Others",
        "product_quantity": 776,
        "price": "907.00"
    },
    {
        "product_name": "Mouse",
        "product_description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "product_type": "Flowers",
        "product_quantity": 326,
        "price": "842.00"
    },
    {
        "product_name": "Soap",
        "product_description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "product_type": "Fruits",
        "product_quantity": 400,
        "price": "904.00"
    },
    {
        "product_name": "Cheese",
        "product_description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "product_type": "Eggs",
        "product_quantity": 160,
        "price": "378.00"
    },
    {
        "product_name": "Hat",
        "product_description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "product_type": "Beef",
        "product_quantity": 777,
        "price": "719.00"
    },
    {
        "product_name": "Gloves",
        "product_description": "The Football Is Good For Training And Recreational Purposes",
        "product_type": "Flowers",
        "product_quantity": 3,
        "price": "705.00"
    },
    {
        "product_name": "Hat",
        "product_description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "product_type": "Fruits",
        "product_quantity": 780,
        "price": "79.00"
    },
    {
        "product_name": "Soap",
        "product_description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "product_type": "Flowers",
        "product_quantity": 886,
        "price": "429.00"
    },
    {
        "product_name": "Salad",
        "product_description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "product_type": "Flowers",
        "product_quantity": 753,
        "price": "671.00"
    },
    {
        "product_name": "Gloves",
        "product_description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "product_type": "Pork",
        "product_quantity": 773,
        "price": "873.00"
    },
    {
        "product_name": "Towels",
        "product_description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "product_type": "Processed Meats",
        "product_quantity": 118,
        "price": "707.00"
    },
    {
        "product_name": "Car",
        "product_description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "product_type": "Juices",
        "product_quantity": 359,
        "price": "480.00"
    },
    {
        "product_name": "Shoes",
        "product_description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "product_type": "Others",
        "product_quantity": 664,
        "price": "511.00"
    },
    {
        "product_name": "Chicken",
        "product_description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "product_type": "Others",
        "product_quantity": 301,
        "price": "902.00"
    },
    {
        "product_name": "Soap",
        "product_description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "product_type": "Baked Goods",
        "product_quantity": 736,
        "price": "988.00"
    },
    {
        "product_name": "Shirt",
        "product_description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "product_type": "Eggs",
        "product_quantity": 333,
        "price": "829.00"
    },
    {
        "product_name": "Gloves",
        "product_description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "product_type": "Baked Goods",
        "product_quantity": 993,
        "price": "759.00"
    },
    {
        "product_name": "Shirt",
        "product_description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "product_type": "Beef",
        "product_quantity": 6,
        "price": "207.00"
    },
    {
        "product_name": "Shirt",
        "product_description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "product_type": "Arts and Crafts",
        "product_quantity": 493,
        "price": "547.00"
    },
    {
        "product_name": "Table",
        "product_description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "product_type": "Beef",
        "product_quantity": 695,
        "price": "79.00"
    },
    {
        "product_name": "Towels",
        "product_description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "product_type": "Arts and Crafts",
        "product_quantity": 122,
        "price": "196.00"
    },
    {
        "product_name": "Towels",
        "product_description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "product_type": "Fruits",
        "product_quantity": 569,
        "price": "180.00"
    },
    {
        "product_name": "Soap",
        "product_description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "product_type": "Pork",
        "product_quantity": 42,
        "price": "825.00"
    },
    {
        "product_name": "Shirt",
        "product_description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "product_type": "Processed Meats",
        "product_quantity": 512,
        "price": "388.00"
    },
    {
        "product_name": "Ball",
        "product_description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "product_type": "Pork",
        "product_quantity": 225,
        "price": "638.00"
    },
    {
        "product_name": "Tuna",
        "product_description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "product_type": "Dairy",
        "product_quantity": 344,
        "price": "245.00"
    },
    {
        "product_name": "Salad",
        "product_description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "product_type": "Flowers",
        "product_quantity": 587,
        "price": "657.00"
    },
    {
        "product_name": "Chips",
        "product_description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "product_type": "Vegetables",
        "product_quantity": 415,
        "price": "463.00"
    },
    {
        "product_name": "Cheese",
        "product_description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "product_type": "Juices",
        "product_quantity": 495,
        "price": "135.00"
    },
    {
        "product_name": "Car",
        "product_description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "product_type": "Vegetables",
        "product_quantity": 47,
        "price": "156.00"
    },
    {
        "product_name": "Tuna",
        "product_description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "product_type": "Chicken",
        "product_quantity": 137,
        "price": "541.00"
    },
    {
        "product_name": "Pants",
        "product_description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "product_type": "Others",
        "product_quantity": 294,
        "price": "236.00"
    },
    {
        "product_name": "Shirt",
        "product_description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "product_type": "Flowers",
        "product_quantity": 836,
        "price": "587.00"
    },
    {
        "product_name": "Fish",
        "product_description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "product_type": "Flowers",
        "product_quantity": 151,
        "price": "917.00"
    },
    {
        "product_name": "Shirt",
        "product_description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "product_type": "Chicken",
        "product_quantity": 749,
        "price": "224.00"
    },
    {
        "product_name": "Computer",
        "product_description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "product_type": "Eggs",
        "product_quantity": 465,
        "price": "90.00"
    },
    {
        "product_name": "Hat",
        "product_description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "product_type": "Pork",
        "product_quantity": 854,
        "price": "920.00"
    },
    {
        "product_name": "Ball",
        "product_description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "product_type": "Fruits",
        "product_quantity": 402,
        "price": "859.00"
    },
    {
        "product_name": "Bacon",
        "product_description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "product_type": "Fruits",
        "product_quantity": 676,
        "price": "268.00"
    },
    {
        "product_name": "Shoes",
        "product_description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "product_type": "Arts and Crafts",
        "product_quantity": 596,
        "price": "830.00"
    },
    {
        "product_name": "Tuna",
        "product_description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "product_type": "Fruits",
        "product_quantity": 642,
        "price": "189.00"
    },
    {
        "product_name": "Bike",
        "product_description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "product_type": "Decorative Plants",
        "product_quantity": 77,
        "price": "946.00"
    },
    {
        "product_name": "Chips",
        "product_description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "product_type": "Juices",
        "product_quantity": 459,
        "price": "389.00"
    },
    {
        "product_name": "Towels",
        "product_description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "product_type": "Dairy",
        "product_quantity": 744,
        "price": "933.00"
    },
    {
        "product_name": "Pants",
        "product_description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "product_type": "Juices",
        "product_quantity": 752,
        "price": "978.00"
    },
    {
        "product_name": "Keyboard",
        "product_description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "product_type": "Eggs",
        "product_quantity": 546,
        "price": "952.00"
    },
    {
        "product_name": "Gloves",
        "product_description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "product_type": "Pork",
        "product_quantity": 396,
        "price": "251.00"
    },
    {
        "product_name": "Chips",
        "product_description": "The Football Is Good For Training And Recreational Purposes",
        "product_type": "Processed Meats",
        "product_quantity": 225,
        "price": "422.00"
    },
    {
        "product_name": "Tuna",
        "product_description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "product_type": "Pork",
        "product_quantity": 811,
        "price": "575.00"
    },
    {
        "product_name": "Shirt",
        "product_description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "product_type": "Flowers",
        "product_quantity": 678,
        "price": "85.00"
    },
    {
        "product_name": "Gloves",
        "product_description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "product_type": "Flowers",
        "product_quantity": 514,
        "price": "56.00"
    },
    {
        "product_name": "Sausages",
        "product_description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "product_type": "Eggs",
        "product_quantity": 53,
        "price": "758.00"
    }
]

export {
    PRODUCT_SAMPLE_DATA
}