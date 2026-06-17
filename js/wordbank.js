// 译林版英语单词库
// 3A-4B：教材配套知识清单
// 5A-6B：精校版 TXT（2026-06-17 替换，旧版教材）
// 5A-new / 6A-new：2024 新版教材（已核对）
// 7A-9A：初中新编教材（2026-06-17 录入）
// 含三会、四会词汇，* 拓展词
var wordBank = {
  "3A": {
    label: "三年级上册",
    semester: "上册",
    grade: 3,
    units: [
      {
        unit: "Unit 1 Hello!",
        words: [
          { en: "hello", zh: "哈啰，你好" },
          { en: "hi", zh: "喂，嗨" },
          { en: "Good morning.", zh: "早上好。" },
          { en: "I", zh: "我" },
          { en: "am", zh: "是" },
          { en: "I\'m=I am", zh: "我是" },
          { en: "ah", zh: "啊" },
          { en: "a", zh: "一（个)" },
          { en: "cat", zh: "猫" },
          { en: "Miss", zh: "小姐，女士" },
          { en: "Good afternoon.", zh: "下午好。" },
          { en: "class", zh: "同学们" },
          { en: "goodbye", zh: "再见，再会" },
          { en: "bye", zh: "再见，再会" }
                    ]
      },
      {
        unit: "Unit 2 What's your name?",
        words: [
          { en: "what", zh: "什么" },
          { en: "is", zh: "是" },
          { en: "what\'s=what is", zh: "什么是" },
          { en: "your", zh: "你的，你们的" },
          { en: "name", zh: "名字" },
          { en: "my", zh: "我的" },
          { en: "Nice to meet you!", zh: "很高兴认识你！" },
          { en: "too", zh: "也" },
          { en: "boy", zh: "男孩" },
          { en: "and", zh: "和，与" },
          { en: "girl", zh: "女孩" },
          { en: "Mr(AmE Mr.)", zh: "先生" }
                    ]
      },
      {
        unit: "Unit 3 Are you Su Hai?",
        words: [
          { en: "are", zh: "是" },
          { en: "you", zh: "你，你们" },
          { en: "no", zh: "不，不是" },
          { en: "not", zh: "不，没有" },
          { en: "yes", zh: "是，对" },
          { en: "Here I am!", zh: "我在这里!" },
          { en: "but", zh: "但是" },
          { en: "sorry", zh: "对不起" },
          { en: "we", zh: "我们" },
          { en: "class", zh: "班级" },
          { en: "in", zh: "在…内，在……中" },
          { en: "with", zh: "和……在一起" },
          { en: "right", zh: "正确的" }
                    ]
      },
      {
        unit: "Unit 4 This is my friend",
        words: [
          { en: "this", zh: "这，这个" },
          { en: "friend", zh: "朋友" },
          { en: "she", zh: "她" },
          { en: "she\'s =she is", zh: "她是" },
          { en: "he", zh: "他" },
          { en: "he\'s=he is", zh: "他是" },
          { en: "it", zh: "它" },
          { en: "it\'s=it is", zh: "它是" },
          { en: "good", zh: "好的" },
          { en: "Thank you.", zh: "谢谢你。" },
          { en: "have", zh: "有，持有" },
          { en: "many", zh: "许多" }
                    ]
      },
      {
        unit: "Unit 5 She's my mother",
        words: [
          { en: "mother", zh: "母亲，妈妈" },
          { en: "father", zh: "父亲，爸爸" },
          { en: "dad", zh: "爸爸" },
          { en: "Mum (AmE mom)", zh: "妈妈" },
          { en: "brother", zh: "哥哥，弟弟" },
          { en: "baby", zh: "婴儿" },
          { en: "sister", zh: "姐姐，妹妹" },
          { en: "Good evening.", zh: "晚上好。" },
          { en: "look", zh: "看，瞧" },
          { en: "the", zh: "这个，这些，那个，那些" },
          { en: "who", zh: "谁，什么人" },
          { en: "who\'s =who is", zh: "谁是" },
          { en: "great", zh: "好极的，好,棒的" },
          { en: "come", zh: "来" },
          { en: "meet", zh: "相识，结识，被引见介绍(给某人)" },
          { en: "family", zh: "家，家庭" },
          { en: "say", zh: "说" }
                    ]
      },
      {
        unit: "Unit 6 Is he your grandpa?",
        words: [
          { en: "grandpa (grandfather)", zh: "祖父，外祖父" },
          { en: "uncle", zh: "舅父，叔父，伯父，姑父，姨父" },
          { en: "aunt", zh: "姑母，姨母，伯母，婶母，舅母" },
          { en: "grandmother (grandma)", zh: "祖母，外祖母" },
          { en: "cousin", zh: "堂兄(弟)，堂姐(妹)，表兄(弟)，表姐(妹)" },
          { en: "cool", zh: "妙极的，酷的" },
          { en: "me", zh: "我" },
          { en: "big", zh: "大的" },
          { en: "isn\'t=is not", zh: "不是" },
          { en: "it", zh: "指婴儿，尤指性别不详者" },
          { en: "happy", zh: "感到快乐的，高兴的" },
          { en: "love", zh: "爱，热爱" }
                    ]
      },
      {
        unit: "Unit 7 Happy Birthday!",
        words: [
          { en: "Happy Birthday!", zh: "生日快乐!" },
          { en: "one", zh: "一" },
          { en: "two", zh: "二" },
          { en: "three", zh: "三" },
          { en: "four", zh: "四" },
          { en: "five", zh: "五" },
          { en: "six", zh: "六" },
          { en: "seven", zh: "七" },
          { en: "eight", zh: "八" },
          { en: "nine", zh: "九" },
          { en: "ten", zh: "十" },
          { en: "now", zh: "现在，此刻" },
          { en: "want", zh: "要，想要" },
          { en: "car", zh: "小汽车，轿车" },
          { en: "book", zh: "书" },
          { en: "ball", zh: "球" },
          { en: "cake", zh: "蛋糕，糕饼" },
          { en: "How lovely!", zh: "真可爱!" },
          { en: "Can I help you?", zh: "你要买什么?" },
          { en: "Yes, please", zh: "好的，谢谢。" },
          { en: "some", zh: "一些" },
          { en: "toy", zh: "玩具" },
          { en: "for", zh: "给，对，供" },
          { en: "OK", zh: "对，好，行" },
          { en: "How old are you?", zh: "你多大了?" },
          { en: "please", zh: "请" },
          { en: "here", zh: "到这里，在这里" },
          { en: "love", zh: "喜好，喜爱" },
          { en: "Here you are.", zh: "给你。" },
          { en: "You\'re welcome.", zh: "别客气。不用谢。" },
          { en: "thanks", zh: "谢谢" }
                    ]
      },
      {
        unit: "Unit 8 I can do this for you",
        words: [
          { en: "can", zh: "能，会" },
          { en: "do", zh: "做，干，办(某事)" },
          { en: "for", zh: "为了" },
          { en: "clean", zh: "使......干净，打扫" },
          { en: "table", zh: "桌子" },
          { en: "draw", zh: "画，描画" },
          { en: "sing", zh: "唱(歌)，演唱" },
          { en: "take pictures", zh: "拍照" },
          { en: "dance", zh: "跳舞" },
          { en: "Are you OK?", zh: "你没事吧?" },
          { en: "picture", zh: "图画，绘画；照片" },
          { en: "of", zh: "属于(某人)，关于(某人)" },
          { en: "on", zh: "在(某一天)" },
          { en: "child (pl.children)", zh: "儿童，小孩" }
                    ]
      }
                    ]
  },
  "3B": {
    label: "三年级下册",
    semester: "下册",
    grade: 3,
    units: [
      {
        unit: "Unit 1 School things",
        words: [
          { en: "school", zh: "学校" },
          { en: "pen", zh: "笔，钢笔" },
          { en: "pencil", zh: "铅笔" },
          { en: "ruler", zh: "直尺" },
          { en: "rubber", zh: "橡皮" },
          { en: "schoolbag", zh: "书包" },
          { en: "pencil case", zh: "铅笔盒，铅笔袋" },
          { en: "that", zh: "那，那个" },
          { en: "put", zh: "放，安置" },
          { en: "again", zh: "再一次，又一次" },
          { en: "long", zh: "长的" },
          { en: "Good idea!", zh: "好主意！" }
                    ]
      },
      {
        unit: "Unit 2 Clean our classroom",
        words: [
          { en: "our", zh: "我们的" },
          { en: "classroom", zh: "教室，课堂" },
          { en: "close", zh: "关，关闭" },
          { en: "window", zh: "窗，窗户" },
          { en: "blackboard", zh: "黑板" },
          { en: "chair", zh: "椅子" },
          { en: "sweep", zh: "打扫，清扫" },
          { en: "floor", zh: "地板，地面" },
          { en: "let", zh: "让" },
          { en: "us", zh: "我们" },
          { en: "desk", zh: "课桌，书桌" },
          { en: "dirty", zh: "肮脏的" },
          { en: "Me too!", zh: "我也是!" },
          { en: "All right.", zh: "好的。" },
          { en: "clean", zh: "洁净的，干净的" },
          { en: "keep", zh: "(使)保持，处于" }
                    ]
      },
      {
        unit: "Unit 3 School rules",
        words: [
          { en: "rule", zh: "规则，规章" },
          { en: "library", zh: "图书馆" },
          { en: "talk", zh: "说话，讲话" },
          { en: "eat", zh: "吃" },
          { en: "run", zh: "跑，奔跑" },
          { en: "Mrs (AmE Mrs.)", zh: "太太，夫人" },
          { en: "sit down", zh: "坐下" },
          { en: "late", zh: "迟的，晚的" },
          { en: "look out of", zh: "朝……外看" },
          { en: "on", zh: "在..….上面" },
          { en: "fun", zh: "有趣的" },
          { en: "quiet", zh: "安静的" },
          { en: "Would you like ... ?", zh: "你想要……吗?" },
          { en: "look at", zh: "看，瞧" },
          { en: "That\'s all right.", zh: "不要紧。" }
                    ]
      },
      {
        unit: "Unit 4 Have fun after class",
        words: [
          { en: "have fun", zh: "玩得高兴" },
          { en: "after class", zh: "课后" },
          { en: "behind", zh: "在……的后而" },
          { en: "tree", zh: "树，树木" },
          { en: "by", zh: "在.…旁边" },
          { en: "under", zh: "在……下面" },
          { en: "flower", zh: "花，花朵" },
          { en: "play", zh: "玩耍" },
          { en: "go", zh: "开始;移动" },
          { en: "plane", zh: "飞机" },
          { en: "very", zh: "很，非常" },
          { en: "far", zh: "远" },
          { en: "where", zh: "在哪里，到哪里" },
          { en: "find", zh: "找到" },
          { en: "over", zh: "结束" },
          { en: "student", zh: "学生" },
          { en: "lovely", zh: "极好的;美丽的" },
          { en: "day", zh: "白天" },
          { en: "today", zh: "今天" },
          { en: "garden", zh: "花园，园圃" },
          { en: "beautiful", zh: "美丽的，美好的" },
          { en: "duck", zh: "鸭子" }
                    ]
      },
      {
        unit: "Unit 5 Fruit",
        words: [
          { en: "fruit", zh: "水果" },
          { en: "orange", zh: "橙子、柑橘" },
          { en: "grape", zh: "葡萄" },
          { en: "banana", zh: "香蕉" },
          { en: "apple", zh: "苹果" },
          { en: "mango", zh: "芒果" },
          { en: "share", zh: "分享，共享" },
          { en: "like", zh: "喜欢，喜爱" },
          { en: "they", zh: "它们，他们，她们" },
          { en: "make", zh: "做，制造" },
          { en: "an", zh: "一(个)" },
          { en: "What about you?", zh: "你呢?" },
          { en: "How nice!", zh: "真好看!" },
          { en: "good", zh: "有用，有好处" }
                    ]
      },
      {
        unit: "Unit 6 On the farm",
        words: [
          { en: "farm", zh: "农场" },
          { en: "rabbit", zh: "兔子" },
          { en: "cow", zh: "奶牛" },
          { en: "sheep", zh: "羊，绵羊" },
          { en: "chicken", zh: "鸡" },
          { en: "carrot", zh: "胡萝卜" },
          { en: "pig", zh: "猪" },
          { en: "Welcome to ...", zh: "欢迎米到……" },
          { en: "home", zh: "家，住所" },
          { en: "these", zh: "这些" },
          { en: "those", zh: "那些" },
          { en: "help", zh: "帮助、协助" },
          { en: "cute", zh: "可爱的" },
          { en: "move", zh: "移动" }
                    ]
      },
      {
        unit: "Unit 7 Animals",
        words: [
          { en: "animal", zh: "动物" },
          { en: "bear", zh: "熊" },
          { en: "lion", zh: "狮子" },
          { en: "monkey", zh: "猴子" },
          { en: "tiger", zh: "老虎" },
          { en: "panda", zh: "大熊猫" },
          { en: "elephant", zh: "大象" },
          { en: "fish", zh: "鱼;鱼肉" },
          { en: "feed", zh: "给食物，喂养" },
          { en: "zoo", zh: "动物园" },
          { en: "go", zh: "去，走" },
          { en: "see", zh: "看，见" }
                    ]
      },
      {
        unit: "Unit 8 Colours",
        words: [
          { en: "colour (AmE color)", zh: "颜色，色彩" },
          { en: "yellow", zh: "黄色的" },
          { en: "blue", zh: "蓝色的" },
          { en: "red", zh: "红色的" },
          { en: "orange", zh: "橙红色的，橘黄色的" },
          { en: "pink", zh: "粉红色的" },
          { en: "green", zh: "绿色的" },
          { en: "brown", zh: "棕色的" },
          { en: "black", zh: "黑色的" },
          { en: "white", zh: "白色的" },
          { en: "sure", zh: "（表示同意）当然" },
          { en: "What colour?", zh: "什么颜色?" },
          { en: "little", zh: "小的" },
          { en: "What colour ...?……", zh: "是什么颜色的?" },
          { en: "How come?", zh: "怎么回事?" }
                    ]
      }
                    ]
  },  "4A": {
    "label": "四年级上册",
    "semester": "上册",
    "grade": 4,
    "units": [
        {
                "unit": "Unit 1",
                "words": [
                        {
                                "en": "breakfast",
                                "zh": "早餐，早饭"
                        },
                        {
                                "en": "lunch",
                                "zh": "午餐，午饭"
                        },
                        {
                                "en": "dinner",
                                "zh": "正餐（常指晚餐）"
                        },
                        {
                                "en": "subject",
                                "zh": "科目"
                        },
                        {
                                "en": "Chinese",
                                "zh": "语文（课）；中国的"
                        },
                        {
                                "en": "English",
                                "zh": "英语（课）；英语的"
                        },
                        {
                                "en": "Maths (AmE math)",
                                "zh": "数学（课）"
                        },
                        {
                                "en": "PE",
                                "zh": "体育（课）"
                        },
                        {
                                "en": "Art",
                                "zh": "美术（课）"
                        },
                        {
                                "en": "Science",
                                "zh": "科学（课）"
                        },
                        {
                                "en": "Music",
                                "zh": "音乐（课）"
                        },
                        {
                                "en": "timetable",
                                "zh": "课程表；时间表"
                        },
                        {
                                "en": "interesting",
                                "zh": "有趣的，有吸引力的"
                        },
                        {
                                "en": "learn about",
                                "zh": "学习"
                        },
                        {
                                "en": "culture",
                                "zh": "文化，文明"
                        },
                        {
                                "en": "week",
                                "zh": "周，星期"
                        },
                        {
                                "en": "class",
                                "zh": "课"
                        },
                        {
                                "en": "have lessons",
                                "zh": "上课"
                        },
                        {
                                "en": "sport",
                                "zh": "体育运动"
                        },
                        {
                                "en": "playground",
                                "zh": "操场"
                        },
                        {
                                "en": "new",
                                "zh": "新的"
                        },
                        {
                                "en": "also",
                                "zh": "也"
                        },
                        {
                                "en": "number",
                                "zh": "数字"
                        },
                        {
                                "en": "best",
                                "zh": "最高程度地"
                        },
                        {
                                "en": "mouse (pl. mice)",
                                "zh": "鼠标；老鼠"
                        }
                ]
        },
        {
                "unit": "Unit 2",
                "words": [
                        {
                                "en": "o'clock",
                                "zh": "（表示整点）……点钟"
                        },
                        {
                                "en": "What time is it?",
                                "zh": "几点了？"
                        },
                        {
                                "en": "hurry up",
                                "zh": "赶快"
                        },
                        {
                                "en": "I'm coming!",
                                "zh": "我来了！"
                        },
                        {
                                "en": "Come on!",
                                "zh": "赶快！加把劲！"
                        },
                        {
                                "en": "It's time for",
                                "zh": "是……的时候了"
                        },
                        {
                                "en": "It's time to",
                                "zh": "到……的时间了"
                        },
                        {
                                "en": "get up",
                                "zh": "起床"
                        },
                        {
                                "en": "early",
                                "zh": "提早，提前"
                        },
                        {
                                "en": "when",
                                "zh": "什么时候"
                        },
                        {
                                "en": "every",
                                "zh": "每一，每个"
                        },
                        {
                                "en": "today",
                                "zh": "今天"
                        },
                        {
                                "en": "wash",
                                "zh": "洗"
                        },
                        {
                                "en": "face",
                                "zh": "脸，面孔"
                        },
                        {
                                "en": "have",
                                "zh": "吃，喝"
                        },
                        {
                                "en": "go to bed",
                                "zh": "上床睡觉"
                        },
                        {
                                "en": "Good night!",
                                "zh": "晚安！"
                        },
                        {
                                "en": "bed",
                                "zh": "床"
                        },
                        {
                                "en": "be good at",
                                "zh": "擅长"
                        },
                        {
                                "en": "Welcome back to",
                                "zh": "欢迎回到"
                        }
                ]
        },
        {
                "unit": "Unit 3",
                "words": [
                        {
                                "en": "What day is it today?",
                                "zh": "今天星期几？"
                        },
                        {
                                "en": "Sunday",
                                "zh": "星期日"
                        },
                        {
                                "en": "Monday",
                                "zh": "星期一"
                        },
                        {
                                "en": "Tuesday",
                                "zh": "星期二"
                        },
                        {
                                "en": "Wednesday",
                                "zh": "星期三"
                        },
                        {
                                "en": "Thursday",
                                "zh": "星期四"
                        },
                        {
                                "en": "Friday",
                                "zh": "星期五"
                        },
                        {
                                "en": "Saturday",
                                "zh": "星期六"
                        },
                        {
                                "en": "day",
                                "zh": "天，一日"
                        },
                        {
                                "en": "all",
                                "zh": "全部，所有"
                        },
                        {
                                "en": "up",
                                "zh": "向上"
                        },
                        {
                                "en": "so",
                                "zh": "（表示程度）这么，那么"
                        },
                        {
                                "en": "at",
                                "zh": "在（某时间）"
                        }
                ]
        },
        {
                "unit": "Unit 4",
                "words": [
                        {
                                "en": "weather",
                                "zh": "天气"
                        },
                        {
                                "en": "cloudy",
                                "zh": "多云的，阴天的"
                        },
                        {
                                "en": "sunny",
                                "zh": "晴朗的"
                        },
                        {
                                "en": "rainy",
                                "zh": "阴雨的，多雨的"
                        },
                        {
                                "en": "windy",
                                "zh": "多风的，风大的"
                        },
                        {
                                "en": "warm",
                                "zh": "温暖的，暖和的"
                        },
                        {
                                "en": "cool",
                                "zh": "凉的，凉爽的"
                        },
                        {
                                "en": "hot",
                                "zh": "温度高的，热的"
                        },
                        {
                                "en": "cold",
                                "zh": "寒冷的，冷的"
                        },
                        {
                                "en": "What's the weather like today?",
                                "zh": "今天天气怎么样？"
                        },
                        {
                                "en": "tomorrow",
                                "zh": "明天；在明天"
                        },
                        {
                                "en": "See you tomorrow!",
                                "zh": "明天见！"
                        }
                ]
        },
        {
                "unit": "Unit 5",
                "words": [
                        {
                                "en": "season",
                                "zh": "季节"
                        },
                        {
                                "en": "spring",
                                "zh": "春天，春季"
                        },
                        {
                                "en": "summer",
                                "zh": "夏天，夏季"
                        },
                        {
                                "en": "autumn",
                                "zh": "秋天，秋季"
                        },
                        {
                                "en": "winter",
                                "zh": "冬天，冬季"
                        },
                        {
                                "en": "go boating",
                                "zh": "去划船"
                        },
                        {
                                "en": "go skating",
                                "zh": "去滑冰"
                        },
                        {
                                "en": "go swimming",
                                "zh": "去游泳"
                        },
                        {
                                "en": "go climbing",
                                "zh": "去爬山"
                        },
                        {
                                "en": "ice cream",
                                "zh": "冰淇淋"
                        },
                        {
                                "en": "different",
                                "zh": "不同的，有区别的"
                        },
                        {
                                "en": "same",
                                "zh": "相同的"
                        },
                        {
                                "en": "dancing",
                                "zh": "跳舞，舞蹈"
                        },
                        {
                                "en": "park",
                                "zh": "公园"
                        },
                        {
                                "en": "cinema",
                                "zh": "电影院"
                        },
                        {
                                "en": "after school",
                                "zh": "放学后"
                        },
                        {
                                "en": "walk",
                                "zh": "走，散步"
                        },
                        {
                                "en": "worry",
                                "zh": "担心"
                        },
                        {
                                "en": "free",
                                "zh": "空闲的"
                        },
                        {
                                "en": "money",
                                "zh": "钱"
                        }
                ]
        },
        {
                "unit": "Unit 6",
                "words": [
                        {
                                "en": "football",
                                "zh": "足球运动；足球"
                        },
                        {
                                "en": "basketball",
                                "zh": "篮球运动；篮球"
                        },
                        {
                                "en": "ping-pong",
                                "zh": "乒乓球运动；乒乓球"
                        },
                        {
                                "en": "fly a kite",
                                "zh": "放风筝"
                        },
                        {
                                "en": "Have a go!",
                                "zh": "试一试！"
                        },
                        {
                                "en": "well",
                                "zh": "好"
                        },
                        {
                                "en": "Well played!",
                                "zh": "好球！"
                        },
                        {
                                "en": "great",
                                "zh": "非常的，好极了"
                        },
                        {
                                "en": "meet",
                                "zh": "会面，集合"
                        },
                        {
                                "en": "play",
                                "zh": "玩，打（球）"
                        },
                        {
                                "en": "dog",
                                "zh": "狗"
                        },
                        {
                                "en": "umbrella",
                                "zh": "雨伞"
                        },
                        {
                                "en": "oops",
                                "zh": "哎哟"
                        },
                        {
                                "en": "there",
                                "zh": "到那里，在那里"
                        }
                ]
        },
        {
                "unit": "Unit 7",
                "words": [
                        {
                                "en": "hair",
                                "zh": "头发"
                        },
                        {
                                "en": "eye",
                                "zh": "眼睛"
                        },
                        {
                                "en": "ear",
                                "zh": "耳朵"
                        },
                        {
                                "en": "nose",
                                "zh": "鼻子"
                        },
                        {
                                "en": "mouth",
                                "zh": "嘴"
                        },
                        {
                                "en": "arm",
                                "zh": "手臂"
                        },
                        {
                                "en": "leg",
                                "zh": "腿"
                        },
                        {
                                "en": "bird",
                                "zh": "鸟"
                        },
                        {
                                "en": "robot",
                                "zh": "机器人"
                        },
                        {
                                "en": "his",
                                "zh": "他的"
                        },
                        {
                                "en": "her",
                                "zh": "她的"
                        },
                        {
                                "en": "tall",
                                "zh": "高的"
                        },
                        {
                                "en": "small",
                                "zh": "小的"
                        },
                        {
                                "en": "back",
                                "zh": "回原处"
                        },
                        {
                                "en": "show",
                                "zh": "展示，演出"
                        },
                        {
                                "en": "holiday",
                                "zh": "假日，假期"
                        },
                        {
                                "en": "puppet",
                                "zh": "木偶"
                        },
                        {
                                "en": "plant",
                                "zh": "栽种，种植"
                        },
                        {
                                "en": "pick",
                                "zh": "采摘"
                        },
                        {
                                "en": "snow",
                                "zh": "雪，积雪"
                        },
                        {
                                "en": "bring",
                                "zh": "带来"
                        },
                        {
                                "en": "lots of",
                                "zh": "许多，大量"
                        }
                ]
        },
        {
                "unit": "Unit 8",
                "words": [
                        {
                                "en": "clothes",
                                "zh": "衣服"
                        },
                        {
                                "en": "look",
                                "zh": "看来好像，显得"
                        },
                        {
                                "en": "cap",
                                "zh": "（尤指有帽舌的）便帽"
                        },
                        {
                                "en": "coat",
                                "zh": "外套，外衣"
                        },
                        {
                                "en": "dress",
                                "zh": "连衣裙"
                        },
                        {
                                "en": "shirt",
                                "zh": "（男式）衬衫"
                        },
                        {
                                "en": "trousers",
                                "zh": "裤子"
                        },
                        {
                                "en": "sunglasses",
                                "zh": "太阳镜"
                        },
                        {
                                "en": "wear",
                                "zh": "穿着，戴着"
                        },
                        {
                                "en": "whose",
                                "zh": "谁的"
                        },
                        {
                                "en": "because",
                                "zh": "因为"
                        },
                        {
                                "en": "bright",
                                "zh": "聪明的；明亮的"
                        },
                        {
                                "en": "why",
                                "zh": "为什么"
                        },
                        {
                                "en": "skirt",
                                "zh": "裙子"
                        },
                        {
                                "en": "eleven",
                                "zh": "十一"
                        },
                        {
                                "en": "fifteen",
                                "zh": "十五"
                        },
                        {
                                "en": "twenty",
                                "zh": "二十"
                        },
                        {
                                "en": "thirty",
                                "zh": "三十"
                        },
                        {
                                "en": "first",
                                "zh": "首先，第一"
                        },
                        {
                                "en": "read",
                                "zh": "阅读"
                        },
                        {
                                "en": "story",
                                "zh": "故事"
                        }
                ]
        }
]
  },
  "4B": {
    "label": "四年级下册",
    "semester": "下册",
    "grade": 4,
    "units": [
        {
                "unit": "Unit 1",
                "words": [
                        {
                                "en": "become",
                                "zh": "变成, 变为"
                        },
                        {
                                "en": "weak",
                                "zh": "虚弱的,无力的"
                        },
                        {
                                "en": "strong",
                                "zh": "强壮的"
                        },
                        {
                                "en": "there are",
                                "zh": "有"
                        },
                        {
                                "en": "them",
                                "zh": "它们,他们,她们"
                        },
                        {
                                "en": "party",
                                "zh": "聚会，联欢会"
                        },
                        {
                                "en": "just like",
                                "zh": "就像"
                        },
                        {
                                "en": "friendship",
                                "zh": "友谊"
                        },
                        {
                                "en": "forest",
                                "zh": "森林"
                        },
                        {
                                "en": "thin",
                                "zh": "瘦的"
                        },
                        {
                                "en": "one day",
                                "zh": "(过去)某一天；有朝一日"
                        },
                        {
                                "en": "angry",
                                "zh": "发怒的，生气的"
                        },
                        {
                                "en": "back",
                                "zh": "背部"
                        },
                        {
                                "en": "Please!",
                                "zh": "求求你！"
                        },
                        {
                                "en": "Go away!",
                                "zh": "走开！"
                        },
                        {
                                "en": "net",
                                "zh": "网"
                        },
                        {
                                "en": "sad",
                                "zh": "悲哀的，难过的"
                        },
                        {
                                "en": "Help!",
                                "zh": "救命啊！"
                        },
                        {
                                "en": "hole",
                                "zh": "洞"
                        },
                        {
                                "en": "there is",
                                "zh": "有"
                        },
                        {
                                "en": "kind",
                                "zh": "友好的，体贴的"
                        }
                ]
        },
        {
                "unit": "Unit 2",
                "words": [
                        {
                                "en": "other",
                                "zh": "另外，其他"
                        },
                        {
                                "en": "room",
                                "zh": "房间"
                        },
                        {
                                "en": "computer",
                                "zh": "计算机，电脑"
                        },
                        {
                                "en": "swing",
                                "zh": "秋千"
                        },
                        {
                                "en": "playground",
                                "zh": "游戏场"
                        },
                        {
                                "en": "have a look",
                                "zh": "看一看"
                        },
                        {
                                "en": "go",
                                "zh": "开始"
                        },
                        {
                                "en": "feel",
                                "zh": "觉得, 感到"
                        },
                        {
                                "en": "show ... around",
                                "zh": "带 参观"
                        },
                        {
                                "en": "take",
                                "zh": "携带, 拿走"
                        },
                        {
                                "en": "first",
                                "zh": "第一"
                        },
                        {
                                "en": "floor",
                                "zh": "楼层"
                        },
                        {
                                "en": "any",
                                "zh": "任何的，任一的"
                        },
                        {
                                "en": "third",
                                "zh": "第三"
                        },
                        {
                                "en": "piano",
                                "zh": "钢琴"
                        },
                        {
                                "en": "second",
                                "zh": "第二"
                        },
                        {
                                "en": "You're welcome.",
                                "zh": "别客气。不用谢。"
                        }
                ]
        },
        {
                "unit": "Unit 3",
                "words": [
                        {
                                "en": "road",
                                "zh": "道路，公路"
                        },
                        {
                                "en": "safety",
                                "zh": "安全，平安"
                        },
                        {
                                "en": "bus",
                                "zh": "公共汽车，巴士"
                        },
                        {
                                "en": "traffic light",
                                "zh": "交通信号灯"
                        },
                        {
                                "en": "take",
                                "zh": "乘坐，搭乘"
                        },
                        {
                                "en": "busy",
                                "zh": "人来车往的"
                        },
                        {
                                "en": "stay",
                                "zh": "保持"
                        },
                        {
                                "en": "close",
                                "zh": "接近，靠近"
                        },
                        {
                                "en": "good",
                                "zh": "乖的"
                        },
                        {
                                "en": "cross",
                                "zh": "穿越，横过"
                        },
                        {
                                "en": "stop",
                                "zh": "停止，停下"
                        },
                        {
                                "en": "wait",
                                "zh": "等候，等待"
                        },
                        {
                                "en": "left",
                                "zh": "向左边"
                        },
                        {
                                "en": "right",
                                "zh": "向右边"
                        },
                        {
                                "en": "safe",
                                "zh": "安全的"
                        }
                ]
        },
        {
                "unit": "Unit 4",
                "words": [
                        {
                                "en": "care about",
                                "zh": "关心，关怀"
                        },
                        {
                                "en": "hungry",
                                "zh": "感到饿的"
                        },
                        {
                                "en": "thirsty",
                                "zh": "渴的, 口渴的"
                        },
                        {
                                "en": "ill",
                                "zh": "不舒服，有病"
                        },
                        {
                                "en": "tired",
                                "zh": "疲倦的,疲劳的"
                        },
                        {
                                "en": "hot",
                                "zh": "觉得闷热"
                        },
                        {
                                "en": "water",
                                "zh": "水"
                        },
                        {
                                "en": "have a rest",
                                "zh": "休息"
                        },
                        {
                                "en": "What's the matter?",
                                "zh": "怎么了?"
                        },
                        {
                                "en": "home",
                                "zh": "到家, 在家"
                        },
                        {
                                "en": "take",
                                "zh": "拿，接"
                        },
                        {
                                "en": "bag",
                                "zh": "包，袋"
                        },
                        {
                                "en": "bread",
                                "zh": "面包"
                        },
                        {
                                "en": "dear",
                                "zh": "亲爱的"
                        },
                        {
                                "en": "set the table",
                                "zh": "摆放餐具"
                        }
                ]
        },
        {
                "unit": "Unit 5",
                "words": [
                        {
                                "en": "out",
                                "zh": "外出"
                        },
                        {
                                "en": "fried rice",
                                "zh": "炒饭"
                        },
                        {
                                "en": "spring roll",
                                "zh": "春卷"
                        },
                        {
                                "en": "noodle",
                                "zh": "面条"
                        },
                        {
                                "en": "tea",
                                "zh": "茶"
                        },
                        {
                                "en": "juice",
                                "zh": "果汁"
                        },
                        {
                                "en": "menu",
                                "zh": "菜单"
                        },
                        {
                                "en": "What would you like?",
                                "zh": "你想要什么?"
                        },
                        {
                                "en": "fish and chips",
                                "zh": "炸鱼薯条"
                        },
                        {
                                "en": "sandwich",
                                "zh": "三明治"
                        },
                        {
                                "en": "hot dog",
                                "zh": "热狗(香肠面包)"
                        },
                        {
                                "en": "how",
                                "zh": "怎样,如何"
                        },
                        {
                                "en": "delicious",
                                "zh": "美味的, 可口的"
                        },
                        {
                                "en": "a glass of",
                                "zh": "一杯"
                        },
                        {
                                "en": "Anything else?",
                                "zh": "还要其他东西吗?"
                        },
                        {
                                "en": "a cup of",
                                "zh": "一杯"
                        },
                        {
                                "en": "food",
                                "zh": "食物，食品"
                        },
                        {
                                "en": "hot pot",
                                "zh": "火锅"
                        },
                        {
                                "en": "next time",
                                "zh": "下次"
                        },
                        {
                                "en": "takeaway box",
                                "zh": "打包盒"
                        }
                ]
        },
        {
                "unit": "Unit 6",
                "words": [
                        {
                                "en": "job",
                                "zh": "工作,职业"
                        },
                        {
                                "en": "driver",
                                "zh": "驾驶员，司机"
                        },
                        {
                                "en": "nurse",
                                "zh": "护士"
                        },
                        {
                                "en": "worker",
                                "zh": "工人"
                        },
                        {
                                "en": "teacher",
                                "zh": "教师"
                        },
                        {
                                "en": "doctor",
                                "zh": "医生"
                        },
                        {
                                "en": "farmer",
                                "zh": "农民"
                        },
                        {
                                "en": "cook",
                                "zh": "厨师;烹饪,烹调"
                        },
                        {
                                "en": "policeman",
                                "zh": "(男)警察"
                        },
                        {
                                "en": "hospital",
                                "zh": "医院"
                        },
                        {
                                "en": "policewoman",
                                "zh": "女警察"
                        },
                        {
                                "en": "parent",
                                "zh": "父亲，母亲"
                        },
                        {
                                "en": "work",
                                "zh": "工作"
                        },
                        {
                                "en": "sick",
                                "zh": "生病的,有病的"
                        },
                        {
                                "en": "people",
                                "zh": "人, 人们"
                        },
                        {
                                "en": "busy",
                                "zh": "忙碌的"
                        },
                        {
                                "en": "taxi",
                                "zh": "出租汽车，的士"
                        },
                        {
                                "en": "train",
                                "zh": "火车"
                        },
                        {
                                "en": "up",
                                "zh": "向上"
                        },
                        {
                                "en": "place",
                                "zh": "地方"
                        },
                        {
                                "en": "way",
                                "zh": "方法,方式"
                        }
                ]
        },
        {
                "unit": "Unit 7",
                "words": [
                        {
                                "en": "chore",
                                "zh": "日常事务"
                        },
                        {
                                "en": "dish",
                                "zh": "碗，碟"
                        },
                        {
                                "en": "water",
                                "zh": "给……浇水"
                        },
                        {
                                "en": "make the bed",
                                "zh": "铺床"
                        },
                        {
                                "en": "what",
                                "zh": "多么，真，太"
                        },
                        {
                                "en": "house",
                                "zh": "房屋，房子"
                        },
                        {
                                "en": "Good job!",
                                "zh": "干得漂亮!"
                        },
                        {
                                "en": "part of",
                                "zh": "……的一部分"
                        },
                        {
                                "en": "half",
                                "zh": "一半，半"
                        },
                        {
                                "en": "past",
                                "zh": "晚于, 在……之后"
                        },
                        {
                                "en": "weekend",
                                "zh": "周末"
                        }
                ]
        },
        {
                "unit": "Unit 8",
                "words": [
                        {
                                "en": "kitchen",
                                "zh": "厨房"
                        },
                        {
                                "en": "milk",
                                "zh": "牛奶"
                        },
                        {
                                "en": "tomato",
                                "zh": "番茄，西红柿"
                        },
                        {
                                "en": "potato",
                                "zh": "马铃薯，土豆"
                        },
                        {
                                "en": "chicken",
                                "zh": "鸡肉"
                        },
                        {
                                "en": "egg",
                                "zh": "鸡蛋"
                        },
                        {
                                "en": "birthday",
                                "zh": "生日"
                        },
                        {
                                "en": "soup",
                                "zh": "汤"
                        },
                        {
                                "en": "him",
                                "zh": "他"
                        },
                        {
                                "en": "really",
                                "zh": "十分，非常"
                        },
                        {
                                "en": "careful",
                                "zh": "小心，谨慎"
                        },
                        {
                                "en": "cut",
                                "zh": "切，割"
                        },
                        {
                                "en": "meat",
                                "zh": "肉"
                        },
                        {
                                "en": "I can't wait!",
                                "zh": "我等不及了！"
                        },
                        {
                                "en": "get",
                                "zh": "去取"
                        }
                ]
        }
]
  },
      "5A": {
    label: "五年级上册",
    semester: "上册",
    grade: 5,
    units: [
      {
        unit: "Unit 1",
        words: [
          { en: "bear", zh: "熊" },
          { en: "forest", zh: "森林" },
          { en: "there", zh: "(与be连用) 有" },
          { en: "house", zh: "房子" },
          { en: "soup", zh: "汤" },
          { en: "just right", zh: "正合适，正好" },
          { en: "room", zh: "房间" },
          { en: "hard", zh: "硬的" },
          { en: "soft", zh: "柔软的" },
          { en: "afraid", zh: "害怕的" },
          { en: "in front of", zh: "在……前面" },
          { en: "her", zh: "她" },
          { en: "Help!", zh: "救命啊！" },
          { en: "beside", zh: "在……旁边" },
          { en: "between", zh: "在……中间" },
          { en: "China", zh: "中国" },
          { en: "really", zh: "真的" },
          { en: "then", zh: "然后" },
          { en: "find", zh: "找到，发现" },
          { en: "their", zh: "他们的；她们的；它们的" },
        ]
      },
      {
        unit: "Unit 2",
        words: [
          { en: "student", zh: "学生" },
          { en: "show... around", zh: "带……参观" },
          { en: "classroom", zh: "教室" },
          { en: "second", zh: "第二" },
          { en: "floor", zh: "楼层" },
          { en: "computer", zh: "电脑" },
          { en: "third", zh: "第三" },
          { en: "first", zh: "第一；首先" },
          { en: "swing", zh: "秋千" },
          { en: "push", zh: "推" },
          { en: "heavy", zh: "重的，沉的" },
          { en: "stop", zh: "停下，停止" },
          { en: "high", zh: "高的" },
          { en: "great", zh: "很多的，极大的" },
        ]
      },
      {
        unit: "Unit 3",
        words: [
          { en: "one ..., the other ...", zh: "一个……，另一个……" },
          { en: "body", zh: "身体" },
          { en: "no", zh: "没有，无" },
          { en: "leg", zh: "腿" },
          { en: "or", zh: "也不，也没有" },
          { en: "arm", zh: "手臂" },
          { en: "wing", zh: "翅膀" },
          { en: "foot", zh: "脚，足" },
          { en: "rabbit", zh: "兔子" },
          { en: "give", zh: "给" },
          { en: "finger", zh: "手指" },
        ]
      },
      {
        unit: "Unit 4",
        words: [
          { en: "hobby", zh: "业余爱好" },
          { en: "be good at", zh: "擅长于" },
          { en: "with", zh: "与……一起" },
          { en: "also", zh: "也" },
          { en: "read", zh: "读，阅读" },
          { en: "story", zh: "故事" },
          { en: "a lot of", zh: "很多" },
          { en: "play the piano", zh: "弹钢琴" },
          { en: "dance", zh: "跳舞" },
          { en: "watch films", zh: "看电影" },
          { en: "both", zh: "两个都" },
          { en: "sing", zh: "唱歌" },
          { en: "group", zh: "组" },
          { en: "about", zh: "关于" },
          { en: "idea", zh: "主意" },
          { en: "ice", zh: "冰" },
          { en: "hole", zh: "洞" },
          { en: "Look out!", zh: "当心！注意！" },
          { en: "wet", zh: "湿的，潮的" },
        ]
      },
      {
        unit: "Unit 5",
        words: [
          { en: "teacher", zh: "老师" },
          { en: "teach", zh: "教" },
          { en: "writer", zh: "作家" },
          { en: "write", zh: "写" },
          { en: "work", zh: "工作" },
          { en: "at home", zh: "在家" },
          { en: "doctor", zh: "医生" },
          { en: "help", zh: "帮助" },
          { en: "sick", zh: "生病的" },
          { en: "people", zh: "人；人们" },
          { en: "factory", zh: "工厂" },
          { en: "worker", zh: "工人" },
          { en: "cook", zh: "厨师" },
          { en: "driver", zh: "驾驶员，司机" },
          { en: "farmer", zh: "农民" },
          { en: "nurse", zh: "护士" },
          { en: "policeman", zh: "警察" },
        ]
      },
      {
        unit: "Unit 6",
        words: [
          { en: "e-friend", zh: "网友" },
          { en: "Wait a minute.", zh: "等一会儿。" },
          { en: "send", zh: "发出（信件、邮件等）" },
          { en: "email", zh: "电子邮件" },
          { en: "to", zh: "给" },
          { en: "live", zh: "住，居住" },
          { en: "UK", zh: "英国" },
          { en: "... years old", zh: "……岁" },
          { en: "study", zh: "学习" },
          { en: "Canada", zh: "加拿大" },
          { en: "Greece", zh: "希腊" },
          { en: "Russia", zh: "俄罗斯" },
          { en: "PRC", zh: "中华人民共和国" },
          { en: "US", zh: "美国" },
          { en: "go fishing", zh: "去钓鱼" },
          { en: "tomorrow", zh: "明天" },
        ]
      },
      {
        unit: "Unit 7",
        words: [
          { en: "at weekends", zh: "在周末" },
          { en: "visit", zh: "拜访；参观" },
          { en: "grandparent", zh: "祖父；祖母；外祖父；外祖母" },
          { en: "play with", zh: "和……一起玩" },
          { en: "very much", zh: "非常" },
          { en: "often", zh: "经常，常常" },
          { en: "chat", zh: "聊天" },
          { en: "Internet", zh: "网络，互联网" },
          { en: "always", zh: "总是，一直" },
          { en: "sometimes", zh: "有时" },
          { en: "go to the cinema", zh: "去看电影" },
          { en: "there", zh: "那里" },
          { en: "a lot", zh: "很多" },
          { en: "come out", zh: "出来" },
          { en: "get out", zh: "出来" },
          { en: "fishing", zh: "钓鱼，捕鱼" },
          { en: "Don't worry.", zh: "别担心。" },
          { en: "sit", zh: "坐，坐在" },
          { en: "by ...", zh: "在……旁边" },
          { en: "wait", zh: "等，等待" },
        ]
      },
      {
        unit: "Unit 8",
        words: [
          { en: "Christmas", zh: "圣诞节" },
          { en: "buy", zh: "买" },
          { en: "present", zh: "礼物" },
          { en: "Christmas tree", zh: "圣诞树" },
          { en: "Father Christmas", zh: "圣诞老人" },
          { en: "next", zh: "接着，然后" },
          { en: "put", zh: "放" },
          { en: "pretty", zh: "漂亮的，好看的" },
          { en: "thing", zh: "物品，东西" },
          { en: "look", zh: "看起来" },
          { en: "Christmas Eve", zh: "圣诞夜，平安夜" },
          { en: "stocking", zh: "长筒袜" },
          { en: "wait for", zh: "等候，等待" },
          { en: "finally", zh: "最后" },
          { en: "Christmas Day", zh: "圣诞节" },
          { en: "early", zh: "早早地" },
          { en: "turkey", zh: "火鸡；火鸡肉" },
          { en: "pudding", zh: "布丁" },
          { en: "all", zh: "全都" },
          { en: "have a good time", zh: "过得愉快，玩得高兴" },
          { en: "card", zh: "卡片" },
          { en: "children", zh: "孩子，儿童" },
          { en: "message", zh: "信息，消息" },
          { en: "Merry Christmas!", zh: "圣诞快乐！" },
          { en: "song", zh: "歌曲" },
          { en: "What's wrong with ...?", zh: "……怎么了？" },
          { en: "him", zh: "他" },
          { en: "us", zh: "我们" },
          { en: "letter", zh: "信" },
          { en: "storybook", zh: "故事书" },
          { en: "after", zh: "在……以后" },
        ]
      },
    ]
  },
  "5B": {
    label: "五年级下册",
    semester: "下册",
    grade: 5,
    units: [
      {
        unit: "Unit 1",
        words: [
          { en: "prince", zh: "王子" },
          { en: "fairy", zh: "仙女" },
          { en: "why", zh: "为什么" },
          { en: "because", zh: "因为" },
          { en: "clothes", zh: "衣服" },
          { en: "let", zh: "让" },
          { en: "put on", zh: "穿上" },
          { en: "before", zh: "在……以前" },
          { en: "have to", zh: "不得不，必须" },
          { en: "try on", zh: "试穿" },
          { en: "fit", zh: "合适，合身" },
          { en: "take off", zh: "脱下" },
          { en: "mushroom", zh: "蘑菇" },
          { en: "late", zh: "迟的，晚的" },
          { en: "pick", zh: "摘，拾" },
          { en: "understand", zh: "明白，理解" },
          { en: "be bad for", zh: "有害的" },
          { en: "leave ... behind", zh: "留下，丢下" },
        ]
      },
      {
        unit: "Unit 2",
        words: [
          { en: "far from", zh: "离……远" },
          { en: "moon", zh: "月亮" },
          { en: "street", zh: "街，街道" },
          { en: "near", zh: "在……附近" },
          { en: "city", zh: "城市" },
          { en: "by ...", zh: "乘（汽车、火车等）" },
          { en: "bus", zh: "公共汽车，巴士" },
          { en: "on foot", zh: "步行" },
          { en: "metro", zh: "地铁" },
          { en: "taxi", zh: "出租车，的士" },
          { en: "bike", zh: "自行车" },
          { en: "plane", zh: "飞机" },
          { en: "ship", zh: "轮船" },
          { en: "train", zh: "火车" },
          { en: "ride", zh: "骑车" },
          { en: "show ...", zh: "给……看" },
          { en: "young", zh: "年幼的" },
          { en: "basket", zh: "篮子" },
        ]
      },
      {
        unit: "Unit 3",
        words: [
          { en: "ask the way", zh: "问路" },
          { en: "get to", zh: "到达" },
          { en: "take", zh: "搭乘" },
          { en: "get on", zh: "上车" },
          { en: "station", zh: "车站" },
          { en: "get off", zh: "下车" },
          { en: "walk", zh: "走，步行" },
          { en: "bookshop", zh: "书店" },
          { en: "next to", zh: "在……旁边" },
          { en: "Sun", zh: "太阳" },
          { en: "ask ... for help", zh: "向……求助" },
          { en: "excuse me", zh: "劳驾；对不起" },
          { en: "along", zh: "沿着，顺着" },
          { en: "turn right", zh: "向右转" },
          { en: "traffic light", zh: "交通灯" },
          { en: "on your right", zh: "在你的右侧" },
          { en: "cinema", zh: "电影院" },
          { en: "hospital", zh: "医院" },
          { en: "shop", zh: "商店" },
          { en: "zoo", zh: "动物园" },
          { en: "turn left", zh: "向左转" },
          { en: "supermarket", zh: "超市" },
          { en: "film", zh: "电影" },
          { en: "stop", zh: "车站" },
          { en: "full", zh: "满的；饱的" },
          { en: "over", zh: "结束了，完了" },
        ]
      },
      {
        unit: "Unit 4",
        words: [
          { en: "see the doctor", zh: "看医生，看病" },
          { en: "feel", zh: "感觉，感到" },
          { en: "check", zh: "检查" },
          { en: "should", zh: "应该" },
          { en: "have a rest", zh: "休息" },
          { en: "take medicine", zh: "吃药" },
          { en: "drink water", zh: "喝水" },
          { en: "toothache", zh: "牙疼" },
          { en: "dentist", zh: "牙医" },
          { en: "anything", zh: "任何东西" },
          { en: "brush one's teeth", zh: "刷牙" },
          { en: "bedtime", zh: "就寝时间" },
          { en: "giraffe", zh: "长颈鹿" },
          { en: "point at", zh: "指着，指向" },
          { en: "neck", zh: "脖子" },
        ]
      },
      {
        unit: "Unit 5",
        words: [
          { en: "parent", zh: "父或母" },
          { en: "clean", zh: "擦，洗" },
          { en: "cook", zh: "烧，煮" },
          { en: "sweep the floor", zh: "扫地" },
          { en: "busy", zh: "忙，忙碌" },
          { en: "wash the dishes", zh: "洗碗" },
          { en: "make the bed", zh: "整理床铺" },
          { en: "grow", zh: "种植" },
          { en: "garden", zh: "花园；果园" },
          { en: "sweet", zh: "甜的" },
          { en: "pest", zh: "害虫" },
          { en: "ladybird", zh: "瓢虫" },
          { en: "go away", zh: "走了，离开" },
          { en: "leaf", zh: "叶子" },
        ]
      },
      {
        unit: "Unit 6",
        words: [
          { en: "game", zh: "运动，比赛" },
          { en: "smell", zh: "有……气味，闻起来" },
          { en: "meat", zh: "(猪、牛、羊等的) 肉" },
          { en: "vegetable", zh: "蔬菜" },
          { en: "tomato", zh: "西红柿，番茄" },
          { en: "potato", zh: "马铃薯，土豆" },
          { en: "I can't wait!", zh: "我等不及了！" },
          { en: "look for", zh: "找，寻找" },
          { en: "ready", zh: "准备好" },
          { en: "yummy", zh: "好吃的，美味的" },
          { en: "love", zh: "喜欢，喜爱" },
          { en: "bread", zh: "面包" },
          { en: "win", zh: "获胜，赢" },
          { en: "yeah", zh: "太好了，太棒了" },
          { en: "angry", zh: "生气的，愤怒的" },
          { en: "spot", zh: "斑，点" },
          { en: "catch", zh: "抓，抓住" },
          { en: "drive ... away", zh: "赶走" },
        ]
      },
      {
        unit: "Unit 7",
        words: [
          { en: "festival", zh: "节日" },
          { en: "Spring Festival", zh: "春节" },
          { en: "January", zh: "一月" },
          { en: "February", zh: "二月" },
          { en: "call", zh: "叫作，称作" },
          { en: "Chinese New Year", zh: "中国农历新年" },
          { en: "get together", zh: "团聚" },
          { en: "jiaozi", zh: "饺子" },
          { en: "Dragon Boat Festival", zh: "端午节" },
          { en: "May", zh: "五月" },
          { en: "June", zh: "六月" },
          { en: "dragon boat race", zh: "赛龙舟" },
          { en: "place", zh: "地方，地点" },
          { en: "rice dumpling", zh: "粽子" },
          { en: "Mid-Autumn Festival", zh: "中秋节" },
          { en: "September", zh: "九月" },
          { en: "October", zh: "十月" },
          { en: "moon cake", zh: "月饼" },
          { en: "Double Ninth Festival (Chongyang Festival)", zh: "重阳节" },
          { en: "November", zh: "十一月" },
          { en: "old", zh: "老的，年纪大的" },
          { en: "mountain", zh: "山，山脉" },
          { en: "rice cake", zh: "重阳糕" },
          { en: "Mother's Day", zh: "母亲节" },
          { en: "Father's Day", zh: "父亲节" },
          { en: "favourite", zh: "最喜欢的" },
        ]
      },
      {
        unit: "Unit 8",
        words: [
          { en: "birthday", zh: "生日" },
          { en: "eleventh", zh: "第十一" },
          { en: "eighth", zh: "第八" },
          { en: "April", zh: "四月" },
          { en: "together", zh: "一起" },
          { en: "game", zh: "游戏" },
          { en: "March", zh: "三月" },
          { en: "July", zh: "七月" },
          { en: "August", zh: "八月" },
          { en: "December", zh: "十二月" },
          { en: "hero", zh: "英雄" },
          { en: "play", zh: "戏，戏剧" },
          { en: "number", zh: "数字，数" },
          { en: "password", zh: "密码" },
          { en: "answer", zh: "答案" },
          { en: "fourth", zh: "第四" },
          { en: "start", zh: "开始" },
          { en: "fight", zh: "打仗，打架" },
        ]
      },
    ]
  },
  "6A": {
    label: "六年级上册",
    semester: "上册",
    grade: 6,
    units: [
      {
        unit: "Unit 1",
        words: [
          { en: "long long ago", zh: "很久以前" },
          { en: "magic", zh: "有魔力的，神奇的" },
          { en: "clever", zh: "聪明的" },
          { en: "foolish", zh: "愚蠢的" },
          { en: "through", zh: "穿过" },
          { en: "laugh", zh: "笑，大笑" },
          { en: "wear", zh: "穿" },
          { en: "turn into", zh: "变成" },
          { en: "sentence", zh: "句子" },
          { en: "each", zh: "每个" },
          { en: "quick", zh: "迅速的，快的" },
          { en: "think", zh: "想，思考" },
          { en: "another", zh: "又一个" },
          { en: "next", zh: "下一个" },
          { en: "turn", zh: "机会" },
          { en: "hard", zh: "努力地，费劲地" },
        ]
      },
      {
        unit: "Unit 2",
        words: [
          { en: "sunny", zh: "晴朗的" },
          { en: "show", zh: "展览，展示" },
          { en: "interesting", zh: "有趣的，有意思的" },
          { en: "weather", zh: "天气" },
          { en: "become", zh: "变成，变为" },
          { en: "windy", zh: "有风的" },
          { en: "cloudy", zh: "多云的" },
          { en: "high", zh: "在高处" },
          { en: "honey", zh: "蜂蜜" },
          { en: "drink", zh: "饮料" },
          { en: "ant", zh: "蚂蚁" },
          { en: "bee", zh: "蜜蜂" },
          { en: "cloud", zh: "云" },
          { en: "rain", zh: "下雨" },
          { en: "meet", zh: "遇见" },
          { en: "lose", zh: "丢失" },
          { en: "know", zh: "知道" },
          { en: "What happened?", zh: "出什么事了？" },
          { en: "climb up", zh: "爬上" },
          { en: "hold onto", zh: "抓紧" },
          { en: "fly away", zh: "飞走" },
        ]
      },
      {
        unit: "Unit 3",
        words: [
          { en: "holiday", zh: "假日，假期" },
          { en: "National Day", zh: "国庆节" },
          { en: "call", zh: "打电话" },
          { en: "Bund", zh: "(上海) 外滩" },
          { en: "Shanghai Museum", zh: "上海博物馆" },
          { en: "Great Wall", zh: "长城" },
          { en: "Palace Museum", zh: "故宫" },
          { en: "Summer Palace", zh: "颐和园" },
          { en: "Tian'anmen Square", zh: "天安门广场" },
          { en: "fashion show", zh: "时装表演，时装秀" },
          { en: "bottle", zh: "瓶子" },
          { en: "go well", zh: "进展顺利" },
          { en: "at first", zh: "开始，最初" },
          { en: "heavy rain", zh: "大雨" },
        ]
      },
      {
        unit: "Unit 4",
        words: [
          { en: "then and now", zh: "过去和现在" },
          { en: "ago", zh: "……以前" },
          { en: "telephone", zh: "电话" },
          { en: "office", zh: "办公室" },
          { en: "mobile phone", zh: "移动电话，手机" },
          { en: "anywhere", zh: "随处，到处" },
          { en: "radio", zh: "收音机" },
          { en: "newspaper", zh: "报纸" },
          { en: "news", zh: "新闻" },
          { en: "e-book", zh: "电子书" },
          { en: "make friends", zh: "交朋友" },
          { en: "all over the world", zh: "全世界" },
          { en: "do shopping", zh: "购物" },
          { en: "TV", zh: "电视" },
          { en: "look out of", zh: "朝……外看" },
          { en: "What day is today?", zh: "今天是星期几？" },
          { en: "go on", zh: "继续" },
          { en: "spell", zh: "拼读，拼写" },
          { en: "make a sentence", zh: "造句" },
          { en: "with", zh: "用" },
          { en: "yesterday", zh: "昨天" },
        ]
      },
      {
        unit: "Unit 5",
        words: [
          { en: "sign", zh: "标识" },
          { en: "shopping centre", zh: "购物中心" },
          { en: "careful", zh: "小心，当心" },
          { en: "What does it mean?", zh: "这是什么意思？" },
          { en: "mean", zh: "意思是" },
          { en: "litter", zh: "乱扔垃圾" },
          { en: "go in", zh: "进入，走进" },
          { en: "take", zh: "携带" },
          { en: "restaurant", zh: "饭店，餐厅" },
          { en: "smoke", zh: "吸烟，抽烟" },
          { en: "someone", zh: "某人" },
          { en: "smell", zh: "闻到" },
          { en: "No eating or drinking.", zh: "请勿饮食。" },
          { en: "No littering.", zh: "请勿乱扔垃圾。" },
          { en: "No parking.", zh: "请勿停车。" },
          { en: "No smoking.", zh: "请勿吸烟。" },
          { en: "Danger!", zh: "危险！" },
          { en: "Wet floor.", zh: "小心地滑。" },
          { en: "outing", zh: "外出游玩，远足" },
          { en: "walk on", zh: "继续走路" },
          { en: "around", zh: "在……周围" },
        ]
      },
      {
        unit: "Unit 6",
        words: [
          { en: "keep", zh: "保持，维持" },
          { en: "clean", zh: "干净的，整洁的" },
          { en: "make", zh: "使……变得" },
          { en: "photo", zh: "照片" },
          { en: "air", zh: "空气" },
          { en: "dirty", zh: "肮脏的" },
          { en: "smoke", zh: "烟雾" },
          { en: "rubbish", zh: "垃圾" },
          { en: "messy", zh: "肮脏的，乱七八糟的" },
          { en: "dead", zh: "死的" },
          { en: "move ... away from", zh: "从……搬走" },
          { en: "bin", zh: "垃圾桶" },
          { en: "plant", zh: "种植，栽种" },
          { en: "more", zh: "更多的" },
          { en: "museum", zh: "博物馆" },
          { en: "cinema", zh: "电影院" },
          { en: "throw", zh: "扔" },
          { en: "skin", zh: "果皮" },
          { en: "pick ... up", zh: "捡起，拾起" },
          { en: "slip", zh: "滑倒" },
          { en: "fall", zh: "摔倒" },
        ]
      },
      {
        unit: "Unit 7",
        words: [
          { en: "protect", zh: "保护" },
          { en: "Earth", zh: "地球" },
          { en: "save", zh: "节约" },
          { en: "useful", zh: "有用的" },
          { en: "use", zh: "使用，利用" },
          { en: "waste", zh: "浪费" },
          { en: "much", zh: "很多" },
          { en: "reuse", zh: "再利用" },
          { en: "energy", zh: "能源" },
          { en: "come from", zh: "从……来，来自" },
          { en: "coal", zh: "煤炭" },
          { en: "oil", zh: "石油" },
          { en: "drive", zh: "开车；驾驶" },
          { en: "wood", zh: "木头，木材" },
          { en: "cut down", zh: "砍伐，砍掉" },
          { en: "too many", zh: "太多" },
          { en: "plastic", zh: "塑料" },
          { en: "paper", zh: "纸" },
          { en: "glass", zh: "玻璃" },
          { en: "project", zh: "课题" },
          { en: "poster", zh: "海报" },
          { en: "gate", zh: "大门" },
        ]
      },
      {
        unit: "Unit 8",
        words: [
          { en: "Hong Kong", zh: "香港" },
          { en: "excited", zh: "激动的，兴奋的" },
          { en: "food", zh: "食物，食品" },
          { en: "tangyuan", zh: "汤圆" },
          { en: "Chinese New Year's Eve", zh: "大年夜，除夕" },
          { en: "Chinese New Year's Day", zh: "大年初一，春节" },
          { en: "red packet", zh: "红包" },
          { en: "lion dance", zh: "舞狮" },
          { en: "fireworks", zh: "烟花表演" },
          { en: "firecracker", zh: "鞭炮" },
          { en: "rich", zh: "富有的，有钱的" },
          { en: "plan", zh: "计划，打算" },
          { en: "hooray", zh: "好极了" },
        ]
      },
    ]
  },
  "6B": {
    label: "六年级下册",
    semester: "下册",
    grade: 6,
    units: [
      {
        unit: "Unit 1",
        words: [
          { en: "mouse", zh: "老鼠" },
          { en: "large", zh: "大的" },
          { en: "strong", zh: "强大的，强壮的" },
          { en: "walk by", zh: "走过，路过" },
          { en: "wake ... up", zh: "吵醒，叫醒" },
          { en: "some day", zh: "某一天" },
          { en: "quietly", zh: "小声地，安静地" },
          { en: "loudly", zh: "大声地" },
          { en: "the next day", zh: "第二天" },
          { en: "net", zh: "网" },
          { en: "bite", zh: "咬" },
          { en: "sharp", zh: "锋利的，尖的" },
          { en: "ask", zh: "问" },
          { en: "just then", zh: "就在那时" },
          { en: "soon", zh: "不久，很快" },
          { en: "get out", zh: "出来，出去" },
          { en: "happily", zh: "开心地，高兴地" },
          { en: "from then on", zh: "从那时起" },
          { en: "weak", zh: "弱的，软弱的" },
          { en: "cheer", zh: "欢呼" },
          { en: "hit", zh: "打，击" },
          { en: "ground", zh: "地面，地上" },
          { en: "deep", zh: "深" },
          { en: "reach", zh: "够得着" },
          { en: "pour ... into", zh: "把……倒入" },
        ]
      },
      {
        unit: "Unit 2",
        words: [
          { en: "child", zh: "孩子，小孩" },
          { en: "habit", zh: "习惯" },
          { en: "never", zh: "从不" },
          { en: "late", zh: "迟到，晚到" },
          { en: "put ... in order", zh: "把……整理得井井有条" },
          { en: "finish", zh: "完成" },
          { en: "tidy", zh: "干净的，整齐的" },
          { en: "bad", zh: "不好的，坏的" },
          { en: "sleepy", zh: "困的，困倦的" },
          { en: "last night", zh: "昨夜" },
          { en: "fast", zh: "快" },
          { en: "go into", zh: "走进，走入" },
        ]
      },
      {
        unit: "Unit 3",
        words: [
          { en: "healthy", zh: "健康的" },
          { en: "diet", zh: "饮食" },
          { en: "a little", zh: "一点" },
          { en: "a few", zh: "几个" },
          { en: "at a time", zh: "一次" },
          { en: "cola", zh: "可乐" },
          { en: "too much", zh: "太多" },
          { en: "need", zh: "需要" },
        ]
      },
      {
        unit: "Unit 4",
        words: [
          { en: "road", zh: "马路，公路" },
          { en: "safety", zh: "安全" },
          { en: "cross", zh: "穿过，穿行" },
          { en: "safely", zh: "安全地" },
          { en: "must", zh: "必须" },
          { en: "zebra crossing", zh: "斑马线" },
          { en: "safe", zh: "安全的" },
          { en: "pavement", zh: "人行道" },
          { en: "look out for", zh: "当心，提防" },
          { en: "follow", zh: "遵守" },
          { en: "rule", zh: "规则" },
          { en: "stay", zh: "保持" },
          { en: "light", zh: "灯" },
        ]
      },
      {
        unit: "Unit 5",
        words: [
          { en: "Children's Day", zh: "儿童节" },
          { en: "clown", zh: "小丑" },
          { en: "balloon", zh: "气球" },
          { en: "appear", zh: "出现" },
          { en: "begin", zh: "开始" },
          { en: "put on", zh: "上演，表演" },
        ]
      },
      {
        unit: "Unit 6",
        words: [
          { en: "country", zh: "国家" },
          { en: "learn", zh: "学习" },
          { en: "about", zh: "关于" },
          { en: "next week", zh: "下周" },
          { en: "find out", zh: "发现" },
          { en: "magazine", zh: "杂志" },
          { en: "kangaroo", zh: "袋鼠" },
          { en: "koala", zh: "考拉" },
          { en: "lover", zh: "爱好者" },
          { en: "Australian Football", zh: "澳式橄榄球" },
          { en: "exciting", zh: "令人激动的，令人兴奋的" },
          { en: "Sydney", zh: "(澳大利亚城市) 悉尼" },
          { en: "welcome", zh: "欢迎" },
          { en: "visitor", zh: "游人，游客" },
          { en: "London", zh: "(英国城市) 伦敦" },
          { en: "Oxford", zh: "(英国城市) 牛津" },
          { en: "Big Ben", zh: "大本钟" },
          { en: "London Eye", zh: "(伦敦的摩天轮) 伦敦眼" },
          { en: "Tower Bridge", zh: "(伦敦) 塔桥" },
          { en: "like", zh: "如" },
          { en: "What do you think?", zh: "你觉得呢？" },
        ]
      },
      {
        unit: "Unit 7",
        words: [
          { en: "summer holiday", zh: "暑假" },
          { en: "will", zh: "将，将要" },
          { en: "go back to", zh: "回去" },
          { en: "how long", zh: "多久" },
          { en: "stay", zh: "停留" },
          { en: "sound", zh: "听起来，听上去" },
          { en: "Disneyland", zh: "迪士尼乐园" },
          { en: "Ocean Park", zh: "海洋公园" },
          { en: "Taipei", zh: "台北" },
          { en: "travel", zh: "旅游" },
          { en: "traveller", zh: "旅行者" },
          { en: "travel around the world", zh: "环游世界" },
        ]
      },
      {
        unit: "Unit 8",
        words: [
          { en: "dream", zh: "梦想" },
          { en: "future", zh: "将来，未来" },
          { en: "care about", zh: "关心，在乎" },
          { en: "astronaut", zh: "宇航员" },
          { en: "spaceship", zh: "宇宙飞船" },
          { en: "Moon", zh: "月球" },
          { en: "football player", zh: "足球运动员" },
          { en: "World Cup", zh: "世界杯" },
          { en: "dancer", zh: "舞蹈家" },
          { en: "pianist", zh: "钢琴演奏家" },
          { en: "come true", zh: "实现，成真" },
          { en: "take care of", zh: "爱护；照顾" },
          { en: "scientist", zh: "科学家" },
          { en: "artist", zh: "艺术家" },
          { en: "paint", zh: "画画" },
        ]
      },
    ]
  }
,
  "5A-new": {
    label: "五上（2026新版）",
    semester: "上册",
    grade: 5,
    edition: "new",
    units: [
        {
            unit: "Unit 1",
            words: [
                { en: "do", zh: "exercise 锻炼" },
                { en: "carefully", zh: "仔细地，小心翼翼地" },
                { en: "tidy", zh: "整洁的，井然有序的" },
                { en: "wait", zh: "a minute" },
                { en: "never", zh: "从不，绝不" },
                { en: "in", zh: "class 在课堂上" },
                { en: "do", zh: "well 成功" },
                { en: "very", zh: "much 非常" },
                { en: "a", zh: "lot of 许多" },
                { en: "often", zh: "时常，常常" },
                { en: "in", zh: "bed 在床上" },
                { en: "bad", zh: "坏的" },
                { en: "healthy", zh: "健康的，健壮的" },
                { en: "late", zh: "迟，晚" },
                { en: "health", zh: "健康" },
                { en: "card", zh: "卡片" },
                { en: "It’s", zh: "your turn. 轮到你了。" },
            ]
        },
        {
            unit: "Unit 2",
            words: [
                { en: "feel", zh: "感到愉快（或有信心等）" },
                { en: "excited", zh: "激动的，兴奋的" },
                { en: "hard", zh: "努力地" },
                { en: "like", zh: "例如，譬如" },
                { en: "Well", zh: "done! 干得好！" },
                { en: "or", zh: "也不" },
                { en: "hear", zh: "听见，听到" },
                { en: "sometimes", zh: "有时，间或" },
                { en: "then", zh: "然后，后来" },
                { en: "teach", zh: "教授，教" },
                { en: "write", zh: "书写，写字" },
                { en: "word", zh: "单词，字" },
                { en: "give", zh: "up 放弃" },
                { en: "fast", zh: "快，快速，迅速" },
                { en: "speak", zh: "说话" },
                { en: "study", zh: "学习" },
                { en: "know", zh: "知道，了解" },
                { en: "when", zh: "当……时" },
            ]
        },
        {
            unit: "Unit 3",
            words: [
                { en: "dance", zh: "舞蹈" },
                { en: "paper-cutting", zh: "剪纸" },
                { en: "gift", zh: "礼物" },
                { en: "I", zh: "don’t think so." },
                { en: "make", zh: "使变得，使成为" },
                { en: "over", zh: "there 在那里" },
                { en: "a", zh: "lot 大量" },
            ]
        },
        {
            unit: "Unit 4",
            words: [
                { en: "warm", zh: "up 做准备活动，热身" },
                { en: "jump", zh: "跳，跳跃" },
                { en: "should", zh: "应该，应当" },
                { en: "swim", zh: "游泳" },
                { en: "hurt", zh: "感到疼痛；" },
                { en: "listen", zh: "听从" },
                { en: "keep", zh: "to the right 靠右边走" },
                { en: "may", zh: "也许，可能" },
                { en: "out", zh: "of the way" },
                { en: "right", zh: "now 立即，马上" },
                { en: "walk", zh: "走，行走" },
                { en: "slowly", zh: "慢速地，缓慢地" },
            ]
        },
        {
            unit: "Unit 5",
            words: [
                { en: "watch", zh: "观看" },
                { en: "TV", zh: "电视，电视机" },
                { en: "visit", zh: "拜访，看望" },
                { en: "play", zh: "the piano 弹钢琴" },
                { en: "internet", zh: "互联网" },
                { en: "always", zh: "总是，每次都是" },
                { en: "get", zh: "out 出去" },
                { en: "plant", zh: "植物，花草" },
                { en: "live", zh: "住，居住" },
                { en: "wonderful", zh: "精彩的，绝妙的" },
            ]
        },
        {
            unit: "Unit 6",
            words: [
                { en: "wall", zh: "围墙；墙，壁" },
                { en: "heavy", zh: "重的，沉的" },
                { en: "drink", zh: "喝，饮" },
                { en: "some", zh: "有些事物，有些人" },
                { en: "on", zh: "one’s way back" },
                { en: "next", zh: "to 紧邻，在……近旁" },
                { en: "space", zh: "空地，空间" },
                { en: "their", zh: "他们的，她们的，它们的" },
                { en: "too", zh: "太，过于" },
                { en: "close", zh: "to 接近" },
                { en: "use", zh: "使用，利用" },
                { en: "letter", zh: "信，函" },
                { en: "friendly", zh: "友好的，友爱的" },
                { en: "then", zh: "到那时，当时" },
                { en: "time", zh: "时候；时间" },
                { en: "favourite", zh: "(AmE favorite)" },
                { en: "problem", zh: "问题，困难" },
                { en: "do", zh: "your homework 做家庭作业" },
            ]
        },
        {
            unit: "Unit 7",
            words: [
                { en: "shop", zh: "在商店购物" },
                { en: "sweater", zh: "毛衣，线衣" },
                { en: "sock", zh: "短袜" },
                { en: "Ms", zh: "女士（不指明婚否）" },
                { en: "twenty-eight", zh: "二十八" },
                { en: "How", zh: "about ...? ……怎么样？" },
                { en: "show", zh: "给……看，展示" },
                { en: "tail", zh: "尾巴" },
                { en: "one", zh: "（一批东西中的）一个" },
                { en: "try", zh: "on 试穿" },
                { en: "sixty-eight", zh: "六十八" },
                { en: "take", zh: "选中，买下" },
                { en: "pair", zh: "一双，一对" },
                { en: "forty", zh: "四十" },
                { en: "twenty-four", zh: "二十四" },
            ]
        },
        {
            unit: "Unit 8",
            words: [
                { en: "about", zh: "关于，对于" },
                { en: "May", zh: "五月" },
                { en: "or", zh: "或者" },
                { en: "June", zh: "六月" },
                { en: "January", zh: "一月" },
                { en: "February", zh: "二月" },
                { en: "before", zh: "在……以前" },
                { en: "lion", zh: "dance 舞狮" },
                { en: "have", zh: "a good time 过得愉快" },
                { en: "December", zh: "十二月" },
                { en: "open", zh: "打开，撕开" },
                { en: "October", zh: "十月" },
                { en: "September", zh: "九月" },
                { en: "mooncake", zh: "月饼" },
                { en: "moon", zh: "月亮" },
                { en: "China", zh: "中国" },
            ]
        },
    ]
  },
  "6A-new": {
    label: "六上（2026新版）",
    semester: "上册",
    grade: 6,
    edition: "new",
    units: [
        {
            unit: "Unit 1",
            words: [
                { en: "try", zh: "one’s best 尽某人最大的努力" },
                { en: "play", zh: "戏剧；扮演" },
                { en: "last", zh: "上一个的，最近的" },
                { en: "begin", zh: "开始" },
                { en: "the", zh: "words 歌词" },
                { en: "keep", zh: "继续，重复" },
                { en: "ago", zh: "以前" },
                { en: "in", zh: "front of 在……前面" },
                { en: "long", zh: "ago 很久以前" },
                { en: "top", zh: "顶端，顶部" },
            ]
        },
        {
            unit: "Unit 2",
            words: [
                { en: "storybook", zh: "儿童故事书" },
                { en: "yesterday", zh: "在昨天；昨天" },
                { en: "say", zh: "说，讲" },
                { en: "man", zh: "男人" },
                { en: "old", zh: "老的，年纪大的" },
                { en: "sell", zh: "卖，出售" },
                { en: "get", zh: "back 重新获得" },
                { en: "name", zh: "名声，名誉" },
                { en: "watch", zh: "照看，看护" },
                { en: "answer", zh: "答复，回答" },
                { en: "cry", zh: "哭，哭泣" },
            ]
        },
        {
            unit: "Unit 3",
            words: [
                { en: "famous", zh: "著名的，出名的" },
                { en: "cool", zh: "凉快，凉爽" },
                { en: "all", zh: "over the world" },
                { en: "study", zh: "研究，调查" },
                { en: "call", zh: "称呼，把……叫作" },
                { en: "age", zh: "年龄，年纪" },
                { en: "work", zh: "on 从事，致力于" },
                { en: "difficult", zh: "困难的" },
                { en: "dear", zh: "昂贵的，价格高的" },
                { en: "paper", zh: "纸，纸张" },
                { en: "at", zh: "first 起初，起先" },
            ]
        },
        {
            unit: "Unit 4",
            words: [
                { en: "ninth", zh: "第九" },
                { en: "show", zh: "表示" },
                { en: "love", zh: "爱，关爱" },
                { en: "wish", zh: "祝，祝愿" },
                { en: "candle", zh: "蜡烛" },
                { en: "photo", zh: "照片" },
                { en: "time", zh: "flies 时光飞逝，光阴似箭" },
                { en: "kid", zh: "小孩" },
                { en: "March", zh: "三月" },
                { en: "April", zh: "四月" },
                { en: "July", zh: "七月" },
                { en: "August", zh: "八月" },
                { en: "November", zh: "十一月" },
            ]
        },
        {
            unit: "Unit 5",
            words: [
                { en: "pick", zh: "up 捡起" },
                { en: "will", zh: "将，将要" },
                { en: "on", zh: "time 准时，按时" },
                { en: "cleaning", zh: "打扫，清洁" },
            ]
        },
        {
            unit: "Unit 6",
            words: [
                { en: "go", zh: "践行绿色环保的生活方式" },
                { en: "turn", zh: "off 关掉" },
                { en: "light", zh: "电灯" },
                { en: "eat", zh: "up 吃完，吃光" },
                { en: "the", zh: "Earth 地球" },
                { en: "colour", zh: "(AmE color) 为……着色" },
                { en: "hour", zh: "小时" },
                { en: "last", zh: "持续" },
                { en: "vegetable", zh: "蔬菜" },
            ]
        },
        {
            unit: "Unit 7",
            words: [
                { en: "glass", zh: "玻璃" },
                { en: "box", zh: "盒，箱" },
                { en: "be", zh: "made of 用……做的" },
                { en: "do", zh: "with 处理" },
                { en: "make", zh: "friends with" },
                { en: "go", zh: "to sleep 睡觉" },
                { en: "clever", zh: "聪明的" },
            ]
        },
        {
            unit: "Unit 8",
            words: [
                { en: "shop", zh: "商店，店铺" },
                { en: "win", zh: "获胜，赢" },
                { en: "wrong", zh: "有问题的" },
                { en: "travel", zh: "行进" },
                { en: "these", zh: "days 如今，而今" },
                { en: "work", zh: "from home 居家办公" },
                { en: "fifty", zh: "五十" },
                { en: "email", zh: "电子邮件" },
            ]
        },
    ]
  },

  "5A-new": {
    label: "五上（2026新版）",
    semester: "上册",
    grade: 5,
    edition: "new",
    units: [
        {
            unit: "Unit 1",
            words: [
                { en: "habit", zh: "习惯" },
                { en: "do exercise", zh: "锻炼" },
                { en: "listen", zh: "听" },
                { en: "carefully", zh: "仔细地，小心翼翼地" },
                { en: "put ... in order", zh: "把……整理好" },
                { en: "take notes", zh: "记笔记" },
                { en: "tidy", zh: "整洁的，井然有序的" },
                { en: "never", zh: "从不，绝不" },
                { en: "in class", zh: "在课堂上" },
                { en: "do well", zh: "成功" },
                { en: "very much", zh: "非常" },
                { en: "a lot of", zh: "许多" },
                { en: "often", zh: "时常，常常" },
                { en: "in bed", zh: "在床上" },
                { en: "bad", zh: "坏的" },
                { en: "healthy", zh: "健康的，健壮的" },
                { en: "late", zh: "迟，晚" },
                { en: "health", zh: "健康" },
                { en: "card", zh: "卡片" },
                { en: "It’s your turn.", zh: "轮到你了。" },
            ]
        },
        {
            unit: "Unit 2",
            words: [
                { en: "worried", zh: "担心的，担忧的" },
                { en: "excited", zh: "激动的，兴奋的" },
                { en: "the high jump", zh: "跳高（运动）" },
                { en: "hard", zh: "努力地" },
                { en: "ouch", zh: "哎哟" },
                { en: "like", zh: "例如，譬如" },
                { en: "Well done!", zh: "干得好！" },
                { en: "yeah", zh: "是的，对的" },
                { en: "or", zh: "也不" },
                { en: "hear", zh: "听见，听到" },
                { en: "sometimes", zh: "有时，间或" },
                { en: "then", zh: "然后，后来" },
                { en: "teach", zh: "教授，教" },
                { en: "write", zh: "书写，写字" },
                { en: "word", zh: "单词，字" },
                { en: "hand", zh: "手" },
                { en: "understand", zh: "懂，理解" },
                { en: "give up", zh: "放弃" },
                { en: "other", zh: "那个，另一个" },
                { en: "fast", zh: "快，快速，迅速" },
                { en: "speak", zh: "说话" },
                { en: "study", zh: "学习" },
                { en: "know", zh: "知道，了解" },
                { en: "when", zh: "当……时" },
            ]
        },
        {
            unit: "Unit 3",
            words: [
                { en: "hobby", zh: "业余爱好" },
                { en: "dance", zh: "舞蹈" },
                { en: "paper-cutting", zh: "剪纸" },
                { en: "gift", zh: "礼物" },
                { en: "her", zh: "她" },
                { en: "skip", zh: "跳绳" },
                { en: "make", zh: "使变得，使成为" },
                { en: "join", zh: "成为……的一员，参加" },
                { en: "over there", zh: "在那里" },
                { en: "a lot", zh: "大量" },
                { en: "paint", zh: "用颜料画" },
            ]
        },
        {
            unit: "Unit 4",
            words: [
                { en: "pull", zh: "拉，拽，扯" },
                { en: "push", zh: "推" },
                { en: "warm up", zh: "做准备活动，热身" },
                { en: "jump", zh: "跳，跳跃" },
                { en: "climb", zh: "攀登，爬" },
                { en: "should", zh: "应该，应当" },
                { en: "swim", zh: "游泳" },
                { en: "swimming pool", zh: "游泳池" },
                { en: "hurt", zh: "感到疼痛；" },
                { en: "（", zh: "使）疼痛，受伤" },
                { en: "listen", zh: "听从" },
                { en: "stairs", zh: "楼梯" },
                { en: "keep to the right", zh: "靠右边走" },
                { en: "from", zh: "从" },
                { en: "may", zh: "也许，可能" },
                { en: "right now", zh: "立即，马上" },
                { en: "walk", zh: "走，行走" },
                { en: "slowly", zh: "慢速地，缓慢地" },
            ]
        },
        {
            unit: "Unit 5",
            words: [
                { en: "watch", zh: "观看" },
                { en: "TV", zh: "电视，电视机" },
                { en: "visit", zh: "拜访，看望" },
                { en: "grandparent", zh: "（外）祖父，（外）祖母" },
                { en: "play Chinese chess", zh: "下象棋" },
                { en: "play the piano", zh: "弹钢琴" },
                { en: "chat", zh: "闲聊，聊天" },
                { en: "internet", zh: "互联网" },
                { en: "always", zh: "总是，每次都是" },
                { en: "have a picnic", zh: "野餐" },
                { en: "get out", zh: "出去" },
                { en: "usually", zh: "通常地，一般地" },
                { en: "plant", zh: "植物，花草" },
                { en: "spend", zh: "花（时间），度过" },
                { en: "live", zh: "住，居住" },
                { en: "wonderful", zh: "精彩的，绝妙的" },
            ]
        },
        {
            unit: "Unit 6",
            words: [
                { en: "get along with", zh: "与……和睦相处" },
                { en: "wall", zh: "围墙；墙，壁" },
                { en: "neighbour", zh: "邻居，邻人" },
                { en: "heavy", zh: "重的，沉的" },
                { en: "drink", zh: "喝，饮" },
                { en: "some", zh: "有些事物，有些人" },
                { en: "next to", zh: "紧邻，在……近旁" },
                { en: "space", zh: "空地，空间" },
                { en: "their", zh: "他们的，她们的，它们的" },
                { en: "too", zh: "太，过于" },
                { en: "close to", zh: "接近" },
                { en: "use", zh: "使用，利用" },
                { en: "letter", zh: "信，函" },
                { en: "advice", zh: "建议" },
                { en: "important", zh: "重要的" },
                { en: "friendly", zh: "友好的，友爱的" },
                { en: "then", zh: "到那时，当时" },
                { en: "time", zh: "时候；时间" },
                { en: "problem", zh: "问题，困难" },
                { en: "do your homework", zh: "做家庭作业" },
                { en: "classmate", zh: "同班同学" },
            ]
        },
        {
            unit: "Unit 7",
            words: [
                { en: "shop", zh: "在商店购物" },
                { en: "smart", zh: "明智且高效地" },
                { en: "shoe", zh: "鞋" },
                { en: "sweater", zh: "毛衣，线衣" },
                { en: "sock", zh: "短袜" },
                { en: "bow", zh: "蝴蝶结" },
                { en: "need", zh: "需要，必需" },
                { en: "Ms", zh: "女士（不指明婚否）" },
                { en: "twenty-eight", zh: "二十八" },
                { en: "yuan", zh: "元（中国货币单位）" },
                { en: "How about ...? ……", zh: "怎么样？" },
                { en: "show", zh: "给……看，展示" },
                { en: "tail", zh: "尾巴" },
                { en: "list", zh: "清单" },
                { en: "pocket money", zh: "零花钱" },
                { en: "one （", zh: "一批东西中的）一个" },
                { en: "try on", zh: "试穿" },
                { en: "sixty-eight", zh: "六十八" },
                { en: "take", zh: "选中，买下" },
                { en: "pair", zh: "一双，一对" },
                { en: "forty", zh: "四十" },
                { en: "twenty-four", zh: "二十四" },
            ]
        },
        {
            unit: "Unit 8",
            words: [
                { en: "festival", zh: "节日" },
                { en: "sky", zh: "天空" },
                { en: "about", zh: "关于，对于" },
                { en: "May", zh: "五月" },
                { en: "or", zh: "或者" },
                { en: "June", zh: "六月" },
                { en: "dragon boat race", zh: "龙舟比赛" },
                { en: "January", zh: "一月" },
                { en: "February", zh: "二月" },
                { en: "before", zh: "在……以前" },
                { en: "door", zh: "门" },
                { en: "red packet", zh: "红包" },
                { en: "lion dance", zh: "舞狮" },
                { en: "have a good time", zh: "过得愉快" },
                { en: "December", zh: "十二月" },
                { en: "hang", zh: "挂" },
                { en: "stocking", zh: "圣诞袜" },
                { en: "open", zh: "打开，撕开" },
                { en: "turkey", zh: "火鸡肉；火鸡" },
                { en: "October", zh: "十月" },
                { en: "September", zh: "九月" },
                { en: "mooncake", zh: "月饼" },
                { en: "activity", zh: "活动" },
                { en: "moon", zh: "月亮" },
                { en: "China", zh: "中国" },
            ]
        },
    ]
  },
  "6A-new": {
    label: "六上（2026新版）",
    semester: "上册",
    grade: 6,
    edition: "new",
    units: [
        {
            unit: "Unit 1",
            words: [
                { en: "try one’s best", zh: "尽某人最大的努力" },
                { en: "act", zh: "扮演，演出" },
                { en: "play", zh: "戏剧；扮演" },
                { en: "poster", zh: "海报，招贴画" },
                { en: "last", zh: "上一个的，最近的" },
                { en: "take part", zh: "参与" },
                { en: "practise", zh: "练习，训练" },
                { en: "afraid", zh: "害怕，畏惧" },
                { en: "calm down", zh: "平静，安静" },
                { en: "begin", zh: "开始" },
                { en: "forget", zh: "忘记，遗忘" },
                { en: "the words", zh: "歌词" },
                { en: "remember", zh: "记起；记住" },
                { en: "finish", zh: "完成，做好" },
                { en: "keep", zh: "继续，重复" },
                { en: "ago", zh: "以前" },
                { en: "movement", zh: "运动，动作" },
                { en: "skill", zh: "技能，技术" },
                { en: "in front of", zh: "在……前面" },
                { en: "ready", zh: "准备好的" },
                { en: "long ago", zh: "很久以前" },
                { en: "snail", zh: "蜗牛" },
                { en: "top", zh: "顶端，顶部" },
            ]
        },
        {
            unit: "Unit 2",
            words: [
                { en: "honesty", zh: "诚实" },
                { en: "storybook", zh: "儿童故事书" },
                { en: "lie", zh: "谎言，谎话" },
                { en: "break", zh: "弄坏，损坏" },
                { en: "yesterday", zh: "在昨天；昨天" },
                { en: "repair", zh: "修理，修补" },
                { en: "say", zh: "说，讲" },
                { en: "poor", zh: "贫穷的" },
                { en: "man", zh: "男人" },
                { en: "old", zh: "老的，年纪大的" },
                { en: "ox", zh: "牛" },
                { en: "away from home", zh: "离开家" },
                { en: "nephew", zh: "侄子，外甥" },
                { en: "sell", zh: "卖，出售" },
                { en: "buyer", zh: "买主，买方" },
                { en: "get back", zh: "重新获得" },
                { en: "name", zh: "名声，名誉" },
                { en: "watch", zh: "照看，看护" },
                { en: "wolf", zh: "狼" },
                { en: "answer", zh: "答复，回答" },
                { en: "cry", zh: "哭，哭泣" },
            ]
        },
        {
            unit: "Unit 3",
            words: [
                { en: "hero", zh: "崇拜的对象" },
                { en: "famous", zh: "著名的，出名的" },
                { en: "scientist", zh: "科学家" },
                { en: "inventor", zh: "发明家，发明者" },
                { en: "hybrid rice", zh: "杂交水稻" },
                { en: "dream", zh: "梦想，愿望" },
                { en: "cool", zh: "凉快，凉爽" },
                { en: "be born", zh: "出生，诞生" },
                { en: "pass away", zh: "去世" },
                { en: "study", zh: "研究，调查" },
                { en: "call", zh: "称呼，把……叫作" },
                { en: "come true", zh: "实现，成为现实" },
                { en: "farming", zh: "务农" },
                { en: "age", zh: "年龄，年纪" },
                { en: "grow up", zh: "长大，成长" },
                { en: "work on", zh: "从事，致力于" },
                { en: "difficult", zh: "困难的" },
                { en: "develop", zh: "开发，研制" },
                { en: "bamboo", zh: "竹，竹子" },
                { en: "silk", zh: "丝绸" },
                { en: "dear", zh: "昂贵的，价格高的" },
                { en: "paper", zh: "纸，纸张" },
                { en: "at first", zh: "起初，起先" },
            ]
        },
        {
            unit: "Unit 4",
            words: [
                { en: "ninth", zh: "第九" },
                { en: "lunar month", zh: "农历，阴历" },
                { en: "show", zh: "表示" },
                { en: "love", zh: "爱，关爱" },
                { en: "smartphone", zh: "智能手机" },
                { en: "wish", zh: "祝，祝愿" },
                { en: "a long life", zh: "长寿" },
                { en: "blow out", zh: "吹灭，熄灭" },
                { en: "candle", zh: "蜡烛" },
                { en: "photo", zh: "照片" },
                { en: "time flies", zh: "时光飞逝，光阴似箭" },
                { en: "kid", zh: "小孩" },
                { en: "March", zh: "三月" },
                { en: "April", zh: "四月" },
                { en: "July", zh: "七月" },
                { en: "August", zh: "八月" },
                { en: "November", zh: "十一月" },
            ]
        },
        {
            unit: "Unit 5",
            words: [
                { en: "rubbish bin", zh: "垃圾桶" },
                { en: "ground", zh: "地，地面" },
                { en: "skin", zh: "（某些水果和蔬菜的）皮，壳" },
                { en: "pick up", zh: "捡起" },
                { en: "throw", zh: "抛，扔" },
                { en: "will", zh: "将，将要" },
                { en: "fall", zh: "突然倒下，跌倒" },
                { en: "go plogging", zh: "去拾荒慢跑" },
                { en: "jogging", zh: "慢跑锻炼" },
                { en: "at the same time", zh: "同时，一起" },
                { en: "gate", zh: "大门" },
                { en: "on time", zh: "准时，按时" },
                { en: "cleaning", zh: "打扫，清洁" },
                { en: "group", zh: "组，群" },
                { en: "start", zh: "发起" },
            ]
        },
        {
            unit: "Unit 6",
            words: [
                { en: "turn off", zh: "关掉" },
                { en: "tap", zh: "水龙头" },
                { en: "light", zh: "电灯" },
                { en: "both", zh: "两个，两个都" },
                { en: "side", zh: "一面" },
                { en: "eat up", zh: "吃完，吃光" },
                { en: "project", zh: "项目" },
                { en: "the Earth", zh: "地球" },
                { en: "colour (AmE color)", zh: "为……着色" },
                { en: "hour", zh: "小时" },
                { en: "save", zh: "节省，节约" },
                { en: "electricity", zh: "电，电能" },
                { en: "last", zh: "持续" },
                { en: "brush", zh: "刷净" },
                { en: "tooth", zh: "牙，齿" },
                { en: "waste", zh: "浪费" },
                { en: "vegetable", zh: "蔬菜" },
                { en: "plastic", zh: "塑料的" },
            ]
        },
        {
            unit: "Unit 7",
            words: [
                { en: "glass", zh: "玻璃" },
                { en: "bottle", zh: "瓶子" },
                { en: "cardboard", zh: "硬纸板，卡纸板" },
                { en: "box", zh: "盒，箱" },
                { en: "be made of", zh: "用……做的" },
                { en: "button", zh: "纽扣，扣子" },
                { en: "happen", zh: "发生，出现" },
                { en: "hat", zh: "帽子" },
                { en: "do with", zh: "处理" },
                { en: "throw away", zh: "扔掉，丢弃" },
                { en: "recycling bin", zh: "废物回收箱" },
                { en: "truck", zh: "卡车，货运汽车" },
                { en: "recycling centre", zh: "回收中心" },
                { en: "go to sleep", zh: "睡觉" },
                { en: "sort", zh: "把……分类" },
                { en: "recycle", zh: "回收利用" },
                { en: "grey", zh: "灰色的" },
                { en: "clever", zh: "聪明的" },
            ]
        },
        {
            unit: "Unit 8",
            words: [
                { en: "high-speed train", zh: "高速列车" },
                { en: "e-book", zh: "电子书" },
                { en: "meeting", zh: "会议，集会" },
                { en: "shop", zh: "商店，店铺" },
                { en: "smart", zh: "智能的" },
                { en: "win", zh: "获胜，赢" },
                { en: "surprise", zh: "意想不到的事，令人惊奇的事" },
                { en: "wrong", zh: "有问题的" },
                { en: "change", zh: "变化；改变" },
                { en: "life", zh: "生活" },
                { en: "in the past", zh: "在过去" },
                { en: "travel", zh: "行进" },
                { en: "office", zh: "办公室，办公楼" },
                { en: "these days", zh: "如今，而今" },
                { en: "work from home", zh: "居家办公" },
                { en: "pay", zh: "付钱，支付" },
                { en: "cash", zh: "现金" },
                { en: "helper", zh: "帮手，助手" },
                { en: "fifty", zh: "五十" },
                { en: "email", zh: "电子邮件" },
                { en: "technology", zh: "科技" },
            ]
        },
    ]
  },
"7A": {
    label: "七年级上册",
    semester: "上册",
    grade: 7,
    units: [
      {
        unit: "Unit 1",
        words: [
          { en: "greet", zh: "和（某人）打招呼（或问好）" },
          { en: "introduce", zh: "介绍" },
          { en: "each other", zh: "互相" },
          { en: "go by", zh: "叫作，被称为" },
          { en: "glad", zh: "高兴" },
          { en: "same", zh: "同一的，相同的" },
          { en: "hobby", zh: "业余爱好" },
          { en: "grade", zh: "年级；等级" },
          { en: "classmate", zh: "同班同学" },
          { en: "friendly", zh: "友好的" },
          { en: "full", zh: "满的" },
          { en: "be full of", zh: "满是…的" },
          { en: "energy", zh: "精力，活力" },
          { en: "be good at", zh: "擅长…" },
          { en: "slim", zh: "苗条的" },
          { en: "polite", zh: "有礼貌的" },
          { en: "smart", zh: "聪明的；智能的" },
          { en: "ready", zh: "愿意迅速做某事；准备好" },
          { en: "be ready to do sth", zh: "愿意（或准备好）做某事" },
          { en: "other", zh: "另外，其他" },
          { en: "interested", zh: "感兴趣的" },
          { en: "be interested in", zh: "对…感兴趣" },
          { en: "looks", zh: "相貌，容貌" },
          { en: "character", zh: "性格" },
          { en: "both", zh: "两个都" },
          { en: "enjoy", zh: "享受…的乐趣，欣赏，喜爱" },
          { en: "pretty", zh: "漂亮的，标致的" },
          { en: "shy", zh: "害羞的" },
          { en: "only", zh: "只有，仅仅" },
          { en: "stay", zh: "保持，继续是；暂住" },
          { en: "match", zh: "比赛" },
          { en: "luck", zh: "幸运，好运" },
          { en: "good luck", zh: "祝成功，祝好运" },
          { en: "maths", zh: "数学" },
          { en: "chess", zh: "国际象棋" },
          { en: "Chinese chess", zh: "（中国）象棋" },
          { en: "problem", zh: "数学题；难题，困难" },
          { en: "weekend", zh: "周末" },
          { en: "at the weekend", zh: "在周末" },
          { en: "fun", zh: "有趣的，使人快乐的" },
          { en: "make friends with", zh: "与…交朋友" },
        ]
      },
      {
        unit: "Unit 2",
        words: [
          { en: "jog", zh: "慢跑，慢步长跑（尤指锻炼）" },
          { en: "paint", zh: "用颜料画；在…上刷油漆；油漆" },
          { en: "paper-cutting", zh: "剪纸" },
          { en: "all kinds of", zh: "各种各样的" },
          { en: "fit", zh: "健康的" },
          { en: "around", zh: "围绕，环绕" },
          { en: "change", zh: "改变，变化" },
          { en: "life", zh: "个人生活；生命" },
          { en: "museum", zh: "博物馆" },
          { en: "thing", zh: "东西" },
          { en: "apart", zh: "分开" },
          { en: "take apart", zh: "拆分" },
          { en: "fix", zh: "修理；安装" },
          { en: "endless", zh: "无穷无尽的，不计其数的" },
          { en: "scientist", zh: "科学家" },
          { en: "dream", zh: "梦想；梦" },
          { en: "true", zh: "真正的，实质的" },
          { en: "come true", zh: "实现，成为现实" },
          { en: "at weekends", zh: "在周末" },
          { en: "club", zh: "社团，俱乐部" },
          { en: "member", zh: "成员" },
          { en: "geography", zh: "地理（学）" },
          { en: "p.m.", zh: "下午" },
          { en: "volleyball", zh: "排球" },
          { en: "each", zh: "每个，各自" },
          { en: "once", zh: "一次" },
          { en: "join", zh: "加入；与…一道去" },
          { en: "meeting", zh: "会面；会议" },
          { en: "sound", zh: "听起来" },
          { en: "plan", zh: "计划" },
          { en: "questionnaire", zh: "调查问卷" },
          { en: "role", zh: "角色" },
          { en: "model", zh: "模范，典型；模特" },
          { en: "role model", zh: "楷模，行为榜样" },
          { en: "design", zh: "设计" },
          { en: "skill", zh: "技能" },
          { en: "painting", zh: "画作" },
          { en: "artist", zh: "艺术家，（尤指）画家" },
          { en: "master", zh: "能手，擅长…者；大师，；师父" },
          { en: "work", zh: "作品；著作" },
          { en: "become", zh: "成为" },
          { en: "designer", zh: "设计师" },
          { en: "future", zh: "未来" },
          { en: "in (the) future", zh: "在未来" },
          { en: "hope", zh: "希望" },
        ]
      },
      {
        unit: "Unit 3",
        words: [
          { en: "building", zh: "大楼，建筑物" },
          { en: "field", zh: "运动场" },
          { en: "sports field", zh: "体育场" },
          { en: "dining", zh: "吃饭" },
          { en: "hall", zh: "大厅，礼堂" },
          { en: "dining hall", zh: "食堂，餐厅" },
          { en: "lab", zh: "实验室" },
          { en: "part", zh: "部分" },
          { en: "modern", zh: "现代化的，先进的；；现代的" },
          { en: "as well", zh: "也" },
          { en: "bright", zh: "明亮的" },
          { en: "perfect", zh: "完美的" },
          { en: "spend", zh: "度过，花（时间）；花（钱）" },
          { en: "chat", zh: "闲聊" },
          { en: "different", zh: "不同的" },
          { en: "exciting", zh: "令人激动的" },
          { en: "take place", zh: "发生" },
          { en: "noticeboard", zh: "布告板，告示牌" },
          { en: "gate", zh: "大门" },
          { en: "news", zh: "新闻" },
          { en: "board", zh: "布告牌；木板" },
          { en: "like", zh: "例如；像" },
          { en: "trust", zh: "相信" },
          { en: "more", zh: "更多的，；更大的；更，更多" },
          { en: "really", zh: "很，十分；真正地" },
          { en: "soon", zh: "很快，马上" },
          { en: "teach", zh: "教（课程），讲授" },
          { en: "team", zh: "队；组" },
          { en: "form", zh: "班主任" },
          { en: "show", zh: "演出；展览；音乐会" },
          { en: "grey", zh: "灰色的" },
          { en: "thousand", zh: "数以千计的；一千" },
          { en: "fact", zh: "事实" },
          { en: "in fact", zh: "确切地说；事实上" },
          { en: "borrow", zh: "借" },
          { en: "newspaper", zh: "报纸" },
          { en: "magazine", zh: "杂志" },
          { en: "else", zh: "其他的，别的" },
          { en: "care", zh: "关心；小心" },
          { en: "care about", zh: "关心" },
          { en: "event", zh: "事件；活动" },
          { en: "together", zh: "一起" },
          { en: "quite", zh: "相当；非常" },
          { en: "large", zh: "大的" },
          { en: "special", zh: "特殊的，特别的" },
        ]
      },
      {
        unit: "Unit 4",
        words: [
          { en: "a.m.", zh: "上午" },
          { en: "get up", zh: "起床" },
          { en: "activity", zh: "活动" },
          { en: "housework", zh: "家务劳动，家务事" },
          { en: "homework", zh: "家庭作业" },
          { en: "weekday", zh: "工作日" },
          { en: "on weekdays", zh: "在工作日" },
          { en: "usually", zh: "通常" },
          { en: "a little", zh: "一点，少量；少量的，一些" },
          { en: "myself", zh: "我自己；亲自" },
          { en: "enjoy oneself", zh: "玩得开心，得到乐趣" },
          { en: "first", zh: "第一（的）；；首先" },
          { en: "term", zh: "学期；期" },
          { en: "start", zh: "（使）开始" },
          { en: "writer", zh: "作家" },
          { en: "language", zh: "语言" },
          { en: "amazing", zh: "令人大为惊奇的" },
          { en: "biology", zh: "生物学" },
          { en: "nature", zh: "大自然；天性" },
          { en: "field", zh: "田，地；领域" },
          { en: "trip", zh: "旅行" },
          { en: "field trip", zh: "野外考察，实地考察" },
          { en: "leave", zh: "离开；使保留" },
          { en: "leave for", zh: "动身去，到…地方去" },
          { en: "pick", zh: "采，摘；挑选" },
          { en: "would", zh: "想（表；示愿意、喜欢、不愿意等）" },
          { en: "would like", zh: "愿意，想要" },
          { en: "of course", zh: "当然" },
          { en: "seldom", zh: "很少" },
          { en: "tennis", zh: "网球" },
          { en: "roller skate", zh: "滑旱冰，溜旱冰" },
          { en: "grow", zh: "（使）生长，发育" },
          { en: "tour", zh: "参观；旅行" },
          { en: "website", zh: "网站" },
          { en: "video", zh: "视频" },
          { en: "outside", zh: "在（向）外面" },
          { en: "peace", zh: "平静；和平" },
          { en: "quiet", zh: "宁静，平静" },
          { en: "teamwork", zh: "团队合作" },
          { en: "better", zh: "更好的" },
          { en: "tiring", zh: "累人的" },
          { en: "duty", zh: "职责，任务；责任，义务" },
          { en: "area", zh: "区域；面积；领域" },
          { en: "take part in", zh: "参加" },
          { en: "through", zh: "以，凭借；通过；穿过" },
          { en: "group", zh: "组，群，批" },
          { en: "turn", zh: "（依次轮到的）机会" },
          { en: "take turns", zh: "轮流" },
          { en: "empty", zh: "倒空，腾空" },
          { en: "bin", zh: "垃圾桶" },
          { en: "take care of", zh: "照顾" },
          { en: "something", zh: "某事，某物" },
        ]
      },
      {
        unit: "Unit 5",
        words: [
          { en: "lifestyle", zh: "生活方式" },
          { en: "cucumber", zh: "黄瓜" },
          { en: "lemon", zh: "柠檬" },
          { en: "watermelon", zh: "西瓜" },
          { en: "pepper", zh: "胡椒粉" },
          { en: "chocolate", zh: "巧克力" },
          { en: "beef", zh: "牛肉" },
          { en: "carrot", zh: "胡萝卜" },
          { en: "pork", zh: "猪肉" },
          { en: "sweet", zh: "糖果；甜食；可爱的" },
          { en: "snack", zh: "点心，小吃" },
          { en: "health", zh: "健康" },
          { en: "delicious", zh: "美味的" },
          { en: "diet", zh: "日常饮食" },
          { en: "important", zh: "重要的" },
          { en: "without", zh: "没有" },
          { en: "pancake", zh: "烙饼，薄饼" },
          { en: "tofu", zh: "豆腐" },
          { en: "sugar", zh: "食糖" },
          { en: "tooth", zh: "牙，齿" },
          { en: "homebody", zh: "喜欢待在家里的人" },
          { en: "mutton", zh: "羊肉" },
          { en: "have a sweet tooth", zh: "爱吃甜食" },
          { en: "stay up", zh: "熬夜" },
          { en: "unhealthy", zh: "不健康的" },
          { en: "less", zh: "较少的，更少的；少，较少" },
          { en: "need", zh: "需要；需要" },
          { en: "enough", zh: "足够的" },
          { en: "cheese", zh: "奶酪" },
          { en: "piece", zh: "一块（片）；（文艺作品等的）一；篇（首 / 幅…等）" },
          { en: "bowl", zh: "一碗（的量）；碗" },
          { en: "salt", zh: "盐" },
          { en: "packet", zh: "小袋；小包装纸袋" },
          { en: "kilo", zh: "千克，；公斤" },
          { en: "carton", zh: "硬纸盒，塑料盒" },
          { en: "bottle", zh: "一瓶（的量）；瓶子" },
          { en: "strawberry", zh: "草莓" },
          { en: "maybe", zh: "也许" },
          { en: "than", zh: "比" },
          { en: "almost", zh: "几乎" },
          { en: "chip", zh: "炸薯条；炸薯片" },
          { en: "smartphone", zh: "智能手机" },
          { en: "tablet", zh: "平板电脑" },
          { en: "score", zh: "分数，成绩" },
          { en: "point", zh: "得分；要点；观点；地点" },
          { en: "meal", zh: "一餐所吃的食物；一顿饭" },
          { en: "porridge", zh: "粥" },
          { en: "whole", zh: "全部的；整个的；整个" },
          { en: "miss", zh: "错过" },
          { en: "rest", zh: "休息时间" },
          { en: "pie", zh: "馅饼" },
          { en: "yogurt", zh: "酸奶" },
          { en: "most", zh: "大多数，；几乎所有；最大，最多" },
        ]
      },
      {
        unit: "Unit 6",
        words: [
          { en: "style", zh: "样式；方式，作风" },
          { en: "blouse", zh: "女士衬衫" },
          { en: "jacket", zh: "夹克衫" },
          { en: "jeans", zh: "牛仔裤" },
          { en: "scarf", zh: "围巾" },
          { en: "tie", zh: "领带" },
          { en: "T-shirt", zh: "恤衫" },
          { en: "calm", zh: "镇静的，沉着的" },
          { en: "fashion", zh: "时装业；流行" },
          { en: "choose", zh: "选择" },
          { en: "could", zh: "（礼貌地请求或征询许可）；能，可以" },
          { en: "advice", zh: "建议" },
          { en: "depend", zh: "取决于" },
          { en: "depend on", zh: "取决于；依靠" },
          { en: "skin", zh: "皮肤" },
          { en: "such as", zh: "诸如" },
          { en: "purple", zh: "紫色" },
          { en: "similar", zh: "相似的" },
          { en: "example", zh: "例子" },
          { en: "for example", zh: "例如" },
          { en: "dark", zh: "深色的；黑暗的" },
          { en: "mix", zh: "混合" },
          { en: "stand out", zh: "突出，显眼" },
          { en: "match", zh: "般配，相配" },
          { en: "suitable", zh: "适合的" },
          { en: "formal", zh: "适合正式场合的，正规的，；庄重的" },
          { en: "suit", zh: "套装，西服" },
          { en: "casual", zh: "非正式的，随便的" },
          { en: "comfortable", zh: "舒适的" },
          { en: "interview", zh: "采访，访谈；面试" },
          { en: "primary", zh: "初等教育的，小学；教育的" },
          { en: "smart", zh: "衣冠楚楚的，衣着讲究的" },
          { en: "date", zh: "日期" },
          { en: "traditional", zh: "传统的" },
          { en: "popular", zh: "广受欢迎的；流行的" },
          { en: "type", zh: "类型，种类" },
          { en: "festival", zh: "节日" },
          { en: "wedding", zh: "婚礼" },
          { en: "just", zh: "仅仅，只不过；正好" },
          { en: "culture", zh: "文化" },
          { en: "country", zh: "国家" },
          { en: "history", zh: "历史" },
          { en: "loose", zh: "宽松的" },
          { en: "belt", zh: "腰带，皮带" },
          { en: "close-fitting", zh: "紧身的" },
          { en: "be made of", zh: "由…制成" },
          { en: "silk", zh: "丝绸" },
          { en: "feel", zh: "摸起来感觉…，手感像…" },
          { en: "smooth", zh: "光滑的" },
          { en: "soft", zh: "软的，柔软的" },
          { en: "cotton", zh: "棉织物，棉布；棉花" },
          { en: "agree", zh: "同意" },
          { en: "feature", zh: "特点，特色" },
          { en: "material", zh: "材料，原料" },
          { en: "leather", zh: "皮革" },
          { en: "size", zh: "尺寸" },
        ]
      },
      {
        unit: "Unit 7",
        words: [
          { en: "wise", zh: "明智的" },
          { en: "yuan", zh: "元（中国货币单位）" },
          { en: "euro", zh: "欧元（欧盟中某些国家的；货币单位）" },
          { en: "pound", zh: "英镑（英国货币单位）" },
          { en: "yen", zh: "日元（日本货币单位）" },
          { en: "rouble", zh: "卢布（俄罗斯货币单位）" },
          { en: "dollar", zh: "元（美国、加拿大、澳大；利亚等国的货币单位）" },
          { en: "lucky", zh: "幸运的" },
          { en: "key", zh: "钥匙" },
          { en: "ring", zh: "环状物，圈形的东西" },
          { en: "baseball", zh: "棒球" },
          { en: "Russian", zh: "俄罗斯（人）的，俄语的" },
          { en: "set", zh: "一套，一副，一组（类似的东西）" },
          { en: "a set of", zh: "一套，一副，一组" },
          { en: "inside", zh: "在（向）…里面" },
          { en: "another", zh: "另一，又一" },
          { en: "colourful", zh: "多彩的" },
          { en: "surprise", zh: "令人惊奇的事情（或；消息等）" },
          { en: "player", zh: "运动员" },
          { en: "protect", zh: "保护，防护" },
          { en: "mall", zh: "购物商场" },
          { en: "across", zh: "在…对面；从…一边到另；一边；遍布" },
          { en: "cost", zh: "需要付，价钱为" },
          { en: "manage", zh: "明智地使用；管理" },
          { en: "budget", zh: "预算" },
          { en: "cover", zh: "足以支付，够付" },
          { en: "education", zh: "教育" },
          { en: "pay", zh: "付款" },
          { en: "pay for", zh: "支付" },
          { en: "flat", zh: "英 > 公寓" },
          { en: "daily", zh: "每日（的）" },
          { en: "percent)", zh: "百分之…" },
          { en: "expensive", zh: "昂贵的" },
          { en: "save", zh: "储蓄；节省" },
          { en: "bank", zh: "银行" },
          { en: "account", zh: "账户" },
          { en: "rainy", zh: "有雨的" },
          { en: "matter", zh: "要紧，有重大影响" },
          { en: "pocket", zh: "口袋" },
          { en: "pocket money", zh: "零花钱" },
          { en: "notebook", zh: "笔记本" },
          { en: "rest", zh: "剩余部分；其他" },
          { en: "bookshop", zh: "书店" },
          { en: "rubber", zh: "橡皮" },
          { en: "as", zh: "作为，当作" },
          { en: "present", zh: "礼物" },
          { en: "away", zh: "（时间或空间上）离开，；在（某距离）处；去别处" },
          { en: "shell", zh: "壳，骨架" },
          { en: "deal", zh: "交易" },
          { en: "coin", zh: "硬币" },
          { en: "online", zh: "在线上，在网上" },
          { en: "lucky money", zh: "压岁钱" },
          { en: "grandparent", zh: "（外）祖父，（外）；祖母" },
          { en: "relative", zh: "亲戚" },
          { en: "send", zh: "发送" },
          { en: "red packet", zh: "红包" },
          { en: "survey", zh: "民意调查；概述" },
          { en: "in need", zh: "在贫困中，在困难中" },
          { en: "beginning", zh: "开头，开端" },
          { en: "habit", zh: "习惯" },
        ]
      },
      {
        unit: "Unit 8",
        words: [
          { en: "celebrate", zh: "庆祝" },
          { en: "dragon", zh: "龙" },
          { en: "dragon boat", zh: "龙舟" },
          { en: "Christmas", zh: "圣诞节" },
          { en: "race", zh: "速度竞赛" },
          { en: "lady", zh: "女士；淑女" },
          { en: "see ... off", zh: "送别…" },
          { en: "throw", zh: "扔" },
          { en: "hang", zh: "悬挂" },
          { en: "onion", zh: "洋葱" },
          { en: "Greek", zh: "希腊（人）的，希腊语的" },
          { en: "tradition", zh: "传统" },
          { en: "symbol", zh: "象征；符号" },
          { en: "midnight", zh: "午夜" },
          { en: "strike", zh: "敲，鸣，报时；击打" },
          { en: "into", zh: "进入，到…里面" },
          { en: "in the hope of", zh: "希望" },
          { en: "ahead", zh: "在前面，向前" },
          { en: "carry", zh: "拿，提，搬；携带" },
          { en: "suitcase", zh: "（旅行用的）手提箱" },
          { en: "block", zh: "街区" },
          { en: "traveller", zh: "旅行；者，游客" },
          { en: "wherever", zh: "在任何地方" },
          { en: "violin", zh: "小提琴" },
          { en: "lively", zh: "有生气的；热闹的" },
          { en: "spring roll", zh: "春卷" },
          { en: "moment", zh: "时刻；瞬间" },
          { en: "at the moment", zh: "现在，当时" },
          { en: "tonight", zh: "在今晚" },
          { en: "double", zh: "双的；两倍的" },
          { en: "mountain", zh: "高山，山岳" },
          { en: "climb", zh: "攀登，爬" },
          { en: "natural", zh: "自然的" },
          { en: "beauty", zh: "美；美人" },
          { en: "respect", zh: "尊敬" },
          { en: "elder", zh: "长者，长辈" },
          { en: "forever", zh: "永远" },
          { en: "decorate", zh: "装饰" },
          { en: "put up", zh: "张贴，挂起" },
          { en: "Spring Festival couplets", zh: "春联" },
          { en: "beforehand", zh: "事先，预先" },
          { en: "prepare", zh: "预备（饭菜）；；把…预备好" },
          { en: "dish", zh: "一道菜，菜肴" },
          { en: "meaning", zh: "意义，意思" },
          { en: "during", zh: "在…期间" },
          { en: "till", zh: "到…时，；直到…为止" },
          { en: "lantern", zh: "灯笼" },
          { en: "heart", zh: "内心；心脏" },
        ]
      },
    ]
  },
  "7B": {
    label: "七年级下册",
    semester: "下册",
    grade: 7,
    units: [
      {
        unit: "Unit 1",
        words: [
          { en: "cottage", zh: "（尤指）村舍，小别墅" },
          { en: "farmhouse", zh: "农场住宅，农舍" },
          { en: "mobile", zh: "可移动的" },
          { en: "mobile home", zh: "活动住房" },
          { en: "town", zh: "镇，市镇" },
          { en: "town house", zh: "联排式住宅" },
          { en: "west", zh: "西方；西方的；向西" },
          { en: "hundred", zh: "许多，大量；一百" },
          { en: "study", zh: "书房" },
          { en: "relaxing", zh: "令人放松的，轻松的" },
          { en: "bedroom", zh: "卧室" },
          { en: "own", zh: "自己的，本人的" },
          { en: "south", zh: "南方；南方的；向南" },
          { en: "balcony", zh: "阳台" },
          { en: "view", zh: "风景；看法" },
          { en: "mile", zh: "英里" },
          { en: "relax", zh: "放松，休息" },
          { en: "living room", zh: "客厅，起居室" },
          { en: "ahlan", zh: "你好（阿拉伯语问候语）" },
          { en: "village", zh: "村庄，村镇" },
          { en: "carpet", zh: "地毯" },
          { en: "yard", zh: "院子" },
          { en: "hen", zh: "母鸡" },
          { en: "collect", zh: "收集，采集" },
          { en: "firework", zh: "烟火，烟花" },
          { en: "BBQ (= barbecue )", zh: "烧烤，野外；烧烤" },
          { en: "zero", zh: "零" },
          { en: "square", zh: "平方" },
          { en: "metre", zh: "米" },
          { en: "square metre", zh: "平方米" },
          { en: "number", zh: "号码；数字；数量" },
          { en: "million", zh: "一百万" },
          { en: "calendar", zh: "日历" },
          { en: "lunar", zh: "农历，阴历" },
          { en: "seaside", zh: "海边，海滨" },
          { en: "east", zh: "东方；东方的；向东" },
          { en: "stone", zh: "石头；石块" },
          { en: "seagrass", zh: "海草" },
          { en: "hold", zh: "承受住，坚持住" },
          { en: "hold up", zh: "支撑得住" },
          { en: "wind", zh: "风，气流" },
          { en: "south-west", zh: "西南，西南方" },
          { en: "bamboo", zh: "竹，竹子" },
          { en: "ground", zh: "底层，一楼" },
          { en: "grassland", zh: "草原，草地，草场" },
          { en: "north", zh: "北方；北方的；向北" },
          { en: "tent", zh: "帐篷" },
          { en: "wood", zh: "木，木头" },
          { en: "build", zh: "建筑，建造" },
          { en: "fishing", zh: "钓鱼，捕鱼业 ( 或活动 )" },
          { en: "from time to time", zh: "偶尔，不时" },
          { en: "dry", zh: "干燥的，干的" },
          { en: "ride", zh: "骑；驾驶；搭乘" },
          { en: "centre", zh: "（市镇的）；中心区；中心" },
          { en: "bathroom", zh: "浴室；卫生间" },
          { en: "smell", zh: "闻到，嗅到（气味）" },
          { en: "sky", zh: "天空" },
        ]
      },
      {
        unit: "Unit 2",
        words: [
          { en: "officer", zh: "高级职员，官员" },
          { en: "police officer", zh: "警察，警员" },
          { en: "station", zh: "站，所，局" },
          { en: "police station", zh: "警察局，派出所" },
          { en: "restaurant", zh: "餐厅，餐馆" },
          { en: "neighbour", zh: "邻居" },
          { en: "above", zh: "在（或向）…上面" },
          { en: "lawyer", zh: "律师" },
          { en: "law", zh: "法律；法规" },
          { en: "community", zh: "社区" },
          { en: "volunteer", zh: "志愿者" },
          { en: "laptop", zh: "笔记本电脑" },
          { en: "engineer", zh: "工程师" },
          { en: "check", zh: "检查，核查" },
          { en: "broken", zh: "出了毛病的，破损的" },
          { en: "someone", zh: "某人" },
          { en: "repair", zh: "修理" },
          { en: "anyone", zh: "任何人" },
          { en: "college", zh: "大学；学院" },
          { en: "willing", zh: "愿意，乐意" },
          { en: "be willing to do sth", zh: "乐意做某事" },
          { en: "tidy", zh: "使整洁，使有条理" },
          { en: "such", zh: "如此；这样的" },
          { en: "any time", zh: "在任何时候" },
          { en: "pick up", zh: "捡起，拾起" },
          { en: "rubbish", zh: "垃圾，废弃物" },
          { en: "bench", zh: "长椅" },
          { en: "if", zh: "如果" },
          { en: "in a hurry", zh: "匆忙" },
          { en: "invite", zh: "邀请" },
          { en: "exchange", zh: "交流" },
          { en: "exchange student", zh: "交换生" },
          { en: "notice", zh: "通知" },
          { en: "information", zh: "信息，消息" },
          { en: "below", zh: "在（或到）下面" },
          { en: "fever", zh: "发烧；狂热" },
          { en: "sore", zh: "（发炎）疼痛的，酸痛的" },
          { en: "throat", zh: "咽喉，喉咙" },
          { en: "trouble", zh: "问题，困难；麻烦；使烦恼" },
          { en: "machine", zh: "机器，机械装置" },
          { en: "washing machine", zh: "洗衣机" },
          { en: "anything", zh: "任何事物" },
          { en: "deal", zh: "处理，应付" },
          { en: "wonder", zh: "琢磨，想知道" },
          { en: "able", zh: "能够" },
          { en: "post", zh: "发布；邮寄；邮件" },
          { en: "raise", zh: "筹募" },
          { en: "give away", zh: "赠送；分发" },
        ]
      },
      {
        unit: "Unit 3",
        words: [
          { en: "kilometre", zh: "千米" },
          { en: "wonder", zh: "奇迹，奇观；惊奇" },
          { en: "Olympic", zh: "奥林匹克运动会的" },
          { en: "palace", zh: "宫殿" },
          { en: "object", zh: "物品，东西" },
          { en: "past", zh: "过去" },
          { en: "present", zh: "现在" },
          { en: "shall", zh: "将要，将会" },
          { en: "attract", zh: "吸引" },
          { en: "capital", zh: "首都，首府" },
          { en: "show sb around", zh: "领某人参观" },
          { en: "once", zh: "曾经" },
          { en: "emperor", zh: "皇帝" },
          { en: "ancient", zh: "古代的" },
          { en: "treasure", zh: "珍宝，珍品；财富" },
          { en: "worth", zh: "（指行动）值得，有价值；；值…钱" },
          { en: "be well worth", zh: "很值得" },
          { en: "square", zh: "广场；正方形" },
          { en: "visitor", zh: "游客，来访者" },
          { en: "raise", zh: "提升，举起，提起" },
          { en: "national", zh: "国家的" },
          { en: "flag", zh: "旗" },
          { en: "side", zh: "一侧，一边" },
          { en: "courtyard", zh: "庭院，天井" },
          { en: "taste", zh: "体验，尝试；味道" },
          { en: "remember", zh: "记着，；不忘（去做）" },
          { en: "opera", zh: "歌剧" },
          { en: "local", zh: "当地的，地方的" },
          { en: "theatre", zh: "戏院，剧场" },
          { en: "interest", zh: "吸引力，趣味；兴趣" },
          { en: "place of interest", zh: "名胜" },
          { en: "stadium", zh: "体育场，运动场" },
          { en: "date from", zh: "追溯到，始于" },
          { en: "shopkeeper", zh: "店主" },
          { en: "smile", zh: "微笑；微笑着说；笑容" },
          { en: "sandwich", zh: "三明治" },
          { en: "leaf", zh: "叶子" },
          { en: "wave", zh: "飘动，摇晃；挥手；波浪" },
          { en: "roof", zh: "屋顶" },
          { en: "cage", zh: "笼子" },
          { en: "lie", zh: "躺，平卧；位于" },
          { en: "row", zh: "划 ( 船 )" },
          { en: "high", zh: "有某高度的" },
          { en: "golden", zh: "金色的；美好的" },
          { en: "shape", zh: "形状" },
          { en: "recommend", zh: "推荐；建议" },
          { en: "tower", zh: "塔" },
          { en: "along", zh: "沿着" },
          { en: "take in", zh: "吸入" },
          { en: "sunset", zh: "日落，傍晚" },
          { en: "fantastic", zh: "极好的，了不起的" },
          { en: "fish and chips", zh: "炸鱼薯条" },
          { en: "British", zh: "英国（人）的" },
          { en: "tool", zh: "工具" },
          { en: "end", zh: "终止，结尾" },
          { en: "set", zh: "落（下）" },
          { en: "everything", zh: "一切，每件事" },
          { en: "seem", zh: "似乎，看起来" },
        ]
      },
      {
        unit: "Unit 4",
        words: [
          { en: "folk", zh: "传统民间的，民俗的" },
          { en: "china", zh: "瓷器" },
          { en: "clay", zh: "黏土，陶土" },
          { en: "teapot", zh: "茶壶" },
          { en: "taste", zh: "有…的味道" },
          { en: "woodcarving", zh: "木雕，木雕品" },
          { en: "even", zh: "甚至，即使" },
          { en: "carve", zh: "雕刻" },
          { en: "scene", zh: "场面；界；（戏剧等的）场" },
          { en: "craft", zh: "手艺，工艺" },
          { en: "quickly", zh: "迅速地" },
          { en: "scissors", zh: "剪刀" },
          { en: "knife", zh: "刀" },
          { en: "add", zh: "补充说；添加" },
          { en: "practice", zh: "练习，训练" },
          { en: "landscape", zh: "景色，景观；地貌" },
          { en: "paper-cut", zh: "剪纸（作品）" },
          { en: "decoration", zh: "装饰品；装饰" },
          { en: "express", zh: "表达，表示" },
          { en: "happiness", zh: "幸福，快乐" },
          { en: "couple", zh: "夫妇" },
          { en: "hand", zh: "交，递，给" },
          { en: "mean", zh: "意思是；意味着" },
          { en: "alive", zh: "活着的" },
          { en: "warmth", zh: "温暖" },
          { en: "form", zh: "类型，种类；形式" },
          { en: "still", zh: "还是，仍然" },
          { en: "mine", zh: "我的" },
          { en: "hers", zh: "她的" },
          { en: "yours", zh: "你的，您的；你们的" },
          { en: "ours", zh: "我们的" },
          { en: "theirs", zh: "他们（她们，它们）的（所；有物）" },
          { en: "his", zh: "他的" },
          { en: "postcard", zh: "明信片" },
          { en: "Chinese knot", zh: "中国结" },
          { en: "figure", zh: "（人或动物的）雕像，塑像" },
          { en: "mould", zh: "模具" },
          { en: "simple", zh: "简单的；简朴的" },
          { en: "cloth", zh: "织物，布料" },
          { en: "etc.", zh: "等等，以及其他" },
          { en: "outdoor", zh: "室外的，户外的" },
          { en: "happen", zh: "发生，出现" },
          { en: "ordinary", zh: "普通的，平常的" },
          { en: "everyday", zh: "日常的，每天的" },
          { en: "creative", zh: "有创造力的；创造性的" },
          { en: "respect", zh: "尊敬" },
          { en: "spirit", zh: "精神" },
          { en: "handicraft", zh: "手工艺" },
          { en: "basic", zh: "基本的；初级的" },
          { en: "cultural", zh: "文化的" },
          { en: "value", zh: "价值" },
          { en: "inkstick", zh: "墨（条）" },
          { en: "among", zh: "在…中，…之一" },
          { en: "largely", zh: "主要地，很大程度上" },
          { en: "painter", zh: "画家" },
          { en: "pine", zh: "松木；松树" },
          { en: "main", zh: "主要的，最重要的" },
          { en: "itself", zh: "它本身" },
          { en: "ink", zh: "墨水，油墨" },
          { en: "brush", zh: "画笔，刷子" },
          { en: "inkstone", zh: "砚台" },
        ]
      },
      {
        unit: "Unit 5",
        words: [
          { en: "bat", zh: "蝙蝠" },
          { en: "butterfly", zh: "蝴蝶" },
          { en: "honeybee", zh: "蜜蜂" },
          { en: "ant", zh: "蚂蚁" },
          { en: "wing", zh: "翅膀，翼" },
          { en: "taste", zh: "尝，品；吃，喝" },
          { en: "awake", zh: "醒着的" },
          { en: "up to", zh: "达到（某数量、程度等）" },
          { en: "insect", zh: "昆虫" },
          { en: "lift", zh: "举起" },
          { en: "times", zh: "倍" },
          { en: "weight", zh: "重量" },
          { en: "hole", zh: "孔" },
          { en: "worker", zh: "工蜂；工人" },
          { en: "gram", zh: "克" },
          { en: "honey", zh: "蜂蜜" },
          { en: "snail", zh: "蜗牛" },
          { en: "poem", zh: "诗歌" },
          { en: "clever", zh: "聪明的" },
          { en: "trick", zh: "把戏" },
          { en: "stick", zh: "枝条" },
          { en: "bite", zh: "咬" },
          { en: "fight", zh: "打架" },
          { en: "look after", zh: "照料" },
          { en: "fur", zh: "（动物的）软毛；毛皮" },
          { en: "purr", zh: "（猫）发出呼噜声" },
          { en: "forget", zh: "遗忘；忘记做" },
          { en: "lonely", zh: "孤独的" },
          { en: "parrot", zh: "鹦鹉" },
          { en: "sound", zh: "声音" },
          { en: "alone", zh: "单独；独自" },
          { en: "corner", zh: "角落" },
          { en: "touch", zh: "触摸，碰" },
          { en: "afraid", zh: "担心；害怕，恐惧" },
          { en: "giraffe", zh: "长颈鹿" },
          { en: "bone", zh: "骨头" },
          { en: "neck", zh: "颈，脖子" },
          { en: "snake", zh: "蛇" },
          { en: "tip", zh: "实用的提示" },
          { en: "leave sb alone", zh: "不打扰，不惊动" },
          { en: "human", zh: "人" },
          { en: "radar", zh: "雷达" },
          { en: "allow", zh: "使可能；允许" },
          { en: "safely", zh: "安全地" },
          { en: "echo", zh: "回声" },
          { en: "cheer", zh: "鼓舞；欢呼，加油" },
          { en: "cheer (sb) up", zh: "（使）变得高兴，振作起来" },
          { en: "hard-working", zh: "辛勤的" },
          { en: "useful", zh: "有用的" },
          { en: "save", zh: "拯救，救助" },
          { en: "correct", zh: "正确的" },
          { en: "relationship", zh: "关系" },
          { en: "care for", zh: "喜欢，关心" },
          { en: "guinea", zh: "天竺鼠" },
          { en: "round", zh: "圆形的" },
          { en: "loud", zh: "大声的" },
          { en: "noise", zh: "声音，噪声" },
          { en: "down", zh: "沮丧，情绪低落" },
        ]
      },
      {
        unit: "Unit 6",
        words: [
          { en: "ocean", zh: "海洋" },
          { en: "cover", zh: "占（一片面积）；覆盖；遮蔽" },
          { en: "surface", zh: "地面；表面" },
          { en: "desert", zh: "沙漠，荒漠" },
          { en: "forest", zh: "森林" },
          { en: "rock", zh: "岩石" },
          { en: "ground", zh: "地面" },
          { en: "plain", zh: "平原" },
          { en: "flat", zh: "平的，平坦的" },
          { en: "land", zh: "陆地；土地" },
          { en: "rise", zh: "发源；上升，提高；增强" },
          { en: "fresh", zh: "淡的，无盐的；新鲜的" },
          { en: "farming", zh: "耕种，务农" },
          { en: "powerful", zh: "力量大的；有影响力的" },
          { en: "flood", zh: "泛滥，淹没" },
          { en: "destroy", zh: "破坏，摧毁" },
          { en: "nothing", zh: "没有什么" },
          { en: "mostly", zh: "主要地，通常" },
          { en: "sand", zh: "沙，沙子" },
          { en: "nobody", zh: "没有人" },
          { en: "conditions", zh: "环境，条件" },
          { en: "a few", zh: "有些，几个" },
          { en: "survive", zh: "生存，存活" },
          { en: "huge", zh: "巨大的" },
          { en: "planet", zh: "行星" },
          { en: "be home to", zh: "是…的家园" },
          { en: "produce", zh: "生产" },
          { en: "oxygen", zh: "氧，氧气" },
          { en: "breathe", zh: "呼吸；呼出" },
          { en: "would", zh: "将会，就会（带出想象的；结果）" },
          { en: "northern", zh: "北方的，北部的" },
          { en: "Arctic char", zh: "北极鲑" },
          { en: "campfire", zh: "篝火，营火" },
          { en: "camp", zh: "露营" },
          { en: "corn", zh: "玉米" },
          { en: "landform", zh: "地貌；地形" },
          { en: "rainbow", zh: "彩虹" },
          { en: "treat", zh: "乐事，款待" },
          { en: "sight", zh: "景象；视野" },
          { en: "north-west", zh: "西北，西北方" },
          { en: "steep", zh: "陡峭的" },
          { en: "sandstone", zh: "砂岩" },
          { en: "strange", zh: "奇怪的；陌生的" },
          { en: "form", zh: "（使）成形，组成" },
          { en: "power", zh: "力量；电力供应" },
          { en: "rainforest", zh: "（热带）雨林" },
          { en: "waterfall", zh: "瀑布" },
          { en: "mount", zh: "山，山峰" },
          { en: "cloud", zh: "云，云彩" },
          { en: "sunrise", zh: "日出" },
          { en: "wonderland", zh: "（童话中的）；仙境，奇境" },
          { en: "several", zh: "几个，一些" },
          { en: "path", zh: "小路，小径" },
          { en: "step", zh: "台阶，梯级；脚步；步骤" },
          { en: "cable", zh: "线缆，电缆" },
          { en: "cable car", zh: "缆车" },
          { en: "overnight", zh: "在晚上；一夜之间" },
        ]
      },
      {
        unit: "Unit 7",
        words: [
          { en: "cycle", zh: "骑自行车" },
          { en: "horse riding", zh: "骑马" },
          { en: "skate", zh: "（通常指）滑冰，溜冰" },
          { en: "break", zh: "休息" },
          { en: "take a break", zh: "休息" },
          { en: "balance", zh: "平衡能力；平衡" },
          { en: "on one’s own", zh: "独自；独立地" },
          { en: "ski", zh: "滑雪（运动）" },
          { en: "experience", zh: "一次 ) 经历；经验" },
          { en: "set off", zh: "出发" },
          { en: "follow", zh: "遵循；跟随" },
          { en: "detail", zh: "具体情况；细节" },
          { en: "countryside", zh: "农村；乡村" },
          { en: "lost", zh: "迷路的；丢失的" },
          { en: "none", zh: "没有一个" },
          { en: "worried", zh: "担心的；发愁的" },
          { en: "luckily", zh: "幸好，幸运地" },
          { en: "arrive", zh: "到达" },
          { en: "find out", zh: "查明，弄清（情况）" },
          { en: "enjoyable", zh: "令人愉快的" },
          { en: "proud", zh: "自豪的" },
          { en: "be proud of", zh: "为…感到骄傲" },
          { en: "unluckily", zh: "不幸地，遗憾地" },
          { en: "hike", zh: "去…远足，做徒步旅行" },
          { en: "noon", zh: "正午，中午" },
          { en: "later", zh: "后来，随后" },
          { en: "at first", zh: "起初" },
          { en: "little by little", zh: "慢慢地，渐渐地" },
          { en: "picnic", zh: "野餐" },
          { en: "because of", zh: "因为" },
          { en: "campsite", zh: "野营地" },
          { en: "childhood", zh: "童年，幼年" },
          { en: "relaxed", zh: "放松的，冷静的" },
          { en: "asleep", zh: "睡着的" },
          { en: "ever", zh: "在任何时候；曾经" },
          { en: "focus", zh: "集中（注意力、精力等；于）；聚焦（于）" },
          { en: "mind", zh: "头脑；思考能力；聪明人" },
          { en: "roll", zh: "使…成球状（或管状）；管" },
          { en: "roll out", zh: "展开" },
          { en: "sleeping bag", zh: "睡袋" },
          { en: "fall", zh: "进入（某种状态）" },
          { en: "chance", zh: "机会；可能性" },
          { en: "first-time", zh: "首次的，第一次的" },
          { en: "camper", zh: "露营者" },
          { en: "medicine", zh: "药物；医学" },
          { en: "safety", zh: "安全，平安；安全处所" },
          { en: "birdwatching", zh: "观鸟" },
          { en: "binoculars", zh: "双筒望远镜" },
          { en: "clearly", zh: "清楚地；明显地" },
          { en: "had better", zh: "最好" },
          { en: "thirsty", zh: "口渴的；没问题" },
          { en: "camera", zh: "照相机" },
          { en: "narrow", zh: "狭窄的" },
          { en: "support", zh: "帮助；支持；支撑" },
        ]
      },
      {
        unit: "Unit 8",
        words: [
          { en: "king", zh: "王，国王" },
          { en: "partner", zh: "搭档" },
          { en: "giant", zh: "巨大的" },
          { en: "peach", zh: "桃子" },
          { en: "magical", zh: "有魔力的；奇妙的" },
          { en: "journey", zh: "旅程，旅行" },
          { en: "classic", zh: "经典作品，名著" },
          { en: "god", zh: "神" },
          { en: "character", zh: "人物，角色" },
          { en: "lend", zh: "借给" },
          { en: "pass", zh: "通过；结束；逝去" },
          { en: "pass by", zh: "路过，经过" },
          { en: "fall", zh: "落下，掉落；倒下" },
          { en: "hit", zh: "碰撞；击，打；打击" },
          { en: "herself", zh: "她自己" },
          { en: "low", zh: "低的" },
          { en: "locked", zh: "锁住的" },
          { en: "fit", zh: "适合" },
          { en: "notice", zh: "注意到；留意" },
          { en: "lock", zh: "锁" },
          { en: "name", zh: "命名" },
          { en: "series", zh: "连续剧；丛书；；一系列" },
          { en: "factory", zh: "工厂，制造厂" },
          { en: "company", zh: "公司" },
          { en: "just", zh: "刚才，方才" },
          { en: "whether", zh: "是否" },
          { en: "be born", zh: "出生；出现" },
          { en: "lose", zh: "失去" },
          { en: "force", zh: "（武装）力量；力" },
          { en: "publish", zh: "出版；发表（作品）" },
          { en: "die", zh: "死，死亡；消失" },
          { en: "guide", zh: "指南；导游" },
          { en: "fantasy", zh: "奇幻小说；幻想，想象" },
          { en: "set", zh: "为…设置背景于；创立" },
          { en: "real", zh: "真实的，实际存在的" },
          { en: "unreal", zh: "不真实的，虚幻的" },
          { en: "witch", zh: "女巫" },
          { en: "reader", zh: "读者" },
          { en: "imagine", zh: "想象" },
          { en: "while", zh: "在…期间，与…同时" },
          { en: "plot", zh: "故事情节" },
          { en: "fairy", zh: "小精灵，仙子" },
          { en: "nurse", zh: "保姆" },
          { en: "happily", zh: "高兴地" },
          { en: "finally", zh: "最终" },
          { en: "walking stick", zh: "手杖；拐棍" },
          { en: "fill", zh: "（使）充满，填满" },
          { en: "give up", zh: "放弃" },
          { en: "in the face of", zh: "面对（困难等）" },
          { en: "task", zh: "任务，工作" },
          { en: "goal", zh: "目标" },
          { en: "solve", zh: "解决" },
          { en: "note", zh: "便条；笔记；音符" },
          { en: "suddenly", zh: "突然" },
          { en: "decide", zh: "决定" },
          { en: "enter", zh: "进入" },
          { en: "towards", zh: "向，朝" },
          { en: "too ... to", zh: "太…而不能" },
          { en: "reach", zh: "够得着；实现；达到" },
          { en: "fail", zh: "失败；未能 ( 做到 )" },
        ]
      },
    ]
  },
  "8A": {
    label: "八年级上册",
    semester: "上册",
    grade: 8,
    units: [
      {
        unit: "Unit 1",
        words: [
          { en: "friendship", zh: "友谊" },
          { en: "honest", zh: "诚实的，正直的" },
          { en: "cheerful", zh: "快乐的，高兴的" },
          { en: "humorous", zh: "幽默的" },
          { en: "caring", zh: "关心他人的，体贴人的" },
          { en: "truth", zh: "事实" },
          { en: "joke", zh: "玩笑" },
          { en: "laugh", zh: "笑，发笑" },
          { en: "brave", zh: "勇敢的" },
          { en: "unhappy", zh: "不开心的" },
          { en: "lie", zh: "撒谎" },
          { en: "person", zh: "人，个人" },
          { en: "thought", zh: "想法，主意" },
          { en: "ponytail", zh: "马尾辫" },
          { en: "seat", zh: "座位" },
          { en: "schoolwork", zh: "学校作业" },
          { en: "trustworthy", zh: "值得信赖的" },
          { en: "patient", zh: "有耐心的" },
          { en: "understand", zh: "理解" },
          { en: "bit", zh: "小量" },
          { en: "a little bit", zh: "有点儿" },
          { en: "funny", zh: "好笑的" },
          { en: "sense", zh: "理解力；感觉" },
          { en: "humour", zh: "幽默" },
          { en: "sense of humour", zh: "幽默感" },
          { en: "bored", zh: "厌倦的，烦闷的" },
          { en: "energetic", zh: "精力充沛的" },
          { en: "active", zh: "积极的；活跃的" },
          { en: "encourage", zh: "鼓励" },
          { en: "believe", zh: "相信" },
          { en: "secret", zh: "秘密" },
          { en: "keep (...) secrets/a secret", zh: "保密" },
          { en: "worse", zh: "（bad 的比较级）更差的" },
          { en: "worst", zh: "（bad 的最高级）最差的" },
          { en: "height", zh: "身高，高度" },
          { en: "sec.", zh: "秒" },
          { en: "test", zh: "测验，考查" },
          { en: "badminton", zh: "羽毛球运动" },
          { en: "however", zh: "然而" },
          { en: "scared", zh: "害怕，恐惧" },
          { en: "nearby", zh: "在附近" },
          { en: "fight", zh: "（与…）搏斗；为…斗争" },
          { en: "dead", zh: "死的" },
          { en: "attack", zh: "攻击，袭击" },
          { en: "danger", zh: "危险" },
          { en: "get along with", zh: "（与某人）和睦相处，关系良好" },
          { en: "nod", zh: "点头" },
          { en: "once", zh: "一…就，一旦" },
          { en: "feeling", zh: "情感；感觉" },
          { en: "have a point", zh: "有道理" },
          { en: "personality", zh: "性格，个性" },
          { en: "thoughtful", zh: "体贴的；缜密思考的" },
        ]
      },
      {
        unit: "Unit 2",
        words: [
          { en: "poor", zh: "贫穷的" },
          { en: "plastic", zh: "塑料的" },
          { en: "cheap", zh: "便宜的" },
          { en: "environment", zh: "环境" },
          { en: "few", zh: "不多，很少" },
          { en: "drama", zh: "戏，剧" },
          { en: "foreign", zh: "外国的" },
          { en: "as ... as ...", zh: "和…一样…" },
          { en: "French", zh: "法语；法国人" },
          { en: "German", zh: "德语；德国人" },
          { en: "look forward", zh: "期待" },
          { en: "go", zh: "尝试" },
          { en: "have a go", zh: "尝试，试图（做某事）" },
          { en: "earthquake", zh: "地震" },
          { en: "offer", zh: "提供" },
          { en: "plenty", zh: "大量" },
          { en: "plenty of", zh: "大量" },
          { en: "hands-on", zh: "实际操作的" },
          { en: "attention", zh: "注意，专心，注意力" },
          { en: "pay attention to", zh: "重视，注意" },
          { en: "aware", zh: "意识到，知道" },
          { en: "be aware of", zh: "意识到" },
          { en: "importance", zh: "重要性" },
          { en: "Japanese", zh: "日本（人）的，日语的" },
          { en: "carefully", zh: "仔细地" },
          { en: "ourselves", zh: "我们自己" },
          { en: "develop", zh: "培养，（使）发展" },
          { en: "junior", zh: "初级的；青少年的" },
          { en: "rocket", zh: "火箭" },
          { en: "blog", zh: "博客，网志" },
          { en: "least", zh: "最少的；最少" },
          { en: "Italian", zh: "意大利（人）的，；意大利语的" },
          { en: "international", zh: "国际（化）的" },
          { en: "textbook", zh: "课本，教材" },
          { en: "search", zh: "搜索，查找" },
          { en: "search for", zh: "搜索，寻找" },
          { en: "finish", zh: "完成，做好" },
          { en: "American", zh: "美国（人）的" },
          { en: "hamburger", zh: "汉堡包" },
          { en: "pizza", zh: "比萨饼" },
          { en: "fried", zh: "油炸的" },
          { en: "salad", zh: "沙拉" },
          { en: "chopsticks", zh: "筷子" },
          { en: "difference", zh: "差异，不同（之处）" },
          { en: "lunchtime", zh: "午餐时间" },
          { en: "biscuit", zh: "饼干" },
          { en: "perhaps", zh: "可能，也许" },
          { en: "boring", zh: "没趣的，令人厌倦的" },
          { en: "suggestion", zh: "建议" },
          { en: "facility", zh: "设施，设备" },
          { en: "uniform", zh: "校服，制服" },
          { en: "improve", zh: "改进，改善" },
          { en: "firstly", zh: "（用于列举）第一" },
          { en: "suggest", zh: "建议" },
          { en: "provide", zh: "提供" },
          { en: "secondly", zh: "（用于列举）第二" },
          { en: "moreover", zh: "此外" },
          { en: "yours sincerely", zh: "谨上，谨启" },
        ]
      },
      {
        unit: "Unit 3",
        words: [
          { en: "learner", zh: "学习者" },
          { en: "feed", zh: "为…提供食物；喂养" },
          { en: "fish", zh: "钓鱼；捕鱼" },
          { en: "lifetime", zh: "一生，有生之年" },
          { en: "journey", zh: "旅程，旅行" },
          { en: "single", zh: "单个的；单身的" },
          { en: "against", zh: "逆，反对" },
          { en: "forward", zh: "向前" },
          { en: "fall behind", zh: "落后" },
          { en: "successful", zh: "有成效的；成功的" },
          { en: "drive", zh: "冲劲；本能需求" },
          { en: "guide", zh: "指导；给某人领路（或导游）" },
          { en: "lifelong", zh: "终身的" },
          { en: "inventor", zh: "发明家" },
          { en: "found", zh: "建立" },
          { en: "talent", zh: "才能；有才能的人" },
          { en: "century", zh: "世纪" },
          { en: "set ... apart", zh: "使…突出，使…与众不同" },
          { en: "print", zh: "印刷行业" },
          { en: "himself", zh: "他自己" },
          { en: "teach oneself", zh: "自学" },
          { en: "bookseller", zh: "书商" },
          { en: "in order to", zh: "为了" },
          { en: "return", zh: "归还" },
          { en: "curious", zh: "好奇的" },
          { en: "storm", zh: "暴风雨" },
          { en: "finding", zh: "调查发现" },
          { en: "predict", zh: "预测" },
          { en: "countless", zh: "数不尽的" },
          { en: "invention", zh: "发明" },
          { en: "come as no surprise", zh: "不足为奇，难怪" },
          { en: "invent", zh: "发明" },
          { en: "for free", zh: "免费" },
          { en: "greatness", zh: "伟大" },
          { en: "success", zh: "成功" },
          { en: "Spanish", zh: "西班牙语；西班牙人" },
          { en: "conversation", zh: "交谈，谈话" },
          { en: "translate", zh: "翻译" },
          { en: "page", zh: "（书刊或纸张的）页" },
          { en: "yourself", zh: "你自己" },
          { en: "yourselves", zh: "你们自己" },
          { en: "record", zh: "录制；记录" },
          { en: "n.", zh: "记录；纪录" },
          { en: "printer", zh: "印刷工，印刷商；印刷机" },
          { en: "slashie", zh: "斜杠族，多重职业者" },
          { en: "dialect", zh: "方言" },
          { en: "a number of", zh: "一些" },
          { en: "besides", zh: "除…之外" },
          { en: "possible", zh: "可能的" },
          { en: "as ... as possible", zh: "尽可能…" },
          { en: "sentence", zh: "句子" },
          { en: "rather", zh: "而不是" },
          { en: "pronunciation", zh: "发音" },
          { en: "grammar", zh: "语法" },
          { en: "slowly", zh: "慢速地，缓慢地" },
          { en: "text", zh: "文本；课本" },
          { en: "speech", zh: "演讲；说话的能力" },
          { en: "aloud", zh: "出声地；大声地" },
          { en: "pronounce", zh: "发音" },
          { en: "correctly", zh: "正确地" },
          { en: "spelling", zh: "拼写" },
          { en: "to one's surprise", zh: "令某人惊讶的是" },
          { en: "repeat", zh: "重复" },
          { en: "tourist", zh: "游客，观光者" },
          { en: "spare", zh: "空闲的，多余的" },
        ]
      },
      {
        unit: "Unit 4",
        words: [
          { en: "mooncake", zh: "月饼" },
          { en: "shelf", zh: "架子" },
          { en: "rose", zh: "玫瑰（花）" },
          { en: "glue", zh: "胶，胶水" },
          { en: "fold", zh: "折叠" },
          { en: "complete", zh: "完成，结束" },
          { en: "DIY", zh: "（=do it yourself）自己动手" },
          { en: "crazy", zh: "狂热的；迷恋的" },
          { en: "be crazy about", zh: "热衷于" },
          { en: "born", zh: "天生的" },
          { en: "mistake", zh: "错误" },
          { en: "power cut", zh: "断电，停电" },
          { en: "pipe", zh: "管道" },
          { en: "fill ... with", zh: "使…充满" },
          { en: "unlucky", zh: "不幸的，不顺利的" },
          { en: "instead", zh: "反而" },
          { en: "course", zh: "课程" },
          { en: "mess", zh: "杂乱，不整洁" },
          { en: "in a mess", zh: "乱七八糟" },
          { en: "lamp", zh: "灯" },
          { en: "catch one’s eye", zh: "引起某人注意" },
          { en: "surprise", zh: "使惊奇，使感到意外" },
          { en: "impossible", zh: "不可能的" },
          { en: "nearly", zh: "几乎，差不多，将近" },
          { en: "can", zh: "金属容器，塑料容器" },
          { en: "everywhere", zh: "到处" },
          { en: "screw", zh: "螺丝" },
          { en: "chalk", zh: "粉笔" },
          { en: "mark", zh: "标记；分数" },
          { en: "instructions", zh: "用法说明" },
          { en: "dangerous", zh: "危险的" },
          { en: "usual", zh: "通常的，寻常的" },
          { en: "tie-dye", zh: "扎染（织物）" },
          { en: "method", zh: "方法" },
          { en: "twist", zh: "使扭曲，使弯曲" },
          { en: "cloth", zh: "布料，织物" },
          { en: "tie", zh: "（用线、绳等）系，拴，绑，捆" },
          { en: "thread", zh: "线" },
          { en: "dye", zh: "给…染色，染" },
          { en: "untie", zh: "解开" },
          { en: "product", zh: "产品" },
          { en: "workshop", zh: "作坊" },
          { en: "pattern", zh: "图案" },
          { en: "clothing", zh: "衣服，服装" },
          { en: "reduce", zh: "减少" },
          { en: "pollution", zh: "污染" },
          { en: "joy", zh: "乐趣" },
          { en: "reason", zh: "理由，原因" },
          { en: "result", zh: "结果，后果" },
          { en: "glove", zh: "手套" },
          { en: "button", zh: "纽扣" },
          { en: "onto", zh: "到…之上，向…之上" },
          { en: "finger", zh: "（手套的）指部；手指" },
          { en: "sew", zh: "缝制" },
        ]
      },
      {
        unit: "Unit 5",
        words: [
          { en: "wild", zh: "野生的" },
          { en: "dolphin", zh: "海豚" },
          { en: "eagle", zh: "雕" },
          { en: "fox", zh: "狐狸" },
          { en: "shark", zh: "鲨鱼" },
          { en: "wolf", zh: "狼" },
          { en: "zebra", zh: "斑马" },
          { en: "king", zh: "大王；国王" },
          { en: "tiny", zh: "极小的" },
          { en: "birth", zh: "出生" },
          { en: "round-the-clock", zh: "全天候的" },
          { en: "weigh", zh: "称，有…重" },
          { en: "satisfying", zh: "令人满足的" },
          { en: "giant", zh: "特大的，巨大的" },
          { en: "giant panda", zh: "大熊猫" },
          { en: "in the wild", zh: "在野外" },
          { en: "face", zh: "面临；面对" },
          { en: "serious", zh: "严重的" },
          { en: "even if", zh: "即使；尽管" },
          { en: "easily", zh: "很可能；容易地" },
          { en: "sick", zh: "生病的" },
          { en: "live on", zh: "以吃…为生" },
          { en: "mainly", zh: "主要地" },
          { en: "as a result", zh: "因此" },
          { en: "government", zh: "政府" },
          { en: "action", zh: "行动" },
          { en: "take action", zh: "采取行动" },
          { en: "nature reserve", zh: "自然保护区" },
          { en: "thanks to", zh: "多亏了，由于" },
          { en: "effort", zh: "努力" },
          { en: "increase", zh: "增加" },
          { en: "protection", zh: "保护" },
          { en: "in danger", zh: "处于危险中" },
          { en: "fat", zh: "胖的" },
          { en: "once in a while", zh: "偶尔地，间或" },
          { en: "manage", zh: "完成（困难的事）" },
          { en: "whale", zh: "鲸" },
          { en: "hunt", zh: "猎杀" },
          { en: "meaningful", zh: "重要的" },
          { en: "accept", zh: "收受，接受" },
          { en: "polar", zh: "北极熊" },
          { en: "meat-eater", zh: "肉食动物" },
          { en: "melt", zh: "融化" },
          { en: "drop", zh: "降低；扔下；掉下" },
          { en: "blue whale", zh: "蓝鲸" },
          { en: "risk", zh: "危险，风险" },
          { en: "at risk", zh: "有危险" },
          { en: "Indian", zh: "印度（人）的" },
          { en: "rhino", zh: "犀牛" },
          { en: "horn", zh: "角" },
          { en: "disaster", zh: "灾害" },
          { en: "certain", zh: "某种，特定的" },
          { en: "illness", zh: "疾病，病" },
          { en: "yours faithfully", zh: "诚挚地致敬" },
        ]
      },
      {
        unit: "Unit 6",
        words: [
          { en: "foggy", zh: "有雾的，雾茫茫的" },
          { en: "snowy", zh: "下雪多的；积雪覆盖的" },
          { en: "pleasant", zh: "宜人的，令人愉快的" },
          { en: "hide", zh: "躲避；藏" },
          { en: "shower", zh: "阵雨" },
          { en: "memory", zh: "回忆" },
          { en: "stream", zh: "小河，溪" },
          { en: "shade", zh: "（树）荫" },
          { en: "lazy", zh: "慵懒的" },
          { en: "pool", zh: "水塘，池塘" },
          { en: "pile", zh: "堆" },
          { en: "upon", zh: "在…上" },
          { en: "harvest", zh: "收割（庄稼）" },
          { en: "crop", zh: "庄稼，作物" },
          { en: "as", zh: "当…时，随着；因为" },
          { en: "temperature", zh: "温度" },
          { en: "sofa", zh: "长沙发" },
          { en: "snowman", zh: "雪人" },
          { en: "blow", zh: "吹，刮；吹气" },
          { en: "shine", zh: "发光，照耀" },
          { en: "smell", zh: "有（或发出）…气味" },
          { en: "heat", zh: "热，热量" },
          { en: "sudden", zh: "突然的" },
          { en: "snowball", zh: "雪球" },
          { en: "fog", zh: "雾" },
          { en: "divide", zh: "（使）分开，分成" },
          { en: "divide ... into ...", zh: "把…分成…" },
          { en: "growth", zh: "生长，发育，成长" },
          { en: "as well as", zh: "除…之处，也，还" },
          { en: "beyond", zh: "超出，除…之外" },
          { en: "connect", zh: "把…联系起来；；建立良好关系" },
          { en: "be connected with", zh: "与…有联系" },
          { en: "positive", zh: "正面的；积极的；肯定的" },
          { en: "effect", zh: "影响，结果；效果" },
          { en: "average", zh: "平均的" },
          { en: "wet", zh: "湿的，潮的" },
          { en: "daylight", zh: "日光" },
          { en: "degree", zh: "度，度数" },
          { en: "sunshine", zh: "阳光" },
          { en: "snowstorm", zh: "雪暴，暴风雪" },
          { en: "get around", zh: "各处走动" },
          { en: "awful", zh: "糟糕的，极讨厌的" },
          { en: "order", zh: "订购" },
          { en: "take care", zh: "保重" },
          { en: "frozen", zh: "结冰的；冷冻的" },
          { en: "thick", zh: "厚的；浓的" },
          { en: "deep", zh: "厚的，深的" },
          { en: "throw", zh: "扔" },
          { en: "sculpture", zh: "雕塑" },
        ]
      },
      {
        unit: "Unit 7",
        words: [
          { en: "coral", zh: "珊瑚" },
          { en: "reef", zh: "礁" },
          { en: "penguin", zh: "企鹅" },
          { en: "ecosystem", zh: "生态系统" },
          { en: "rainfall", zh: "降雨（量）" },
          { en: "climate", zh: "气候" },
          { en: "wetland", zh: "湿地" },
          { en: "include", zh: "包括" },
          { en: "non-living", zh: "非生命的" },
          { en: "pond", zh: "池塘" },
          { en: "around", zh: "大约" },
          { en: "hold", zh: "容纳；拿着；举行" },
          { en: "return", zh: "返回，回去，回来" },
          { en: "get rid", zh: "清除；摆脱" },
          { en: "prevent", zh: "防止" },
          { en: "store", zh: "贮存" },
          { en: "sponge", zh: "海绵块" },
          { en: "act", zh: "起作用；行动；扮演" },
          { en: "kidney", zh: "肾脏" },
          { en: "carbon dioxide", zh: "二氧化碳" },
          { en: "trap", zh: "吸收；使落入险境" },
          { en: "therefore", zh: "因此" },
          { en: "lung", zh: "肺" },
          { en: "sadly", zh: "令人遗憾；不幸地" },
          { en: "ton", zh: "吨" },
          { en: "harm", zh: "伤害，损害" },
          { en: "wildlife", zh: "野生动物" },
          { en: "topic", zh: "话题" },
          { en: "quite a few", zh: "相当多，不少" },
          { en: "sandy", zh: "铺满沙子的，含沙的" },
          { en: "noisy", zh: "吵闹的；充满噪声的" },
          { en: "system", zh: "系统；体系" },
          { en: "cause", zh: "使发生，造成，导致；理由" },
          { en: "damage", zh: "损害，毁坏；损害" },
          { en: "north-east", zh: "东北，东北方" },
          { en: "cover", zh: "躲避处；防护" },
          { en: "rare", zh: "稀罕的，珍贵的" },
          { en: "daytime", zh: "白天" },
          { en: "lead", zh: "造成（后果）" },
          { en: "lead to", zh: "导致" },
          { en: "mud", zh: "泥，淤泥，泥浆" },
          { en: "create", zh: "创建，创造" },
          { en: "set up", zh: "建立" },
          { en: "balanced", zh: "保持平衡的" },
          { en: "project", zh: "项目" },
          { en: "knowledge", zh: "知识" },
          { en: "wastewater", zh: "废水" },
          { en: "sir", zh: "先生" },
          { en: "madam", zh: "女士" },
          { en: "waste", zh: "废料" },
          { en: "kill", zh: "杀死" },
          { en: "environmental", zh: "环境的" },
        ]
      },
      {
        unit: "Unit 8",
        words: [
          { en: "sound", zh: "健康的，完好无损的" },
          { en: "safe and sound", zh: "安然无恙" },
          { en: "emergency", zh: "紧急事件或情况" },
          { en: "situation", zh: "情况" },
          { en: "heating", zh: "供暖（设备）" },
          { en: "lightning", zh: "闪电" },
          { en: "office", zh: "办公室，办公楼" },
          { en: "homeless", zh: "无家可归的" },
          { en: "coach", zh: "长途公共汽车" },
          { en: "road", zh: "道路" },
          { en: "accident", zh: "事故" },
          { en: "typhoon", zh: "台风" },
          { en: "fireman", zh: "消防员" },
          { en: "one another", zh: "互相" },
          { en: "traffic", zh: "交通" },
          { en: "terrible", zh: "可怕的" },
          { en: "slight", zh: "轻微的" },
          { en: "shake", zh: "摇动" },
          { en: "thunder", zh: "雷声" },
          { en: "bomb", zh: "炸弹" },
          { en: "shout", zh: "呼喊，喊叫" },
          { en: "fear", zh: "恐惧" },
          { en: "in fear", zh: "恐惧地，害怕地" },
          { en: "direction", zh: "方向" },
          { en: "in all directions", zh: "四处；到处" },
          { en: "brick", zh: "砖" },
          { en: "end", zh: "结束，终止" },
          { en: "silent", zh: "安静的" },
          { en: "if", zh: "是否" },
          { en: "nervous", zh: "焦虑的；胆怯的" },
          { en: "beat", zh: "（使）规律作响或运动；；用力敲打" },
          { en: "say to oneself", zh: "暗想；自言自语" },
          { en: "calm", zh: "使平静，使镇静" },
          { en: "calm down", zh: "（使）平静" },
          { en: "since", zh: "因为" },
          { en: "weak", zh: "虚弱的" },
          { en: "voice", zh: "嗓音，说话声，唱歌声" },
          { en: "except", zh: "除…之外" },
          { en: "smoke", zh: "烟" },
          { en: "burn", zh: "着火；（使）烧毁，烧伤" },
          { en: "put out", zh: "扑灭，使…熄灭" },
          { en: "badly", zh: "严重地，厉害地" },
          { en: "heavily", zh: "大量地" },
          { en: "guess", zh: "猜测，估计" },
          { en: "hat", zh: "（常指带檐的）帽子" },
          { en: "clear", zh: "清扫，清除" },
          { en: "ring", zh: "发出铃声；（使）发出钟声" },
          { en: "ache", zh: "疼痛" },
          { en: "postman", zh: "邮递员" },
          { en: "airport", zh: "机场" },
          { en: "passport", zh: "护照" },
          { en: "bell", zh: "电铃（声）；钟（声）" },
          { en: "report", zh: "报道；汇报；传闻" },
          { en: "bush", zh: "山林大火" },
          { en: "strength", zh: "强度，力度；力量" },
          { en: "so far", zh: "迄今为止" },
          { en: "including", zh: "包括" },
          { en: "sign", zh: "标牌，指示牌" },
          { en: "injury", zh: "（对躯体的）伤害，损伤" },
          { en: "avoid", zh: "避免，防止" },
          { en: "wound", zh: "伤，伤口" },
          { en: "bleed", zh: "流血，失血" },
          { en: "press", zh: "按，压" },
          { en: "tidal", zh: "海啸，潮汐波" },
          { en: "warn", zh: "警告" },
          { en: "disappear", zh: "消失" },
          { en: "run away from", zh: "逃离" },
        ]
      },
    ]
  },
  "8B": {
    label: "八年级下册",
    semester: "下册",
    grade: 8,
    units: [
      {
        unit: "Unit 1",
        words: [
          { en: "underground", zh: "地铁" },
          { en: "speed", zh: "速度" },
          { en: "high-speed train", zh: "高速列车" },
          { en: "used to modal", zh: "曾经" },
          { en: "crowded", zh: "拥挤的" },
          { en: "convenient", zh: "方便的" },
          { en: "innovation", zh: "创新" },
          { en: "southern", zh: "南部的，南方的" },
          { en: "high-tech", zh: "高技术的，高科技的（尤；指电子方面）" },
          { en: "pioneer", zh: "先锋，先驱" },
          { en: "reform", zh: "改革" },
          { en: "very", zh: "最…的，十足的" },
          { en: "at the heart of", zh: "在…的核心" },
          { en: "technology", zh: "技术" },
          { en: "industry", zh: "行业；工业" },
          { en: "giant", zh: "大公司；巨人，庞然大物" },
          { en: "lead", zh: "引领；领导；负责人；主演" },
          { en: "move", zh: "改变，转变" },
          { en: "wealth", zh: "财富；富有" },
          { en: "a wealth of", zh: "大量的，丰富的" },
          { en: "facility", zh: "设施，设备" },
          { en: "as well as", zh: "除…之外，也，还" },
          { en: "excellent", zh: "优秀的，杰出的" },
          { en: "educational", zh: "教育的，有关；教育的" },
          { en: "award", zh: "奖，奖品" },
          { en: "public", zh: "民众；公众的" },
          { en: "citizen", zh: "居民，市民；公民" },
          { en: "greenway", zh: "林荫道" },
          { en: "electric", zh: "电动的" },
          { en: "planner", zh: "设计者，规划者" },
          { en: "since", zh: "自…以来" },
          { en: "development", zh: "发展，成长" },
          { en: "pioneering", zh: "开拓性的" },
          { en: "creativity", zh: "创造力" },
          { en: "certainly", zh: "无疑，肯定" },
          { en: "key", zh: "关键；键，琴键" },
          { en: "make a living", zh: "谋生" },
          { en: "world-famous", zh: "举世闻名的" },
          { en: "transport", zh: "交通运输系统" },
          { en: "recently", zh: "最近" },
          { en: "already", zh: "已经，早已" },
          { en: "yet", zh: "尚（未），还" },
          { en: "reporter", zh: "记者" },
          { en: "fall in love with", zh: "爱上" },
          { en: "line", zh: "交通线；线（条）；行，列" },
          { en: "step", zh: "迈步，踩，踏，行走" },
          { en: "wide", zh: "宽的，宽阔的" },
          { en: "row", zh: "一排，一列，一行" },
          { en: "muddy", zh: "泥泞的" },
          { en: "villager", zh: "村民" },
          { en: "recent", zh: "近来的，新近的" },
          { en: "hopeful", zh: "抱有希望，满怀希望" },
          { en: "guest", zh: "旅客，房客；客人" },
          { en: "guest house", zh: "小旅馆" },
          { en: "tourism", zh: "旅游业，观光业" },
          { en: "empty", zh: "空的" },
          { en: "theme", zh: "主题" },
          { en: "theme park", zh: "主题乐园" },
          { en: "opinion", zh: "看法，想法" },
          { en: "common", zh: "普遍的；共同的" },
        ]
      },
      {
        unit: "Unit 2",
        words: [
          { en: "according to", zh: "依照，根据" },
          { en: "watercolour", zh: "水彩" },
          { en: "prefer", zh: "较喜欢" },
          { en: "prefer sth/doing sth", zh: "更喜欢（做）某事" },
          { en: "ride", zh: "供乘骑的游乐设施" },
          { en: "scare", zh: "使害怕" },
          { en: "explore", zh: "探索" },
          { en: "rest", zh: "在于，存放于" },
          { en: "rest in", zh: "位于" },
          { en: "reach", zh: "河段，直水道" },
          { en: "rich", zh: "大量含有；丰富多彩的；富有的" },
          { en: "attraction", zh: "向往的地方，有吸引；力的事；吸引" },
          { en: "choice", zh: "选择" },
          { en: "historic", zh: "历史上著名（或重要）的" },
          { en: "learning", zh: "学问，知识；学习" },
          { en: "university", zh: "大学" },
          { en: "body", zh: "机构，团体" },
          { en: "vibes", zh: "氛围" },
          { en: "bank", zh: "岸，河畔" },
          { en: "birthplace", zh: "发源地；出生地" },
          { en: "seat of power", zh: "（中央）政府所在地，权力中心" },
          { en: "dynasty", zh: "朝代" },
          { en: "must-see", zh: "必看的东西" },
          { en: "cave", zh: "洞穴，山洞" },
          { en: "carving", zh: "雕刻术；雕刻品" },
          { en: "lover", zh: "爱好者" },
          { en: "peony", zh: "牡丹，芍药" },
          { en: "abroad", zh: "在国外，到国外" },
          { en: "home and abroad", zh: "国内外，海内外" },
          { en: "admire", zh: "欣赏；钦佩" },
          { en: "make one’s way (to)", zh: "前往" },
          { en: "dreamlike", zh: "梦幻（般）的" },
          { en: "central", zh: "在中心的，中央的" },
          { en: "soldier", zh: "士兵" },
          { en: "imagine", zh: "想象" },
          { en: "site", zh: "地点，位置" },
          { en: "business", zh: "商务，公事；生意" },
          { en: "mix", zh: "混合，混杂，结合" },
          { en: "until", zh: "到…时，直到…为止" },
          { en: "message", zh: "电邮（或手机）信息；消息" },
          { en: "anywhere", zh: "任何地方" },
          { en: "marry", zh: "结婚，嫁，娶" },
          { en: "artwork", zh: "艺术品" },
          { en: "classical", zh: "古典的" },
          { en: "struggle", zh: "奋斗，努力" },
          { en: "period", zh: "时期" },
          { en: "record", zh: "记录；纪录" },
          { en: "hero", zh: "英雄" },
          { en: "twice", zh: "两次" },
          { en: "show off", zh: "衬托；炫耀，卖弄，显示" },
        ]
      },
      {
        unit: "Unit 3",
        words: [
          { en: "click", zh: "点击" },
          { en: "coast", zh: "海岸，海滨" },
          { en: "must", zh: "必须做（或看、买等）的事" },
          { en: "pop", zh: "流行音乐的；通俗的" },
          { en: "band", zh: "乐队" },
          { en: "second to none", zh: "不亚于任何人（事物）" },
          { en: "live", zh: "现场演出的" },
          { en: "whether", zh: "是否" },
          { en: "as for", zh: "至于，关于" },
          { en: "slice", zh: "部分；薄片，块" },
          { en: "truly", zh: "真正，确实" },
          { en: "bridge", zh: "桥" },
          { en: "doubt", zh: "疑问，怀疑" },
          { en: "a bit of everything", zh: "什么都有一点" },
          { en: "count", zh: "数数" },
          { en: "count down", zh: "倒计时" },
          { en: "guard", zh: "卫兵，看守；保卫" },
          { en: "nightlife", zh: "夜生活" },
          { en: "excitement", zh: "激动，兴奋" },
          { en: "digital", zh: "数字式的，数码的" },
          { en: "in person", zh: "亲自，亲身" },
          { en: "menu", zh: "菜单" },
          { en: "sign", zh: "签（名）；和…签约" },
          { en: "sign up", zh: "报名（参加课程）" },
          { en: "training", zh: "训练，培训" },
          { en: "list", zh: "目录，清单" },
          { en: "report", zh: "报告；汇报；报道" },
          { en: "book", zh: "预定，预约" },
          { en: "fit", zh: "使适合（某情况）" },
          { en: "wallet", zh: "钱包" },
          { en: "instead of", zh: "代替，作为…的替换" },
          { en: "cash", zh: "现金" },
          { en: "ongoing", zh: "仍在进行的，不断发展的" },
          { en: "temple", zh: "庙宇，寺院" },
          { en: "project", zh: "项目" },
          { en: "proof", zh: "证据，证明" },
          { en: "communication", zh: "交流，交际" },
          { en: "article", zh: "文章" },
          { en: "closely", zh: "靠近地；细致地" },
          { en: "underwater", zh: "在水下" },
          { en: "complete", zh: "完成，结束" },
          { en: "although", zh: "尽管" },
          { en: "introduction", zh: "介绍" },
          { en: "French", zh: "法国（人）的，法语的" },
          { en: "queen", zh: "女王；王后" },
          { en: "tour", zh: "（在…）旅游，（在…）；巡回演出（或做宣传广告等）" },
          { en: "zoom", zh: "快速移动" },
          { en: "zoom in", zh: "使画面放大，拉近" },
          { en: "crowd", zh: "人群，观众" },
          { en: "completely", zh: "完全地，完整地" },
        ]
      },
      {
        unit: "Unit 4",
        words: [
          { en: "read", zh: "读物，书（或文章等）" },
          { en: "fiction", zh: "小说" },
          { en: "non-fiction", zh: "非虚构作品" },
          { en: "novel", zh: "（长篇）小说" },
          { en: "check out", zh: "察看，看一看；（从图书馆等）借出" },
          { en: "crash", zh: "撞击，碰撞" },
          { en: "be tired out", zh: "累极了" },
          { en: "stomach", zh: "腹部；胃" },
          { en: "fall over", zh: "摔倒" },
          { en: "continue", zh: "继续" },
          { en: "either", zh: "也" },
          { en: "pull", zh: "抽出" },
          { en: "rope", zh: "绳索" },
          { en: "break free", zh: "设法逃脱，努力挣脱" },
          { en: "army", zh: "大批，大群；陆军部队" },
          { en: "straight", zh: "径直；笔直地" },
          { en: "right away", zh: "立即，马上" },
          { en: "review", zh: "评论" },
          { en: "discuss", zh: "讨论，谈论，商量" },
          { en: "clear", zh: "了解清楚的；清澈的；晴朗的" },
          { en: "advise", zh: "提出建议" },
          { en: "hand in", zh: "提交，呈交，上交" },
          { en: "timetable", zh: "时间安排；时刻表" },
          { en: "paragraph", zh: "段落" },
          { en: "summary", zh: "总结" },
          { en: "give away", zh: "泄露，暴露" },
          { en: "ending", zh: "结尾，结局" },
          { en: "rule", zh: "规章；规则" },
          { en: "first of all", zh: "第一，首先" },
          { en: "librarian", zh: "图书管理员" },
          { en: "publishing house", zh: "出版社" },
          { en: "unwilling", zh: "不愿意" },
          { en: "sales", zh: "销售量" },
          { en: "copy", zh: "一本（份，册）；复制品" },
          { en: "especially", zh: "尤其，特别" },
          { en: "literature", zh: "文学" },
          { en: "must-read", zh: "必读的东西" },
          { en: "publisher", zh: "出版人（或机构）" },
          { en: "pirate", zh: "盗印，窃用；海盗" },
          { en: "reader", zh: "读者" },
          { en: "difficulty", zh: "困难" },
          { en: "have difficulty (in) doing sth", zh: "做某事有困难" },
          { en: "copyright", zh: "版权，著作权" },
          { en: "agreement", zh: "同意；一致；协议" },
          { en: "market", zh: "市场" },
          { en: "excuse", zh: "原谅" },
          { en: "excuse me", zh: "劳驾，请原谅" },
          { en: "within", zh: "在…之内" },
          { en: "describe", zh: "描述" },
          { en: "journal", zh: "日志；杂志" },
          { en: "title", zh: "名称，标题；头衔，称谓" },
          { en: "naughty", zh: "顽皮的，淘气的" },
          { en: "faraway", zh: "遥远的" },
          { en: "island", zh: "岛" },
          { en: "though", zh: "尽管" },
        ]
      },
      {
        unit: "Unit 5",
        words: [
          { en: "manners", zh: "礼仪，礼貌" },
          { en: "litter", zh: "垃圾" },
          { en: "tap", zh: "水龙头" },
          { en: "wait in line", zh: "排队等候" },
          { en: "patiently", zh: "耐心地" },
          { en: "congratulations", zh: "祝贺" },
          { en: "hallway", zh: "走廊；正门过道" },
          { en: "on time", zh: "准时" },
          { en: "feel at home", zh: "舒服自在，不拘束" },
          { en: "normally", zh: "通常" },
          { en: "address", zh: "称呼（某人）" },
          { en: "politeness", zh: "礼貌" },
          { en: "realize", zh: "意识到" },
          { en: "behave", zh: "表现" },
          { en: "differently", zh: "不同地" },
          { en: "praise", zh: "称赞，赞美" },
          { en: "pleased", zh: "高兴" },
          { en: "reply", zh: "回答，答复" },
          { en: "modest", zh: "谦虚的" },
          { en: "openly", zh: "公开地，毫不隐瞒地" },
          { en: "host", zh: "主人" },
          { en: "hospitable", zh: "好客的，热情友好的" },
          { en: "plate", zh: "盘子，碟子" },
          { en: "refuse", zh: "拒绝，回绝" },
          { en: "used to sth/doing sth", zh: "习惯于（做）某事" },
          { en: "fully", zh: "完全地，全部地，充分地" },
          { en: "all at once", zh: "一起；同时" },
          { en: "jump the line", zh: "插队" },
          { en: "loudly", zh: "吵闹地" },
          { en: "push", zh: "挤开；推动" },
          { en: "past", zh: "在另一边，到另一侧" },
          { en: "in one’s way", zh: "挡着…的路" },
          { en: "discussion", zh: "讨论" },
          { en: "cheat", zh: "欺骗" },
          { en: "promise", zh: "承诺，许诺" },
          { en: "keep one’s word", zh: "信守诺言" },
          { en: "pear", zh: "梨" },
          { en: "even though", zh: "尽管，即使" },
          { en: "belong", zh: "应在（某处）；适应" },
          { en: "belong to", zh: "属于" },
          { en: "respectfully", zh: "尊敬地" },
          { en: "move", zh: "使感动，打动" },
          { en: "earphones", zh: "耳机" },
          { en: "circle", zh: "圆圈" },
          { en: "tip", zh: "小费" },
          { en: "peaceful", zh: "安静的，平静的" },
          { en: "impolite", zh: "失礼的，粗鲁的" },
          { en: "trouble", zh: "使烦恼；麻烦；折磨" },
          { en: "one another", zh: "互相" },
          { en: "hug", zh: "拥抱" },
          { en: "kiss", zh: "亲吻" },
          { en: "quietly", zh: "安静地；平静地" },
          { en: "rush", zh: "急促；仓促行事" },
          { en: "unless", zh: "除非" },
          { en: "tasty", zh: "美味的，可口的" },
        ]
      },
      {
        unit: "Unit 6",
        words: [
          { en: "blind", zh: "瞎的，失明的" },
          { en: "deaf", zh: "聋的" },
          { en: "disabled", zh: "有残疾的" },
          { en: "elderly", zh: "年纪较大的，上了年纪的" },
          { en: "disability", zh: "（某种）缺陷，障碍" },
          { en: "service", zh: "服务" },
          { en: "donate", zh: "捐赠；捐献" },
          { en: "expect", zh: "预料，预期；期待" },
          { en: "athlete", zh: "运动员" },
          { en: "confidence", zh: "自信心；信心" },
          { en: "require", zh: "需要，依靠" },
          { en: "receive", zh: "受到；接到" },
          { en: "necessary", zh: "必需的，必要的" },
          { en: "wheelchair", zh: "轮椅" },
          { en: "remind", zh: "提醒" },
          { en: "remind sb to do sth", zh: "提醒某人做某事" },
          { en: "seat belt", zh: "（汽车或飞机上的）安全带" },
          { en: "medal", zh: "奖牌，勋章" },
          { en: "gold", zh: "金牌；金" },
          { en: "silver", zh: "银牌；银" },
          { en: "competition", zh: "比赛；竞争" },
          { en: "background", zh: "出身背景；背景" },
          { en: "ability", zh: "才能，本领；能力" },
          { en: "warm-hearted", zh: "善良诚恳的" },
          { en: "courage", zh: "勇气" },
          { en: "achieve", zh: "达到（目标等）；完成" },
          { en: "greatly", zh: "非常，很" },
          { en: "influence", zh: "影响" },
          { en: "voluntary", zh: "义务性的；自愿的" },
          { en: "cross", zh: "穿越，横过" },
          { en: "charity", zh: "慈善机构（或组织）" },
          { en: "western", zh: "西部的；西方国家的" },
          { en: "popularity", zh: "受欢迎，普及" },
          { en: "chemistry", zh: "化学" },
          { en: "north-western", zh: "西北的，；西北方向的" },
          { en: "north-eastern", zh: "东北的，；东北方向的" },
          { en: "suffer", zh: "受折磨；变差" },
          { en: "suffer from", zh: "患…病，遭受" },
          { en: "blood", zh: "血，血液" },
          { en: "disease", zh: "病，疾病" },
          { en: "operation", zh: "手术" },
          { en: "absent", zh: "缺席，不在" },
        ]
      },
      {
        unit: "Unit 7",
        words: [
          { en: "found", zh: "创建；建立" },
          { en: "medical", zh: "医疗的" },
          { en: "lip", zh: "嘴唇" },
          { en: "interviewer", zh: "采访者" },
          { en: "billion", zh: "十亿" },
          { en: "case", zh: "病例；情况，事实；案件" },
          { en: "cure", zh: "治好（疾病）；治愈" },
          { en: "treatment", zh: "治疗" },
          { en: "aim", zh: "目的，目标；瞄准" },
          { en: "patient", zh: "病人" },
          { en: "afford", zh: "能做，买得起" },
          { en: "go to hospital", zh: "去医院看病" },
          { en: "on board", zh: "在飞机上（或船上、火车上）" },
          { en: "train", zh: "培训，训练" },
          { en: "benefit", zh: "得益于，得利于" },
          { en: "eye care", zh: "眼睛保健" },
          { en: "session", zh: "一场" },
          { en: "operate", zh: "动手术" },
          { en: "operate on", zh: "（给…）做手术" },
          { en: "treat", zh: "医治；以…方式对待" },
          { en: "carry on (with)", zh: "继续做" },
          { en: "interview", zh: "采访，访谈；面试" },
          { en: "grateful", zh: "感激的" },
          { en: "darkness", zh: "黑暗" },
          { en: "blind", zh: "使失明" },
          { en: "addition", zh: "增加；增加物" },
          { en: "in addition (to)", zh: "除…以外（还）" },
          { en: "directly", zh: "直接" },
          { en: "leaflet", zh: "传单，小册子" },
          { en: "hand out", zh: "分发" },
          { en: "champion", zh: "捍卫者，声援者，；拥护者；冠军" },
          { en: "right", zh: "权利" },
          { en: "healthcare", zh: "医疗（服务）" },
          { en: "besides", zh: "而且，此外" },
          { en: "progress", zh: "进步，进展" },
          { en: "spread", zh: "传播，散布，扩展，蔓延" },
          { en: "virus", zh: "病毒" },
          { en: "miss out (on)", zh: "错失机会" },
          { en: "war", zh: "战争；斗争" },
          { en: "influential", zh: "有影响力的" },
        ]
      },
      {
        unit: "Unit 8",
        words: [
          { en: "cause", zh: "原因；理由" },
          { en: "soil", zh: "土壤" },
          { en: "chemical", zh: "化学品的；化学的" },
          { en: "truck", zh: "卡车；载重汽车" },
          { en: "unclean", zh: "不洁净的" },
          { en: "fuel", zh: "燃料" },
          { en: "pour", zh: "倾倒，倒出" },
          { en: "air conditioning", zh: "空气；调节系统" },
          { en: "eco-friendly", zh: "环保的" },
          { en: "separate", zh: "（使）分开" },
          { en: "separate ... into", zh: "把…分成" },
          { en: "recycle", zh: "回收利用" },
          { en: "level", zh: "标准，水平" },
          { en: "successfully", zh: "有成效地" },
          { en: "total", zh: "总的，全部的" },
          { en: "strict", zh: "严格的" },
          { en: "control", zh: "控制" },
          { en: "break", zh: "违犯，违背" },
          { en: "punish", zh: "惩罚" },
          { en: "fine", zh: "对…处以罚款" },
          { en: "resource", zh: "资源" },
          { en: "wisely", zh: "明智地" },
          { en: "run out", zh: "用完，耗尽" },
          { en: "make a difference", zh: "有作用，有影响" },
          { en: "management", zh: "管理" },
          { en: "vote", zh: "投票，表决" },
          { en: "poster", zh: "海报" },
          { en: "pollute", zh: "污染" },
          { en: "affect", zh: "影响" },
          { en: "gas", zh: "气体；天然气；汽油" },
          { en: "cough", zh: "咳嗽" },
          { en: "seabird", zh: "海鸟" },
          { en: "desertification", zh: "沙漠化" },
          { en: "hardly", zh: "几乎不，几乎没有" },
          { en: "damage", zh: "损坏，损失；损害" },
          { en: "single-use", zh: "供一次使用的" },
          { en: "second-hand", zh: "二手的" },
          { en: "battery", zh: "电池" },
          { en: "electronic", zh: "电子的" },
          { en: "electricity", zh: "电，电能" },
        ]
      },
    ]
  },
  "9A": {
    label: "九年级上册",
    semester: "上册",
    grade: 9,
    units: [
      {
        unit: "Unit 1",
        words: [
          { en: "organized", zh: "有条理的" },
          { en: "order", zh: "条理;顺序" },
          { en: "explain", zh: "解释" },
          { en: "come up with", zh: "想出,找到(答案)" },
          { en: "keep ... in (good) order", zh: "保持整齐" },
          { en: "careless", zh: "粗心的" },
          { en: "neither", zh: "也不; 两者都不" },
          { en: "neither ... nor ...", zh: "既不...也不..." },
          { en: "nor", zh: "也不" },
          { en: "accountant", zh: "会计" },
          { en: "suppose", zh: "认为,推断;假设" },
          { en: "social", zh: "好交际的;社交的" },
          { en: "involve", zh: "包含,需要;牵涉" },
          { en: "impress", zh: "使留下深刻的好印象" },
          { en: "imagination", zh: "想象力" },
          { en: "manager", zh: "经理" },
          { en: "quit", zh: "离开,离任" },
          { en: "suit", zh: "适合" },
          { en: "railway", zh: "铁路;铁路系统" },
          { en: "mention", zh: "提到,说到,写到" },
          { en: "standard", zh: "标准; 标准的" },
          { en: "tough", zh: "艰难的" },
          { en: "at all times", zh: "总是,随时,永远" },
          { en: "passenger", zh: "乘客" },
          { en: "exactly", zh: "答语)完全正确;准确地" },
          { en: "personality", zh: "性格,个性" },
          { en: "improvement", zh: "改进,改善" },
          { en: "either ... or ...", zh: "要么...要么...,不是...就是..." },
          { en: "decide on", zh: "决定,选定" },
          { en: "take on", zh: "承担(责任),决定做" },
          { en: "challenge", zh: "挑战" },
          { en: "winner", zh: "获胜者" },
          { en: "outgoing", zh: "外向的,友好的" },
          { en: "opposite", zh: "对立的人(或事物)" },
          { en: "kindness", zh: "善良" },
          { en: "matter", zh: "关乎...的事情;问题" },
          { en: "as a matter of fact", zh: "事实上" },
          { en: "let sb down", zh: "使失望" },
          { en: "probably", zh: "很可能,大概" },
          { en: "encouragement", zh: "鼓励" },
          { en: "behaviour", zh: "表现方式;行为" },
          { en: "pass sth on to sb", zh: "传给某人" },
          { en: "son", zh: "儿子" },
          { en: "remain", zh: "保持不变,仍然是" },
          { en: "confident", zh: "自信的" },
          { en: "likely", zh: "可能; 可能的" },
          { en: "negative", zh: "消极的;有害的;否定的" },
          { en: "lecture", zh: "演讲,讲座" },
          { en: "speaker", zh: "发言者;讲(某种语言)的人" },
          { en: "connection", zh: "关联;联结" },
          { en: "point", zh: "指向,指引" },
          { en: "point out", zh: "指出" },
          { en: "pay off", zh: "成功,奏效" },
          { en: "succeed", zh: "成功" },
          { en: "position", zh: "职位;位置" },
          { en: "president", zh: "主席;院长;董事长" },
          { en: "cooperate", zh: "合作" },
          { en: "voice", zh: "表达" },
          { en: "consider", zh: "仔细考虑" },
        ]
      },
      {
        unit: "Unit 2",
        words: [
          { en: "teenage", zh: "青少年的,十几岁的" },
          { en: "drive", zh: "迫使;驾驶" },
          { en: "mad", zh: "气愤;疯的" },
          { en: "be in low spirits", zh: "情绪低落" },
          { en: "lately", zh: "最近" },
          { en: "cut back on sth", zh: "减少,削减,缩减" },
          { en: "decision", zh: "决定" },
          { en: "patience", zh: "耐心" },
          { en: "stick", zh: "粘贴,粘住;刺,插入" },
          { en: "stick to", zh: "坚持" },
          { en: "stress", zh: "精神压力,心理负担; (使)焦虑不安,疲惫不堪" },
          { en: "under stress", zh: "在压力之下,承受压力" },
          { en: "waste", zh: "浪费,滥用" },
          { en: "mobile phone", zh: "手机" },
          { en: "regret", zh: "懊悔,感到遗憾" },
          { en: "exam", zh: "考试" },
          { en: "focused", zh: "注意力集中的,目标明确的" },
          { en: "argue", zh: "争论,争吵,争辩" },
          { en: "silly", zh: "傻的,愚蠢的" },
          { en: "normal", zh: "正常的,典型的" },
          { en: "stress sb out", zh: "使极度焦虑,使压力大" },
          { en: "bottom", zh: "底部;底" },
          { en: "dialogue", zh: "对话" },
          { en: "communicate", zh: "交流; 沟通" },
          { en: "dictionary", zh: "词典,辞书" },
          { en: "hear of", zh: "听说" },
          { en: "youth", zh: "青年;青春" },
          { en: "stage", zh: "阶段,时期;舞台" },
          { en: "experience", zh: "经历;体验" },
          { en: "rapid", zh: "快速的" },
          { en: "ugly", zh: "丑陋的" },
          { en: "mood", zh: "情绪,心情" },
          { en: "risk", zh: "冒...的风险;冒险做" },
          { en: "risk sth/doing sth", zh: "冒...的风险" },
          { en: "go through", zh: "经历,遭受" },
          { en: "adult", zh: "成年人" },
          { en: "mean", zh: "刻薄;吝啬的" },
          { en: "stranger", zh: "陌生人;外地人" },
          { en: "uncomfortable", zh: "不自在的;使人不舒服的" },
          { en: "midterm", zh: "期中的" },
          { en: "tight", zh: "紧的" },
          { en: "overweight", zh: "超重的" },
          { en: "bully", zh: "恐吓,伤害,胁迫; 恃强凌弱之人,恶霸" },
          { en: "stand up for sb/sth", zh: "支持,维护" },
          { en: "screen", zh: "屏幕" },
          { en: "bedtime", zh: "就寝时间" },
          { en: "pain", zh: "痛苦;疼痛" },
          { en: "get sb down", zh: "使悲伤(沮丧、忧郁等)" },
          { en: "shame", zh: "羞耻;让人遗憾的事" },
        ]
      },
      {
        unit: "Unit 3",
        words: [
          { en: "seed", zh: "种子;起因" },
          { en: "dancer", zh: "舞蹈演员,跳舞者" },
          { en: "recognize", zh: "赞赏,公认;认识,认出" },
          { en: "contribution", zh: "贡献" },
          { en: "overcome", zh: "克服,解决" },
          { en: "suffering", zh: "痛苦,苦难" },
          { en: "household", zh: "家庭,一户" },
          { en: "household name", zh: "家喻户晓的人物" },
          { en: "inspiration", zh: "鼓舞人心的人(或事物);灵感" },
          { en: "further", zh: "促进,增进" },
          { en: "diagnose", zh: "诊断" },
          { en: "be diagnosed with", zh: "被诊断出患有...(疾病)" },
          { en: "rob", zh: "掠夺" },
          { en: "shortly", zh: "不久" },
          { en: "rob sb of sth", zh: "剥夺(某人所需或应得之物)" },
          { en: "muscle", zh: "肌肉" },
          { en: "yet", zh: "然而,但是" },
          { en: "surprisingly", zh: "使人惊奇地" },
          { en: "attitude", zh: "态度" },
          { en: "despite", zh: "尽管,即使" },
          { en: "universe", zh: "宇宙" },
          { en: "continued", zh: "连续不断的" },
          { en: "scientific", zh: "科学的" },
          { en: "audience", zh: "读者,观众,听众" },
          { en: "highly", zh: "很,非常" },
          { en: "whenever", zh: "无论何时" },
          { en: "achievement", zh: "成就" },
          { en: "stand in sb's way", zh: "妨碍某人,阻止某人" },
          { en: "however", zh: "不管多么" },
          { en: "musician", zh: "音乐家" },
          { en: "death", zh: "死亡" },
          { en: "shoulder", zh: "肩膀" },
          { en: "make it (to)", zh: "获得成功" },
          { en: "coach", zh: "教练" },
          { en: "pretty", zh: "相当" },
          { en: "knee", zh: "膝,膝盖" },
          { en: "challenging", zh: "有挑战性的" },
          { en: "cheers", zh: "再见;干杯" },
          { en: "fair", zh: "公平的,公正的" },
          { en: "fair play", zh: "公平竞赛,公平办事" },
          { en: "Irish", zh: "爱尔兰(人)的,爱尔兰语的" },
          { en: "gymnast", zh: "体操运动员" },
          { en: "compete", zh: "参加比赛;竞争" },
          { en: "injure", zh: "伤害,使受伤" },
          { en: "performance", zh: "表现;表演" },
          { en: "will", zh: "意志,毅力;意愿" },
          { en: "runner", zh: "赛跑运动员,跑步者" },
          { en: "semi-final", zh: "半决赛" },
          { en: "whatever", zh: "无论什么,不管什么" },
          { en: "diary", zh: "日记" },
          { en: "victory", zh: "胜利" },
          { en: "live through sth", zh: "经历(灾难等)而幸存" },
          { en: "perform", zh: "做,执行; 表演" },
          { en: "disappoint", zh: "使...失望" },
        ]
      },
      {
        unit: "Unit 4",
        words: [
          { en: "cactus", zh: "仙人掌" },
          { en: "lotus", zh: "莲属植物;莲花图案" },
          { en: "self", zh: "自我;本来面目" },
          { en: "peanut", zh: "花生" },
          { en: "unused", zh: "未用过的" },
          { en: "pity", zh: "遗憾" },
          { en: "dig", zh: "挖,掘,凿" },
          { en: "a couple of", zh: "几个;一对" },
          { en: "dig up", zh: "掘地;挖掘出" },
          { en: "celebration", zh: "庆祝;庆典" },
          { en: "oil", zh: "食用油;石油" },
          { en: "unlike", zh: "不像" },
          { en: "dig out", zh: "挖掘出;发掘" },
          { en: "stem", zh: "茎,梗,柄" },
          { en: "bear", zh: "结(果实),开(花);生(孩子)" },
          { en: "attractive", zh: "吸引人的" },
          { en: "compare", zh: "比较,对比" },
          { en: "expect sth of sb", zh: "期待某人做某事(或具备某种能力、品质)" },
          { en: "hidden", zh: "隐藏的,隐匿的" },
          { en: "society", zh: "社会" },
          { en: "helpfulness", zh: "乐于助人" },
          { en: "purpose", zh: "重要意义;目的,意图" },
          { en: "satisfied", zh: "满意的" },
          { en: "boss", zh: "老板,上司" },
          { en: "dentist", zh: "牙科医生" },
          { en: "wife", zh: "妻子" },
          { en: "stamp", zh: "邮票" },
          { en: "daughter", zh: "女儿" },
          { en: "passage", zh: "章节;段落;乐段" },
          { en: "devote", zh: "献身,致力,专心" },
          { en: "devote...to...", zh: "把...奉献给..." },
          { en: "research", zh: "研究" },
          { en: "house", zh: "收藏,安置" },
          { en: "overtourism", zh: "过度旅游" },
          { en: "graduate", zh: "大学)毕业" },
          { en: "digitalize", zh: "使(信息)数字化" },
          { en: "serve", zh: "能满足...的需要; 服务;提供" },
          { en: "condition", zh: "状态,状况" },
          { en: "contribute", zh: "贡献,增进,促成" },
          { en: "judge", zh: "判断,认为; 审判" },
          { en: "amazed", zh: "大为惊奇" },
          { en: "make up one's mind", zh: "下定决心" },
        ]
      },
      {
        unit: "Unit 5",
        words: [
          { en: "keyboard", zh: "键盘" },
          { en: "bow", zh: "琴弓;弓" },
          { en: "string", zh: "弦;细绳" },
          { en: "guitar", zh: "吉他" },
          { en: "strength", zh: "强度,力度;力量" },
          { en: "pear-shaped", zh: "梨形的" },
          { en: "musical", zh: "音乐的" },
          { en: "instrument", zh: "乐器;仪器" },
          { en: "boundary", zh: "边界" },
          { en: "composer", zh: "作曲家" },
          { en: "unique", zh: "独一无二的" },
          { en: "earn", zh: "赢得,博得; 赚得,挣钱" },
          { en: "familiar", zh: "熟悉的" },
          { en: "familiar with sth", zh: "通晓,熟悉" },
          { en: "worldwide", zh: "在世界各地; 影响全世界的" },
          { en: "simply", zh: "仅仅" },
          { en: "flow", zh: "流,流动" },
          { en: "eastern", zh: "东方国家的;东方的" },
          { en: "bell", zh: "钟(声);电铃(声)" },
          { en: "talented", zh: "有天赋的" },
          { en: "mixture", zh: "混合" },
          { en: "press", zh: "新闻界;平面媒体" },
          { en: "brain", zh: "脑;智力" },
          { en: "ticket", zh: "票,入场券" },
          { en: "concert", zh: "音乐会" },
          { en: "rather", zh: "相当,在某种程度上" },
          { en: "country", zh: "乡村" },
          { en: "jazz", zh: "爵士乐" },
          { en: "rock", zh: "摇滚乐" },
          { en: "drum", zh: "鼓" },
          { en: "cowboy", zh: "牛仔" },
          { en: "African", zh: "非洲(人)的" },
          { en: "American", zh: "美国人,美洲人" },
          { en: "make up", zh: "创作,编写;编造" },
          { en: "attend", zh: "出席,参加;定期去(某处)" },
          { en: "quick", zh: "迅速的" },
          { en: "jasmine", zh: "茉莉" },
          { en: "flute", zh: "长笛" },
          { en: "range", zh: "一系列;类;范围" },
          { en: "gentle", zh: "柔和的;温柔的" },
          { en: "download", zh: "下载" },
          { en: "calming", zh: "令人平静的" },
        ]
      },
      {
        unit: "Unit 6",
        words: [
          { en: "calligrapher", zh: "书法家" },
          { en: "date back (to...)", zh: "追溯到" },
          { en: "bottled", zh: "瓶装的" },
          { en: "calligraphy", zh: "书法" },
          { en: "tip", zh: "尖,尖端" },
          { en: "final", zh: "最终的,最后的" },
          { en: "stroke", zh: "笔画" },
          { en: "appear", zh: "出现" },
          { en: "doorway", zh: "门口,门道" },
          { en: "give it a try", zh: "试一试" },
          { en: "still", zh: "静止的,平静的,安静的" },
          { en: "concentrate", zh: "集中(注意力); 使...集中" },
          { en: "concentrate on", zh: "集中注意力(做某事)" },
          { en: "pleasure", zh: "快乐,满足" },
          { en: "take pleasure in", zh: "从...中获得乐趣" },
          { en: "undoubtedly", zh: "无疑地" },
          { en: "character", zh: "文字" },
          { en: "artistic", zh: "艺术的" },
          { en: "characteristic", zh: "特征" },
          { en: "breath", zh: "呼吸的空气" },
          { en: "slow down (", zh: "使)慢下来" },
          { en: "pressure", zh: "心理压力;压力" },
          { en: "under pressure", zh: "承受着压力;被迫" },
          { en: "pride", zh: "自豪,骄傲" },
          { en: "beautifully", zh: "漂亮地" },
          { en: "technique", zh: "技巧,技艺" },
          { en: "unfamiliar", zh: "不熟悉的" },
          { en: "up close", zh: "很近地,在近处" },
          { en: "basket", zh: "篮,篓,筐" },
          { en: "perhaps", zh: "可能,也许" },
          { en: "general", zh: "一般的;总的" },
          { en: "brushwork", zh: "画法,笔触" },
          { en: "similarity", zh: "相似性" },
          { en: "present", zh: "展现" },
          { en: "sometime", zh: "在某时" },
          { en: "in general", zh: "大体上;总的说来" },
          { en: "expert", zh: "专家" },
          { en: "a great deal", zh: "大量,很多" },
        ]
      },
      {
        unit: "Unit 7",
        words: [
          { en: "action", zh: "动作片" },
          { en: "comedy", zh: "喜剧" },
          { en: "cartoon", zh: "卡通片;漫画" },
          { en: "documentary", zh: "纪录片,纪实广播(或电视)节目" },
          { en: "romance", zh: "爱情故事;传奇故事" },
          { en: "all-time", zh: "空前的,一向的" },
          { en: "loss", zh: "去世;丧失,损失" },
          { en: "actress", zh: "女演员" },
          { en: "humanitarian", zh: "人道主义者" },
          { en: "ballet", zh: "芭蕾舞" },
          { en: "charm", zh: "魅力" },
          { en: "insist", zh: "坚持说;坚决要求" },
          { en: "based", zh: "基于" },
          { en: "based upon/on", zh: "以...为基础(或根据)" },
          { en: "major", zh: "主要的,重要的" },
          { en: "mark", zh: "是...的迹象,表明;标示" },
          { en: "career", zh: "事业;职业" },
          { en: "princess", zh: "公主" },
          { en: "appearance", zh: "演出;出现" },
          { en: "angel", zh: "天使" },
          { en: "radio", zh: "无线电广播;收音机" },
          { en: "discover", zh: "发现" },
          { en: "cancer", zh: "癌症" },
          { en: "pass away", zh: "去世" },
          { en: "peacefully", zh: "平静地" },
          { en: "star", zh: "主演,担任主角" },
          { en: "a number of", zh: "一些" },
          { en: "aid", zh: "援助,帮助" },
          { en: "tireless", zh: "不知疲倦的" },
          { en: "rush hour", zh: "交通高峰期" },
          { en: "actor", zh: "演员" },
          { en: "park", zh: "停(车)" },
          { en: "script", zh: "剧本;脚本" },
          { en: "storyteller", zh: "故事(或小说)作者" },
          { en: "mistake", zh: "误会,误解" },
          { en: "steal", zh: "偷,窃取" },
          { en: "steal the show", zh: "吸引更多的注意,抢风头" },
          { en: "supporting", zh: "次要的,配角的" },
          { en: "kung fu", zh: "功夫" },
          { en: "handsome", zh: "英俊的,帅气的" },
          { en: "inspiring", zh: "激励的,鼓舞人心的" },
          { en: "price", zh: "价格;代价" },
          { en: "scriptwriter", zh: "编剧" },
          { en: "director", zh: "导演" },
          { en: "film-maker", zh: "制片人" },
          { en: "film", zh: "拍摄" },
          { en: "shoot", zh: "拍摄" },
          { en: "editor", zh: "剪辑员;编辑" },
          { en: "post-production", zh: "后期制作" },
          { en: "bring sb/sth to life", zh: "使更有趣(生动)" },
          { en: "come to life", zh: "有了生命,活了过来" },
          { en: "world-class", zh: "世界级的,世界一流的" },
          { en: "wrestler", zh: "摔跤运动员" },
          { en: "touching", zh: "感人的" },
          { en: "fighter", zh: "斗士" },
          { en: "elder", zh: "年纪较长的" },
        ]
      },
      {
        unit: "Unit 8",
        words: [
          { en: "short story", zh: "短篇小说" },
          { en: "classic", zh: "最优秀的;典型的;典雅的" },
          { en: "take one's time", zh: "从容不迫,慢慢来" },
          { en: "branch", zh: "树枝" },
          { en: "against", zh: "倚,紧靠;以...为背景" },
          { en: "bedside", zh: "床边" },
          { en: "anger", zh: "愤怒,怒气" },
          { en: "make sense", zh: "有意义,讲得通" },
          { en: "have (...) to do with", zh: "与...有关" },
          { en: "apartment", zh: "公寓套房" },
          { en: "masterpiece", zh: "杰作" },
          { en: "widely", zh: "普遍地,广泛地" },
          { en: "fool", zh: "傻瓜" },
          { en: "remain", zh: "剩余,继续存在;逗留" },
          { en: "run out of", zh: "用完,耗尽" },
          { en: "fair", zh: "展销会;集市" },
          { en: "seat", zh: "使)就座,坐" },
          { en: "act", zh: "戏剧等)一幕;行为;表演" },
          { en: "throne", zh: "宝座;王位" },
          { en: "image", zh: "意象;图像" },
          { en: "lasting", zh: "持久的" },
          { en: "unable", zh: "未能,无法" },
          { en: "enemy", zh: "敌人" },
          { en: "writing", zh: "著作,作品" },
          { en: "show up", zh: "出现,露面" },
          { en: "mirror", zh: "镜子" },
          { en: "hurry up", zh: "赶快,急忙(做某事)" },
          { en: "knock", zh: "敲门声,敲击声" },
          { en: "doorbell", zh: "门铃" },
          { en: "ring", zh: "发出铃声; (使)发出钟声" },
        ]
      },
    ]
  }
};
