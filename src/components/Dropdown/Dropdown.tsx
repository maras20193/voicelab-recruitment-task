import { Dispatch, SetStateAction } from "react";
import Select, { MultiValue } from "react-select";

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

export const Dropdown = ({ setFilterSpecies }: DropdownProps) => {
  const handleChange = (
    selectedOptions: MultiValue<{ value: string; label: string }>
  ) => {
    const allOptions = selectedOptions.map((option) => option.value);
    const filter = `${allOptions.join("&species=")}`;
    setFilterSpecies(filter);
  };
  return (
    <div>
      <Select options={options} onChange={handleChange} isMulti />
    </div>
  );
};
