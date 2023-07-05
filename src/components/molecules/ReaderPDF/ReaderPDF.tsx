/** React */
import { useState } from "react";

/** React PDF */
import { Document, Page } from "react-pdf";
import PDFPagination from "../../atoms/PDFPagination/PDFPagination";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
interface ReaderPDFProps {
    pdfURL: string;
}

const ReaderPDF = (props: ReaderPDFProps) => {
    /** Props */
    const { pdfURL } = props;

    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    /** Handlers */
    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    return (
        <div className={styles["reader-pdf"]}>
            <Document file={pdfURL} onLoadSuccess={onDocumentLoadSuccess}>
                <Page
                    pageNumber={pageNumber}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    width={400}
                />
            </Document>
            <PDFPagination
                pageNumber={pageNumber}
                totalPages={numPages}
                handlePageChange={setPageNumber}
                wrapperStyles={{
                    position: "absolute",
                    bottom: "8px",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            />
        </div>
    );
};

export default ReaderPDF;
