import { View } from "@tarojs/components"
import classNames from "classnames"
import { ReactNode } from "react"

import css from './index.module.scss'

export const Title = ({ name, header }: {name: string, header?: ReactNode}) => {
  return <View className={classNames({
    [css.description]: true,
    [css['both-between']]: Boolean(header)
  })}
  >
    <View className='name'>{name}</View>
    <View>{header}</View>
    </View>
}
