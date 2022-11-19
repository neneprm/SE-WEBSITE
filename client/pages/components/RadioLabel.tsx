import { useState } from "react"

interface IRadioLabel {
  idfor: string
  group: string
  text: string
  check: boolean
}

const RadioLabel: React.FunctionComponent<IRadioLabel> = ({
  idfor,
  group,
  text,
  check,
}) => {
  const [isChecked, setIsChecked] = useState(check)
  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <label className="label cursor-pointer justify-start">
        <input
          type="radio"
          id={idfor}
          name={group}
          className="radio radio-sm checked:bg-primary mr-2"
          checked={isChecked}
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
