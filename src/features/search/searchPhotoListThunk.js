
import { createAsyncThunk } from "@reduxjs/toolkit";

export const SearchPhotoListThunk = createAsyncThunk("", async () => {

    const tokenAccesKey = '?client_id=AWEgvWVrPBmVzjAlGNA9Ba1QHo1VbAMxcYfW8sIHmY0'
    const param = "&count=2"

    try {
        const request = await fetch(`https://api.unsplash.com/photos/random${tokenAccesKey}${param}`)

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