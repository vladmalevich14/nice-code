import * as React from "react"

export const CameraComponent = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={8}
        fill="none"
        {...props}
    >
        <path
            fill="#616F82"
            fillRule="evenodd"
            d="M.972 0H9.04c.536 0 .971.418.972.932v6.136c0 .514-.436.931-.972.932H.972C.435 8 .001 7.582 0 7.068V.932C0 .418.435.001.972 0Zm13.03 7.026-3.342-1.75V2.744l3.341-1.75v6.033Z"
            clipRule="evenodd"
        />
    </svg>
)
