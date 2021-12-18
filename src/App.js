import 'antd/dist/antd.css';
import * as React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import ContainerResumi from "./pages/ContainerResumi/ContainerResumi";
import ObservingResumi from "./pages/ObservingResumi/ObservingResumi";
import User from "./pages/User/User";
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />}></Route>
        <Route path="/edit/:title" element={<ContainerResumi />}></Route>
        <Route path="/view/:title" element={<ObservingResumi />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
