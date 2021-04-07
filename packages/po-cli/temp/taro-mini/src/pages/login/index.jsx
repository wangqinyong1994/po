import React, { Component } from 'react';
import { connect } from 'react-redux';
import Taro from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { AtInput } from 'taro-ui';
import classnames from 'classnames/bind';
import JSEncrypt from 'jsencrypt';
import { login } from '@/api';

import { asyncSetToken } from '../../store/actions/user';

import styles from './index.module.less';

const cx = classnames.bind(styles);

const RSA_LOGIN_PUBLIC_KEY =
  '-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAw7vzNDhGmct2020Nq7STebZPVxLVpFAxRbp3Hnmh8FlvQzHBO4VVUZKq/Dn5ZiSH28QGCxT77y3twWqVpCMI9f33fnxbxqNcPcpFFR2q8RSI5ZFOY257zgiO4CyCN/iLHjEReOxYtQkQH1XJSqn3lDrkj13TGqG6cD2XtCSIt8T2zzBFy6ODGoBR0uLg39sprG8KuWlQRm6w3D3XHbyVnLAPPF42lG4S7zBWXKunxolryL1Or6We3Tsmz4WAZh7/qA0gynZWPolJVfPiOhR7fJUq2Wnuo7x1KdjNUebYY1Bfr74rYthTL1hkxuLxGbKIxwiIA4nCjSkyPsTcJ/f84wIDAQAB-----END PUBLIC KEY-----';
const encrypt = new JSEncrypt();
encrypt.setPublicKey(RSA_LOGIN_PUBLIC_KEY);

@connect(
  ({ user }) => ({
    user,
  }),
  dispatch => ({
    asyncSetToken(token) {
      dispatch(asyncSetToken(token));
    },
  }),
)
class Index extends Component {
  constructor() {
    super();
    this.state = {
      identifier: 'wqy1',
      credential: 'Aa123456',
      loading: false,
    };
  }

  changeInput = (name, val) => {
    this.setState({
      [name]: val,
    });
  };

  submit = async () => {
    const { identifier, credential } = this.state;
    try {
      this.setState({
        loading: true,
      });
      const res = await login({
        identifier,
        credential: encrypt.encrypt(credential),
      });
      if (res) {
        this.props.asyncSetToken(res.accessToken);
        Taro.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 2000,
        });
        setTimeout(() => {
          Taro.redirectTo({
            url: '/pages/index/index',
          });
        }, 2000);
      }
    } catch (error) {
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { identifier, credential, loading } = this.state;
    return (
      <View className={cx('page')}>
        <AtInput
          clear
          name="identifier"
          title="账号"
          placeholder="请输入账号"
          value={identifier}
          onChange={val => this.changeInput('identifier', val)}
        ></AtInput>
        <AtInput
          clear
          name="credential"
          title="密码"
          placeholder="请输入密码"
          value={credential}
          onChange={val => this.changeInput('credential', val)}
        ></AtInput>
        <Button
          type="primary"
          loading={loading}
          disabled={loading}
          onClick={() => this.submit()}
        >
          提交
        </Button>
      </View>
    );
  }
}

export default Index;
