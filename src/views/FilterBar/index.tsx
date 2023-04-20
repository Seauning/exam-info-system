import { View } from "@tarojs/components";
import classNames from "classnames";
import { useState } from "react";
import css from './index.module.scss'

export type FilterBarProps = {
  onClick?: (year: number) => void;
}

export const YEARS = [2022, 2023];

export const FilterBar = ({
  onClick
}: FilterBarProps) => {
  const [years] = useState(YEARS);
  const [curYear, setCurYear] = useState(YEARS[0]);

  return <View
    className={css.filter_bar}
  >
    {
      years.map((year) => {
        return (
          <View
            key={year}
            className={
              classNames({
                'year': true,
                'active': (year === curYear)
              })
            }
            onClick={() => {
              setCurYear(year)
              onClick?.(year)
            }}
          >{year}年</View>
        )
      })
    }
  </View>
}
