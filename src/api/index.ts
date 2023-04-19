import { request } from "@tarojs/taro";

const a = 'http://101.200.222.26:7990';

export const getSpecNameList = (query: string) => {
  return request<string[]>({
    method: 'GET',
    url: `${a}/info/query-zk-list/${query}`,
  })
}

export const getSpecList = (name) => {
  return request<{bidCode: string; bigName: string; bkLearn: string}[]>({
    method: 'GET',
    url: `${a}/info/query-bk-list/${name}`,
  })
}

export const getAllSpecInfoList = (year, name) => {
  return request({
    method: 'POST',
    url: `${a}/info/query-allinfo-list/${year}/${name}`
  })
}
