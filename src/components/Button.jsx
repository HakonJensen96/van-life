import React from "react"

export default function Button({ text, backgroundColor, width, fontSize }) {
    const styles = {
        backgroundColor: backgroundColor || "#FF8C38",
        width: width || "500px",
        color: "white",
        padding: "20px",
        border: "none",
        borderRadius: "5px",
        fontSize: fontSize || "1.5rem",
    }

    return (
        <button style={styles}>
            {text}

        </button>
    )
}