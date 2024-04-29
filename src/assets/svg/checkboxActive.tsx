import * as React from "react"

export const CheckboxActiveComponent = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
        {...props}
    >
        <rect width={18} height={18} fill="#4198C5" rx={4} />
        <rect width={18} height={18} stroke="#CDCDCD" rx={4} />
        <path
            fill="#fff"
            fillRule="evenodd"
            d="m7.949 10.419-1.8-1.838L5 9.755 7.001 11.8 8.177 13 13 5.953 11.668 5l-3.719 5.419Z"
            clipRule="evenodd"
        />
    </svg>
)
