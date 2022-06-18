import { createContext, useState } from "react";



export const Box1 = createContext();
export const Box1Provider = ({ children }) => {
    const properties1 = {
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        indicators: true,
        transitionDuration: 100,
           responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}
const properties = {
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    indicators: true,
    transitionDuration: 300,
    responsive: [
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  };
  const fadeProperties1 = {
    duration: 2000,
    pauseOnHover: true,
    transitionDuration: 300,
    indicators: true,
  };
  const fadeProperties2 = {
    slidesToShow: 4,
    slidesToScroll: 4,
    indicators: true,
    autoplay: false,
    transitionDuration: 600,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  };
  const fadeProperties = {
    duration: 2000,
    pauseOnHover: true,
    indicators: true,
    transitionDuration: 500,
  };
  const properties6 = {
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    transitionDuration: 300,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  };
  return (
    <Box1.Provider
      value={{
        properties1,
        properties,
        fadeProperties1,
        fadeProperties,
        properties6,
        fadeProperties2
      }}
    >
      {children}
    </Box1.Provider>
  );
};
