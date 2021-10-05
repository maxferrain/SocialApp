import styles from "./Paginator.module.css";
import {FC, useState} from "react";
import cn from 'classnames'
import * as React from "react";

type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage?: number,
    onPageChanged?: (pageNumber: number) => void,
    portionSize?: number
}

const Paginator: FC<PropsType> = (props: PropsType) => {

    const {totalItemsCount, pageSize, currentPage = 1, onPageChanged= x => x, portionSize = 10} = props
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages: Array<number> = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
            <button className={styles.button} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p => {
                    return (
                        <span
                            // className={`${currentPage === p ? styles.selectedPage : styles.notSelectedPage}`}
                            className={cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}
                            key={p}
                            onClick={(e) => {
                                onPageChanged(p)
                            }}>
                        {p}
                </span>
                    )
                }))}
            {portionCount > portionNumber &&
            <button className={styles.button} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
        </div>
    )
}

export default Paginator
