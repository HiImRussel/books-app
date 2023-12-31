/** React router */
import { Outlet } from "react-router-dom";

/** Components */
import MainTemplate from "../../components/templates/Main/MainTemplate";
import ModalPDF from "../../components/organisms/ModalPDF/ModalPDF";
import SearchModal from "../../components/organisms/SearchModal/SearchModal";
import BookModal from "../../components/organisms/BookModal/BookModal";
import MobileNavMenu from "../../components/organisms/MobileNavMenu/MobileNavMenu";

const MainPage = () => {
    return (
        <>
            <MainTemplate>
                <Outlet />
            </MainTemplate>

            <ModalPDF />
            <SearchModal />
            <BookModal />
            <MobileNavMenu />
        </>
    );
};

export default MainPage;
