import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utlis/appStore";
import { BrowserRouter } from "react-router-dom";

test('render Header component', () => {
    render(
        <BrowserRouter>
            < Provider store={appStore} >
                <Header />
            </Provider >
        </BrowserRouter>
    )

    const userProfile = screen.getByAltText("profile");
    expect(userProfile).toBeInTheDocument();


})