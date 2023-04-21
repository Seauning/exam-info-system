import { request } from "@tarojs/taro";
import { SchoolItem } from './../views/FilterTable/index';

const a = 'https://lovelrn99.xyz';

export const getSpecNameList = (query: string) => {
  return request<string[]>({
    method: 'GET',
    url: `${a}/info/query-zk-list/${query}`,
  })
}

export const getSpecList = (name) => {
  return request<{title: string; arr: string[];}[]>({
    method: 'GET',
    url: `${a}/info/query-bk-list/${name}`,
  })
}

export const getAllSpecInfoList = (year, name) => {
  return request<SchoolItem[]>({
    method: 'GET',
    url: `${a}/info/query-allinfo-list/${year}/${name}`
  })
}
