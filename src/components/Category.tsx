import React from "react";
import { CatWrapper } from "./Comp.styles";

const ANY = 0;

type Props = {
  categories: {
    id: number;
    name: string;
  }[];
  chooseCat: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Category: React.FC<Props> = ({ categories, chooseCat }) => {
  return (
    <CatWrapper>
      <select onChange={chooseCat}>
        <option value={ANY}>Any Category</option>
        {categories.map((cat) => {
          return (
            <option key={cat.name} value={cat.id}>
              {cat.name}
            </option>
          );
        })}
      </select>
    </CatWrapper>
  );
};
