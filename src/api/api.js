import request from './request'

// 获取轮播图
export const getBanner = () => request.get('/recommend/banner')

// 获取推荐歌单
export const getDiscList = () => request.get('/recommend/playlist/u')
