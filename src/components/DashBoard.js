import React from 'react';
import AppHeader from '../appHeader/appHeader';
import AppMenu from '../appMenu/appMenu';
import AppFooter from '../appFooter/appFooter';
import AppSetting from '../appSetting/appSetting';

export default function DashBoard() {
  return (
    <div>
    <AppHeader />
      <AppMenu />
      <AppSetting />
      <AppFooter />
    </div>
  )
}
