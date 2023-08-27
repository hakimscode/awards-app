import React from "react";

export type FilterProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterPoint: React.Dispatch<React.SetStateAction<number>>;
  setFilterType: React.Dispatch<React.SetStateAction<string[]>>;
};

export type FilterAwardsType = {
  id: number;
  label: string;
  value: string;
  checked: boolean;
};
