"use client"


import News from '@/components/newsui/News'
// import { data } from 'autoprefixer'
import { useState, useEffect } from 'react'









export default function Home() {
     const [ nodata, setNewdata] = useState([])


useEffect(()=>{
  Fetchingdata();
},[])

function Fetchingdata(){
  const apikey = process.env.news_api_key;
  fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e97a1af1b50e4b7fa6ab06750f47f9e5&pageSize=20')
  .then(response => response.json())
  .then(data => {
    setNewdata(data.articles)
    
  })
  .catch(error => {
    console.log('Error:', error);
  });
}
  
  return (
    <>

    {nodata.map((article, index)=><News key={index} 
    CategoryOfNews="Tech"  
    PublishedAt={article.publishedAt}
    Title={article.title}
    Description={article.description}
    
    
    />)}
    </>
  )
}
