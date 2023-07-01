/** React router */
import { Outlet } from "react-router-dom";

/** Components */
import MainTemplate from "../../components/templates/Main/MainTemplate";
import ModalPDF from "../../components/organisms/ModalPDF/ModalPDF";
import SearchModal from "../../components/organisms/SearchModal/SearchModal";

const MainPage = () => {
    return (
        <>
            <MainTemplate>
                <Outlet />
            </MainTemplate>

            <ModalPDF />
            <SearchModal />
        </>
    );
};

export default MainPage;
