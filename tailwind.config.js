/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*"],
    theme: {
        extend: {
            colors: {

                'orange': '#FE5D37',
                'dark-green': '#103741',
                'green': '#198754',
                'yellow': '#FFC107',
                'cyan': '#0DCAF0',

            },
            fontFamily: {
                'delicious-handrawn': ['Delicious Handrawn', 'cursive'],
                lobster: ['Lobster', 'cursive'],
                poppins: ['Poppins', 'sans'],
                'roboto-slab': ['Roboto Slab', 'serif'],
            },
        },
    },
    plugins: [],
}