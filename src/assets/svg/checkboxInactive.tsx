import * as React from "react"

export const CheckboxInactiveComponent = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
        {...props}
    >
        <rect
            width={17}
            height={17}
            x={0.5}
            y={0.5}
            fill="#fff"
            stroke="#CDCDCD"
            rx={3.5}
        />
    </svg>
)
