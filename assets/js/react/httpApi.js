const TEST_USER = {
    id: 1,
    name: 'John Smith',
    allowed_guests: 2,
    meal_choice_id: 1,
    dietary_restrictions: 'Vegetarian',
    guests: [{
        id: 2,
        name: 'Jane Doe',
        meal_choice_id: 2,
        dietary_restrictions: 'None'
    }]
};

const TEST_WEDDING = {
    meal_choices: [
        {
            id: 1,
            name: 'Salmon with Potatoes'
        },
        {
            id: 2,
            name: 'Chicken with Asparagus'
        }
    ]
}

export default class {


    static user() {
        return Promise.resolve({
            user_data: TEST_USER,
            wedding_data: TEST_WEDDING
        });
    }
}