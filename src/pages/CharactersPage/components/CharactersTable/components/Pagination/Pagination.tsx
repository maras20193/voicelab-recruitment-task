import { Dispatch, SetStateAction } from "react";
import ReactPaginate from "react-paginate";
import * as S from "./Pagination.styled";

type PaginationProps = {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
};
export const Pagination = ({ setCurrentPage, totalPages }: PaginationProps) => {
  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected + 1);
  };

  return (
    <S.Wrapper>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={2}
        pageCount={totalPages}
        previousLabel="<"
        containerClassName="container"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        breakClassName="page-item-break"
        breakLinkClassName="page-link-break"
      />
    </S.Wrapper>
  );
};
