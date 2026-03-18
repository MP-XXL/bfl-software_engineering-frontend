const newsFeed = [
{ username: "gyang_dung", fullName: "Gyang Dung", post: "Cold morning in Jos today. Perfect weather for coding.", likes: 82, comments: 10 },
{ username: "pam_dalyop", fullName: "Pam Dalyop", post: "Visited Terminus market today.", likes: 65, comments: 6 },
{ username: "dung_gokum", fullName: "Dung Gokum", post: "Watching football with friends tonight.", likes: 97, comments: 12 },
{ username: "dalyop_pam", fullName: "Dalyop Pam", post: "Sunday service was powerful today.", likes: 140, comments: 21 },
{ username: "gokum_dung", fullName: "Gokum Dung", post: "Learning JavaScript loops today.", likes: 73, comments: 9 },

{ username: "nyam_shim", fullName: "Nyam Shim", post: "Enjoying the cool Jos weather.", likes: 61, comments: 7 },
{ username: "shim_mwantiri", fullName: "Shim Mwantiri", post: "Just fixed a bug in my code.", likes: 88, comments: 12 },
{ username: "mwantiri_yil", fullName: "Mwantiri Yil", post: "Reading about Golang today.", likes: 77, comments: 9 },
{ username: "yil_bap", fullName: "Yil Bap", post: "Market prices these days 😅", likes: 102, comments: 18 },
{ username: "bap_dam", fullName: "Bap Dam", post: "Family dinner tonight.", likes: 90, comments: 11 },

{ username: "dam_nyalum", fullName: "Dam Nyalum", post: "Working on my coding assignment.", likes: 69, comments: 8 },
{ username: "nyalum_bul", fullName: "Nyalum Bul", post: "Football training this evening.", likes: 83, comments: 10 },
{ username: "bul_kumbul", fullName: "Bul Kumbul", post: "Learning HTML and CSS.", likes: 74, comments: 7 },
{ username: "kumbul_nang", fullName: "Kumbul Nang", post: "Beautiful sunset in Jos.", likes: 112, comments: 15 },
{ username: "nang_dung", fullName: "Nang Dung", post: "Reading a tech blog tonight.", likes: 58, comments: 6 },

{ username: "tapgun_lalong", fullName: "Tapgun Lalong", post: "Working remotely today.", likes: 76, comments: 9 },
{ username: "lalong_gyang", fullName: "Lalong Gyang", post: "Gym session done.", likes: 81, comments: 8 },
{ username: "gyang_pam", fullName: "Gyang Pam", post: "Learning Node.js today.", likes: 67, comments: 7 },
{ username: "pam_dung", fullName: "Pam Dung", post: "Preparing for exams.", likes: 59, comments: 6 },
{ username: "dung_dalyop", fullName: "Dung Dalyop", post: "Debugging JavaScript tonight.", likes: 73, comments: 9 },

{ username: "dalyop_gokum", fullName: "Dalyop Gokum", post: "Church choir rehearsal today.", likes: 95, comments: 13 },
{ username: "gokum_nyam", fullName: "Gokum Nyam", post: "Spent the day with family.", likes: 110, comments: 16 },
{ username: "nyam_shim2", fullName: "Nyam Shim", post: "Morning walk around Rayfield.", likes: 62, comments: 7 },
{ username: "shim_yil", fullName: "Shim Yil", post: "Trying out a new coding project.", likes: 71, comments: 8 },
{ username: "yil_bap2", fullName: "Yil Bap", post: "Learning Git today.", likes: 66, comments: 7 },

{ username: "bap_dam2", fullName: "Bap Dam", post: "Watching Super Eagles match.", likes: 104, comments: 17 },
{ username: "dam_bul", fullName: "Dam Bul", post: "Coding practice every day.", likes: 85, comments: 10 },
{ username: "bul_nang", fullName: "Bul Nang", post: "Reading Bible tonight.", likes: 93, comments: 14 },
{ username: "nang_mwantiri", fullName: "Nang Mwantiri", post: "Working on a startup idea.", likes: 79, comments: 11 },
{ username: "mwantiri_pam", fullName: "Mwantiri Pam", post: "Just deployed my website.", likes: 118, comments: 19 },

{ username: "pam_nyalum", fullName: "Pam Nyalum", post: "Listening to music tonight.", likes: 64, comments: 6 },
{ username: "nyalum_dung", fullName: "Nyalum Dung", post: "Football with friends.", likes: 92, comments: 12 },
{ username: "dung_kumbul", fullName: "Dung Kumbul", post: "Learning arrays in JavaScript.", likes: 70, comments: 8 },
{ username: "kumbul_lalong", fullName: "Kumbul Lalong", post: "Cooking dinner tonight.", likes: 75, comments: 9 },
{ username: "lalong_tapgun", fullName: "Lalong Tapgun", post: "Reading about AI agents.", likes: 87, comments: 11 },

{ username: "tapgun_gokum", fullName: "Tapgun Gokum", post: "Working on a backend API.", likes: 91, comments: 13 },
{ username: "gokum_dam", fullName: "Gokum Dam", post: "Fixing my laptop today.", likes: 56, comments: 5 },
{ username: "dam_pam", fullName: "Dam Pam", post: "Weekend relaxation.", likes: 68, comments: 7 },
{ username: "pam_bap", fullName: "Pam Bap", post: "Studying JavaScript loops.", likes: 73, comments: 9 },
{ username: "bap_nang", fullName: "Bap Nang", post: "Movie night with friends.", likes: 84, comments: 10 },

{ username: "nang_yil", fullName: "Nang Yil", post: "Trying out React today.", likes: 77, comments: 8 },
{ username: "yil_nyam", fullName: "Yil Nyam", post: "Reading tech news.", likes: 63, comments: 6 },
{ username: "nyam_kumbul", fullName: "Nyam Kumbul", post: "Family visit today.", likes: 98, comments: 15 },
{ username: "kumbul_dung2", fullName: "Kumbul Dung", post: "Coding all night.", likes: 72, comments: 9 },
{ username: "dung_pam2", fullName: "Dung Pam", post: "Morning jog completed.", likes: 66, comments: 7 },

{ username: "pam_lalong2", fullName: "Pam Lalong", post: "Trying a new VS Code extension.", likes: 58, comments: 5 },
{ username: "lalong_dalyop2", fullName: "Lalong Dalyop", post: "Working on my project.", likes: 76, comments: 9 },
{ username: "dalyop_nyalum", fullName: "Dalyop Nyalum", post: "Evening walk.", likes: 61, comments: 6 },
{ username: "nyalum_gokum", fullName: "Nyalum Gokum", post: "Learning backend development.", likes: 82, comments: 10 },
{ username: "gokum_bap", fullName: "Gokum Bap", post: "Fixing bugs today.", likes: 74, comments: 8 }
];

