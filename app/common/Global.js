/**
 * Created by Rabbit on 2017/4/20.
 */
import React, { Component } from 'react';
import { Dimensions, StyleSheet, PixelRatio, Platform } from 'react-native';
import FontSize from '../component/TextSize';
import Colors from '../component/Colors';

// 获取屏幕宽度
global.SCREEN_WIDTH = Dimensions.get('window').width;
// 获取屏幕高度
global.SCREEN_HEIGHT = Dimensions.get('window').height;
// 获取屏幕分辨率
global.PixelRatio = PixelRatio.get();
// 系统是iOS
global.iOS = (Platform.OS === 'ios');
// 系统是安卓
global.Android = (Platform.OS === 'android');
// 常用颜色
global.COLORS = Colors;
// 适配字体
global.FONT_SIZE = FontSize;
// TabBarIcon图标大小
global.tabBarIcon = {
    width:35,
    height:35,
}

