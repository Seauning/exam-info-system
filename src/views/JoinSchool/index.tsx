import { View } from "@tarojs/components"
import { useEffect, useState } from "react";
import { Title } from "../../components/Title";
import { FilterItem } from "../FilterList/FilterItem";

import css from '../FilterList/index.module.scss'

export type JoinSchoolItem = {
  name: string;
  activated?: boolean;
}

export type JoinSchoolProps = {
  list: JoinSchoolItem[];
  onFilterListChange?: (list: JoinSchoolProps['list']) => void;
}

export const JoinSchool = ({ list, onFilterListChange }: JoinSchoolProps) => {


  const [joinSchoolList, setJoinSchoolList] = useState<JoinSchoolProps['list']>([]);

  useEffect(() => {
    const newList = list.map(item => {
      return {
        ...item,
        activated: false
      }
    })
    setJoinSchoolList(newList);
  }, [list])

  const handleActivatedChange = (name: string, activated: boolean) => {
    for(let i = 0; i < joinSchoolList.length; i++) {
      const item = joinSchoolList[i];
      if(item.name === name) {
        item.activated = activated;
      }
    }

    onFilterListChange?.(joinSchoolList);
    setJoinSchoolList([...joinSchoolList]);
  }

  if(!joinSchoolList?.length)  return <></>

  return <View className={css.filter_list}>
    <Title name='报考院校' />
    <View className='specialtys'>
      {
        joinSchoolList.map(({ name, activated = false }) => {
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
