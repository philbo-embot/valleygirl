movies = Movie.create([
    {   
        title: "Valley Girl",
        year: 1983,
        writer: "Martha Coolidge",
        actors: ["Nicolas Cage, Deborah Foreman, Elizabeth Daily, Michael Bowen"],
        plot: "Julie, a girl from the valley, meets Randy, a punk from the city. They are from different worlds and find love. Somehow they need to stay together in spite of her trendy, shallow friends.",
        img_url: "http://ia.media-imdb.com/images/M/MV5BMjA4NzI5OTgyMV5BMl5BanBnXkFtZTgwODgwNjU1MDE@._V1_SX300.jpg",
        rating: 6.3
    },{
        title: "Clueless",
        year: 1995,
        writer: "Amy Heckerling",
        actors: ["Alicia Silverstone, Stacey Dash, Brittany Murphy, Paul Rudd"],
        plot: "A rich high school student tries to boost a new pupil's popularity, but reckons without affairs of the heart getting in the way.",
        img_url: "http://ia.media-imdb.com/images/M/MV5BMTgxODIxODE2MF5BMl5BanBnXkFtZTgwOTA4NjQxMTE@._V1_SX300.jpg",
        rating: 6.8
    },{
        title: "Mean Girls",
        year: 2004,
        writer: "Rosalind Wiseman (book), Tina Fey (screenplay)",
        actors: ["Lindsay Lohan, Rachel McAdams, Tina Fey, Tim Meadows"],
        plot: "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
        img_url: "http://ia.media-imdb.com/images/M/MV5BMjE1MDQ4MjI1OV5BMl5BanBnXkFtZTcwNzcwODAzMw@@._V1_SX300.jpg",
        rating: 7.0
    },{
        title: "Square Pegs",
        year: 1982,
        writer: "Anne Beatts",
        actors: ["Sarah Jessica Parker, Amy Linker, Merritt Butrick, John Femia"],
        plot: "Follow Patty Greene and Lauren Hutchinson, two awkward teenage girls who are desperate to fit in at Weemawee High School.",
        img_url: "http://ia.media-imdb.com/images/M/MV5BMTM1OTE4NTc0OV5BMl5BanBnXkFtZTYwMTYwNzU2._V1_SX300.jpg",
        rating: 7.3
    },{   
        title: "Can't Buy Me Love",
        year: 1987,
        writer: "Michael Swerdlick",
        actors: ["Patrick Dempsey, Amanda Peterson, Courtney Gains, Tina Caspary"],
        plot: "A nerdy outcast secretly pays the most popular girl in school one thousand dollars to be his girlfriend.",
        img_url: "http://ia.media-imdb.com/images/M/MV5BMTk1NjIxNTYxN15BMl5BanBnXkFtZTYwMzczNzI5._V1_SX300.jpg",
        rating: 6.7
    },{
        title: "Ferris Bueller's Day Off",
        year: 1986,
        writer: "John Hughes",
        actors: ["Matthew Broderick, Alan Ruck, Mia Sara, Jeffrey Jones"],
        plot: "A high school wise guy is determined to have a day off from school, despite what the principal thinks of that.",
        img_url: "http://ia.media-imdb.com/images/M/MV5BMTg2MTUxODY4NV5BMl5BanBnXkFtZTcwNzQ5NzU2OQ@@._V1_SX300.jpg",
        rating: 7.9
    },{
        title: "Desperately Seeking Susan",
        year: 1985,
        writer: "John Hughes",
        actors: ["Rosanna Arquette, Madonna, Aidan Quinn, Mark Blum"],
        plot: "A bored suburban housewife, seeking adventure to her life, accidentally gets hit on the head, wakes up with amnesia, and is mistaken for a free-spirited New York City drifter named Susan.",
        img_url: "http://ia.media-imdb.com/images/M/MV5BMTIzMzA5NjIzOF5BMl5BanBnXkFtZTYwOTA2NTI5._V1_SX300.jpg",
        rating: 5.8
    },{
        title: "Heathers",
        year: 1988,
        writer: "Daniel Waters",
        actors: ["Winona Ryder, Christian Slater, Shannen Doherty, Lisanne Falk"],
        plot: "In order to get out of the snobby clique that is destroying her good-girl reputation, an intelligent teen teams up with a dark sociopath in a plot to kill the cool kids.",
        img_url: "http://ia.media-imdb.com/images/M/MV5BMjE0Mjc3ODAwNV5BMl5BanBnXkFtZTgwMDM3ODI1MDE@._V1_SX300.jpg",
        rating: 7.3
    }
])


