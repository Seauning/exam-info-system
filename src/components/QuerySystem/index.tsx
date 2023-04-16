import { View } from "@tarojs/components"
import { Title } from "../Title"
import css from './index.module.scss'

export const QuerySystem = ({}: {}) => {

    return <View className={css.query_system}>
      <Title name='查询系统' />
      <View className={css.comment}>
        <View>
        1、为考生提供全面的招生考试录取相关信息,一键查询方便快捷
        </View>
        <View>
        2、备考前，在报考大类、目标定位等抉择时为考生提供数据参考
        </View>
        <View>
        3、填报志愿时利用查询系统,合理填报志愿
        </View>
      </View>
    </View>
}
