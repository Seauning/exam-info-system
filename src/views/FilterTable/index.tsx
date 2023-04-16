import { Table } from '@antmjs/vantui'
import { View } from '@tarojs/components';
import css from './index.module.scss'
import { useColumns } from './useColumns'

export interface School {
  name: string;
  age: number,
  account: number,
  address: string,
  hobby: string,
}

export type FilterTableProps = {
  list: School[]
}

export const FilterTable = ({
  list
}: FilterTableProps) => {
  const columns = useColumns();

  return <View className={css.filter_table}>
    <View className='description'>院校招生计划</View>
    <View className='comment'>左右滑动表格查看全部信息</View>
    <Table
      className={css.table}
      columns={columns}
      dataSource={list}
      rowKey='name'
      scroll={{x: true}}
      titleStyle={{
        backgroundColor: 'rgb(72, 3, 119)',
        color: '#fff',
      }}
    >
  </Table>
  </View>
}
