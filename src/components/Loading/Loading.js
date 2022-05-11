import React from "react";

import { Puff } from "react-loader-spinner";
import { LoadingWrapper } from "./LoadingStyle";

const Loading = () => {
  return (
    <LoadingWrapper>
      <Puff type="Puff" color="pink" />
    </LoadingWrapper>
  );
};

export default Loading;
