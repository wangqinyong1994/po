import { get, post } from './request';

export const login = data => post('/api/gridcloud-usercenter/login', data);

export const viewUserInfo = () =>
  post('/api/gridcloud-usercenter/userManage/viewUserInfo');

// 根据父级菜单id及用户token获取mobile菜单树
export const viewUserMobileMenuTree = data =>
  post('/api/gridcloud-usercenter/menuManage/viewUserMobileMenuTree', data);

export const queryPage = data =>
  get('/api/gridcloud-gridcenter/baseInfoAppResource/queryPage', data);
