import React, { useEffect, useRef, useState } from 'react';
import "./Slider.scss";
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css";
import gsap from 'gsap';
import CountUp from 'react-countup';
import ArrowLeft from "../../assets/arrowleft.svg";
import ArrowRight from "../../assets/arrowright.svg";

register();

type DateItem = {
    title: string;
    description: string;
};

interface Category {
    name: string;
    dates: DateItem[];
}

interface DateSliderProps {
    categories: Category[];
}

const DateSlider: React.FC<DateSliderProps> = ({ categories }) => {
    const swiperRef = useRef<SwiperCore>();
    const midCircleRef = useRef(null);
    const carouselRef  = useRef<(HTMLDivElement | null)[]>([]);

    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [activeEventIndex, setActiveEventIndex] = useState(0);
    const [prevCategoryIndex, setPrevCategoryIndex] = useState(0);
    const [isInteractive, setIsInteractive] = useState(true);
    const [endOfCarousel, setEndOfCarousel] = useState(false);
    const [isTimed, setIsTimed] = useState(true);
    const [currentDateRange, setCurrentDateRange] = useState<string[]>([]);
    const [prevDateRange, setPrevDateRange] = useState<string[]>([]);

    const animationTimeline = useRef<gsap.core.Timeline | null>(null);

    const currentDates = categories[activeCategoryIndex].dates;
    const sliderSettings = {
        0: { slidesPerView: 2, spaceBetween: 25 },
        500: { slidesPerView: 1, spaceBetween: 40 },
        800: { slidesPerView: 2, spaceBetween: 40 },
        1265: { slidesPerView: 3, spaceBetween: 40 },
    };

    const orbPositions = [
        { x: 120, y: -220 },
        { x: 250, y: 0 },
        { x: 120, y: 220 },
        { x: -120, y: 220 },
        { x: -250, y: 0 },
        { x: -120, y: -220 },
    ];

    const handleCategoryChange = (newIndex: number) => {
        setIsTimed(false);
        setCurrentDateRange([categories[newIndex].dates[0].title, categories[newIndex].dates[categories[newIndex].dates.length - 1].title]);
        setPrevDateRange([currentDates[0].title, currentDates[currentDates.length - 1].title]);
        setPrevCategoryIndex(activeCategoryIndex);
        setActiveCategoryIndex(newIndex);
        setActiveEventIndex(0);
        swiperRef.current?.slideTo(0);

        setTimeout(() => setIsTimed(true), 100);
    };

    const prevSlide = () => swiperRef.current?.slidePrev();
    const nextSlide = () => swiperRef.current?.slideNext();

    useEffect(() => {
        animationTimeline.current = gsap.timeline({
            defaults: {
                duration: 1,
                ease: 'Power3.easeInOut',
                transformOrigin: "center center",
                onStart: () => setIsInteractive(false),
                onComplete: () => setIsInteractive(true),
            }
        })
        .to(carouselRef .current, { rotation: `+=${60 * (activeCategoryIndex - prevCategoryIndex)}` }, 0)
        .to(midCircleRef.current, { rotation: `-=${60 * (activeCategoryIndex - prevCategoryIndex)}` }, 0);
    }, [activeCategoryIndex, prevCategoryIndex, currentDateRange]);

    const startRotation = () => animationTimeline.current?.play();

    useEffect(() => {
        startRotation();
    }, [activeCategoryIndex, currentDateRange]);

    return (
        <div className="slider">
            <div className="date-decoration">
                <div className="outer-border">
                    <div className="inner-y-border"></div>
                    <div className="inner-x-border"></div>
                    <div className="inner-middle-border">
                        <div ref={midCircleRef} id='middle-circle' className="middle-circle">
                            {categories.map((category, idx) => (
                                <div
                                    ref={el => el && (carouselRef .current[idx] = el)}
                                    key={category.name}
                                    style={{ transform: `translate(${orbPositions[idx].x}px, ${orbPositions[idx].y}px)` }}
                                    className={`orbs orb-${idx}`}
                                >
                                    <div
                                        id='orb'
                                        onClick={() => isInteractive && handleCategoryChange(idx)}
                                        className={`rotating__orb ${idx === activeCategoryIndex ? 'active' : ''}`}
                                    >
                                        <p>{idx + 1}</p>
                                        <h2>{category.name}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider__container">
                <div className="slider-top">
                    <div className="slider-header">
                        <div className="slider-header__slider"></div>
                        <h1 className="slider-header__title">Исторические <br /> даты</h1>
                    </div>
                </div>
                <div className="slider-mid">
                    <div className="slider-carousel">
                        <CountUp start={Number(prevDateRange[0] ?? currentDates[0].title)} end={Number(currentDateRange[0])} duration={0.5}>
                            {({ countUpRef }) => <span ref={countUpRef} className='slider-carousel__date1' />}
                        </CountUp>
                        <CountUp start={Number(prevDateRange[1] ?? currentDates[currentDates.length - 1].title)} end={Number(currentDateRange[1])} duration={0.5}>
                            {({ countUpRef }) => <span ref={countUpRef} className='slider-carousel__date2' />}
                        </CountUp>
                    </div>
                    <h4 className='slider-mid__categoryname'>{categories[activeCategoryIndex].name}</h4>
                </div>
                <div className="slider-bottom">
                    <div className="slider-pagination">
                        <p className="pagination__counter">{`0${activeCategoryIndex + 1}/0${categories.length}`}</p>
                        <div className="pagination-buttons">
                            <button className={`pagination-buttons left ${activeCategoryIndex === 0 ? 'disabled' : ''}`}
                                disabled={activeCategoryIndex === 0}
                                onClick={() => isInteractive && handleCategoryChange(activeCategoryIndex - 1)}
                            ><ArrowLeft /></button>
                            <button className={`pagination-buttons right ${activeCategoryIndex === categories.length - 1 ? 'disabled' : ''}`}
                                disabled={activeCategoryIndex === categories.length - 1}
                                onClick={() => isInteractive && handleCategoryChange(activeCategoryIndex + 1)}
                            ><ArrowRight /></button>
                        </div>
                    </div>
                    <div className="slider-dates">
                        <button className={`prev navigation ${activeEventIndex === 0 ? 'disabled-full' : ''}`} onClick={prevSlide}>{"<"}</button>
                        <Swiper
                            watchSlidesProgress
                            onSlideChange={({ activeIndex }) => setActiveEventIndex(activeIndex)}
                            onReachEnd={() => setEndOfCarousel(true)}
                            onReachBeginning={() => setEndOfCarousel(false)}
                            slidesPerView={3}
                            spaceBetween={40}
                            breakpoints={sliderSettings}
                            onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
                            className={`slider-swiper ${isInteractive ? 'visible' : 'disabled-full'}`}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                        >
                            {currentDates.map((item, idx) => (
                                <SwiperSlide key={idx} className="slider-date">
                                    <div className="slider-date__title">{isTimed ? item.title : categories[prevCategoryIndex].dates[idx]?.title}</div>
                                    <div className="slider-date__description">{isTimed ? item.description : categories[prevCategoryIndex].dates[idx]?.description}</div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button className={`next navigation ${endOfCarousel ? 'disabled-full' : ''}`} onClick={nextSlide}>{'>'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DateSlider;
