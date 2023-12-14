'use client';
import { Fragment, useState } from 'react';
import { Dialog, Listbox, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  CalendarDaysIcon,
  CheckCircleIcon,
  CreditCardIcon,
  EllipsisVerticalIcon,
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  UserCircleIcon,
  XMarkIcon as XMarkIconMini,
} from '@heroicons/react/20/solid';
import PageFrame from '@/components/PageFrame';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from '@/components/Navbar';




function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Index() {
  const [selected, setSelected] = useState(true);

  return (
    <>
      <Navbar/>
      <div className="">
        <div className="max-w-6xl p-2 mx-auto py-32">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <Carousel
                showArrows={true}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={true}
                useKeyboardArrows={true}
                autoPlay={true}
                interval={2000}
                transitionTime={500}
              >
              <div className="carousel-slide w-full relative">
              <img
                src="https://picsum.photos/400/200?image=101"
                alt="Carousel Image 1"
                className="w-full"
              />
            </div>
            <div className="carousel-slide w-full relative">
              <img
                src="https://picsum.photos/400/200?image=102"
                alt="Carousel Image 2"
                className="w-full"
              />
            </div>
                {/* Add more carousel images here */}
              </Carousel>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-2xl text-center md:text-6xl">
                NRI Kannada Balaga
              </h2>
              <p className="mt-8 ml-4 text-sm text-center md:text-lg">
                Kannada Balaga UK is turning 40 years old! We are delighted to
                invite you to attend Kannada Balaga’s 40th Anniversary
                celebrations to be held on 30th September and 1st October 2023
                at Byron Hall, Christchurch Ave, Harrow, London HA3 5BD!
              </p>
              {/* <div className="group flex border-2 border-gray-400 focus-within:border-[#ff0000] duration-500 max-w-xl mx-auto mt-16 rounded-md">
                <input
                  className="flex-1 px-3 py-1.5 outline-none bg-transparent text-sm focus:placeholder-red-300 placeholder-gray-400 duration-500"
                  type="email"
                  placeholder="ashokkumar@gmail.com"
                />
                <div className="py-1.5 px-4 bg-gray-400 group-focus-within:bg-[#ff0000] group-focus-within:text-[#ffff00] cursor-pointer duration-500">
                  Subscribe
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      

      <div className="py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl text-center md:text-6xl">More About Us</h2>
          <p className="mt-8 text-sm text-center md:text-lg">
            This is the official website of Kannada Balaga UK. Kannada Balaga UK
            is a Registered Charity (Reg. Charity number 326572). The aims and
            objectives of the organisation are to promote kannada language,
            culture and heritage in UK. Kannada Balaga is not affiliated to any
            religious or political organisation and welcomes everybody with
            links to Kannada language to join us irrespective of their faith,
            beliefs, religion, caste or sexual orientation. Kannada Balaga is
            involved with various charitable activities in UK and India through
            its charity wing. All members and office bearers have honorary
            positions and fulfill their roles on voluntary basis. Kannada Balaga
            conducts two cultural events annually – Ugadi and Deepavali. Income
            generated through these events is spent on charitable donations.
          </p>
        </div>
      </div>

      
      <div className="max-w-6xl  mx-auto mt-4">
        <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
          <div className="max-w-xs p-4 mx-auto bg-white shadow-md rounded-lg">
            <img
              src="https://picsum.photos/400/200"
              alt="Lorem Picsum Image 1"
              className="w-full h-auto"
            />
            <p className="mt-2">
              Your text content goes here. You can add multiple paragraphs,
              headings, or any other text content you need.
            </p>
          </div>
          <div className="max-w-xs p-4 mx-auto bg-white shadow-md rounded-lg">
            <img
              src="https://picsum.photos/400/200"
              alt="Lorem Picsum Image 4"
              className="w-full h-auto"
            />
            <p className="mt-2">
              Your text content goes here. You can add multiple paragraphs,
              headings, or any other text content you need.
            </p>
          </div>
          <div className="max-w-xs p-4 mx-auto bg-white shadow-md rounded-lg">
            <img
              src="https://picsum.photos/400/200"
              alt="Lorem Picsum Image 4"
              className="w-full h-auto"
            />
            <p className="mt-2">
              Your text content goes here. You can add multiple paragraphs,
              headings, or any other text content you need.
            </p>
          </div>
          <div className="max-w-xs p-4 mx-auto bg-white shadow-md rounded-lg">
            <img
              src="https://picsum.photos/400/200"
              alt="Lorem Picsum Image 4"
              className="w-full h-auto"
            />
            <p className="mt-2">
              Your text content goes here. You can add multiple paragraphs,
              headings, or any other text content you need.
            </p>
          </div>
        </div>
      </div>
      <div className="my-10"></div>
      <Footer />
    </>
  );
}
