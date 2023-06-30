/** Components */
import AllBooks from "../../components/organisms/AllBooks/AllBooks";
import PopularBooks from "../../components/organisms/PopularBooks/PopularBooks";
import TrendingBooks from "../../components/organisms/TrendingBooks/TrendingBooks";

const HomeView = () => {
    return (
        <>
            <PopularBooks />
            <TrendingBooks />
            <AllBooks />
        </>
    );
};

export default HomeView;
