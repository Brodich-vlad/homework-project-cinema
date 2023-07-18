import { BrowserRouter } from "react-router-dom";
import { Routes,Route } from "react-router";
import LayoutPage from "../../pages/layout-page/layout-page";
import HomePage from "../../pages/home-page/home-page";
import DetailsPage from "../../pages/details-page/details-page";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayoutPage/>}>
                        <Route index element={<HomePage/>}></Route>
                        <Route path={`details/:id` }element={<DetailsPage/>}></Route>
                    </Route>
                    <Route path="*" ></Route>
                </Routes>
            </BrowserRouter>
            {/* <HomePage/> */}
        </>
    )
}