let count = 1;
let totalLikes = 0;

for (let i = 0; i < newsFeed.length; i++) {
    // if (newsFeed[i].post.includes("coding")) {
    //     console.log(`${newsFeed[i].username} posted: ${newsFeed[i].post}`)
    // }

    

    if (newsFeed[i].likes > 50) {
        console.log(`${count}===> ${newsFeed[i].fullName} posted: ${newsFeed[i].post}`)
        totalLikes += newsFeed[i].likes
        
    }

    count += 1
}

console.log(`Total Likes = ${totalLikes}`)


let library = [
    {
        "title": "Speaking JavaScript",
        "author": "Axel Rauschmayer",
        "pages": 460
    },

    {
        "title": "Programming JavaScript Applications",
        "author": "Eric Elliott",
        "pages": 254
    },

    {
        "title": "Understanding ECMAScript 6",
        "author": "Nicholas C. Zakas",
        "pages": 352
    }
]

let newBook = {
    "title": "Learning JavaScript Design Patterns",
    "author": "Addy Osmani",
    "pages": 254
}

library.push(newBook)
console.log(library.length())
console.log(library[0].title)
console.log(library[1].title)
console.log(library[2].title)
console.log(library[3].title)

let newLibrary = library.slice(-2)
console.log(newLibrary)

library.shift()
console.log(library.length())

let sumOfPages = library[0].pages + library[1].pages + library[2].pages
console.log(sumOfPages)


function namer() {
    let name = "lol"; 
    console.log(name); 
    } 
namer()

