import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { History } from "./pages/history";
import { DefaultLayout } from "./layouts/DefaultLayout";

export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>            
                <Route path="/history" element={<History/>}/>
            </Route>

            {/*<Route path="/admin" element={<AdminLayout/>}>
                <Route path="/home" element={<Home/>}/>            
                <Route path="/history" element={<History/>}/>
            </Route>*/}
        </Routes>
    )
}