const TEST_USER = {
    name: 'John Smith',
    allowedGuests: 2,
    guests: []
};

export default class {


    static user() {
        return Promise.resolve({userData: TEST_USER});
    }
}