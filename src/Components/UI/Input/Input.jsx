import React from "react";

import { User, Lock } from "lucide-react";

const Input = React.forwardRef(({ error, icon: Icon, className = "", ...props }, ref) => {

  const borderColor = error ? "border-red-500" : props.value ? "border-green-500" : "border-dafault";
  { error?.message && <p className="text-red-500 text-sm mt-1">{error.message}</p> }

  return (
    <div className="flex flex-col justify-center w-full h-16">
      <div className="w-full relative">
        {Icon && <Icon className={`${error ? "absolute left-2 top-1/2 -translate-y-1/2 text-light-state-danger z-10" : props.value ? "absolute left-2 top-1/2 -translate-y-1/2 text-light-state-success z-10" : "absolute left-2 top-1/2 -translate-y-1/2 border-light-border-light z-10"}`} />}

        <input
          ref={ref}
          {...props}
          className={`w-full p-2 rounded border ${borderColor} focus:outline-none focus:ring-1 focus:ring-opacity-50 ${className}`}
        />
      </div>
      {error?.message && (
        <div
          className={`
    mt-1 overflow-hidden transition-all duration-300 ease-linear
    ${error ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}
  `}
        >
          <p className="text-red-500 text-xs">{error?.message}</p>
        </div>
      )

      }

    </div>
  )
})


export default Input;
