const PRODUCT_SAMPLE_DATA = [
    {
        "_id": "0001",
        "product_name": "Okra",
        "product_description": "Fresh okra harvested from our farm. Okra is a nutritious vegetable rich in vitamins, minerals, and fiber. Enjoy it in soups, stews, or stir-fries.",
        "productType": "Vegetables",
        "product_quantity": 100,
        "price": "50.00",
        "img": "https://plus.unsplash.com/premium_photo-1666877059056-f42ada662ccc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2tyYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        "_id": "0002",
        "product_name": "Cauliflower",
        "product_description": "Organically grown cauliflower, perfect for healthy meals. Cauliflower is versatile and can be roasted, mashed, or used in salads and curries.",
        "productType": "Vegetables",
        "product_quantity": 50,
        "price": "60.00",
        "img": "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F1bGlmbG93ZXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
        "_id": "0003",
        "product_name": "Tomato",
        "product_description": "Fresh tomatoes picked ripe from the vine. Tomatoes are juicy and flavorful, ideal for salads, sandwiches, and sauces.",
        "productType": "Vegetables",
        "product_quantity": 80,
        "price": "35.00",
        "img": "https://media.istockphoto.com/id/671192338/photo/tomato-fruit-with-water-drop-and-sunlight.jpg?s=612x612&w=0&k=20&c=0ypX6P103BgpDTOpPm1Ju_nFzWdmEtiEnvNrZPZZQUE="
    },
    {
        "_id": "0004",
        "product_name": "Carrots",
        "product_description": "Sweet and crunchy carrots, straight from the garden. Carrots are packed with beta-carotene and are great for snacking, juicing, or adding to dishes.",
        "productType": "Vegetables",
        "product_quantity": 120,
        "price": "40.00",
        "img": "https://plus.unsplash.com/premium_photo-1675366073398-d9030d9455d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        "_id": "0005",
        "product_name": "Corn",
        "product_description": "Juicy and flavorful corn, freshly harvested. Corn is a staple in many cuisines and can be boiled, grilled, or added to salads and soups.",
        "productType": "Vegetables",
        "product_quantity": 70,
        "price": "30.00",
        "img": "https://images.unsplash.com/photo-1634467524884-897d0af5e104?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ybnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        "_id": "0006",
        "product_name": "Lettuce",
        "product_description": "Crisp and refreshing lettuce, perfect for salads. Lettuce is low in calories and high in water content, making it an excellent choice for weight management.",
        "productType": "Vegetables",
        "product_quantity": 90,
        "price": "45.00",
        "img": "https://images.unsplash.com/photo-1533321942807-08e4008b2025?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxldHR1Y2V8ZW58MHx8MHx8fDA%3D"
    },
    {
        "_id": "0007",
        "product_name": "Potatoes",
        "product_description": "Farm-fresh potatoes, ideal for mashing, roasting, or frying. Potatoes are a versatile ingredient that can be used in countless dishes.",
        "productType": "Vegetables",
        "product_quantity": 60,
        "price": "55.00",
        "img": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90YXRvfGVufDB8fDB8fHww"
    },
    {
        "_id": "0008",
        "product_name": "Bell Pepper",
        "product_description": "Colorful bell peppers grown with care on our farm. Bell peppers are rich in antioxidants and can be used in salads, stir-fries, or stuffed with delicious fillings.",
        "productType": "Vegetables",
        "product_quantity": 100,
        "price": "50.00",
        "img": "https://images.unsplash.com/photo-1592548868664-f8b4e4b1cfb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVsbCUyMHBlcHBlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        "_id": "0009",
        "product_name": "Apple",
        "product_description": "Crisp and juicy apples, picked fresh from the orchard. Apples are a delicious and nutritious snack, perfect for any time of day.",
        "productType": "Fruits",
        "product_quantity": 150,
        "price": "25.00",
        "img": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBwbGV8ZW58MHx8MHx8fDA%3D"
    },
    {
        "_id": "0010",
        "product_name": "Banana",
        "product_description": "Sweet and creamy bananas, packed with potassium and other essential nutrients. Bananas make a convenient and healthy snack.",
        "productType": "Fruits",
        "product_quantity": 120,
        "price": "20.00",
        "img": "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuYW5hfGVufDB8fDB8fHww"
    },
    {
        "_id": "0011",
        "product_name": "Orange",
        "product_description": "Juicy and tangy oranges, bursting with vitamin C. Oranges are refreshing and can be enjoyed as a snack or used in various recipes.",
        "productType": "Fruits",
        "product_quantity": 100,
        "price": "30.00",
        "img": "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b3JhbmdlfGVufDB8fDB8fHww"
    },
    {
        "_id": "0012",
        "product_name": "Grapes",
        "product_description": "Plump and sweet grapes, perfect for snacking or adding to fruit salads. Grapes are rich in antioxidants and provide various health benefits.",
        "productType": "Fruits",
        "product_quantity": 80,
        "price": "35.00",
        "img": "https://images.unsplash.com/photo-1631299106224-aae61c217164?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyYXBlc3xlbnwwfHwwfHx8MA%3D%3D"
    }, 
    {
        "_id": "0013",
        "product_name": "Whole Chicken",
        "product_description": "Fresh whole chicken, raised on our farm with care. Perfect for roasting, grilling, or making hearty soups and stews.",
        "productType": "Poultry",
        "product_quantity": 70,
        "price": "60.00",
        "img": "https://plus.unsplash.com/premium_photo-1664391666682-7e84a1736bd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdob2xlJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        "_id": "0014",
        "product_name": "Pork Belly",
        "product_description": "Juicy and flavorful pork belly, sourced from locally raised pigs. Pork belly is perfect for braising, roasting, or making crispy pork belly dishes.",
        "productType": "Meat",
        "product_quantity": 50,
        "price": "45.00",
        "img": "https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZXNoJTIwcG9yayUyMGJlbGx5fGVufDB8fDB8fHww"
    },
    {
        "_id": "0015",
        "product_name": "Lamb Chop",
        "product_description": "Tender and succulent lamb chop, sourced from pasture-raised lambs. Lamb chops are perfect for grilling, pan-searing, or roasting with herbs.",
        "productType": "Meat",
        "product_quantity": 40,
        "price": "75.00",
        "img": "https://images.unsplash.com/photo-1619711667542-c049700dd9e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFtYiUyMGNob3B8ZW58MHx8MHx8fDA%3D"
    },
    {
        "_id": "0016",
        "product_name": "Duck Breast",
        "product_description": "Rich and flavorful duck breast, raised on our farm with natural feeds. Duck breast is perfect for pan-searing or roasting with a crispy skin.",
        "productType": "Poultry",
        "product_quantity": 30,
        "price": "85.00",
        "img": "https://images.unsplash.com/photo-1577271141104-b6bd7b76b8e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVjayUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        "_id": "0017",
        "product_name": "Turkey",
        "product_description": "Fresh whole turkey, raised ethically on open pastures. Turkey is a versatile meat, perfect for holiday feasts or everyday meals.",
        "productType": "Poultry",
        "product_quantity": 25,
        "price": "100.00",
        "img": "https://images.unsplash.com/photo-1577271141104-b6bd7b76b8e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVjayUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        "_id": "0018",
        "product_name": "Beef Ribeye Steak",
        "product_description": "Juicy and marbled beef ribeye steak, sourced from grass-fed cattle. Ribeye steak is known for its rich flavor and tenderness.",
        "productType": "Meat",
        "product_quantity": 35,
        "price": "95.00",
        "img": "https://images.unsplash.com/photo-1690983322025-aab4f95a0269?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlZWYlMjByaWJleWUlMjBzdGVha3xlbnwwfHwwfHx8MA%3D%3D"
    }
    
    
    
    
    
];

export {
    PRODUCT_SAMPLE_DATA
};
