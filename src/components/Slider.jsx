import React, { useContext, useEffect, useState } from 'react'
import { arrayOf, bool, func, node, oneOfType, string } from 'prop-types'
import uuid from 'react-uuid'
import Slider from 'react-slick'
import classNames from 'classnames'
import CropFree from '@material-ui/icons/CropFree'
import { Spinner } from 'reactstrap'
import { theme, themeGet } from '~style'
import { Context } from '~context/Store'
import { Box, Flex, Text } from '~components/base'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MainSliderWrapper = ({ children, enlarge, handleClick }) => {
  return (
    <Box
      css={`
        .slick-arrow:before {
          color: grey;
          opacity: 0.3;
        }
        .slick-next {
          right: 5px;
          padding-right: 5px;
        }
        .slick-prev {
          left: 5px;
          z-index: 1;
        }
      `}
    >
      <Box className="slider-main" css="position: relative">
        {enlarge && (
          <Box
            as="button"
            type="button"
            onClick={handleClick}
            className="btn--no-style"
            p={[0]}
            pl={['2px']}
            css={`
              color: grey;
              opacity: 0.5;
              position: absolute;
              top: 0;
              left: 0;
              z-index: 1;
            `}
          >
            <span
              className="visually-hidden"
              css="position: relative; height: 0; width: 0; display: block; overflow: hidden"
            >
              Enlarge image
            </span>{' '}
            <CropFree />
          </Box>
        )}
        <Box
        //  width={['700px']} height={['700px']}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}

MainSliderWrapper.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired,
  enlarge: bool,
  handleClick: func.isRequired,
}

MainSliderWrapper.defaultProps = {
  enlarge: null,
}

const ModalContent = ({ curIndex, handleClick, slides }) => {
  const [ready, setReady] = useState(false)
  // useEffect(() => {
  //   const delay = setTimeout(() => setReady(true), 200)
  //   return () => delay
  // }, [])
  const slideSettings = {
    onLazyLoad: true,
  }
  return ready ? (
    <Box
      width={['700px']}
      height={['700px']}
      textAlign="center"
      css={`
        transition: opacity 500;
        opacity: ${ready ? 1 : 0};
        display: table-cell;
        color: ${themeGet('colorSchemes.default.highlight', 'yellow')};
        vertical-align: middle;
        .spinner-border {
          width: 4rem;
          height: 4rem;
        }
      `}
    >
      <Spinner />
    </Box>
  ) : (
    <MainSliderWrapper handleClick={handleClick} enlarge={false}>
      <Box width={[1]} padding={[0]} margin="0.1px">
        <Box
          className="slide-intro-placeholder"
          css={`
            float: left;
            z-index: 1;
            > * {
              width: 50%;
            }
          `}
        >
          {slides[curIndex]}
        </Box>
        <Slider
          className="slider-modal"
          id="slider-modal"
          initialSlide={curIndex}
          {...slideSettings}
        >
          {slides.map(slide => slide)}
        </Slider>
      </Box>
    </MainSliderWrapper>
  )
}

const SlickSlider = ({ slides, slideIndex, setSlideIndex }) => {
  // console.log(
  //   '🚀 ~ file: Slider.jsx ~ line 136 ~ SlickSlider ~ slideIndex',
  //   slideIndex
  // )
  // React.useEffect(() => slickGoTo(slideIndex), [slideIndex])
  const [, dispatch] = useContext(Context)

  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const isMulti = slides.length > 1
  let slider1 = []
  let slider2 = []

  React.useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
    return () => true
  }, [slider1, slider2])

  const slideSettings = {
    arrows: isMulti,
    ref: slider => (slider1 = slider),
    asNavFor: nav2,
    // afterChange: index => {
    //   setSlideIndex(index)
    // },
    slickGoTo: slideIndex,
    // initialSlide: 1,
    // initialSlide: slideIndex,
  }

  const thumbnailClasses = classNames({ hidden: slides.length === 1 })

  const handleClick = () => {
    dispatch({
      type: 'MODAL_CONTENT',
      payload: (
        <ModalContent
          curIndex={slideIndex}
          handleClick={handleClick}
          slides={slides}
        />
      ),
    })
    dispatch({ type: 'MODAL_STATUS', payload: true })
  }

  return (
    <Box>
      <MainSliderWrapper handleClick={handleClick} enlarge>
        <Slider
          className="slider-primary"
          {...slideSettings}
          css="line-height: 0;"
        >
          {slides.map(slide => {
            return (
              <button
                type="button"
                onClick={handleClick}
                key={uuid()}
                className="btn--no-style btn--enlarge-image"
              >
                {slide}
              </button>
            )
          })}
          {slides.map(slide => slide)}
        </Slider>
      </MainSliderWrapper>
      {slides.length > 1 && (
        <Box className={thumbnailClasses}>
          <h4 className="hidden" aria-label="Slider thumbnails">
            Slider thumbnails
          </h4>
          <Slider
            id="slider-thumbnails"
            asNavFor={nav1}
            arrows={false}
            ref={slider => (slider2 = slider)}
            slidesToShow={3}
            swipeToSlide
            focusOnSelect
          >
            {slides.map(slide => slide)}
          </Slider>
        </Box>
      )}
    </Box>
  )
}

export default SlickSlider
