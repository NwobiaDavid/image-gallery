const tailwindcss = require("tailwindcss");

module.export={
    Plugins:[
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ]
}