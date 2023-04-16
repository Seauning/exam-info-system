import { Divider } from "@antmjs/vantui";
import { View } from "@tarojs/components"
import { useEffect, useState } from "react";
import { Title } from "../../components/Title";
import { FilterItem } from "./FilterItem";

import css from './index.module.scss'

export type Specialty = {
  name: string;
  no: string;
  activated?: boolean;
}

export type FilterListProps = {
  list: {category: string; specialtys: Specialty[]}[];
  onFilterListChange?: (list: FilterListProps['list']) => void;
}

export const FilterList = ({ list, onFilterListChange }: FilterListProps) => {

  const [specialtyList, setSpecialtyList] = useState<FilterListProps['list']>([]);

  useEffect(() => {
    const newList = list.map(item => {
      return {
        ...item,
        specialtys: item.specialtys.map(specialty => {
          return {
            ...specialty,
            activated: false
          }
        })
      }
    })
    setSpecialtyList(newList);
  }, [list])

  const handleActivatedChange = (no: string, activated: boolean) => {
    for(let i = 0; i < specialtyList.length; i++) {
      const item = specialtyList[i];
      for(let item2 of item.specialtys) {
        if(item2.no === no) {
          item2.activated = activated;
          specialtyList.filter((_, index) => index !== i).forEach(v => v.specialtys.forEach(v2 => v2.activated = false))
          break;
        }
      }
    }

    onFilterListChange?.(specialtyList);
    setSpecialtyList([...specialtyList]);
  }

  if(!specialtyList?.length)  return <></>

  return <View className={css.filter_list}>
    <Title name='可报考的本科专业' />
    <View className='comment'>点击专业卡查看院校招生计划</View>
    <View>
      {
        specialtyList.map((item) => {
          return <View key={item.category}>
            <View className='category'>{item.category}</View>
            <Divider />
            <View className='specialtys'>
              {
                item.specialtys.map(({ name, activated = false, no }) => {
                  return <FilterItem
                    className='specialty'
                    activated={activated}
                    key={no} name={name} onClick={(payload) => {
                      handleActivatedChange(no, payload);
                    }}
                  />
                })
              }
            </View>
          </View>
        })
      }
    </View>
    <View className='comment'>注: 考生只能选择一个大类报考</View>
  </View>
}
