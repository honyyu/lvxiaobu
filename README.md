# 旅小布短视频

### *项目托管地址
   [点击此处](https://github.com/Vawter-001/lvxiaobu)查看github开源地址

### *项目介绍

   很荣幸大家能花7分钟看一下**旅小布**的介绍
   
   `旅小布`是做短视频、直播、旅游攻略的平台，平台希望疫情宅家的人都能分享自己家乡的美景、美食、人文等，以刺激消费，应对疫情。
   
   它的创新点在于，它是一个小程序短视频平台
   
   希望**旅小布**能让您眼前一亮
   
   我做了一个SWOT分析，大家可以看一下
   ![旅小布SWOT](https://7261-radar-001-1301012637.tcb.qcloud.la/SWOT.png)
   
#### 参加这次比赛，不仅仅是为了拿T恤，其实更想找个风投
#### 欢迎大家联系：Email:2269223722@qq.com    WeChat:hf2269223722

### *应用场景和目标用户
   
   因为是做的短视频，所以场景和目标用户可以定为所有群体。
	 
   平台第一批用户，打算从微商群体下手。
   因为：
	 
    1、微商群体的社交网络和社会影响力，比普通人大得多；
    2、微商群体更愿意分享到朋友圈和好友；
    3、最近几年微商相比直播带货，风头小了很多。把微商和直播/短视频带货结合起来，效果应该会更好。

### *实现思路
   后端主要是获取数据，前端大量使用swiper组件做出滑动切换的效果
   ![项目目录架构](https://7261-radar-001-1301012637.tcb.qcloud.la/%E5%AE%9E%E7%8E%B0%E6%80%9D%E8%B7%AF.png)

### *架构图
   - - 
   ![架构图](https://7261-radar-001-1301012637.tcb.qcloud.la/%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84.png?)


### *GIF功能概览
   - - 刷视频：上下滑动看视频/视频弹幕
	 - 
   ![看视频](https://7261-radar-001-1301012637.tcb.qcloud.la/%E5%88%B7%E8%A7%86%E9%A2%91.gif)
	 
   -  - 发视频：录制视频或选择视频/视频剪辑/选择视频发布地点
	 - 
   ![发视频](https://7261-radar-001-1301012637.tcb.qcloud.la/%E5%8F%91%E8%A7%86%E9%A2%91.gif)
	 
   - - 发文章：富文本编辑器/发布前预览文章/添加文章标签
	 - 
   ![发布文章](https://7261-radar-001-1301012637.tcb.qcloud.la/%E5%8F%91%E6%96%87%E7%AB%A0.gif)
	 
   - - 聊天：实时聊天/实时通知
	 - 
   ![聊天](https://7261-radar-001-1301012637.tcb.qcloud.la/%E8%81%8A%E5%A4%A9.gif)
	 
   - - 个人主页：查看关注、粉丝列表/编辑个人信息/管理视频、文章
	 - 
   ![个人主页](https://7261-radar-001-1301012637.tcb.qcloud.la/%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5.gif)
	 
   - - 搜索：模糊搜索视频标题、视频地点/文章标题、正文/用户id、昵称、简介
	 - 
   ![搜索](https://7261-radar-001-1301012637.tcb.qcloud.la/%E6%90%9C%E7%B4%A2.gif)
	 
### *体验二维码
   - 无法体验的可以看功能概览的gif图，或查看下面功能介绍中的功能演示视频
	 - 
   ![旅小布体验二维码](https://7261-radar-001-1301012637.tcb.qcloud.la/%E4%BD%93%E9%AA%8C%E7%89%88.png)

#### 下面介绍一下功能

### *功能介绍

   不想看文字介绍，就点击[这里](https://v.qq.com/x/page/z3151cofcll.html)查看视频功能演示

   1. 短视频模块
      1. 上下滑动、可以切换视频，视频使用预加载的方法
	   ```
	   在加载当前视频的时候，也会同时加载此视频的上一个和下一个视频
	   如果全部加载所有推荐视频，太费钱了，
	   之前做测试，自己一个人一天花了2块钱流量
	   如果只加载当前视频，刷视频太卡顿
	   所以，使用此的预加载方法，可以节省大量的流量，并保证流畅
	   ```
      2. 点赞、关注、弹幕，系统会自动提醒对方用户
	   ```
		 弹幕可以改变颜色
		 分享可以分享给好友，或分享到朋友圈（限安卓）
		 ```
	  3. 右上角发视频
         ```
		 可以从相机选择视频或拍摄视频
		 视频需保证在30s之内，50M之内
		 发视频时可以选择地点（在视频展示页，点击地点可以进入地图）
		 视频发布后，会进入后台静默上传，在此期间，用户可以浏览其他内容
		 后台静默上传时，在底部tabbar的“我”的图标上，有一个上传标志
         ```
   2. 文章模块
      1. 点赞、关注、弹幕，系统会自动提醒对方用户
	     ```
		 弹幕可以改变颜色
		 分享可以分享给好友，或分享到朋友圈（限安卓）
		 ```
	  2. 文章撰写
	     ```
		 使用自己封装的富文本编辑器rich-text组件写文章
		 可以勾选文章标签
		 在撰写完成后，可以进行文章预览，以查看排版是否满足要求
		 确认无误后，进行发布即可
		 ```
	  3. 文章编辑
	     ```
		 如果发布后，发现文章有问题，还可以对文章进行编辑，并重新发布
	     ```
	  4. 文章详情页
	     ```
		 详情页使用rich-text组件进行展示
		 点赞、评论、转发、关注，系统会自动提醒对方用户
		 评论可以进行二级评论，转发也支持转发给朋友或朋友圈
	     ```
   3. 用户模块
      1. 用户主页
	     ```
		 用户主页会展示用户的基本信息
		 可以修改自己的简介
		 并展示获赞数、关注数和粉丝数
		 以及视频作品和文章作品
	     ```
	  2. 管理作品
	     ```
		 可以查看自己的作品列表，预览它，删除它
	     ```
	  3. 查看别人的主页
	     ```
		 点击他人头像，可以进入他的主页
		 在他的主页里，可以关注他，或私信他
	     ```
   4. 实时通讯模块
      1. 点击私信进入聊天
	     ```
		 可以在用户主页，点击私信，进入聊天室
		 在聊天室中，任一个用户发了消息，聊天室才算创建成功
		 否则创建不成功，以减少对用户的骚扰
		 聊天室使用自己封装的chatRoom组件
	     ```
	  2. 消息列表进入聊天
	     ```
		 聊天室创建成功后，双方都可以在消息列表中看到聊天记录
		 点击消息列表，可以直接进入对应聊天室
	     ```
   5. 通知模块
      1. 互动通知
	     ```
		 用户点赞、评论/弹幕、关注
		 系统会自动通知给对方用户
		 在消息tabbar上以带数字的红点进行展示未读互动数量
		 在消息页面，对应的互动类型上，以数字展示未读互动数量
	     ```
	  2. 消息通知
	     ```
		 用户给对方用户发消息
		 系统会自动通知给用户
		 在消息tabbar上以带数字的红点进行展示未读消息数量
		 在消息页面，对应的消息列表上，以数字展示未读消息数量
	     ```
	  3. 订阅通知
	     ```
		 如果用户积累了超过8条未读互动消息
		 或积累了超过5条未读用户消息
		 在每天的，10:00、14:00、18:00、22:00
		 定时器会自动给用户发订阅消息
		 提醒用户进入小程序查看、回复，以降低用户流失率
	     ```
   6. 搜索模块
      1. 从首页/攻略页/我 进入
	     ```
		 从首页进入，默认搜索视频
		 从攻略进入，默认搜索文章
		 从我进入，默认搜索用户
		 使用正则表达式，做了简单的模糊搜索
		 高级的模糊搜索暂时无法实现
	     ```
   7. 直播模块
      1. 平民直播
	     ```
		 非常想做直播功能，有了直播模式才算完整
		 但是个人版小程序，根本没有开放直播接口，很遗憾
	     ```

### 以上就是“旅小布”小程序的全部介绍，十分感谢大家的收看

希望**旅小布**能让您眼前一亮

### 部署教程，请查看：[deployment.md](https://github.com/Vawter-001/lvxiaobu/blob/master/deployment.md)

### 开源许可证，请查看：[LICENCE](https://github.com/Vawter-001/lvxiaobu/blob/master/LICENCE)