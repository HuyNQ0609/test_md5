import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListTours from "./component/ListTours";
import CreateTours from "./component/CreateTours";
import UpdateTours from "./component/UpdateTours";
import ViewTours from "./component/ViewTours";
import DeleteTours from "./component/DeleteTours";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={"/tours"} element={<ListTours/>}></Route>
                    <Route path={"/tours/create"} element={<CreateTours/>}></Route>
                    <Route path={"/tours/update/:id"} element={<UpdateTours/>}></Route>
                    <Route path={"/tours/delete/:id"} element={<DeleteTours/>}></Route>
                    <Route path={"/tours/view/:id"} element={<ViewTours/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
