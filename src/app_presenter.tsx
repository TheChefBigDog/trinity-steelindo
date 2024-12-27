import React, {useEffect, useState} from 'react';
import './index.css';
import {Body, Header, Footer} from '@trinity-steelindo/ui/organisms';
import {image} from './components/data/image';
import {
  IconLogoTrinityBlack,
  IconLogoTrinityWhiteTrans,
} from '@trinity-steelindo/assets/index';
import {products} from './components/data/product';
import LoadingScreen from './components/splash-screen';
import WaveBackground from './wave_background';
import {motion} from 'framer-motion';
import {InfiniteMovingCards} from './infinite_slider';

export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

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
      setScrollProgress(scrollY / window.innerHeight);
      setScrollPosition(window.scrollY);
      if (scrollProgress > 1.7 && showsOnce && !hasAnimated) {
        setHasAnimated(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollProgress, showsOnce, hasAnimated]);

  const innerHeightScrollPosition = Math.min(
    scrollPosition / window.innerHeight,
    1,
  );

  useEffect(() => {
    if (innerHeightScrollPosition > 0) {
      setShownOnce(true);
    }
  }, [showsOnce, innerHeightScrollPosition]);

  const titleVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition: {duration: 0.8}},
  };

  const descriptionVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, transition: {duration: 1, delay: 0.3}},
  };

  const carouselVariants = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {opacity: 1, scale: 1, transition: {duration: 1, delay: 0.6}},
  };

  const listOfMainProductsDesktopViews = products.map((value, index) => {
    return (
      <div className="relative w-full p-5" key={index}>
        <div className="flex h-3/4 overflow-hidden rounded-md bg-colorCard bg-cover bg-no-repeat shadow-md">
          <div
            className={`${index % 2 === 0 ? 'order-2 text-left' : 'order-1 text-right'} w-1/2 p-5 align-middle font-helios-condensed`}>
            <h1
              className={`text-shadow text-4xl font-bold uppercase text-white`}>
              {value.title}
            </h1>
            <p className={`text-shadow mt-3 text-white`}>{value.description}</p>
            <div
              className={`-bottom-px h-2 ${index % 2 === 0 ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} mt-5 from-colorWhite via-transparent to-transparent`}></div>
          </div>
          <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} w-1/2`}>
            <div
              style={{
                backgroundImage: `url(${value.image})`,
              }}
              className="bg-resize-custom h-full w-full rounded-xl bg-no-repeat"
            />
          </div>
        </div>
      </div>
    );
  });

  const listOfMainProductsMobileViews = products.map((value) => {
    return (
      <div
        className="group relative m-2 w-full transform overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat transition-transform duration-300 hover:scale-105"
        style={{backgroundImage: `url(${value.image})`}}>
        <div className="h-52 overflow-hidden rounded-t-xl">
          <div className="absolute inset-x-0 bottom-0 flex items-start justify-start p-5 align-bottom opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="font-helios-condensed text-xl font-bold text-white">
              {value.title}
            </div>
          </div>
        </div>
      </div>
    );
  });

  const navLinks = [
    {path: '/trinity-steelindo', label: 'Beranda'},
    {path: '/trinity-steelindo/katalog-produk', label: 'Katalog Produk'},
  ];

  const sectionVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition: {duration: 1}},
  };

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="relative flex h-full w-full flex-col overflow-y-hidden bg-colorPrimary">
          {/* Mobile Version */}
          <section className="display-background-mobile relative min-h-screen w-full overflow-hidden bg-IconTrinityTruckSecondFull bg-cover bg-center bg-no-repeat pt-16">
            {/* Gradient Top */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-colorPrimary" />
            {/* Curtain Shadows */}
            <div className="absolute inset-0 bg-colorPrimary bg-opacity-40" />
            {/* Center Title */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 pt-10 text-center">
              <h1 className="trinity-title-text animate-fade-in-down whitespace-pre-line font-helios-condensed text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Welcome to
                <br />
                <span className="underline">TRINITY STEELINDO</span>
              </h1>
              <h3 className="mt-6 animate-fade-in-up font-helios-condensed text-lg leading-relaxed text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Trinity Steelindo is a trusted destination for high-quality
                steel and UPVC roofing products.
              </h3>
            </div>
            <div className="absolute bottom-0 left-0 z-10 w-full">
              <WaveBackground />
            </div>
          </section>

          {/* Desktop and Tablet Version */}
          <section className="bg-IconTrinityTruckSecond display-background-desktop relative hidden h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat sm:block">
            {/* Gradient Top */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-colorPrimary" />

            {/* Curtain Shadows */}
            <div className="absolute inset-0 bg-colorPrimary bg-opacity-30" />

            {/* Content Section */}
            <div className="relative z-20 flex flex-col items-center px-10 md:absolute md:bottom-32 md:right-10 md:items-start">
              <h1 className="trinity-title-text animate-fade-in-down whitespace-pre-line pb-5 font-helios-condensed font-bold text-white">
                Welcome to <span className="underline">TRINITY STEELINDO</span>
              </h1>
              <h3 className="animate-fade-in-up whitespace-pre-line text-justify font-helios-condensed text-xl text-white md:pb-5 lg:text-xl xl:text-2xl">
                Trinity Steelindo is a trusted destination for high-quality
                steel and UPVC roofing products. We are committed to excellence
                and offer a wide range of steel products to meet the diverse
                needs of the industrial and construction sectors.
              </h3>
            </div>

            {/* Wave Background */}
            <div className="absolute bottom-0 left-0 z-10 w-full">
              <WaveBackground />
            </div>
          </section>

          <Body showsOnce={showsOnce}>
            {/* Top Section */}
            <motion.div
              className="w-full bg-colorBackground pt-10 text-center"
              variants={titleVariants}>
              <h1 className="font-helios-condensed text-5xl font-bold tracking-wide text-blue-500">
                Siapa Kami?
              </h1>
            </motion.div>

            {/* Description Section */}
            <motion.div
              className="flex w-full flex-1 items-center justify-center px-6 text-center"
              variants={descriptionVariants}>
              <p className="max-w-4xl pt-8 font-helios-condensed text-lg leading-relaxed text-gray-300 sm:text-xl lg:text-2xl">
                Upgrade your roofing needs with UPVC roofing products from us.
                These products provide durability and aesthetic appeal, ensuring
                that your projects are built to last. Join us as we offer
                innovation, reliability, and top-notch customer satisfaction in
                every product we provide.
              </p>
            </motion.div>

            {/* Bottom Section */}
            <motion.div
              className="bottom-0 mt-auto flex w-full flex-col items-center justify-center overflow-hidden bg-colorBackground pb-8 pt-8 text-center text-xl text-colorDescription"
              variants={carouselVariants}>
              <div className="flex w-full flex-col items-center justify-center rounded pb-5 text-center">
                <h1 className="relative pb-5 font-helios-condensed text-3xl font-semibold">
                  Our Activities
                  <div className="-bottom-px h-1 bg-gradient-to-r from-colorDescription via-transparent to-transparent"></div>
                </h1>
                <div className="mx-auto w-full overflow-hidden">
                  <InfiniteMovingCards items={image} />
                </div>
              </div>
              <div className="flex items-center justify-center text-center text-sm font-extralight">
                Trinity SteelIndo
              </div>
            </motion.div>
          </Body>

          <motion.section
            className="hidden h-full w-full flex-col overflow-y-auto bg-colorPrimary px-5 py-5 lg:flex xl:flex"
            initial="hidden"
            animate={hasAnimated ? 'visible' : 'hidden'}
            variants={sectionVariants}>
            <div className="w-full overflow-hidden whitespace-nowrap text-center">
              <h1
                className={`${
                  showsOnce ? 'fill-text-title' : 'hidden'
                } overflow-hidden font-helios-condensed text-5xl font-bold tracking-wide text-blue-500`}>
                Product Showcase
              </h1>
            </div>
            {listOfMainProductsDesktopViews}
          </motion.section>

          <motion.section
            className="mobile-tablet-views w-full gap-5 bg-colorPrimary p-8 lg:hidden xl:hidden"
            initial="hidden"
            animate={hasAnimated ? 'visible' : 'hidden'}
            variants={sectionVariants}>
            <div className="w-full overflow-hidden whitespace-nowrap text-center">
              <h1
                className={`${
                  showsOnce ? 'fill-text-title' : 'hidden'
                } overflow-hidden font-helios-condensed text-4xl text-colorTitle`}>
                Product Showcase
              </h1>
            </div>
            {listOfMainProductsMobileViews}
          </motion.section>

          <Footer />

          <Header
            logoBlack={IconLogoTrinityBlack}
            logoWhite={IconLogoTrinityWhiteTrans}
            navLinks={navLinks}
          />
        </div>
      )}
    </>
  );
}
