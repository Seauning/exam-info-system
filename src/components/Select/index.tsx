import { Search } from "@antmjs/vantui"
import { View } from "@tarojs/components"
import { useEffect, useState } from "react";
import css from './index.module.scss'

export type SelectProps = {
  onSelect: (value: any) => void;
  onSearch: (value: string) => Promise<{learn: string; code: string}[]>;
}

export const Select = ({
  onSelect,
  onSearch
}: SelectProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [list, setList] = useState<{learn: string; code: string}[]>([]);
  const [selectedValue, setSelectedValue] = useState('')

  useEffect(() => {
    if(!searchValue)  {
      (async () => {
        const data = await onSearch(searchValue);
        setList(data);
      })()
      return;
    }

    (async () => {
        const data = await onSearch(searchValue);
        setList(data);
    })()
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
      {(Boolean(list.length)) && <View className='search-content'>
        {
          list?.map(item => {
           return <View
             className='item'
             key={item.code}
             onClick={() => {
              onSelect(item.learn);
              setSelectedValue(item.learn)
              setList([])
            }}
           >{`${item.learn} (${item.code})`}</View>
          })
        }
      </View>}
  </View>
}
