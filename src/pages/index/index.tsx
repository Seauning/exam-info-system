import { View } from '@tarojs/components'
import { showToast } from '@tarojs/taro'
import { Icon } from '@antmjs/vantui'
import { useEffect, useState } from 'react'
import { QuerySystem } from '../../components/QuerySystem'
import { Remind } from '../../components/Remind'
import { FilterList, FilterListProps } from '../../views/FilterList'
import { FilterTable, SchoolItem } from '../../views/FilterTable'
import './index.scss'
import { SchoolInstitutionItem, SchoolInstitution, SchoolInstitutionProps } from '../../views/SchoolInstitution'
import { getAllSpecInfoList, getSpecList, getSpecNameList } from '../../api'
import { JoinSchool, JoinSchoolItem, JoinSchoolProps } from '../../views/JoinSchool'
import { Select, SelectProps } from '../../components/Select'
import { FilterBar, FilterBarProps, YEARS } from '../../views/FilterBar'

type GetSpecialtyList = (query: string) => Promise<FilterListProps['list']>

const getSpecialtyList: GetSpecialtyList = async (query) => {
  const { data = [] } = await getSpecList(query);

  return data.map(({ title, arr }) => ({
    category: title,
    specialtys: arr.map(item2 => ({ name: item2, activated: true }))
  }))
}

type FilterSchool = (schools: SchoolItem[], specialtyList: FilterListProps['list'], schoolInstitutions: SchoolInstitutionItem[], joinSchools: JoinSchoolItem[]) => SchoolItem[]

const filterSame = (list) => {
  const result: any[] = [];
  list.forEach(item => {
    if(result.find(v => v.name === item.name))  return;
    result.push(item)
  });
    return result;
}

const filterSchool: FilterSchool = (schools, specialtyList, schoolInstitutions, joinSchools) => {

  const activeSet1 = new Set(specialtyList.reduce(((pre, item1) => [...pre, ...item1.specialtys.filter(item2 => item2.activated).map(({name}) => name)]), []));
  const activeSet2 = new Set(schoolInstitutions.filter(item => item.activated).map(({name}) => name));
  const activeSet3 = new Set(joinSchools.filter(item => item.activated).map(({name}) => name));

  const result = [...schools
    .filter(school => activeSet1.has(school.learn))
    .filter(school => activeSet2.has(school.schoolType))
    .filter(school => activeSet3.has(school.schoolName))
  ]

  return result
}

export default function() {
  const [searchValue, setSearchValue] = useState('');

  const [schools, setSchools] = useState<SchoolItem[]>([])
  const [visibleSchools, setVisibleSchools] = useState<SchoolItem[]>([])

  const [specialtyList, setSpecialtyList] = useState<FilterListProps['list']>([]);

  const [tableDataLoading, setTableDataLoading] = useState(false)
  const [year, setYear] = useState(YEARS[0])

  useEffect(() => {
    if(!searchValue)  {
      setSpecialtyList([]);
      setSchools([]);
      setVisibleSchools([]);
      return;
    }

    (async () => {
      const data = await getSpecialtyList(searchValue) || []
      setSpecialtyList(data);
      try {
        setTableDataLoading(true)
        const {data: newSchools = []} = await getAllSpecInfoList(year, searchValue);
        setSchools(newSchools)
        setVisibleSchools(newSchools)
      }catch(e) {
        showToast({
          title: e?.message || '数据加载失败',
          icon: 'error'
        })
      }
       finally {
        setTableDataLoading(false)
      }
    })()

  }, [searchValue, year])

  const [schoolInstitutions, setSchoolInstitutions] = useState<SchoolInstitutionItem[]>([]);
  const [joinSchools, setJoinSchools] = useState<JoinSchoolItem[]>([]);

  useEffect(() => {
    const newList = schools.map(school => ({
      name: school.schoolType,
      activated: true,
    }));
    setSchoolInstitutions(filterSame(newList))
  }, [schools])

  useEffect(() => {
    const newList = schools.map(school => ({
      name: school.schoolName,
      activated: true,
    }))
    setJoinSchools(filterSame(newList))
  }, [schools])

  const handFilterListChange: FilterListProps['onFilterListChange'] = (list) => {
    const newSchools = filterSchool(schools, list, schoolInstitutions, joinSchools)
    setSpecialtyList(list)
    setVisibleSchools(newSchools)
  }

  const handSchoolInstitutionListChange: SchoolInstitutionProps['onFilterListChange'] = (list) => {
    const newSchools = filterSchool(schools, specialtyList, list, joinSchools)
    setSchoolInstitutions(list)
    setVisibleSchools(newSchools)
  }

  const handJoinSchoolsListChange: JoinSchoolProps['onFilterListChange'] = (list) => {
    const newSchools = filterSchool(schools, specialtyList, schoolInstitutions, list)
    setJoinSchools(list)
    setVisibleSchools(newSchools)
  }

  // 有问题
  // const {run: getSpecNameListDebounce} = useDebounceFn(getSpecNameList);

  const handleSearch: SelectProps['onSearch'] = async (v) => {
    if(!v)  {
      setSearchValue('');
      return [];
    }
    try {
      const {data = []} = (await getSpecNameList(v));
      return data;
    }
    catch(e) {
      showToast({
        title: e.message,
        icon: 'error'
      })
    }
    return []
  }

  const handleSelect: SelectProps['onSelect'] = (v) => {
    setSearchValue(v)
  }

  const [isSpan, setIsSpan] = useState(false)

  const handleChangeYear: FilterBarProps['onClick'] = (v) => {
    setYear(v)
  }

  return (
    <View className='index'>
      <Select onSearch={handleSearch} onSelect={handleSelect} />
      {
        searchValue ? <>
           <FilterList list={specialtyList} onFilterListChange={handFilterListChange} />
           {
            isSpan &&
              <>
                <SchoolInstitution defaultAllSelect list={schoolInstitutions} onFilterListChange={handSchoolInstitutionListChange} />
                <JoinSchool list={joinSchools} onFilterListChange={handJoinSchoolsListChange} />
              </>
           }

           <FilterTable loading={tableDataLoading} list={visibleSchools}
             top={<FilterBar onClick={handleChangeYear} />}
             header={
                isSpan
                  ?<View className='icon-show' onClick={() => setIsSpan(false)}>隐藏更多筛选条件<Icon name='arrow-down' className='icon' /></View>
                 : <View className='icon-show' onClick={() => setIsSpan(true)}>显示更多筛选条件<Icon name='arrow-up' className='icon' /></View>
            }
           />
        </> : <View className='info'>
          <Remind />
          <QuerySystem />
        </View>
      }
    </View>
  )
}
