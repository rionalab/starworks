import Burger from "comps/burger/Burger";
import CityDetail from "comps/city-detail/CityDetail";
import Features from "comps/features/Features";
import Footer from "comps/footer/Footer";
import MainSlider from "comps/main-slider/MainSlider";
import Menu from "comps/menu/Menu";
import Navbar from "comps/navbar/Navbar";
import PriceOffer from "comps/price-offer/PriceOffer";
import Promo from "comps/promo/Promo";
import MainContextProvider from "context/MainContext";

function App() {
    return (
        <>
            <MainContextProvider>
                <Menu />
                <Navbar />
                <Burger />
                <main>
                    <MainSlider />
                    <CityDetail />
                    <PriceOffer />
                    <Promo />
                    <Features />
                    <Footer />
                </main>
            </MainContextProvider>
        </>
    );
}

export default App;
