import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Banner from "../../organisms/banner/banner";
import Carousel from "../../organisms/carousel/carousel";
import Footer from "../../organisms/footer/footer";
import Header from "../../organisms/header/header";
import { gql } from 'apollo-boost';

const EXCHANGE_RATES = gql`
{
  countries {
    name
    code
  }
}
`;

const Homepage = ({ banner, carousel, footer, header }) => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Header {...header} />
      {data.countries.map(country => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      ))}
      <Banner {...banner} />
      <Carousel {...carousel} />
      <Footer {...footer} />
    </>
  );
};
export default Homepage;
