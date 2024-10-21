import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import {MarvelPage, DcPage, HeroPage, SearchPage} from '../../heroes'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="/" element={<Navigate to="/marvel" />} />

                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />

                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:heroId" element={<HeroPage />} />

                <Route path="/login/*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    </>
  )
}
