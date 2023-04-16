import { Divider } from "@antmjs/vantui";
import { View } from "@tarojs/components"
import { FilterItem } from "./FilterItem";

import css from './index.module.scss'

export type Specialty = {
    name: string;
    no: string;
  }


export type FilterListProps = {
  list: {category: string; specialtys: Specialty[]}[];
}

export const FilterList = ({ list }: FilterListProps) => {
  if(!list?.length)  return <></>

  const handleActivatedChange = (name: string, activated: boolean) => {
    console.log(name, activated)
  }

  return <View className={css.filter_list}>
    <View className='description'>可报考的本科专业</View>
    <View className='comment'>点击专业卡查看院校招生计划</View>
    <View>
      {
        list.map((item) => {
          return <View key={item.category}>
            <View className='category'>{item.category}</View>
            <Divider />
            <View className='specialtys'>
              {
                item.specialtys.map(({ name }) => {
                  return <FilterItem
                    className='specialty'
                    key={name} name={name} onActivatedChange={(activated) => {
                      handleActivatedChange(name, activated);
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
