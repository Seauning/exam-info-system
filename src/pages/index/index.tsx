import { Search } from '@antmjs/vantui'
import { View } from '@tarojs/components'
import { useEffect, useState } from 'react'
import { FilterList, FilterListProps, } from '../../views/FilterList'
import { FilterTable } from '../../views/FilterTable'
import './index.scss'

export default function() {
  const [searchValue, setSearchValue] = useState('');
  const [specialtyList, setSpecialtyList] = useState<FilterListProps['list']>([]);

  useEffect(() => {
    if(!searchValue)  {
      setSpecialtyList([]);
      return;
    }

    setSpecialtyList([{
      category: '(05)理工类',
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
        category: '(06)理工类',
        specialtys: [
          {
            name: '计算机科学与技术1',
            no: '1231'
          },
          {
            name: '计算机科学与技术2',
            no: '1232'
          },
          {
            name: '计算机科学与技术3',
            no: '1234'
          },
          {
            name: '计算机科学与技术4',
            no: '1235'
          }
        ]
      }
    ])
  }, [searchValue])

  return (
    <View className='index'>
      <Search
        className='search'
        placeholder='请输入专业名称' inputAlign='center' onChange={(e) => {
        setSearchValue((e.target as any)?.value || '')
      }}
      />
      <FilterList list={specialtyList} />
      <FilterTable list={[
          {
            no: '1231',
            major: '测试',
            enrollmentUniversitie: '测试',
            educationalInstitution: '测试',
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
          },
          {
            no: '1232',
            major: '测试1',
            enrollmentUniversitie: '测试1',
            educationalInstitution: '测试1',
            lianpeiSchool: '测试1',
            enrollmentPlan: '测试1',
            normalPlan: '测试1',
            povertyAlleviationFamiliy: '测试1',
            awardStudent: '测试1',
            futureCraftsman: '测试1',
            retiredSoldiers: '测试1',
            exam300: '测试1',
            exam150: '测试1',
            tuition: '测试1',
            provincialControlLine: '测试1',
            admissionScoreLineForOrdinaryCandidate: '测试1',
            admissionScorePovertyAlleviationFamilies: '测试1',
            admissionScoreLineAwardStudents: '测试1',
            provincialControlLineBranchOrdinaryCandidate: '测试1',
            vacancyPlanRegularCandidate: '测试1',
            vacancyPlanPovertyAlleviationFamiliy: '测试1',
            vacancyProgramAwardStudents: '测试1',
          },
          {
            no: '1233',
            major: '测试1',
            enrollmentUniversitie: '测试1',
            educationalInstitution: '测试1',
            lianpeiSchool: '测试1',
            enrollmentPlan: '测试1',
            normalPlan: '测试1',
            povertyAlleviationFamiliy: '测试1',
            awardStudent: '测试1',
            futureCraftsman: '测试1',
            retiredSoldiers: '测试1',
            exam300: '测试1',
            exam150: '测试1',
            tuition: '测试1',
            provincialControlLine: '测试1',
            admissionScoreLineForOrdinaryCandidate: '测试1',
            admissionScorePovertyAlleviationFamilies: '测试1',
            admissionScoreLineAwardStudents: '测试1',
            provincialControlLineBranchOrdinaryCandidate: '测试1',
            vacancyPlanRegularCandidate: '测试1',
            vacancyPlanPovertyAlleviationFamiliy: '测试1',
            vacancyProgramAwardStudents: '测试1',
          },
          {
            no: '1234',
            major: '测试1',
            enrollmentUniversitie: '测试1',
            educationalInstitution: '测试1',
            lianpeiSchool: '测试1',
            enrollmentPlan: '测试1',
            normalPlan: '测试1',
            povertyAlleviationFamiliy: '测试1',
            awardStudent: '测试1',
            futureCraftsman: '测试1',
            retiredSoldiers: '测试1',
            exam300: '测试1',
            exam150: '测试1',
            tuition: '测试1',
            provincialControlLine: '测试1',
            admissionScoreLineForOrdinaryCandidate: '测试1',
            admissionScorePovertyAlleviationFamilies: '测试1',
            admissionScoreLineAwardStudents: '测试1',
            provincialControlLineBranchOrdinaryCandidate: '测试1',
            vacancyPlanRegularCandidate: '测试1',
            vacancyPlanPovertyAlleviationFamiliy: '测试1',
            vacancyProgramAwardStudents: '测试1',
          },
          {
            no: '1235',
            major: '测试1',
            enrollmentUniversitie: '测试1',
            educationalInstitution: '测试1',
            lianpeiSchool: '测试1',
            enrollmentPlan: '测试1',
            normalPlan: '测试1',
            povertyAlleviationFamiliy: '测试1',
            awardStudent: '测试1',
            futureCraftsman: '测试1',
            retiredSoldiers: '测试1',
            exam300: '测试1',
            exam150: '测试1',
            tuition: '测试1',
            provincialControlLine: '测试1',
            admissionScoreLineForOrdinaryCandidate: '测试1',
            admissionScorePovertyAlleviationFamilies: '测试1',
            admissionScoreLineAwardStudents: '测试1',
            provincialControlLineBranchOrdinaryCandidate: '测试1',
            vacancyPlanRegularCandidate: '测试1',
            vacancyPlanPovertyAlleviationFamiliy: '测试1',
            vacancyProgramAwardStudents: '测试1',
          },
        ]}
      />
    </View>
  )
}
