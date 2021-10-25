import React from "react"

const Error = ({back}) => {
    return <>
        <span onClick= {back} style= {{fontSize: 60, paddingRight: 50}}>
            &#8249;
        </span>
        <span style= {{display: 'inline-block', borderRadius: 2, width: 220, height: 55, backgroundColor: 'crimson', boxShadow: '0px 0px 10px red', paddingLeft: 15, paddingTop: 10 }}>
            Некорректные данные
        </span>
    
    </>
}

export default Error