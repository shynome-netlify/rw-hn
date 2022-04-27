# api 转换, rest api to graphql api

通过后端转换 hn 的 api 来在 rw 使用 hn 的接口, 要不然在专为 graphql 定制的框架中请求 rest api 还是比较麻烦的要自己处理一个请求的各种生命周期

api 转换相关的文件:

```txt
api/src/graphql/hn.sdl.ts
api/src/services/hn
```

# 不足

没有到达完成体, 不足之处:

- [x] 顶部导航应该能切换不同类别的文章的
- [x] 没有实现分页, 页面只取了前30个
- [x] 评论懒加载, 应该滚到特定位置再加载对应评论的
