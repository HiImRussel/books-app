/** React */
import { useState } from "react";

/** React PDF */
import { Document, Page } from "react-pdf";

/** Types */
interface ReaderPDFProps {
    pdfURL: string;
}

const ReaderPDF = (props: ReaderPDFProps) => {
    /** Props */
    const { pdfURL } = props;

    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document file={pdfURL} onLoadSuccess={onDocumentLoadSuccess}>
                <Page
                    pageNumber={pageNumber}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    width={400}
                />
            </Document>
        </div>
    );
};

export default ReaderPDF;
