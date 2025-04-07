"use client"

import { useState } from "react"

export default function Calculator() {
  const [display, setDisplay] = useState<string>("0")
  const [equation, setEquation] = useState<string>("")
  const [calculated, setCalculated] = useState<boolean>(false)

  const handleNumberClick = (num: string) => {
    if (calculated) {
      setDisplay(num)
      setEquation("")
      setCalculated(false)
    } else {
      setDisplay(display === "0" ? num : display + num)
    }
  }

  const handleOperatorClick = (operator: string) => {
    if (calculated) {
      setEquation(display + " " + operator + " ")
      setCalculated(false)
    } else {
      setEquation(equation + display + " " + operator + " ")
      setDisplay("0")
    }
  }

  const handleClear = () => {
    setDisplay("0")
    setEquation("")
    setCalculated(false)
  }

  const handleEquals = () => {
    try {
      const fullEquation = equation + display
      // Replace × with * and ÷ with / for evaluation
      const evalReady = fullEquation.replace(/×/g, "*").replace(/÷/g, "/")

      // Using Function constructor to evaluate the expression
      // eslint-disable-next-line no-new-func
      const result = new Function(`return ${evalReady}`)()

      setDisplay(result.toString())
      setEquation(fullEquation)
      setCalculated(true)
    } catch (error) {
      setDisplay("Error")
      setCalculated(true)
    }
  }

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-3 text-xs text-gray-500">
        <div>9:41</div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-4 rounded-sm bg-gray-500"></div>
          <div className="h-2 w-4 rounded-sm bg-gray-500"></div>
          <div className="h-2 w-4 rounded-sm bg-gray-500"></div>
        </div>
      </div>

      {/* Display */}
      <div className="flex min-h-32 flex-col items-end justify-end p-6">
        <div className="mb-2 text-right text-sm text-gray-500">{equation}</div>
        <div className="text-right text-4xl font-semibold">{display}</div>
      </div>

      {/* Keypad */}
      <div className="grid grid-cols-4 gap-4 p-4">
        {/* Row 1 */}
        <button
          onClick={handleClear}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-rose-500 font-medium"
        >
          AC
        </button>
        <button
          onClick={() => handleOperatorClick("÷")}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700 text-xl"
        >
          ÷
        </button>
        <button
          onClick={() => handleOperatorClick("×")}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700 text-xl"
        >
          ×
        </button>
        <button
          onClick={() => handleOperatorClick("-")}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700 text-xl"
        >
          −
        </button>

        {/* Row 2 */}
        <button
          onClick={() => handleNumberClick("7")}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700"
        >
          7
        </button>
        <button
          onClick={() => handleNumberClick("8")}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700"
        >
          8
        </button>
        <button
          onClick={() => handleNumberClick("9")}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700"
        >
          9
        </button>
        <button
          onClick={() => handleOperatorClick("+")}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700 text-xl"
        >
          +
        </button>

        {/* Row 3 */}
        <button
          onClick={() => handleNumberClick("4")}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700"
        >
          4
        </button>
        <button
          onClick={() => handleNumberClick("5")}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700"
        >
          5
        </button>
        <button
          onClick={() => handleNumberClick("6")}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700"
        >
          6
        </button>
        <button
          onClick={() => handleOperatorClick("+")}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700 text-xl"
        >
          +
        </button>

        {/* Row 4 */}
        <button
          onClick={() => handleNumberClick("1")}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700"
        >
          1
        </button>
        <button
          onClick={() => handleNumberClick("2")}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700"
        >
          2
        </button>
        <button
          onClick={() => handleNumberClick("3")}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700"
        >
          3
        </button>
        <div className="row-span-2">
          <button
            onClick={handleEquals}
            className="flex h-32 w-14 items-center justify-center rounded-full bg-gradient-to-b from-rose-400 to-rose-600 text-white text-xl"
          >
            =
          </button>
        </div>

        {/* Row 5 */}
        <button
          onClick={() => handleNumberClick("0")}
          className="col-span-2 flex h-14 items-center justify-center rounded-full bg-gray-100 text-gray-700"
        >
          0
        </button>
        <button
          onClick={() => handleNumberClick(".")}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700"
        >
          .
        </button>
      </div>

      {/* Home indicator */}
      <div className="flex justify-center pb-2">
        <div className="h-1 w-32 rounded-full bg-black"></div>
      </div>
    </div>
  )
}

