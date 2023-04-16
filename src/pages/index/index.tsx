import { Search } from '@antmjs/vantui'
import { View } from '@tarojs/components'
import { useEffect, useState } from 'react'
import { QuerySystem } from '../../components/QuerySystem'
import { Remind } from '../../components/Remind'
import { FilterList, FilterListProps, } from '../../views/FilterList'
import { FilterTable, FilterTableProps } from '../../views/FilterTable'
import './index.scss'

const school = {
  no: '1231',
  major: '测试',
  enrollmentUniversitie: '',
  educationalInstitution: '',
  lianpeiSchool: '测试',
  enrollmentPlan: '测试',
  normalPlan: '测试',
  povertyAlleviationFamiliy: '测试',
  awardStudent: '测试',
  futureCraftsman: '测试',
  retiredSoldiers: '测试',
  exam300: '测试',
  exam150: '测试',
  tuition: '测试',
  provincialControlLine: '测试',
  admissionScoreLineForOrdinaryCandidate: '测试',
  admissionScorePovertyAlleviationFamilies: '测试',
  admissionScoreLineAwardStudents: '测试',
  provincialControlLineBranchOrdinaryCandidate: '测试',
  vacancyPlanRegularCandidate: '测试',
  vacancyPlanPovertyAlleviationFamiliy: '测试',
  vacancyProgramAwardStudents: '测试',
};

const getSpecialtyList = (query: string) => {
  return [{
    category: `(05)理工类${query}`,
    specialtys: [
      {
        name: '计算机科学与技术1',
        no: '1231'
      },
      {
        name: '软件工程',
        no: '1232'
      },
      {
        name: '通信工程',
        no: '1234'
      },
      {
        name: '大数据',
        no: '1235'
      }
    ]
  },
    {
      category: `(06)理工类${query}`,
      specialtys: [
        {
          name: '计算机科学与技术1',
          no: '1236'
        },
        {
          name: '计算机科学与技术2',
          no: '1237'
        },
        {
          name: '计算机科学与技术3',
          no: '1238'
        },
        {
          name: '计算机科学与技术4',
          no: '1239'
        }
      ]
    }
  ]
}

const getSchools = (query: string, list?: FilterListProps['list']) => {
  const specStr = list?.reduce((pre, item) => pre + item.specialtys.filter(spec => spec.activated).map(v => v.name).join('_'), '')
  console.log('!!', specStr);

  const data: FilterTableProps['list'] = new Array(10).fill(school).map((item, index) => ({...item, no: index, major: `测试${query}${specStr}`}))

  return data;
}

export default function() {
  const [searchValue, setSearchValue] = useState('');
  const [specialtyList, setSpecialtyList] = useState<FilterListProps['list']>([]);
  const [schools, setSchools] = useState<FilterTableProps['list']>([])

  useEffect(() => {
    if(!searchValue)  {
      setSpecialtyList([]);
      setSchools([]);
      return;
    }

    setSpecialtyList(getSpecialtyList(searchValue))
    setSchools(getSchools(searchValue, []))
  }, [searchValue])

  const handFilterListChange: FilterListProps['onFilterListChange'] = (list) => {
    setSchools(getSchools(searchValue, list))
  }

  return (
    <View className='index'>
      <Search
        className='search'
        placeholder='请输入专业名称' inputAlign='center' onChange={(e) => {
        setSearchValue((e.target as any)?.value || '')
      }}
      />
      {
        searchValue ? <>
           <FilterList list={specialtyList} onFilterListChange={handFilterListChange} />
           <FilterTable list={schools} />
        </> : <View className='info'>
          <Remind />
          <QuerySystem />
        </View>
      }
    </View>
  )
}
