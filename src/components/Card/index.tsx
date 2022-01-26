import { useRouter } from "next/dist/client/router";
import React from "react";
import { PersonType } from "../../pages";

import styles from "./card.module.scss";

function Card({
  address,
  country,
  email,
  name,
  id,
  phone,
  postalZip,
  region,
}: PersonType) {
  return (
    <div className={styles.Card}>
      <p>My name is: {name}</p>
      <p>I live in: {country}</p>
      <p>My e-mail: {email}</p>
      <p>My zapzap is: {phone}</p>
    </div>
  );
}

export default Card;
