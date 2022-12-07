import { Dispatch, SetStateAction } from "react";
import Select, { MultiValue, components } from "react-select";
import * as S from "./Dropdown.styled";

const options = [
  { value: "Alien", label: "Alien" },
  { value: "Human", label: "Human" },
  { value: "Humanoid", label: "Humanoid" },
  { value: "Mythological Creature", label: "Mythological Creature" },
  { value: "Poopybutthole", label: "Poopybutthole" },
  { value: "Disease", label: "Disease" },
  { value: "Robot", label: "Robot" },
  { value: "Cronenberg", label: "Cronenberg" },
  { value: "Animal", label: "Animal" },
  { value: "unknown", label: "unknown" },
];

type DropdownProps = {
  setFilterSpecies: Dispatch<SetStateAction<string>>;
};
/* eslint-disable react/destructuring-assignment  */
/* eslint-disable jsx-a11y/label-has-associated-control  */
const Option = (props: any) => (
  <div>
    <components.Option {...props}>
      <input type="checkbox" checked={props.isSelected} onChange={() => null} />{" "}
      <label>{props.label}</label>
    </components.Option>
  </div>
);

export const Dropdown = ({ setFilterSpecies }: DropdownProps) => {
  const handleChange = (
    selectedOptions: MultiValue<{ value: string; label: string }>
  ) => {
    const allOptions = selectedOptions.map((option) => option.value);
    const filter = `${allOptions.join("&species=")}`;
    setFilterSpecies(filter);
  };

  return (
    <S.Wrapper>
      <Select
        options={options}
        onChange={handleChange}
        isMulti
        styles={S.colorStyles}
        components={{ Option }}
        placeholder="Species"
      />
    </S.Wrapper>
  );
};
