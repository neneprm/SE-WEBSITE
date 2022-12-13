import { ChangeEventHandler, useState } from "react"

interface IRadioLabel {
  idfor: string
  group: string
  text: string
  handleChange: ChangeEventHandler
}

const RadioLabel: React.FunctionComponent<IRadioLabel> = ({
  idfor,
  group,
  text,
  handleChange
}) => {
  return (
    <>
      <label className="label cursor-pointer justify-start">
        <input
          type="radio"
          id={idfor}
          name={group}
          value={text}
          className="radio radio-sm checked:bg-primary mr-2"
          onChange={handleChange}
        />
        <label
          htmlFor={idfor}
          className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl"
        >
          {text}
        </label>
      </label>
    </>
  )
}

export default RadioLabel
