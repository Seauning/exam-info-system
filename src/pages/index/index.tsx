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
            name: '胡彦斌',
            age: 37,
            account: 20000,
            address: '西湖区湖底公园1号',
            hobby: '唱歌跳舞唱歌跳舞',
          },
          {
            name: '吴亦凡',
            age: 32,
            account: 50000,
            address: '朝阳区派出所',
            hobby: '嗨嗨啊嗨嗨嗨啊嗨',
          },
          {
            name: '王宝强',
            age: 31,
            account: 40000,
            address: '嘟嘟嘟嘟一号',
            hobby: '休息♨️休息♨️休息♨️休息♨️休息♨️',
          },
          {
            name: '王宝强',
            age: 31,
            account: 40000,
            address: '嘟嘟嘟嘟一号',
            hobby: '休息♨️休息♨️休息♨️休息♨️休息♨️',
          },
          {
            name: '王宝强',
            age: 31,
            account: 40000,
            address: '嘟嘟嘟嘟一号',
            hobby: '休息♨️休息♨️休息♨️休息♨️休息♨️',
          },
        ]}
      />
    </View>
  )
}
