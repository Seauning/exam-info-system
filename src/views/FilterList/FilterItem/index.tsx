import { View } from "@tarojs/components"
import classnames from 'classnames'
import css from './index.module.scss'

export const FilterItem = ({ name, onClick, className, activated }: {
  name: string;
  onClick: (activated: boolean) => void;
  className: string;
  activated: boolean;
}) => {
  return <View
    className={
      classnames({
        [css.default]: true,
        [css.activated]: activated,
        [className]: true,
      })
    }
    onClick={() => onClick(!activated)}
  >
      {name}
  </View>
}
