import * as React from 'react';
import ListingLayout from '../components/ListingLayout';
import Header from '../components/Header';
import Footer from './Footer'; // Ensure this import path is correct

function ListingPage() {
  return (
    <>
      <Header />
      <ListingLayout sx={{ padding: "10" }} />
      <Footer /> {/* Footer added here */}
    </>
  );
}

export default ListingPage;
