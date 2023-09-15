import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
  
const options = {
  
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
    
  },
  headers: {
    'X-RapidAPI-Key': '7f2a5366d3msh61b1379be5a4098p1597a5jsnf1e1d6426a60',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

 export const getPlaces = async ()=>{
    try {
        const {data: {data}}= await axios.get(URL, options);
        return data;
        
    } catch (error) {
        console.log(error);
    }
}
