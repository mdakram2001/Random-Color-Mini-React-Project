import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"


const AppLayout = ()=>{

    const [type, setType] = useState("hex")
    let [color, setColor] = useState("#000000")


    useEffect(()=>{
        if (type == "hex") {
            generateRandomColor(type)
        }else{
            generateRandomColor(type)
        }
    }, type)

    function hexGenerator(){
        let color = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        let hexColor = "#"
        for (let i = 0; i < 6; i++) {
            hexColor += color[Math.floor(Math.random() * color.length)]
        }
        return hexColor
    }

    function rgbGenerator() {
        let a = Math.floor(Math.random() * (255 + 1))
        let b = Math.floor(Math.random() * (255 + 1))
        let c = Math.floor(Math.random() * (255 + 1))
        return `rgb(${a}, ${b}, ${c})`
    }

    function generateRandomColor(typeOfColor) {
        if(typeOfColor == "hex"){
            let generate = hexGenerator()
            setColor(generate)
        }else{
            let generate = rgbGenerator()
            setColor(generate)
        }
    }



    return(
        <div style={{width:'100vw', height:'100vh', background: color}} className="p-2 flex items-start justify-around">
            <div className="rounded-2xl h-fit w-1/4 bg-black bg-opacity-50 p-3 flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="font-bold text-4xl text-white">{color}</h1>
            </div>
            <button className="p-2 bg-gray-200 border-2 border-black rounded-xl" onClick={() => setType('hex')}>Create Hex Color</button>
            <button className="p-2 bg-gray-200 border-2 border-black rounded-xl" onClick={() => setType('rgb')}>Create RGB Color</button>
            <button className="p-2 bg-gray-200 border-2 border-black rounded-xl" onClick={() => generateRandomColor(type)}>Generate Random Color</button>
        </div>
    )
}

export default AppLayout