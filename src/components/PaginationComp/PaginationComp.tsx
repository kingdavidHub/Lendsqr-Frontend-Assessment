import classNames from "classnames";
import styles from "./PaginationComp.module.scss";
import { PaginationProps } from "../../types";
import ReactPaginate from "react-paginate";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
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

  //Todo: provide a better UI for global ErrorBoundary
  // const defaultRange = [0, 1, 2, 3, 4];
  // // [100, 200, 300, 400, 500]
  // defaultRae.map((_, index) => {
  //   console.log(++index * 100);
  // });
  return (
    <div className={classNames(styles.pagination, "padding-1")}>
      <div className="flexCenter gap-1">
        <span>Showing</span>
        <div className={styles.selectContainer}>
          <select
            id="rangeSelect"
            className={styles.select}
            onChange={(e) => {
              setCurrentRange(ranges[parseInt(e.target.value)]);
              setCurrentPage(1);
            }}
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <option key={index} value={index}>
                {`${++index * 100}`}
              </option>
            ))}
          </select>
          <ChevronDown className={styles.icon} color="#213F7D"/>
        </div>

        <span>out of {ranges.flat().length}</span>
      </div>
      <ReactPaginate
        previousLabel={<ChevronLeft color="#213F7D" />}
        previousLinkClassName={styles.prev}
        nextLabel={<ChevronRight color="#213F7D" />}
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
