import classNames from "classnames";
import styles from "./PaginationComp.module.scss";
import { PaginationProps } from "../../types";
import ReactPaginate from "react-paginate";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Skeleton from "react-loading-skeleton";
const PaginationComp = ({
  setCurrentRange,
  setCurrentPage,
  ranges,
  loading,
  totalPages,
  isFilterActive
}: PaginationProps) => {
  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected + 1);
  };
  
  return (
    <div className={classNames(styles.pagination, "padding-1")}  data-testid="pagination-container">
      {
        !isFilterActive  && <div className="flexCenter gap-1">
        {loading ? <Skeleton height={30} width={80} /> :  <span>Showing</span>}
        <div className={styles.selectContainer}>
          {loading ? (
            <>
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} height={20} width={100} />
              ))}
            </>
          ) : (
            <>
              <select
                id="rangeSelect"
                data-testid="rangeSelect"
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
              <ChevronDown className={styles.icon} color="#213F7D" />
            </>
          )}
        </div>

        <span>{loading ?  <Skeleton height={30} width={80} /> : `Out of ${ranges.flat().length}`}</span>
      </div>
      }
      
      

      {loading ? <Skeleton width={300} height={50} /> :
      !isFilterActive && <ReactPaginate
        previousLabel={<ChevronLeft color="#213F7D" aria-label="previous" />}
        previousLinkClassName={styles.prev}
        nextLabel={<ChevronRight color="#213F7D" aria-label="next" />}
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
      />}
    </div>
  );
};

export default PaginationComp;
