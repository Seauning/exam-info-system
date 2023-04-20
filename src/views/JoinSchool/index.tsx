import { View } from "@tarojs/components"
import { Title } from "../../components/Title";
import { FilterItem } from "../FilterList/FilterItem";

import css from '../FilterList/index.module.scss'

export type JoinSchoolItem = {
  name: string;
  activated: boolean;
}

export type JoinSchoolProps = {
  list: JoinSchoolItem[];
  onFilterListChange?: (list: JoinSchoolProps['list']) => void;
}

export const JoinSchool = ({
  list, onFilterListChange }: JoinSchoolProps) => {

  const handleActivatedChange = (name: string, activated: boolean) => {
    for(let i = 0; i < list.length; i++) {
      const item = list[i];
      if(item.name === name) {
        item.activated = activated;
      }
    }

    onFilterListChange?.(list);
  }

  if(!list?.length)  return <></>

  return <View className={css.filter_list}>
    <Title name='报考院校' />
    <View className='specialtys'>
      {
        list.map(({ name, activated }) => {
          return <FilterItem
            className='specialty'
            activated={activated}
            key={name}
            name={name} onClick={(payload) => {
              handleActivatedChange(name, payload);
            }}
          />
        })
      }
    </View>
  </View>
}
