const { default: axios } = require("axios")

exports.getRandomNews = async (page)=>{

    const {data} = await axios.get(`https://hn.algolia.com/api/v1/search?query=&page=${page}`)

    return data.hits

}


exports.getNewsBySearchKeyword = async (page , slug)=>{
    const {data} = await axios.get(`https://hn.algolia.com/api/v1/search?query=${slug}&page=${page}`)
    return data.hits

}

exports.getDetailsOfNews = async(objectID)=>{

    const {data} = await axios.get(`https://hn.algolia.com/api/v1/items/${objectID}`)
    return data

}