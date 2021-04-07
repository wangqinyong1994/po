import React, { useMemo, useState } from 'react';
import { View, Switch } from '@tarojs/components';

import './index.less';

const HelloWorld = () => {
  const [value, setValue] = useState(false);

  const renderValue = useMemo(() => {
    return value ? '哈哈哈' : '呵呵呵';
  }, [value]);

  return (
    <View>
      <View>
        <Switch
          onChange={() => setValue(!value)}
          checked={value}
          platform="ios"
        />
      </View>
      <View>{renderValue}</View>
    </View>
  );
};

export default HelloWorld;
