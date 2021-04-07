import React, { Component } from 'react';
import { View, Text, Image } from '@tarojs/components';
import { FormLayout } from '@/common';
import { HelloWorld } from '@/components';
import { Button } from 'antd-mobile';
import classnames from 'classnames/bind';

import Weixin from '@/assets/images/weixin.png';

import styles from './index.module.less';

const cx = classnames.bind(styles);

class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <FormLayout
        wrapClassName={cx('demo1-wrap')}
        renderFormWrap={
          <View className={cx('index')}>
            <View>啦啦啦啦啦2</View>
            <HelloWorld />
            <View>
              <Text>Hello, World</Text>
              <Image src={Weixin} />
            </View>
            <View>
              <Text>Hello, World</Text>
              <Image src={Weixin} />
            </View>
            <View>
              <Text>Hello, World</Text>
              <Image src={Weixin} />
            </View>
            <View>
              <Text>Hello, World</Text>
              <Image src={Weixin} />
            </View>
            <View>
              <Text>Hello, World</Text>
              <Image src={Weixin} />
            </View>
          </View>
        }
        renderBtnWrap={
          <Button className={cx('btn')} type="primary">
            primary
          </Button>
        }
      ></FormLayout>
    );
  }
}

export default Index;
