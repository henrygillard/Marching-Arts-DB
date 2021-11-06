require('dotenv').config();
require('./config/database');

const Category = require("./models/category");
const Group = require('./models/group');
const User = require("./models/users");
(async function () {
    
    const users = await User.find({})

    await Group.deleteMany({});
    const groups = await Group.create([
        {
            name: "Blue Devils",
            category: "DCI",
            videoUrl: ["https://www.youtube.com/watch?v=FO6d8zDf1Hg&ab_channel=ThatWasLoud", "https://www.youtube.com/watch?v=F4_j5W8-L3g&ab_channel=DrumCorpsInternational"],
            years: [{
                year: "2021",
                videoUrl: ["https://www.youtube.com/watch?v=19IvCPXwBDM&ab_channel=TheBlueDevils"],
            }, {
                year: "2020",
                videoUrl: ["https://www.youtube.com/watch?v=aR3dp_J_370&ab_channel=TheBlueDevils", "https://www.youtube.com/watch?v=ApFwMHirU6M&ab_channel=TheBlueDevils"]
            }, 
            ],
            user: users[0]
        },
        { name: "Santa Clara Vanguard", category: "DCI", videoUrl: "https://www.youtube.com/watch?v=F4_j5W8-L3g&ab_channel=DrumCorpsInternational", user: users[0] },
        { name: "The Cavaliers", category: "DCI", videoUrl: "https://www.youtube.com/watch?v=v3dVWvqTPs8&ab_channel=oddblacksheepx", user: users[0] },
        { name: "The Bluecoats", category: "DCI", videoUrl: "https://www.youtube.com/watch?v=YyzzG5MTMyM&ab_channel=Thepnakhin_", user: users[0] },
        { name: "Carolina Crown", category: "DCI", videoUrl: "https://www.youtube.com/watch?v=4eyC0B7znaU&ab_channel=FloMarching", user: users[0] },
        { name: "The Mandarins", category: "DCI", videoUrl: "https://www.youtube.com/watch?v=bS2sSLR9jFM&ab_channel=DrumCorpsInternational", user: users[0] },
        { name: "Boston Crusaders", category: "DCI", videoUrl: "https://www.youtube.com/watch?v=8pGWyYm0I0c&ab_channel=DrumCorpsInternational", user: users[0] },
        { name: "Phantom Regiment", category: "DCI", videoUrl: "https://www.youtube.com/watch?v=cTU3HF8ptuw&ab_channel=TheBlueGun", user: users[0] },
        { name: "The Cadets", category: "DCI", videoUrl: "https://www.youtube.com/watch?v=ANCg3T2FRh0&ab_channel=TheCadets", user: users[0] },
        { name: "The Academy", category: "DCI", videoUrl: "https://www.youtube.com/watch?v=WY0D9MpIa3s&ab_channel=JustinLe", user: users[0] },
        { name: "Troopers", category: "DCI", videoUrl: "https://www.youtube.com/watch?v=6u2C_WzxMVM&ab_channel=DrumCorpsInternational", user: users[0] },
        { name: "Pacific Crest", category: "DCI", videoUrl: "https://www.youtube.com/watch?v=fCJt3k59-a8&ab_channel=DrumCorpsInternational", user: users[0] },
        { name: "RCC Indoor Percussion", category: "WGI", videoUrl: "https://www.youtube.com/watch?v=ArTgxmE5sco&ab_channel=RCCIndoorPercussion", user: users[0] },
        { name: "Connecticut Hurricanes", category: "DCA", videoUrl: "https://www.youtube.com/watch?v=SnwO9Y_pKkc&ab_channel=brianlathamct44", user: users[0] },
        { name: "Chino Hills HS", category: "Marching Band", videoUrl: "https://www.youtube.com/watch?v=KnPy-dxejfk&ab_channel=papasteveb", user: users[0] },
        { name: "Arcadia HS", category: "Scholastic/Indoor", videoUrl: "https://www.youtube.com/watch?v=GQdW1zc3Tdk&ab_channel=AlessandroSestito", user: users[0] },
    ]);

    console.log(groups);
    process.exit();
})();
