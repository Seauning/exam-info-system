import { View } from "@tarojs/components"
import classnames from 'classnames'
import { useEffect, useState } from "react"
import css from './index.module.scss'

export const FilterItem = ({ name, onActivatedChange, className }: {
  name: string;
  onActivatedChange: (activated: boolean) => void;
  className: string;
}) => {
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    onActivatedChange(activated);
  }, [activated, onActivatedChange])

  return <View
    className={
      classnames({
        [css.default]: true,
        [css.activated]: activated,
        [className]: true,
      })
    }
    onClick={() => setActivated(!activated)}
  >
      {name}
  </View>
}
