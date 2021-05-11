import React from "react";
import { Header } from "../Header"
import { Footer } from "../Footer"
import "./TrialList.css"
import TrialCard from "./TrialCard"

export default function TrialList(){

    return (
        <>
            <Header />
            <div className="TrialList">
                <TrialCard />
                <TrialCard />
            </div>
            <Footer />
        </>
    )
}