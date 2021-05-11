import React from "react";
import { Footer } from "../Footer";
import TrialDetail from "../Trial_detail/TrialDetail";

const TrialList = () => {
  return (
    <>
      <div className="TrialList">
        <h1>Welcome on the TrialList !</h1>
        <TrialDetail />
      </div>
      <Footer />
    </>
  );
};

export default TrialList;
