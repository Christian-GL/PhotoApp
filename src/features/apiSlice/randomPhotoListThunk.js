
// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const RandomPhotoListThunk = createAsyncThunk("randomPhotoListThunk", async () => {

//     const tokenAccesKey = '?client_id=AWEgvWVrPBmVzjAlGNA9Ba1QHo1VbAMxcYfW8sIHmY0'
//     const param = "&count=6"

//     try {
//         const request = await fetch(`https://api.unsplash.com/photos/random${tokenAccesKey}${param}`)

//         if (request.ok) {
//             const json = await request.json()
//             let photoList = []
//             for (let i = 0; i < json.length; i++) {
//                 photoList.push({
//                     id: json[i].id,
//                     url: json[i].urls.full,
//                     width: json[i].width,
//                     height: json[i].height,
//                     likes: json[i].likes,
//                     added: json[i].created_at,
//                     description: json[i].alternative_slugs.es
//                 })
//             }
//             return photoList
//         }
//     }
//     catch (error) {
//         console.log(error)
//     }

// })


/* ---------------------------------------------------------------------------------------------------- */


import { createAsyncThunk } from "@reduxjs/toolkit";

export const RandomPhotoListThunk = createAsyncThunk("randomPhotoListThunk", async () => {

    try {
        let photoList = []
        for (let i = 0; i < 10; i++) {
            photoList.push({
                id: i + 'WqLUPvfvqIo',
                url: 'https://images.unsplash.com/photo-1734532873375-574fd74045c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2ODkzNzd8MHwxfGFsbHwyfHx8fHx8fHwxNzM1MDY0MzA2fA&ixlib=rb-4.0.3&q=85',
                width: 4990,
                height: 6643,
                likes: 76,
                added: '2024-12-18T14:57:12Z',
                description: 'un-reloj-en-el-costado-de-un-edificio-verde-WqLUPvfvqIo'
            })
        }
        return photoList
    }
    catch (error) {
        console.log(error)
    }

})