import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles";
import { PageHOC } from "../components";

const CreateBattle = () => {
  const navigate = useNavigate();

  return (
    <>
      <p className={styles.infoText} onClick={() => navigate("/join-battle")}>
        Or join already existing battles
      </p>
    </>
  );
};

export default PageHOC(
  CreateBattle,
  <>
    Create <br /> a new Battle
  </>,
  <>Create your own battle and wait for other players to join you</>
);
