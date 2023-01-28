const productArray =  
[{   
    id: 1,
    name: 'Aloe',
    productNumber: 2212,
    image: 'https://www.ikea.com/us/en/images/products/aloe-vera-potted-plant-aloe__67410_pe181254_s4.jpg',
    wholesale: 3.50,
    price: 4.90,
    dimensions: '12 inches x 4 inches',
    category: 'leafy',
    type: 'succulent',
    care: 'easy',
    light: 'bright',
    water: 'Every 2-4 weeks or when soil is dry',
    environment: 'Warm Climate',
    quantity: 100,
    sold: 30,
    saleFrequency: 0
},

{
    id: 2,
    name: 'African Violet',
    productNumber: 11211,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_j9p7kuHGLucp4FVHdghpBSn_Esb7Bxz1Kg&usqp=CAU',
    wholesale: 7.00,
    price: 10.50,
    dimensions: '8-16 inches fully grow',
    category: 'flower',
    type: 'succulent',
    care: 'easy',
    light: 'bright',
    water: 'Keep soil moist',
    environment: 'Warm Climate',
    quantity: 0,
    sold: 0,
    saleFrequency: 0
},

{
    id: 3,
    name: 'Christmas Cactus',
    productNumber: 3324,
    image: 'https://plants4home.com/wp-content/uploads/2019/10/redchristmascactus.jpg',
    wholesale: 15.00,
    price: 20.01,
    dimensions: '6-12 inches tall and 12-24 inches wide',
    category: 'flower',
    type: 'succulent',
    care: 'easy',
    light: 'medium',
    water: 'When top third of soil is dry (Usually every 2-3 weeks)',
    environment: 'Avoid temperatures below 60 degrees',
    quantity: 40,
    sold: 0,
    saleFrequency: 0
},

{
    id: 4,
    name: 'Kalanchoe',
    productNumber: 3304,
    image: 'https://cityfloralgreenhouse.com/wp-content/uploads/2021/01/kalanchoe-pixabay-free-stock-img-sq.jpg',
    wholesale: 12.00,
    price: 15.55,
    dimensions: '8-12 inches tall',
    category: 'flower',
    type: 'succulent',
    care: 'easy',
    light: 'bright',
    water: 'When top 2 inches of soil is bone dry',
    environment: 'Above 40 degrees',
    quantity: 80,
    sold: 0,
    saleFrequency: 0
},

{
    id: 5,
    name: 'Saffron',
    productNumber: 3300,
    image: 'https://static.themarthablog.com/2020/11/MVIMG_20201102_101025-scaled.jpg',
    wholesale: 5.00,
    price: 8.55,
    dimensions: '6-12 inches tall',
    category: 'flower',
    type: 'leafy',
    care: 'easy',
    light: 'bright',
    water: 'Keep soil moist when flowering and water sparingly in winter',
    environment: 'Above 50 degrees',
    quantity: 90,
    sold: 0,
    saleFrequency: 0
},

{
    id: 6,
    name: 'Zebra Plant',
    productNumber: 3301,
    image: 'https://dewar.com/wp-content/uploads/2021/04/Zebra-Plant-Lifestyle-2-768x1024.png',
    wholesale: 4.00,
    price: 9.55,
    dimensions: '6-12 inches tall',
    category: 'flower',
    type: 'succulent',
    care: 'medium',
    light: 'bright',
    water: 'When top 25% of the soil is dry, do not get any water on leaves',
    environment: 'Above 55 degrees',
    quantity: 85,
    sold: 0,
    saleFrequency: 0
},

{
    id: 7,
    name: 'Jade Plant',
    productNumber: 3302,
    image: 'https://balconygardenweb.b-cdn.net/wp-content/uploads/2022/02/meta-2.jpg',
    wholesale: 3.00,
    price: 10.00,
    dimensions: '2-9 feet tall and 2-5 feet wide',
    category: 'flower',
    type: 'succulent',
    care: 'easy',
    light: 'bright',
    water: 'When top 1-2 inches of soil is dry',
    environment: 'Above 55 degrees',
    quantity: 63,
    sold: 0,
    saleFrequency: 0
},

{
    id: 8,
    name: 'Bromeliad',
    productNumber: 3303,
    image: 'https://cdn.atwilltech.com/flowerdatabase/b/bromeliads-i-three-bromeliads-in-container-60619934c767a6.78365582.425.jpg',
    wholesale: 6.00,
    price: 12.99,
    dimensions: '2-3 feet tall',
    category: 'flower',
    type: 'succulent',
    care: 'medium',
    light: 'bright',
    water: 'When top 1 inch of soil is dry',
    environment: 'Tolerant of temperatures as low as 20 degrees',
    quantity: 23,
    sold: 0,
    saleFrequency: 0
},

{
    id: 9,
    name: 'Peace Lily',
    productNumber: 3304,
    image: 'https://carithers.imgix.net/images/itemVariation/zoomAMS10411006083054211060433409.jpg',
    wholesale: 7.00,
    price: 16.79,
    dimensions: '2-3 feet tall',
    category: 'flower',
    type: 'leafy',
    care: 'easy',
    light: 'bright',
    water: 'Keep soil moist',
    environment: 'Tolerant of temperatures as low as 45 degrees',
    quantity: 55,
    sold: 0,
    saleFrequency: 0
},

{
    id: 10,
    name: 'Lavender',
    productNumber: 3305,
    image: 'https://www.gardeningknowhow.com/wp-content/uploads/2019/01/indoor-lavender.jpg',
    wholesale: 3.00,
    price: 9.79,
    dimensions: '1-2 feet wide and tall',
    category: 'flower',
    type: '',
    care: 'easy',
    light: 'bright',
    water: 'When dry',
    environment: 'Tolerant of temperatures as low as 40 degrees',
    quantity: 66,
    sold: 0,
    saleFrequency: 0
},

{
    id: 11,
    name: 'Orchid',
    productNumber: 3306,
    image: 'http://cdn2.hubspot.net/hubfs/52259/decorative-houseplants.jpg',
    wholesale: 40.00,
    price: 97.99,
    dimensions: '1-2 feet wide and tall',
    category: 'flower',
    type: '',
    care: 'difficult',
    light: 'medium',
    water: 'Keep moist',
    environment: 'Tolerant of temperatures as low as 50 degrees',
    quantity: 25,
    sold: 20,
    saleFrequency: 0
},

{
    id: 12,
    name: 'Snake Plant',
    productNumber: 3307,
    image: 'http://cdn.shopify.com/s/files/1/0516/4354/7844/products/SansevieriaLaurentii_SnakePlant.jpg?v=1641170344',
    wholesale: 5.00,
    price: 10.99,
    dimensions: 'Up to 12 feet tall',
    category: 'leafy',
    type: 'succulent',
    care: 'easy',
    light: 'low',
    water: 'Allow soil to completely between waterings (usually every two weeks)',
    environment: 'Tolerant of temperatures as low as 50 degrees',
    quantity: 35,
    sold: 0,
    saleFrequency: 0
},

{
    id: 13,
    name: 'Fiddle Leaf Fig',
    productNumber: 3308,
    image: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_fiddle-leaf-fig_large_growpot_variant.jpg?v=1669700838',
    wholesale: 25.00,
    price: 60.19,
    dimensions: 'Up to 10 feet tall',
    category: 'leafy',
    type: 'tree',
    care: 'difficult',
    light: 'bright',
    water: 'Allow soil to dry out between waterings',
    environment: 'Tolerant of temperatures as low as 60 degrees and requires extra humidity',
    quantity: 15,
    sold: 0,
    saleFrequency: 0
},

{
    id: 14,
    name: 'Monstera',
    productNumber: 3309,
    image: 'https://www.ohiotropics.com/wp-content/uploads/2022/07/monstera-tee-pee-960x1200.jpg',
    wholesale: 35.01,
    price: 70.19,
    dimensions: '10-15 feet tall and 8 feet wide',
    category: 'leafy',
    type: 'vine',
    care: 'medium',
    light: 'bright',
    water: 'Allow soil to dry out between waterings',
    environment: 'Tolerant of temperatures as low as 65 degrees and requires extra humidity',
    quantity: 25,
    sold: 80,
    saleFrequency: 0
},

{
    id: 15,
    name: 'Lemon Lime Dracaena',
    productNumber: 33091,
    image: 'https://www.costafarms.com/images/SlideShow/Dracaena-Popular-Houseplants-Costa-Farms.jpg',
    wholesale: 5.09,
    price: 20.19,
    dimensions: '5-7 feet tall',
    category: 'leafy',
    type: 'shrub',
    care: 'easy',
    light: 'low',
    water: 'Keep soil moist and water with purified water',
    environment: 'Tolerant of temperatures as low as 60 degrees and requires extra humidity',
    quantity: 5,
    sold: 0,
    saleFrequency: 0
},

{
    id: 16,
    name: 'Golden Pathos',
    productNumber: 33092,
    image: 'https://aroidwiki.com/wp-content/uploads/2021/11/golden-pothos-care-image1-768x1024.jpg',
    wholesale: 2.25,
    price: 10.05,
    dimensions: 'Vines can span as much as 12 feet',
    category: 'leafy',
    type: 'vine',
    care: 'easy',
    light: 'bright',
    water: 'Allow soil to dry out between waterings',
    environment: 'Tolerant of temperatures as low as 65 degrees',
    quantity: 25,
    sold: 0,
    saleFrequency: 0
},

{
    id: 17,
    name: 'Dracaena Marginata',
    productNumber: 33093,
    image: 'https://www.thespruce.com/thmb/C2reCth-GHN2CMo6T9x8QJ_5S24=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/grow-dracaena-marginata-indoors-1902749-2-983c52a2805144d899408949969a5728.jpg',
    wholesale: 12.25,
    price: 30.55,
    dimensions: 'Can grow to over 6 feet tall',
    category: 'leafy',
    type: 'tree',
    care: 'easy',
    light: 'medium',
    water: 'Allow top 1-2 inches of soil to dry between waterings',
    environment: 'Tolerant of temperatures as low as 60 degrees',
    quantity: 15,
    sold: 0,
    saleFrequency: 0
},

{
    id: 18,
    name: 'Yupon',
    productNumber: 33094,
    image: 'http://mobileimages.lowes.com/productimages/a025fc8d-4b43-45f2-add4-4c82814ffddd/09332746.jpg',
    wholesale: 4.25,
    price: 16.35,
    dimensions: '2-3 feet tall and 4 feet wide',
    category: 'leafy',
    type: 'shrub',
    care: 'easy',
    light: 'bright',
    water: 'When soil is dry',
    environment: 'Tolerant of temperatures as low as 40 degrees',
    quantity: 9,
    sold: 60,
    saleFrequency: 0
},

{
    id: 19,
    name: 'Cinnamon Fern',
    productNumber: 33095,
    image: 'https://cdn.shopify.com/s/files/1/1255/4109/products/8F5091.jpg?v=1502302509',
    wholesale: 5.25,
    price: 25.51,
    dimensions: '2-3 feet tall',
    category: 'leafy',
    type: 'fern',
    care: 'easy',
    light: 'low',
    water: 'Keep soil moist',
    environment: 'Tolerant of temperatures as low as 35 degrees',
    quantity: 7,
    sold: 0,
    saleFrequency: 0
},

{
    id: 20,
    name: 'Philodendron',
    productNumber: 33065,
    image: 'https://picturethisai.com/image-handle/website_cmsname/image/1080/217167526608699392.jpeg?x-oss-process=image/format,webp/quality,q_60&v=1.0',
    wholesale: 1.25,
    price: 10.01,
    dimensions: '1-3 feet tall and 1-6 feet wide',
    category: 'leafy',
    type: 'flower',
    care: 'easy',
    light: 'medium',
    water: 'Allow soil to dry between waterings',
    environment: 'Tolerant of temperatures as low as 55 degrees',
    quantity: 17,
    sold: 0,
    saleFrequency: 0
},

{
    id: 21,
    name: 'ZZ Plant',
    productNumber: 33066,
    image: 'https://bostan.com.sa/wp-content/uploads/2022/01/Zamioculcas-zamiifolia-ZZ-Plant-large.jpg',
    wholesale: 7.15,
    price: 20.91,
    dimensions: '2-3 feet tall',
    category: 'leafy',
    type: 'succulent',
    care: 'easy',
    light: 'low',
    water: 'Allow soil to dry between waterings',
    environment: 'Tolerant of temperatures as low as 40 degrees',
    quantity: 27,
    sold: 0,
    saleFrequency: 0
},

{
    id: 22,
    name: 'Strawberry',
    productNumber: 33071,
    image: 'https://www.gardeningknowhow.com/wp-content/uploads/2012/12/strawberry-400x300.jpg',
    wholesale: .75,
    price: 5.41,
    dimensions: '6-8 inches tall and 1 foot wide',
    category: 'edible',
    type: 'fruit',
    care: 'easy',
    light: 'bright',
    water: 'Keep soil moist',
    environment: 'Temperatures as low as 60 degrees',
    quantity: 37,
    sold: 0,
    saleFrequency: 0
},

{
    id: 23,
    name: 'Blueberry',
    productNumber: 33073,
    image: 'https://www.gardeners.com/globalassets/product-media-catalog/8599/500-599/8599502/8599502_01v_northern-high-bush-blueberries-in-decorative-planter.jpg',
    wholesale: 3.75,
    price: 12.41,
    dimensions: '3 feet tall',
    category: 'edible',
    type: 'fruit',
    care: 'easy',
    light: 'bright',
    water: 'Allow soil to dry between waterings',
    environment: 'Frost tolerant',
    quantity: 47,
    sold: 0,
    saleFrequency: 0
},

{
    id: 24,
    name: 'Habanero',
    productNumber: 33074,
    image: 'https://gardentabs.com/wp-content/uploads/2020/04/One-whole-hot-red-orange-habanero-pepper-growing-in-a-green-pot-with-books-near-the-window-in-background.jpg',
    wholesale: 4.45,
    price: 15.66,
    dimensions: '2-4.5 feet tall',
    category: 'edible',
    type: 'pepper',
    care: 'difficult',
    light: 'bright',
    water: 'Allow soil to dry out between waterings',
    environment: 'Temperatures as low as 60 degrees',
    quantity: 34,
    sold: 120,
    saleFrequency: 0
},

{
    id: 25,
    name: 'Dragon Fruit',
    productNumber: 33075,
    image: 'https://www.livinghouse.ca/shared/media/blog/15/image-1646073289.jpg',
    wholesale: 7.99,
    price: 25.16,
    dimensions: 'Up to 10 feet tall',
    category: 'edible',
    type: 'fruit',
    care: 'easy',
    light: 'bright',
    water: 'Keep soil moist and add humidity when needed',
    environment: 'Temperatures as low as 33 degrees',
    quantity: 4,
    sold: 0,
    saleFrequency: 0
},

{
    id: 26,
    name: 'Pineapple Guava',
    productNumber: 33076,
    image: 'https://www.libertylandscapesupply.com/wp-content/uploads/2021/07/Pineapple-Guava-Card-800x1100.jpeg',
    wholesale: 12.99,
    price: 28.36,
    dimensions: 'Up to 12 feet tall (Can be kept smaller with pruning)',
    category: 'edible',
    type: 'fruit',
    care: 'easy',
    light: 'bright',
    water: 'Keep soil moist',
    environment: 'Temperatures as low as 20 degrees',
    quantity: 24,
    sold: 0,
    saleFrequency: 0
},

{
    id: 27,
    name: 'Kumquat',
    productNumber: 33077,
    image: 'https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Nagami_Kumquat_FGT_600x600_361112ec-39da-413a-bc29-5121a0bfbb4d_400x400.jpg?v=1642174601',
    wholesale: 10.59,
    price: 32.22,
    dimensions: 'Up to 12 feet tall (Can be kept smaller with pruning)',
    category: 'edible',
    type: 'fruit',
    care: 'easy',
    light: 'bright',
    water: 'Keep soil moist',
    environment: 'Temperatures as low as 15 degrees',
    quantity: 24,
    sold: 300,
    saleFrequency: 0
},

{
    id: 28,
    name: 'Kiwi',
    productNumber: 33078,
    image: 'https://i1.wp.com/foodiegardener.com/wp-content/uploads/2014/03/beautiful-kiwi-vine-in-container-foodie-gardener.jpg?resize=496%2C783',
    wholesale: 6.59,
    price: 12.52,
    dimensions: 'Up to 2 feet tall',
    category: 'edible',
    type: 'fruit',
    care: 'medium',
    light: 'medium',
    water: 'Keep soil moist',
    environment: 'Frost tolerant',
    quantity: 2,
    sold: 100,
    saleFrequency: 0
},

{
    id: 29,
    name: 'Goji Berry',
    productNumber: 33079,
    image: 'https://cdn.shopify.com/s/files/1/0274/8071/9459/products/GojiBucket_600x.jpg?v=1628626531',
    wholesale: 2.44,
    price: 8.52,
    dimensions: 'Up to 10 feet tall',
    category: 'edible',
    type: 'fruit',
    care: 'easy',
    light: 'bright',
    water: 'Keep soil moist',
    environment: 'Frost tolerant',
    quantity: 22,
    sold: 0,
    saleFrequency: 0
},

{
    id: 30,
    name: 'Pomegranate',
    productNumber: 330710,
    image: 'https://www.thespruce.com/thmb/5U_Z84XSKcdT17fyrR1LEW1AQnY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/growing-pomegranate-indoors-5210843-hero-beeca954d76248b3a71466f82ce19111.jpg',
    wholesale: 8.44,
    price: 22.12,
    dimensions: 'Up to 6 feet tall',
    category: 'edible',
    type: 'fruit',
    care: 'easy',
    light: 'bright',
    water: 'Let soil dry out between waterings',
    environment: 'Frost tolerant',
    quantity: 20,
    sold: 0,
    saleFrequency: 0
},

{
    id: 31,
    name: 'Thai Basil',
    productNumber: 33080,
    image: 'https://cdn.shopify.com/s/files/1/0156/0137/products/thaibasil-websize_2463e580-8834-4e26-9f88-9732429340fd.jpg',
    wholesale: 1.05,
    price: 12.25,
    dimensions: 'Up to 2 feet tall',
    category: 'edible',
    type: 'herb',
    care: 'easy',
    light: 'bright',
    water: 'Let soil dry out between waterings',
    environment: 'Can tolerate temperatures down to 50 degrees',
    quantity: 30,
    sold: 0,
    saleFrequency: 0
},

{
    id: 32,
    name: 'Lemon Balm',
    productNumber: 33081,
    image: 'https://cdn.shopify.com/s/files/1/0598/6146/7296/products/LemonBalm.jpg?v=1638967310',
    wholesale: .99,
    price: 4.15,
    dimensions: 'Up to 3 feet tall',
    category: 'edible',
    type: 'herb',
    care: 'easy',
    light: 'bright',
    water: 'Keep soil moist',
    environment: 'Frost tolerant',
    quantity: 26,
    sold: 0,
    saleFrequency: 0
},

{
    id: 33,
    name: 'Sage',
    productNumber: 33083,
    image: 'https://www.gardeningknowhow.com/wp-content/uploads/2020/12/pot-with-sage-400x533.jpg',
    wholesale: 1.99,
    price: 9.19,
    dimensions: 'Up to 1 foot tall',
    category: 'edible',
    type: 'herb',
    care: 'easy',
    light: 'bright',
    water: 'Keep soil moist',
    environment: 'Frost tolerant',
    quantity: 66,
    sold: 0,
    saleFrequency: 0
},

{
    id: 34,
    name: 'Rosemary',
    productNumber: 33084,
    image: 'https://montanahappy.com/wp-content/uploads/2022/07/Rosemary-Bush-is-a-Perennial--728x728.jpg.webp',
    wholesale: 4.99,
    price: 15.39,
    dimensions: 'Up to 2 feet tall',
    category: 'edible',
    type: 'herb',
    care: 'medium',
    light: 'bright',
    water: 'Let soil dry out between waterings',
    environment: 'Frost tolerant',
    quantity: 66,
    sold: 0,
    saleFrequency: 0
},

{
    id: 35,
    name: 'Mint',
    productNumber: 33085,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ7K3U7J09TClMtwppkkqIoMEmkuwtbhHFqQ&usqp=CAU',
    wholesale: .79,
    price: 5.99,
    dimensions: 'Up to 2 feet tall',
    category: 'edible',
    type: 'herb',
    care: 'easy',
    light: 'medium',
    water: 'Keep soil moist',
    environment: 'Frost tolerant but may require additional humidity',
    quantity: 16,
    sold: 0,
    saleFrequency: 0
},
];

export {productArray};