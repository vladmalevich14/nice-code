import * as React from "react"

export const CalendarComponent = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={15}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <g clipPath="url(#b)">
                <path
                    fill="#4198C5"
                    d="M1.758 1.172h.703V0h1.172v1.172h7.734V0h1.172v1.172h.703c.97 0 1.758.788 1.758 1.758v10.312A1.76 1.76 0 0 1 13.242 15H1.758A1.76 1.76 0 0 1 0 13.242V2.93c0-.97.789-1.758 1.758-1.758Zm-.586 12.07c0 .323.263.586.586.586h11.484a.587.587 0 0 0 .586-.586V5.508H1.172v7.734Zm0-8.906h12.656V2.93a.587.587 0 0 0-.586-.586h-.703v1.172h-1.172V2.344H3.633v1.172H2.46V2.344h-.703a.587.587 0 0 0-.586.586v1.406Z"
                />
            </g>
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h15v15H0z" />
            </clipPath>
            <clipPath id="b">
                <path fill="#fff" d="M15 0H0v15h15z" />
            </clipPath>
        </defs>
    </svg>
)
