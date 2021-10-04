import styled from 'styled-components';

// See Thumbs gallery loop from https://swiperjs.com/demos
// https://codesandbox.io/s/3751v

export const Container = styled.div`
  max-width: 100%;
  width: 700px;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .teaser-swiper {
    height: 80%;
    width: 100%;
  }

  .thumbnail-swiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .thumbnail-swiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .thumbnail-swiper .swiper-slide-thumb-active {
    opacity: 1;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
