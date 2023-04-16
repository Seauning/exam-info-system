import { Table } from '@antmjs/vantui'
import { View } from '@tarojs/components';
import { Title } from '../../components/Title';
import css from './index.module.scss'
import { useColumns } from './useColumns'

export interface SchoolItem {
  no: string;
  major?: string;
  enrollmentUniversitie?: string;
  educationalInstitution?: string;
  lianpeiSchool?: string;
  enrollmentPlan?: string;
  normalPlan?: string;
  povertyAlleviationFamiliy?: string;
  awardStudent?: string;
  futureCraftsman?: string;
  retiredSoldiers?: string;
  exam300?: string;
  exam150?: string;
  tuition?: string;
  provincialControlLine?: string;
  admissionScoreLineForOrdinaryCandidate?: string;
  admissionScorePovertyAlleviationFamilies?: string;
  admissionScoreLineAwardStudents?: string;
  provincialControlLineBranchOrdinaryCandidate?: string;
  vacancyPlanRegularCandidate?: string;
  vacancyPlanPovertyAlleviationFamiliy?: string;
  vacancyProgramAwardStudents?: string;
}

export type FilterTableProps = {
  list: SchoolItem[]
}

export const FilterTable = ({
  list
}: FilterTableProps) => {

  const columns = useColumns();

  if(!list?.length) return<></>

  return <View className={css.filter_table}>
    <Title name='院校招生计划' />
    <View className='comment'>左右滑动表格查看全部信息</View>
    <Table
      className={css.table}
      columns={columns}
      dataSource={list}
      rowKey='no'
      scroll={{x: true}}
      titleStyle={{
        backgroundColor: 'rgb(72, 3, 119)',
        color: '#fff',
      }}
    >
  </Table>
  </View>
}
