import React from 'react';
import { View } from '@tarojs/components';
import classnames from 'classnames/bind';

import './index.less';

const FormLayout = ({ wrapClassName, renderFormWrap, renderBtnWrap }) => (
  <View className={classnames('form-layout-wrap', wrapClassName)}>
    <View className={classnames('form-wrap')}>{renderFormWrap}</View>
    <View className={classnames('btn-wrap')}>{renderBtnWrap}</View>
  </View>
);

export default FormLayout;
