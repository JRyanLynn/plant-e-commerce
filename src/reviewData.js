import { productArray } from "./data";

const reviewArray = [{   
    id: 1,
    name: 'Aloe',
    productNumber: 2212,
    reviews: [
        {
            reviewNumber: 1,
            time: 'today',
            stars: 4,
            text: 'blah blah blah'
        },

        {
            reviewNumber: 2,
            time: 'today',
            stars: 4,
            text: 'blah blah blah'
        },

        {
            reviewNumber: 3,
            time: 'today',
            stars: 5,
            text: 'blah blah blah'
        },

        {
            reviewNumber: 4,
            time: 'today',
            stars: 2,
            text: 'blah blah blah'
        },

        {
            reviewNumber: 5,
            time: 'today',
            stars: 5,
            text: 'blah blah blah'
        },

        {
            reviewNumber: 6,
            time: 'today',
            stars: 1,
            text: 'blah blah blah'
        },
    ]
    
},

{
    id: 2,
    name: 'African Violet',
    productNumber: 11211,
},

{
    id: 3,
    name: 'Christmas Cactus',
    productNumber: 3324,
},

{
    id: 4,
    name: 'Kalanchoe',
    productNumber: 3304,
},

{
    id: 5,
    name: 'Saffron',
    productNumber: 3300,
},

{
    id: 6,
    name: 'Zebra Plant',
    productNumber: 3301,
},

{
    id: 7,
    name: 'Jade Plant',
    productNumber: 3302,
},

{
    id: 8,
    name: 'Bromeliad',
    productNumber: 3303,
},

{
    id: 9,
    name: 'Peace Lily',
    productNumber: 3304,
},

{
    id: 10,
    name: 'Lavender',
    productNumber: 3305,
},

{
    id: 11,
    name: 'Orchid',
    productNumber: 3306,
},

{
    id: 12,
    name: 'Snake Plant',
    productNumber: 3307,
},

{
    id: 13,
    name: 'Fiddle Leaf Fig',
    productNumber: 3308,
},

{
    id: 14,
    name: 'Monstera',
    productNumber: 3309,
},

{
    id: 15,
    name: 'Lemon Lime Dracaena',
    productNumber: 33091,
},

{
    id: 16,
    name: 'Golden Pathos',
    productNumber: 33092,
},

{
    id: 17,
    name: 'Dragon Tree',
    productNumber: 33093,
},

{
    id: 18,
    name: 'Yaupon',
    productNumber: 33094,
},

{
    id: 19,
    name: 'Cinnamon Fern',
    productNumber: 33095,
},

{
    id: 20,
    name: 'Philodendron',
    productNumber: 33065,
},

{
    id: 21,
    name: 'ZZ Plant',
    productNumber: 33066,
},

{
    id: 22,
    name: 'Strawberry',
    productNumber: 33071,
},

{
    id: 23,
    name: 'Blueberry',
    productNumber: 33073,
},

{
    id: 24,
    name: 'Habanero',
    productNumber: 33074,
},

{
    id: 25,
    name: 'Dragon Fruit',
    productNumber: 33075,
},

{
    id: 26,
    name: 'Pineapple Guava',
    productNumber: 33076,
},

{
    id: 27,
    name: 'Kumquat',
    productNumber: 33077,
},

{
    id: 28,
    name: 'Kiwi',
    productNumber: 33078,
},

{
    id: 29,
    name: 'Goji Berry',
    productNumber: 33079,
},

{
    id: 30,
    name: 'Pomegranate',
    productNumber: 330710,
},

{
    id: 31,
    name: 'Thai Basil',
    productNumber: 33080,
},

{
    id: 32,
    name: 'Lemon Balm',
    productNumber: 33081,
},

{
    id: 33,
    name: 'Sage',
    productNumber: 33083,
},

{
    id: 34,
    name: 'Rosemary',
    productNumber: 33084,
},

{
    id: 35,
    name: 'Mint',
    productNumber: 33085,
}
];

const mapped = reviewArray.map(review => ({
    oneStar: review.reviews ? review.reviews.filter(one => one.stars === 1).length : null,
    twoStar: review.reviews ? review.reviews.filter(two => two.stars === 2).length : null,
    threeStar: review.reviews ? review.reviews.filter(three => three.stars === 3).length : null,
    fourStar: review.reviews ? review.reviews.filter(four => four.stars === 4).length : null,
    fiveStar: review.reviews ? review.reviews.filter(five => five.stars === 5).length : null,
    length: review.reviews ? review.reviews.length : null,
    mostRecent: review.reviews ? review.reviews.pop() : null,
    averageStars: review.reviews ? (review.reviews.reduce((sum, review) => sum + review.stars, 0) / review.reviews.length) : 'No reviews yet'
}));

export {reviewArray};