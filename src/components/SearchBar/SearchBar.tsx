import { Dispatch, SetStateAction } from "react";

type SearchBarProps = {
  setFilterName: Dispatch<SetStateAction<string>>;
};

export const SearchBar = ({ setFilterName }: SearchBarProps) => {
  const handleChangeValue = (e: React.FormEvent<HTMLInputElement>) => {
    setFilterName((e.target as HTMLInputElement).value);
  };

  return (
    <div>
      <input type="text" onChange={handleChangeValue} />
    </div>
  );
};
