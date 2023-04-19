import { View } from "@tarojs/components"
import { useEffect, useState } from "react";
import { Title } from "../../components/Title";
import { FilterItem } from "../FilterList/FilterItem";

import css from '../FilterList/index.module.scss'

export type SchoolInstitutionItem = {
  name: string;
  activated?: boolean;
}

export type SchoolInstitutionProps = {
  list: SchoolInstitutionItem[];
  onFilterListChange?: (list: SchoolInstitutionProps['list']) => void;
}

export const SchoolInstitution = ({ list, onFilterListChange }: SchoolInstitutionProps) => {

  const [schoolInstitutionList, setSchoolInstitutionList] = useState<SchoolInstitutionProps['list']>([]);

  useEffect(() => {
    const newList = list.map(item => {
      return {
        ...item,
        activated: false
      }
    })
    setSchoolInstitutionList(newList);
  }, [list])

  const handleActivatedChange = (name: string, activated: boolean) => {
    for(let i = 0; i < schoolInstitutionList.length; i++) {
      const item = schoolInstitutionList[i];
      if(item.name === name) {
        item.activated = activated;
      }
    }

    onFilterListChange?.(schoolInstitutionList);
    setSchoolInstitutionList([...schoolInstitutionList]);
  }

  if(!schoolInstitutionList?.length)  return <></>

  return <View className={css.filter_list}>
    <Title name='学校性质' />
    <View className='specialtys'>
      {
        schoolInstitutionList.map(({ name, activated = false }) => {
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
