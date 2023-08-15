import React from "react"

type finishType = {
    text: string
}

export const Finish = ({text} : finishType) => {


    return (
        <div>
            <span className="text-[2rem] font-semibold">{text} - refresh to try again!</span>
        </div>
    )
}