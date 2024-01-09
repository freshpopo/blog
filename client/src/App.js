import {Route, Routes} from "react-router-dom";

import 'assets/scss/app.scss';

import Header from "views/layout/Header/Header";
import Footer from "views/layout/Footer/Footer";

import LadingPage from "views/lading";

import PortfolioPage from "views/portfolio";

import BlogPage from "views/blog";
import BlogListPage from "views/blog/ListPage";

import TemplatePage from "views/template";
import TemplateDiamondPage from "views/template/DiamondPage";
import TemplateBadgePage from "views/template/BadgePage";
import TemplateButtonPage from "views/template/ButtonPage";
import TemplateInputTextPage from "views/template/InputTextPage";

function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Routes>
          <Route index element={<LadingPage/>}></Route>
          <Route path='/portfolio' element={<PortfolioPage/>}></Route>
          <Route path='/blog/*' element={<BlogPage/>}>
            <Route index element={<BlogListPage/>}></Route>
            {/*<Route path='detail/*' element={<BlogDetail/>}/>*/}
            {/*<Route path='create/*' element={<BlogCreate/>}></Route>*/}
          </Route>
          <Route path='template/*' element={<TemplatePage/>}>
            <Route path='diamond' index element={<TemplateDiamondPage/>}></Route>
            <Route path='badge' element={<TemplateBadgePage/>}></Route>
            <Route path='button' element={<TemplateButtonPage/>}></Route>
            <Route path='input' element={<TemplateInputTextPage/>}></Route>
          </Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
