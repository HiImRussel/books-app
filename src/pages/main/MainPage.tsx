/** React router */
import { Outlet } from "react-router-dom";

/** Components */
import MainTemplate from "../../components/templates/Main/MainTemplate";
import ModalPDF from "../../components/organisms/ModalPDF/ModalPDF";

const MainPage = () => {
    return (
        <>
            <MainTemplate>
                <Outlet />
            </MainTemplate>

            <ModalPDF />
        </>
    );
};

export default MainPage;
