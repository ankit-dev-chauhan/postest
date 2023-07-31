import React, { useEffect, useState } from "react";
import { usePagination, DOTS } from "./usePagination";
import styles from "./pagination.module.scss";
import { useRouter } from "next/router";
import Text from "../text";
import { colors } from "../../../constants/colors";
import { Button } from "react-bootstrap";
import Image from "next/image";

const PaginationComponent = (props) => {
  const {
    onPageChange,
    totalCount = 0,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;
  const router = useRouter();
  const [page, setPage] = useState('')

  const handlePageChange = () => {
    onPageChange(Number(page))
    setPage('')
  }

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  // useEffect(() => {
  //   // if (props?.currentPage) {
  //   //   setCurrentPage(props?.currentPage)
  //   // }
  //    if (router?.query?.page  ) {
  //     // onPageChange(router?.query?.page)
  //   }

  // }, [currentPage])

  let lastPage = paginationRange[paginationRange?.length - 1];

  return (
    <>
      <div
        className={`justify-content-center  align-items-center py-4 ${styles.paginationContainer
          } ${className && className}`}
      >
        <div
          className={` ${currentPage === 1 && styles.disabled
            }`}
          style={{ visibility: currentPage === 1 && 'hidden' }}
          onClick={onPrevious}
        >
          {/* <Text
            color={currentPage === 1 ? colors.gray2 : colors.goldColor}
            size={14}
            fontWeight={400}
          >
            {`<<`} Prev
          </Text> */}

          <Button className={`shadow-none d-flex justify-content-center align-items-center ${styles.prevNxtBtn}`}>
            <Image
              src="/icons/products/prev-icon.svg"
              width={8}
              height={5}
            />
            <Text className={`ms-2`} color={colors.lightBlack} size={12} fontWeight={500} >Prev</Text>
          </Button>
        </div>
        <div className={``}>
          <ul className={`${styles.paginationContainer}`}>
            {paginationRange.map((pageNumber) => {
              if (pageNumber === DOTS) {
                return (
                  <li
                    key={`paginationRange-${pageNumber}`}
                    className={`${styles.paginationItem} ${styles.dots}`}
                  >
                    &#8230;
                  </li>
                );
              }
              return (
                <li
                  key={`paginationRange-${pageNumber}`}
                  className={`${styles.paginationItem} ${pageNumber === currentPage && styles.selected
                    }`}

                  onClick={() => onPageChange(pageNumber)}
                >
                  {pageNumber}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={` ${currentPage === lastPage && styles.disabled
            }`}
          style={{ visibility: currentPage === lastPage && 'hidden' }}
          onClick={onNext}
        >
          <Button className={`shadow-none d-flex justify-content-center align-items-center ${styles.prevNxtBtn}`}>
            <Text className={`me-2`} color={colors.lightBlack} size={12} fontWeight={500} >Next</Text>
            <Image
              src="/icons/products/next-icon.svg"
              width={8}
              height={5}
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default PaginationComponent;
