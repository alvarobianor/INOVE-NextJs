import { GetServerSideProps } from "next";
// import { GetStaticProps } from "next";

import Head from "next/head";

import style from "./home.module.scss";

type ProductType = {
  name: string;
  phone: string;
  email: string;
  address: string;
  postalZip: string;
  region: string;
  country: string;
  numberrange: number;
};

type HomeProps = {
  products: ProductType[];
};

export default function Home({ products }: HomeProps) {
  return <></>;
}

// export const getStaticProps: GetStaticProps = async () => {
export const getServerSideProps: GetServerSideProps = async () => {
  const products = [
    {
      name: "Emerson Albert",
      phone: "(625) 788-3333",
      email: "ornare.sagittis@outlook.couk",
      address: "746-8327 Scelerisque Rd.",
      postalZip: "7168",
      region: "Aceh",
      country: "Russian Federation",
      numberrange: 10,
    },
    {
      name: "Dante Mcconnell",
      phone: "(564) 367-5865",
      email: "et.rutrum@protonmail.edu",
      address: "P.O. Box 823, 817 Sed Avenue",
      postalZip: "535874",
      region: "Cajamarca",
      country: "Spain",
      numberrange: 2,
    },
    {
      name: "Declan Bonner",
      phone: "1-639-138-8877",
      email: "sed.libero.proin@outlook.net",
      address: "538-7870 Lacus. Road",
      postalZip: "35-571",
      region: "Mazowieckie",
      country: "Nigeria",
      numberrange: 1,
    },
    {
      name: "Eve Kerr",
      phone: "1-220-626-5343",
      email: "arcu.curabitur@yahoo.org",
      address: "Ap #467-7215 Vitae St.",
      postalZip: "28383",
      region: "Languedoc-Roussillon",
      country: "Nigeria",
      numberrange: 0,
    },
    {
      name: "Lucius Stewart",
      phone: "1-800-216-0122",
      email: "ipsum@hotmail.net",
      address: "9325 Vivamus Avenue",
      postalZip: "32265",
      region: "Connacht",
      country: "Poland",
      numberrange: 8,
    },
  ];
  return {
    props: {
      products,
    },
    // revalidate: 60 * 60 * 24 * 30 //1 mês
  };
};
