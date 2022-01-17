import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import Navbar from '../components/organisms/Navbar';
import MainBanner from '../components/organisms/MainBanner';
import TransactionStep from '../components/organisms/TransactionStep';
import FeaturedGame from '../components/organisms/FeaturedGame';
import Reached from '../components/organisms/Reached';
import StoryGame from '../components/organisms/StoryGame';
import Footer from '../components/organisms/Footer';

export default function Home(): NextPage {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <StoryGame />
      <Footer />
    </>,
  );
};