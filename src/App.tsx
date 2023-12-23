import React, {useEffect, useState} from 'react';
import './index.css';
import {Body, Header} from '@trinity-steelindo/ui/organisms';
import {IconLogoTrinityTrans, IconLogoTrinityWhiteTrans} from './assets';
import SplashScreen from './components/splash-screen';
import {Carousel} from '@material-tailwind/react';

export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showsOnce, setShownOnce] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const innerHeightScrollPosition = Math.min(
    scrollPosition / (0.25 * window.innerHeight),
    1,
  );

  useEffect(() => {
    if (innerHeightScrollPosition > 0) {
      setShownOnce(true);
    }
  }, [showsOnce, innerHeightScrollPosition]);

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <div className="relative flex h-full w-full flex-col overflow-hidden bg-colorPrimary">
          {/* Mobile Version */}
          <div className="relative h-screen w-full overflow-hidden bg-IconTrinityTruckSecondFull bg-cover bg-center sm:hidden">
            {/* Gradient Top */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-colorPrimary" />
            {/* Curtain Shadows */}
            <div className="absolute inset-0 bg-colorPrimary bg-opacity-40" />
            <div className="group-textbox absolute bottom-0 left-0 right-0 flex flex-col justify-center pb-5">
              {/* Responsive font size */}
              <h1 className="trinity-title-text whitespace-pre-line text-center text-4xl font-bold text-white sm:text-lg">
                We Are Ready{'\n'}To Satisfy Your Needs
              </h1>
              {/* Responsive text */}
            </div>
          </div>
          {/*TestAgain */}
          {/* Desktop and Tablet Version bg-IconTrinityTruckSecond*/}
          <div className="bg-IconTrinityTruckSecond relative hidden h-screen w-full bg-cover bg-center bg-no-repeat sm:block">
            {/* Gradient Top */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-colorPrimary" />
            {/* Curtain Shadows */}
            <div className="absolute inset-0 bg-colorPrimary bg-opacity-30" />
            <div className="group-textbox bottom-0 left-0 flex flex-col items-center px-10 sm:hidden md:absolute md:bottom-0 md:right-0 md:flex md:items-start md:px-10">
              {/* Responsive font size */}
              <h1 className="hidden whitespace-pre-line pb-5 text-2xl font-bold text-white sm:block md:pb-5 md:text-left md:text-3xl lg:text-5xl xl:text-6xl">
                We Are Ready{'\n'}To Satisfy Your Needs
              </h1>
              {/* Responsive text */}
              <h3 className="mb-10 hidden whitespace-pre-line text-justify text-xl text-white md:mb-5 md:flex md:text-xl lg:pb-10 lg:text-xl xl:pb-10 xl:text-2xl">
                Trinity Steelindo is a trusted destination for high-quality
                steel and UPVC roofing products.
                {'\n'}We are committed to excellence and offer a wide range of
                steel products {'\n'}to meet the diverse needs of the industrial
                and construction sectors.
              </h3>
            </div>
          </div>
          {/* Header and Body components */}
          <Header
            headerOpacity={innerHeightScrollPosition}
            logoBlack={IconLogoTrinityTrans}
            logoWhite={IconLogoTrinityWhiteTrans}
          />
          <Body>
            <div className={`block flex-col`}>
              <div className="w-full overflow-hidden whitespace-nowrap  text-center">
                <h1
                  className={`${
                    showsOnce ? 'fill-text-title' : 'hidden'
                  } overflow-hidden pb-5 font-serif text-4xl text-colorTitle`}>
                  WHO WE ARE
                </h1>
              </div>
              <div
                className={`${
                  showsOnce ? 'description-animation' : 'hidden'
                } block text-xl text-colorDescription sm:block`}>
                <div className="flex flex-col pb-5 sm:flex-row ">
                  <h6 className="mb-8 w-full scale-100 transform text-justify transition-transform sm:mb-0 sm:w-1/2">
                    Upgrade your roofing needs with UPVC roofing products from
                    us. These products provide durability and aesthetic appeal,
                    ensuring that your projects are built to last. Join us as we
                    offer innovation, reliability, and top-notch customer
                    satisfaction in every product we provide.
                  </h6>
                  <div className="w-full sm:w-10"></div>
                  <h6 className="w-full scale-100 transform text-justify transition-transform sm:w-1/2">
                    Feel free to get in touch with us if you have any further
                    questions. We look forward to assisting you in choosing the
                    right UPVC roofing products for your project.
                  </h6>
                </div>
                <div className="rounded pb-5 text-center">
                  <h2 className=" pb-5 text-2xl font-semibold">
                    Our Activites
                  </h2>
                  <Carousel
                    transition={{duration: 2}}
                    className="flex h-full items-center rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                      alt="image 1"
                      className="h-full w-full object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                      alt="image 2"
                      className="h-full w-full object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                      alt="image 3"
                      className="h-full w-full object-cover"
                    />
                  </Carousel>
                </div>
                <div className="flex items-center justify-center pb-5 text-center text-sm font-extralight">
                  Brian, Dio, Wandi. Founders. Trinity SteelIndo
                </div>
              </div>
            </div>
          </Body>
        </div>
      )}
    </>
  );
}
