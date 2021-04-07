import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from '@tarojs/components';
import { Button, Picker, List } from 'antd-mobile';
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

const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
];

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
  state = {
    sValue: ['2013', '春'],
  };

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
        <Picker
          data={seasons}
          title="选择季节"
          cascade={false}
          extra="请选择(可选)"
          value={this.state.sValue}
          onChange={v => this.setState({ sValue: v })}
          onOk={v => this.setState({ sValue: v })}
        >
          <List.Item arrow="horizontal">Multiple</List.Item>
        </Picker>
        <Button
          className={cx('add_btn')}
          type="primary"
          onClick={this.props.add}
        >
          +
        </Button>
        <Button className={cx('dec_btn')} type="ghost" onClick={this.props.dec}>
          -
        </Button>
        <Button
          className={cx('add_btn')}
          type="warning"
          onClick={this.props.asyncAdd}
        >
          async
        </Button>
        <Button className={cx('add_btn')} onClick={this.props.addPersist}>
          +
        </Button>
        <Button className={cx('dec_btn')} onClick={this.props.decPersist}>
          -
        </Button>
        <Button className={cx('add_btn')} onClick={this.props.asyncAddPersist}>
          async
        </Button>
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
