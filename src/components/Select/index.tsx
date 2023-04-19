import { Loading, Search } from "@antmjs/vantui"
import { View } from "@tarojs/components"
import { useEffect, useState } from "react";
import css from './index.module.scss'

export type SelectProps = {
  onSelect: (value: any) => void;
  onSearch: (value: string) => Promise<string[]>;
}

export const Select = ({
  onSelect,
  onSearch
}: SelectProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [list, setList] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(!searchValue)  {
      onSearch('')
      return;
    }

    (async () => {
      try {
        setLoading(true);
        const data = await onSearch(searchValue);
        setList(data);
      } finally {
        setLoading(false)
      }
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue])

  return <View className={css.select}>
    <Search
      value={selectedValue || searchValue}
      className='search'
      placeholder='请输入专业名称' inputAlign='center' onChange={(e) => {
        setSearchValue((e.target as any)?.value || '')
        setSelectedValue('')
      }}
    />
      <View className='search-content'>
        {
          loading ? <Loading className='loading' color='#1989fa' />:
          list?.map(item => {
           return <View
             className='item'
             key={item}
             onClick={() => {
              onSelect(item);
              setSelectedValue(item)
              setList([])
            }}
           > {item}</View>
          })
        }
      </View>
  </View>
}
