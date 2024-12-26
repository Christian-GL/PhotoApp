
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetPhotoListThunk = createAsyncThunk("", async () => {

    const tokenAccesKey = '?client_id=AWEgvWVrPBmVzjAlGNA9Ba1QHo1VbAMxcYfW8sIHmY0'
    // const param = "?count=20"
    const param = ""

    try {
        const request = await fetch(`https://api.unsplash.com/photos${tokenAccesKey}${param}`)

        if (request.ok) {
            const json = await request.json()
            let photoList = []
            for (let i = 0; i < json.length; i++) {
                photoList.push({
                    id: json[i].id,
                    url: json[i].urls.full,
                    width: json[i].width,
                    height: json[i].height,
                    likes: json[i].likes,
                    added: json[i].created_at,
                    description: json[i].alternative_slugs.es
                })
            }
            return photoList
        }
    }
    catch (error) {
        console.log(error)
    }

})


/* ---------------------------------------------------------------------------------------------------- */


// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const GetPhotoListThunk = createAsyncThunk("", async () => {

//     try {
//         let photoList = []
//         for (let i = 0; i < 10; i++) {
//             photoList.push({
//                 id: 'id',
//                 url: 'https://images.unsplash.com/photo-1734532873375-574fd74045c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2ODkzNzd8MHwxfGFsbHwyfHx8fHx8fHwxNzM1MDY0MzA2fA&ixlib=rb-4.0.3&q=85',
//                 width: 'w',
//                 height: 'h',
//                 likes: 'l',
//                 added: 'a',
//                 description: 'd'
//             })
//         }
//         return photoList
//     }
//     catch (error) {
//         console.log(error)
//     }

// })