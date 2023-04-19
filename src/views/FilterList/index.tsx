import { Divider, Icon } from "@antmjs/vantui";
import { Text, View } from "@tarojs/components"
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
  list: {category: string; specialtys: Specialty[];}[];
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
          break;
        }
      }
    }

    onFilterListChange?.(specialtyList);
    setSpecialtyList([...specialtyList]);
  }

  const handleSelectAll = (category: string, activated: boolean) => {
    for(let i = 0; i < specialtyList.length; i++) {
      const item = specialtyList[i];
      if(item.category === category) {
        item.specialtys.forEach(spec => spec.activated = activated);
        break;
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
        specialtyList.map(({specialtys, category}) => {
          const isAllSelected = specialtys.every(spec => spec.activated);
          return <View key={category}>
            <View className='category'>
              <Text>{category}</Text>
              {

              isAllSelected ?
                <View
                  className='all_selected'
                  onClick={() => handleSelectAll(category, false)}
                >
                  <Icon name='checked' className='icon' />
                  取消全选
                </View>
               : <Text
                   className='all_selected'
                   onClick={() => handleSelectAll(category, true)}
               >
                    全选
                 </Text>
              }
            </View>
            <Divider />
            <View className='specialtys'>
              {
                specialtys.map(({ name, activated = false, no }) => {
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
