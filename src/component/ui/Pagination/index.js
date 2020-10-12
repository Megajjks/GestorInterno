import React from "react";
import { WrapperPagination } from "./styled";
import PaginationBar from "@material-ui/lab/Pagination";

const Pagination = ({ count, page, callBack }) => {
  return (
    <WrapperPagination>
      <PaginationBar
        count={count}
        page={page}
        onChange={callBack}
        size="large"
      />
    </WrapperPagination>
  );
};

export default Pagination;
