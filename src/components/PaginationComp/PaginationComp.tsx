import classNames from "classnames";
import styles from "./PaginationComp.module.scss"
import { PaginationProps } from "../../types";
import ReactPaginate from "react-paginate";
const PaginationComp = ({
  setCurrentRange,
  setCurrentPage,
  ranges,
  currentPage,
  totalPages,
}: PaginationProps) => {
  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected + 1);
  };
  return (
    <div className={classNames(styles.pagination, "padding-1")}>
      <div className="flexCenter gap-1">
        <span>Showing</span>
        <select
          id="rangeSelect"
          className={styles.perPage}
          onChange={(e) => {
            setCurrentRange(ranges[parseInt(e.target.value)]);
            setCurrentPage(1);
          }}
        >
          {ranges.map((_, index) => (
            <option key={index} value={index}>
              {`${index * 100}-${index * 100 + 99}`}
            </option>
          ))}
        </select>

        <span>out of 100</span>
      </div>
        <ReactPaginate
          previousLabel={"←"}
          previousLinkClassName={styles.prev}
          nextLabel={"→"}
          nextLinkClassName={styles.next}
          breakLabel={"..."}
          pageCount={totalPages}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName={styles.pageNumbers}
          activeClassName={styles.active}
          pageClassName={styles.page}
          previousClassName={styles.prev}
          nextClassName={styles.next}
          breakClassName={styles.break}
        />
    </div>
  );
};


export default PaginationComp;