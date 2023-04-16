import { IColumns } from '@antmjs/vantui'

const defaultRender = (v) => v || '-'

export function useColumns() {
  const column: IColumns[] = [
    {
      title: '序号',
      dataIndex: 'index',
      fixed: 'left',
      align: 'center',
      width: 15,
      render: (_, payload, index) => <>{(index || 0) + 1}</>,
    },
    {
      title: '可报考本科专业',
      dataIndex: 'name',
      fixed: 'left',
      align: 'center',
      width: 30,
      render: defaultRender,
    },
    {
      title: '招生高校',
      dataIndex: 'age',
      align: 'center',
      fixed: 'left',
      width: 40,
      render: defaultRender,
    },
    {
      title: '院校性质',
      dataIndex: 'account',
      width: 30,
      render: defaultRender,
    },
    {
      title: '联培学校',
      align: 'center',
      dataIndex: 'address',
      width: 50,
      render: defaultRender,
    },
    {
      title: '招生计划',
      align: 'center',
      dataIndex: 'hobby',
      width: 30,
      render: defaultRender,
    },
    {
      title: '普通计划',
      align: 'center',
      dataIndex: 'hobby',
      width: 30,
      render: defaultRender,
    },
    {
      title: '脱贫家庭',
      align: 'center',
      dataIndex: 'hobby',
      width: 30,
      render: defaultRender,
    },
    {
      title: '获奖学生',
      align: 'center',
      dataIndex: 'hobby',
      width: 30,
      render: defaultRender,
    },
    {
      title: '未来工匠',
      align: 'center',
      dataIndex: 'hobby',
      width: 30,
      render: defaultRender,
    },
    {
      title: '退役士兵',
      align: 'center',
      dataIndex: 'hobby',
      width: 30,
      render: defaultRender,
    },
    {
      title: '未来工匠',
      align: 'center',
      dataIndex: 'hobby',
      width: 30,
      render: defaultRender,
    },
  ]

  return column;
}
