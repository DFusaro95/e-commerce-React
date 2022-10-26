import React, { useState } from 'react'
import './styles/sliderImgs.css'

const SliderImgs = ({ product }) => {

  const [indexImg, setIndexImg] = useState(0)


  const handlePrev = () => {
    if (indexImg - 1 < 0) {
      setIndexImg(product.productImgs.length - 1)
    } else {
      setIndexImg(indexImg - 1)
    }
  }
  const handleNext = () => {
    if (indexImg + 1 > product.productImgs.length - 1) {
      setIndexImg(0)
    } else {
      setIndexImg(indexImg + 1)
    }
  }
  const handleP1 = () => {
    setIndexImg(0)
  }
  const handleP2 = () => {
    setIndexImg(1)
  }
  const handleP3 = () => {
    setIndexImg(2)
  }
  console.log(product.productImgs)
  return (
    <div className='slider'>
      <button onClick={handlePrev} className='slider__prev'>&#60;</button>
      <div className="slider__static">
        <div style={{ transform: `translateX(calc(-${indexImg} / 3 * 100%))` }} className="slider__move">
          {
            product.productImgs.map(url => (
              <div key={url} className="slider__img-container">
                <img src={url} alt="" className="slider__img" />
              </div>
            ))
          }
        </div>
      </div>
      <button onClick={handleNext} className='slider__next'>&#62;</button>
      <div className="content__btn">
        <div className={`miniatura ${indexImg == 0 ? 'selected' : ''}`}><img className='circle' src={product.productImgs[0]} alt="" onClick={handleP1} /></div>
        <div className={`miniatura ${indexImg == 1 ? 'selected' : ''}`}><img className='circle' src={product.productImgs[1]} alt="" onClick={handleP2} /></div>
        <div className={`miniatura ${indexImg == 2 ? 'selected' : ''}`}><img className='circle' src={product.productImgs[2]} alt="" onClick={handleP3} /></div>
      </div>
    </div>
  )
}

export default SliderImgs