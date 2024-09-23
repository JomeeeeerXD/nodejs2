    const m = {
        main:(req, res) =>{
            res.render('index');
        },
        
        home: (req, res) => {
            res.render('home')
        },

        shop: (req, res) => {
            res.render('shop')
        },

        about: (req, res) => {
            res.render('about')
        },

        services: (req, res) => {
            res.render('services')
        },
        blog: (req, res) => {
            res.render('blog')
        }
    };

    module.exports = m;