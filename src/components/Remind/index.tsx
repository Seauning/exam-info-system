import { View } from "@tarojs/components"
import { Title } from "../Title"
import css from './index.module.scss'

export const Remind = ({}: {}) => {

    return <View className={css.remind}>
      <Title name='特别提醒' />
      <View className={css.comment}>
        <View>
         1、根据专科所学专业，对照《专升本对应专业指导目录》,确定报考大类和对应专业
        </View>
        <View>
        2、两个以上报考大类,考生只能选择一个大类对应专业进行报考
        </View>
        <View>
        3、每个大类对应不同的专业课，招生专业、招生计划、报考人数、竞争激烈程度不同
        </View>
        <View>
        4、本科招生专业以及招生计划等信息陆续更新，录取分数线可在2022年查看
        </View>
      </View>
    </View>
}
