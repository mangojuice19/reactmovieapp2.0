import React from 'react'

export const Movies = () => {
  return (
     <div className='titlecards'>
      <h2>{title?title: "Popular On MovieVerse" }</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt= "" />
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}
