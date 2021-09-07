import * as React from "react"

function ShoppingCart(props: any) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 0a1 1 0 100 2h3.18l.832 4.155c.004.029.01.057.017.084l1.67 8.346A3 3 0 009.69 17h9.702a3 3 0 002.99-2.415l.001-.008 1.6-8.39A1 1 0 0023 5H6.82L5.98.804A1 1 0 005 0H1zm7.66 14.194L7.22 7h14.571l-1.372 7.198a1 1 0 01-1 .802H9.66a1 1 0 01-1-.805v-.001zM7 21a2 2 0 114 0 2 2 0 01-4 0zm11 0a2 2 0 114 0 2 2 0 01-4 0z"
          fill="#FEFEFE"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#FEFEFE" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ShoppingCart