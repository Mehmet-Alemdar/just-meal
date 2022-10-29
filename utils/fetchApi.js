import axios from "axios"

export const baseUrl = 'https://themealdb.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
    }
  })

  return data
}

export const fetchApiWithParam = async (url, param) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
    },
    params: param
  })

  return data
}