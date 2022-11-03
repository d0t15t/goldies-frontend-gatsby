import styled from 'styled-components';

export const Container = styled('div')`
  ${({ theme, h }) => {
    const height = `${h}px`;
    return `
    .swiper {
      width: 100%;
      height: ${h ? height : '500px'};
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
    
    .swiper-pagination {
      bottom: ${theme.spacing(1)};
    }

    `;
  }}
`;

export const CarouselWrapper = styled('div')`
  ${({ theme }) => {
    const maxHeight = '350px';

    return `
      box-sizing: border-box;
      padding: 0 ${theme.spacing(1)};

      ${theme.breakpoints.up('sm')} {
        padding: inherit;
      }

      .swiper {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;

        .swiper-pagination {
          position: inherit;
          bottom: inherit;
          left: inherit;
          margin-top: ${theme.spacing(1)};
          border: 1px solid ${theme.palette.secondary.light};
          border-radius: ${theme.spacing(1)};
          padding: 4px;
          box-sizing: border-box;
          width: inherit;
          padding: 4px ${theme.spacing(3)};
       }

        .swiper-wrapper {
          box-sizing: border-box;

          .swiper-slide {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            height: unset;

            .teaser {
              box-sizing: border-box;
              border-radius: ${theme.spacing(1)};
              padding: 2px;

              > a {
              }

              .gatsby-image-wrapper {
                margin: ${theme.spacing(1)};

                img {
                  box-sizing: border-box;
                  border-radius: ${theme.spacing(1)};
                }
              }
            }
            
            .teaser-text--lower {
              display: flex;
              flex-direction: column-reverse;
            }
          }
        }
      }
    `;
  }}
`;
