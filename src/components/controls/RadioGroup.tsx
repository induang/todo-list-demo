import { Dispatch, SetStateAction } from "react";
import RadioField from "./RadioField";

interface RadioGroupProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

export default function RadioGroup({ value, setValue }: RadioGroupProps) {
  const levels = [undefined, 1, 2, 3, 4];
  return (
    <div>
      {levels.map(
        (level) =>
          level && (
            <RadioField
              checked={level === value}
              setValue={setValue}
              level={level}
            >
              {level}
            </RadioField>
          )
      )}
    </div>
  );
}
