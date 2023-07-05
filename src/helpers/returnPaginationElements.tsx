/** UUID */
import { v4 as uuidv4 } from "uuid";

/** Icons */
import { ReactComponent as ArrowLeft } from "../assets/icons/arrow-small-left.svg";

/** Components */
import PaginationBtn from "../components/atoms/PaginationBtn/PaginationBtn";

/** Types */
import { PaginationApi } from "../types/paginationApi.types";

const returnPaginationElements = (
    paginationData: PaginationApi,
    handlePageChange: (page: number) => void
) => {
    const paginationBtns = [];

    if (paginationData.page > 1) {
        paginationBtns.push(
            <PaginationBtn
                key={uuidv4()}
                onClick={handlePageChange}
                pageNumber={-1}
                currentPage={paginationData.page}
                content={
                    <ArrowLeft
                        style={{
                            width: "16px",
                            height: "16px",
                            fill: "#ccc9e7",
                        }}
                    />
                }
                isDecrement
            />
        );
    }

    if (paginationData.page > 2) {
        paginationBtns.push(
            <PaginationBtn
                key={uuidv4()}
                onClick={handlePageChange}
                pageNumber={1}
                currentPage={paginationData.page}
                content={1}
            />
        );

        paginationBtns.push(
            <PaginationBtn
                key={uuidv4()}
                onClick={handlePageChange}
                pageNumber={paginationData.page + 2}
                currentPage={paginationData.page}
                placeHolderMode
            />
        );
    }

    if (paginationData.page - 1 > 0) {
        paginationBtns.push(
            <PaginationBtn
                key={uuidv4()}
                onClick={handlePageChange}
                pageNumber={paginationData.page - 1}
                currentPage={paginationData.page}
                content={paginationData.page - 1}
            />
        );
    }

    paginationBtns.push(
        <PaginationBtn
            key={uuidv4()}
            onClick={handlePageChange}
            pageNumber={paginationData.page}
            currentPage={paginationData.page}
            isActive={false}
            content={paginationData.page}
        />
    );

    if (paginationData.page < paginationData.totalPages) {
        paginationBtns.push(
            <PaginationBtn
                key={uuidv4()}
                onClick={handlePageChange}
                pageNumber={paginationData.page + 1}
                currentPage={paginationData.page}
                content={paginationData.page + 1}
            />
        );
    }

    if (paginationData.totalPages - paginationData.page > 1) {
        paginationBtns.push(
            <PaginationBtn
                key={uuidv4()}
                onClick={handlePageChange}
                pageNumber={paginationData.page + 2}
                currentPage={paginationData.page}
                placeHolderMode
            />
        );

        paginationBtns.push(
            <PaginationBtn
                key={uuidv4()}
                onClick={handlePageChange}
                pageNumber={paginationData.totalPages}
                currentPage={paginationData.page}
                content={paginationData.totalPages}
            />
        );
    }

    if (paginationData.page < paginationData.totalPages) {
        paginationBtns.push(
            <PaginationBtn
                key={uuidv4()}
                onClick={handlePageChange}
                pageNumber={-1}
                currentPage={paginationData.page}
                content={
                    <ArrowLeft
                        style={{
                            width: "16px",
                            height: "16px",
                            fill: "#ccc9e7",
                            transform: "rotate(180deg)",
                        }}
                    />
                }
                isIncrement
            />
        );
    }

    return paginationBtns;
};

export default returnPaginationElements;
