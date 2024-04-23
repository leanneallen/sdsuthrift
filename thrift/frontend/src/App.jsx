import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import HomePage from './pages/Home.jsx';
import SignUpPage from './pages/SignUp.jsx';
import LoginPage from './pages/Login.jsx';
import AboutPage from './pages/About.jsx';
import SupportPage from './pages/Support.jsx';
import ListingPage from './pages/Listings.jsx';
import NoPage from './pages/NoPage.jsx';
import IndivListingPage from './pages/IndivListingPage.jsx';
import ProfilePage from './pages/Profile.jsx';
import SettingsPage from './pages/Settings.jsx';
import ApparelPage from './pages/categories/Apparel.jsx';

export default function App() {
  return (
    <>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Listings" element={<ListingPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Support" element={<SupportPage />} />
        <Route path="/Apparel" element={<ApparelPage />} />
        <Route path="/IndivListingPage/:id" element={<IndivListingPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Settings" element={<SettingsPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}


export default App

