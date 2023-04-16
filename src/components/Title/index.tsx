import { View } from "@tarojs/components"

import css from './index.module.scss'

export const Title = ({ name }: {name: string}) => {
  return <View className={css.description}>{name}</View>
}