songs = Song.create([
    {   
        title: "Kids In America",
        artist: "The Muffs",
        mp3: "KidsInAmerica_TheMuffs.mp3",
        img_url: 'http://2.bp.blogspot.com/-B1WmWIOxI50/VDxOOtzT7_I/AAAAAAAAAow/OD1lmT4G0Oo/s1600/2011-10-04_the-muffs-guilty.jpg'
    },{
        title: "Fake Plastic Trees",
        artist: "Radiohead",
        mp3: "FakePlasticTrees_Radiohead.mp3",
        img_url: 'http://www.musiclipse.com/wp-content/uploads/2014/09/Radiohead-Fake-Plastic-Trees-Cd-Cover-Front.jpg'
    },{
        title: "Supermodel",
        artist: "Jill Sobule",
        mp3: "Supermodel_JillSobule.mp3",
        img_url: 'http://1.bp.blogspot.com/_WOGf6Z-X8Wk/Sf-mnhsB_AI/AAAAAAAAEqQ/zj86USU3Nfg/s400/JillSobule-01-big.jpg'
    },{
        title: "Rollin' With My Homies",
        artist: "Coolio",
        mp3: "RollinWithMyHomies_Coolio.mp3",
        img_url: 'https://i.ytimg.com/vi/iPH1X5peBF8/maxresdefault.jpg'
    },{   
        title: "Valley Girl",
        artist: "Frank Zappa",
        mp3: "ValleyGirl_FrankZappa.mp3",
        img_url: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Frank_Zappa_Valley_Girl_single.jpg'
    },{
        title: "Girls Like Me",
        artist: "Bonnie Hayes",
        mp3: "GirlsLikeMe_BonnieHayes.mp3",
        img_url: 'http://2.bp.blogspot.com/_UjRpW1RlbC0/RyMae00hhBI/AAAAAAAACUc/Ns7bQ16wYXY/s320/87+f.jpg'
    },{
        title: "Do You Really Want to Hurt Me",
        artist: ["Helen Terry", "Boy George"],
        mp3: "DoYouReallyWantToHurtMe_BoyGeorge.mp3",
        img_url: 'https://upload.wikimedia.org/wikipedia/en/b/b1/Do_You_Really_Want_To_Hurt_Me.jpg'
    },{
        title: "Maniac",
        artist: "Michael Sombello",
        mp3: "Maniac_MichaelSombello.mp3",
        img_url:  "https://popvoid.files.wordpress.com/2015/03/maniac-900x894.jpg"
    },{
        title: "Beautiful Life",
        artist: "Ace of Base",
        mp3: "BeautifulLife_AceOfBase.mp3",
        img_url: "http://www.freecodesource.com/album-cover/51ERNynjPWL/Ace-of-Base-Beautiful-Life-[Vinyl].jpg"


    }
])


stores = Store.create([
    {   
        name: 'Nasty Gal',
        location: '1254 3rd St Promenade Santa Monica, CA 90401',
        lat: 34.017339,
        lng:  -118.366452
    },{
        name: 'Fred Segal',
        location: '8100 Melrose Ave, Los Angeles, CA 90046',
        lat: 34.083729,
        lng: -118.366409
    },{
        name: 'Intermix',
        location: '110 N Robertson Blvd, Los Angeles, CA 90048',
        lat: 34.075957,
        lng: -118.383448
    },{
        name: 'Kitson',
        location: '115 S Robertson Blvd, Los Angeles, CA 90048',
        lat: 34.078322,
        lng: -118.384752
    },{   
        name: 'Barneys',
        location: '9570 Wilshire Blvd, Beverly Hills, CA 90212',
        lat: 34.070506,
        lng: -118.402262
    },{   
        name: 'Sherman Oaks Galleria',
        location: '15301 Ventura Blvd, Sherman Oaks, CA 91403',
        lat: 34.155500,
        lng: -118.467376
    }
])


