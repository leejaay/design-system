export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    backgrounds: {
        default: 'myBackground',
        values: [
            {
                name: 'myBackground',
                value: '#252836'
            },
            {
                name: 'dark',
                value: '#333333'
            },
            {
                name: 'white',
                value: '#ffffff'
            }
        ]
    }
};