export const SelectTravelerList = [
    {
        id: 1,
        title: 'Solo Travel',
        desc: 'A sole traveler in exploration',
        icon: '✈️',
        people: '1 Person'
    },

    {
        id: 2,
        title: 'Couple Travel',
        desc: 'New destinations, endless memories',
        icon: '🧑‍🤝‍🧑',
        people: 'A Couple'
    },

    {
        id: 3,
        title: 'Family Travel',
        desc: 'Creating moments that last a lifetime.',
        icon: '🏠',
        people: '3 to 5 People'
    },

    {
        id: 4,
        title: 'Friends Travel',
        desc: 'Where every trip turns into a celebration',
        icon: '⛴️',
        people: '5 to 10 People'
    },

]


export const SelectBudgetList = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay consciouis of cost.',
        icon: '💵',
    },

    {
        id: 2,
        title: 'Moderate',
        desc: 'Keep cost on average side.',
        icon: '💰',
    },

    {
        id: 3,
        title: 'Luxury',
        desc: 'Dont worry about cost.',
        icon: '💸',
    },
]

export const AI_Prompt = 'Generate a {totalDay}-day, {totalNight}-night travel plan for {traveler} in {location} with a {budget} budget in JSON format. Include hotel options (name, address, price in INR, image URL, coordinates, ratings, description). Provide nearby places to visit with name, details, image URL, coordinates, ticket pricing (INR), and travel time. Cover a daily schedule for {totalDay} days in detail, and specify the best time to visit.'