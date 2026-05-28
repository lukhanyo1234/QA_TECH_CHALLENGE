export const positiveLoginData = [

    {
        username: 'admin',
        password: 'password'
    }

];

export const negativeLoginData = [

    {
        username: 'invalidAdmin',
        password: 'password',
        error: 'Invalid credentials'
    },

    {
        username: 'admin',
        password: 'invalidPassword',
        error: 'Invalid credentials'
    }

];