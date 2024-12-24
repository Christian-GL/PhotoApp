
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetPhotoListThunk = createAsyncThunk("", async () => {

    const tokenAccesKey = '?client_id=AWEgvWVrPBmVzjAlGNA9Ba1QHo1VbAMxcYfW8sIHmY0'
    // const param = "?count=20"
    const param = ""

    try {
        const request = await fetch(`https://api.unsplash.com/photos/random${tokenAccesKey}${param}`)
        
        if (request.ok) {
            const json = await request.json()
            return {
                id: json.id,
                url: json.urls.full,
                width: json.width,
                height: json.height,
                likes: json.likes,
                added: json.created_at,
                description: json.alternative_slugs.es
            }
        }
    }
    catch (error) {
        console.log(error)
    }

})