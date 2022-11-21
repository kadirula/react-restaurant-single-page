import {
    Slider1Image, Slider2Image, Slider3Image,
    Breakfast, Breakfast1, Breakfast2, Breakfast3, Breakfast4,
    Fastfood, Fastfood1, Fastfood2, Fastfood3, Fastfood4,
    Dinner, Dinner1, Dinner2, Dinner3, Dinner4,
} from './utils/imageImport';

export const sliders = [
    {
        id: 1,
        subtitle: 'Welcome to our',
        title: 'Restaurant',
        desc: 'The Best Multi Cuisine Restaurant',
        img: Slider1Image
    },
    {
        id: 2,
        subtitle: 'Special Menu',
        title: 'Italian Pizza',
        desc: 'The Best Multi Cuisine Restaurant',
        img: Slider2Image
    },
    {
        id: 3,
        subtitle: 'Popular Menu',
        title: 'Flackey Puff',
        desc: 'The Best Multi Cuisine Restaurant',
        img: Slider3Image
    }
]

export const menuTabs = [
    {
        id: 1,
        title: 'Breakfast',
        picturePoster: Breakfast,
        items: [
            {
                image: Breakfast1,
                title: 'Breakfast - 1',
                desc: 'Tomato, Fresh Milk Potatos Lorem Ipsum Is Simplydummy Text Of The Printingand Typesettin Simply Dummy Text.',
                price: '$45'
            },
            {
                image: Breakfast2,
                title: 'Breakfast - 2',
                desc: 'Tomato, Fresh Milk Potatos Lorem Ipsum Is Simplydummy Text Of The Printingand Typesettin Simply Dummy Text.',
                price: '$13'
            },
            {
                image: Breakfast3,
                title: 'Breakfast - 3',
                desc: 'Tomato, Fresh Milk Potatos Lorem Ipsum Is Simplydummy Text Of The Printingand Typesettin Simply Dummy Text.',
                price: '$14'
            },
            {
                image: Breakfast4,
                title: 'Breakfast - 4',
                desc: 'Tomato, Fresh Milk Potatos Lorem Ipsum Is Simplydummy Text Of The Printingand Typesettin Simply Dummy Text.',
                price: '$12'
            },
        ]
    },
    {
        id: 2,
        title: 'Fastfood',
        picturePoster: Fastfood,
        items: [
            {
                image: Fastfood1,
                title: 'Fastfood - 1',
                desc: 'Tomato, Fresh Milk Potatos Lorem Ipsum Is Simplydummy Text Of The Printingand Typesettin Simply Dummy Text.',
                price: '$45'
            },
            {
                image: Fastfood2,
                title: 'Fastfood - 2',
                desc: 'Tomato, Fresh Milk Potatos Lorem Ipsum Is Simplydummy Text Of The Printingand Typesettin Simply Dummy Text.',
                price: '$13'
            },
            {
                image: Fastfood3,
                title: 'Fastfood - 3',
                desc: 'Tomato, Fresh Milk Potatos Lorem Ipsum Is Simplydummy Text Of The Printingand Typesettin Simply Dummy Text.',
                price: '$14'
            },
            {
                image: Fastfood4,
                title: 'Fastfood - 4',
                desc: 'Tomato, Fresh Milk Potatos Lorem Ipsum Is Simplydummy Text Of The Printingand Typesettin Simply Dummy Text.',
                price: '$12'
            },
        ]
    },
    {
        id: 3,
        title: 'Dinner',
        picturePoster: Dinner,
        items: [
            {
                image: Dinner1,
                title: 'Dinner - 1',
                desc: 'Tomato, Fresh Milk Potatos Lorem Ipsum Is Simplydummy Text Of The Printingand Typesettin Simply Dummy Text.',
                price: '$45'
            },
            {
                image: Dinner2,
                title: 'Dinner - 2',
                desc: 'Tomato, Fresh Milk Potatos Lorem Ipsum Is Simplydummy Text Of The Printingand Typesettin Simply Dummy Text.',
                price: '$13'
            },
            {
                image: Dinner3,
                title: 'Dinner - 3',
                desc: 'Tomato, Fresh Milk Potatos Lorem Ipsum Is Simplydummy Text Of The Printingand Typesettin Simply Dummy Text.',
                price: '$14'
            },
            {
                image: Dinner4,
                title: 'Dinner - 4',
                desc: 'Tomato, Fresh Milk Potatos Lorem Ipsum Is Simplydummy Text Of The Printingand Typesettin Simply Dummy Text.',
                price: '$12'
            },
        ]
    }
]