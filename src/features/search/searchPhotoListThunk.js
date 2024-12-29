
import { createAsyncThunk } from "@reduxjs/toolkit";

export const SearchPhotoListThunk = createAsyncThunk("", async (keyword) => {

    const tokenAccesKey = '?client_id=AWEgvWVrPBmVzjAlGNA9Ba1QHo1VbAMxcYfW8sIHmY0'
    const keyTerm = `&query=${keyword}`

    try {
        const request = await fetch(`https://api.unsplash.com/search/photos${tokenAccesKey}${keyTerm}`)

        if (request.ok) {
            const json = await request.json()
            let photoList = []
            for (let i = 0; i < json.results.length; i++) {
                photoList.push({
                    id: json.results[i].id,
                    url: json.results[i].urls.full,
                    width: json.results[i].width,
                    height: json.results[i].height,
                    likes: json.results[i].likes,
                    added: json.results[i].created_at,
                    description: json.results[i].alternative_slugs.es
                })
            }
            return photoList
        }
    }
    catch (error) {
        console.log(error)
    }

})