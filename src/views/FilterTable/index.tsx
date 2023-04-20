import { Table } from '@antmjs/vantui'
import { Text, View } from '@tarojs/components';
import { ReactNode } from 'react';
import { Title } from '../../components/Title';
import css from './index.module.scss'
import { useColumns } from './useColumns'

export interface SchoolItem {
  /** 本科院校代码 */
  schoolCode: string;

  /** 招生高校 */
  schoolName: string;

  /** 院校性质 */
  schoolType: string;

  /** 联培学校 */
  coSchool: string;

  /** 本科专业代码 */
  learnCode: string;

  /** 本科专业 */
  learn: string;

  /** 招生计划 */
  needNum: string;

  /** 普通计划 */
  ptNum: string;

  /** 脱贫计划 */
  tpNum: string;

  /** 获奖学生 */
  hjNum: string;

  /** 未来工匠 */
  gjNum: string;

  /** 退役士兵 */
  tyNum: string;

  /** 考试科目 */
  test: string;

  /** 学费 */
  cost: string;

  /** 省控线 */
  skx: string;

  /** 退役缺额 */
  tyqe: string;

  /** 工匠缺额 */
  gjqe: string;

  /** 脱贫缺额 */
  tpqe: string;

  /** 获奖缺额 */
  hjqe: string;

  /** 普通缺额 */
  ptqr: string;

  /** 工匠录取分数 */
  gjScore: string;

  /** 脱贫录取分数 */
  tpScore: string;

  /** 获奖录取分数 */
  hjScore: string;

  /** 普通分数线 */
  ptScore: string;
}

export type FilterTableProps = {
  list: SchoolItem[];
  loading?: boolean;
  header?: ReactNode;
}

export const FilterTable = ({
  list,
  loading,
  header
}: FilterTableProps) => {

  const columns = useColumns();

  if(!list?.length) return<></>

  return <View className={css.filter_table}>
    <Title name='院校招生计划' />
    <View className='comment'>左右滑动表格查看全部信息<Text>{header}</Text></View>
    <Table
      loading={loading}
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
