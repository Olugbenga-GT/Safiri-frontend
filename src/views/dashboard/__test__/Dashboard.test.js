import {render, screen} from "@testing-library/react";
import Dashboard from "../Dashboard";
import "@testing-library/jest-dom/extend-expect";
import {BrowserRouter} from "react-router-dom";

// const MockDashboard = () =>{
//    return(
//        <BrowserRouter>
//            <Dashboard/>
//        </BrowserRouter>
//    )
// }

describe("Dashboard test", ()=>{
    it("should appear in DOM", function () {
        render( <Dashboard/>);
        const headingElement = screen.getByText(/Dashboard/i);
        expect(headingElement).toBeInTheDocument();
    });

    it("should render 'Dashboard' when added to DOM", function () {
        render(<Dashboard/>);
        const headingElement = screen.getByText(/dashboard/i);
        expect(headingElement.textContent).toBe("Dashboard");
    });

    it('should render card with "$1500"', function () {
        render(<Dashboard/>);
        const firstCard = screen.getByText(/1500/i);
        const secondCard = screen.getByText(/5000/i);
        const thirdCard = screen.getByText(/800/i);

        expect(firstCard.textContent).toBe("$1500");
        expect(secondCard.textContent).toBe("$5000");
        expect(thirdCard.textContent).toBe("$800");
    });

    it('should render all dashboard card', function () {
        render(<Dashboard/>);
        const amountSavedElements  = screen.getAllByRole("heading");
        expect(amountSavedElements.length).toBe(4);
    });
})