import { GetServerSideProps } from "next";
// import { GetStaticProps } from "next";

import Card from "../components/Card";

import style from "./home.module.scss";

export type PersonType = {
  id?: number;
  name: string;
  phone: string;
  email: string;
  address?: string;
  postalZip?: string;
  region?: string;
  country: string;
};

type HomeProps = {
  persons: PersonType[];
};

export default function Home({ persons }: HomeProps) {
  return (
    <div className={style.contentContainer}>
      {persons.map((person) => {
        return (
          <Card
            key={person.id}
            name={person.name}
            email={person.email}
            phone={person.phone}
            country={person.country}
          />
        );
      })}
    </div>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
export const getServerSideProps: GetServerSideProps = async () => {
  const persons = [
    {
      id: 10,
      name: "Emerson Albert",
      phone: "(625) 788-3333",
      email: "ornare.sagittis@outlook.couk",
      address: "746-8327 Scelerisque Rd.",
      postalZip: "7168",
      region: "Aceh",
      country: "Russian Federation",
    },
    {
      id: 2,
      name: "Dante Mcconnell",
      phone: "(564) 367-5865",
      email: "et.rutrum@protonmail.edu",
      address: "P.O. Box 823, 817 Sed Avenue",
      postalZip: "535874",
      region: "Cajamarca",
      country: "Spain",
    },
    {
      id: 1,
      name: "Declan Bonner",
      phone: "1-639-138-8877",
      email: "sed.libero.proin@outlook.net",
      address: "538-7870 Lacus. Road",
      postalZip: "35-571",
      region: "Mazowieckie",
      country: "Nigeria",
    },
    {
      id: 0,
      name: "Eve Kerr",
      phone: "1-220-626-5343",
      email: "arcu.curabitur@yahoo.org",
      address: "Ap #467-7215 Vitae St.",
      postalZip: "28383",
      region: "Languedoc-Roussillon",
      country: "Nigeria",
    },
    {
      id: 8,
      name: "Lucius Stewart",
      phone: "1-800-216-0122",
      email: "ipsum@hotmail.net",
      address: "9325 Vivamus Avenue",
      postalZip: "32265",
      region: "Connacht",
      country: "Poland",
    },
  ];
  return {
    props: {
      persons,
    },
    // revalidate: 60 * 60 * 24 * 30 //1 mês
  };
};
