import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import classnames from 'classnames/bind';

import { queryPage } from '@/api';

import Weixin from '@/assets/images/weixin.png';

import {
  add,
  minus,
  asyncAdd,
  addPersist,
  minusPersist,
  asyncAddPersist,
} from '@/store/actions/counter';

import styles from './index.module.less';

const cx = classnames.bind(styles);

@connect(
  ({ counter, counterPersist }) => ({
    counter,
    counterPersist,
  }),
  dispatch => ({
    add() {
      dispatch(add());
    },
    dec() {
      dispatch(minus());
    },
    asyncAdd() {
      dispatch(asyncAdd());
    },
    addPersist() {
      dispatch(addPersist());
    },
    decPersist() {
      dispatch(minusPersist());
    },
    asyncAddPersist() {
      dispatch(asyncAddPersist());
    },
  }),
)
class Index extends Component {
  state = {};

  componentDidMount() {
    queryPage({
      belongOrgCode: '.',
      pageNum: 1,
      pageSize: 10,
    });
  }

  render() {
    return (
      <View className={cx('index')}>
        <View>哈哈哈哈哈</View>
        <AtButton
          className={cx('add_btn')}
          type="primary"
          onClick={this.props.add}
        >
          +
        </AtButton>
        <AtButton
          className={cx('dec_btn')}
          type="ghost"
          onClick={this.props.dec}
        >
          -
        </AtButton>
        <AtButton
          className={cx('add_btn')}
          type="warning"
          onClick={this.props.asyncAdd}
        >
          async
        </AtButton>
        <AtButton className={cx('add_btn')} onClick={this.props.addPersist}>
          +
        </AtButton>
        <AtButton className={cx('dec_btn')} onClick={this.props.decPersist}>
          -
        </AtButton>
        <AtButton
          className={cx('add_btn')}
          onClick={this.props.asyncAddPersist}
        >
          async
        </AtButton>
        <View>
          <Text>counter: {this.props.counter.num}</Text>
        </View>
        <View>
          <Text>counterPersist: {this.props.counterPersist.num}</Text>
        </View>
        <View>
          <Text>Hello, World</Text>
          <Image src={Weixin} />
        </View>
      </View>
    );
  }
}

export default Index;
