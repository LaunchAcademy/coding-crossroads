import React from "react"

const Carousel = (props) => {
  const data = [
    {
      id: 1,
      image: "https://media.giphy.com/media/pSpmpxFxFwDpC/giphy.gif",
      caption: "Space, the final frontier."
    },
    {
      id: 2,
      image: "https://media.giphy.com/media/r6ALgGVKLg93O/giphy.gif",
      caption: "Lets Rocket!"
    }
  ]

  const images = data.map((image) => {
    return (
      <li key={image.id} className="is-active orbit-slide">
        <figure className="orbit-figure">
          <img className="orbit-image" src={`${image.image}`} alt="Space" />
          <figcaption className="orbit-caption">{image.caption}</figcaption>
        </figure>
      </li>
    )
  })
  
  
  // <li className="orbit-slide">
  //   <figure className="orbit-figure">
  //     <img className="orbit-image" src="" alt="Space" />
  //     <figcaption className="orbit-caption"> </figcaption>
  //   </figure>
  // </li>
  return (
    <div className="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit data-auto-play="true">
      
      <div className="orbit-wrapper">
        <div className="orbit-controls">
          <button className="orbit-previous"><span className="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
          <button className="orbit-next"><span className="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
        </div>
        
        <ul className="orbit-container">
          {images}
        </ul>
      </div>
      
      <nav className="orbit-bullets">
        <button className="is-active" data-slide="0">
          <span className="show-for-sr">First slide details.</span>
          <span className="show-for-sr" data-slide-active-label>Current Slide</span>
        </button>
        <button data-slide="1"><span className="show-for-sr">Second slide details.</span></button>
      </nav>
    </div>
  )
}

export default Carousel