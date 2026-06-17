#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""解析9A单词数据，用CJK字符定位法分割中英文（与convert.py一致）"""
import re, sys
sys.stdout.reconfigure(encoding='utf-8')

raw = r"""==================== Unit 1 ====================
organized /ˈɔːɡənaɪzd/ adj. 有条理的 (7)
order /ˈɔːdə(r)/ n. 条理;顺序 (7)
explain /ɪkˈspleɪn/ vt. & vi. 解释 (7)
come up with 想出,找到(答案) (7)
keep ... in (good) order 保持整齐 (7)
careless /ˈkeələs/ adj. 粗心的 (7)
neither /ˈnaɪðə(r)/ adv. 也不; det. & pron. 两者都不 (7)
neither ... nor ... 既不...也不... (7)
nor /nɔː(r)/ conj. & adv. 也不 (7)
*accountant /əˈkaʊntənt/ n. 会计 (7)
suppose /səˈpəʊz/ vt. & vi. 认为,推断;假设 (7)
social /ˈsəʊʃl/ adj. 好交际的;社交的 (7)
*involve /ɪnˈvɒlv/ vt. 包含,需要;牵涉 (7)
*impress /ɪmˈpres/ vt. & vi. 使留下深刻的好印象 (8)
imagination /ɪˌmædʒɪˈneɪʃn/ n. 想象力 (8)
manager /ˈmænɪdʒə(r)/ n. 经理 (8)
*quit /kwɪt/ vt. & vi. 离开,离任 (8)
suit /suːt/ vt. 适合 (8)
railway /ˈreɪlweɪ/ n. 铁路;铁路系统 (9)
mention /ˈmenʃn/ vt. 提到,说到,写到 (9)
standard /ˈstændəd/ n. 标准; adj. 标准的 (9)
*tough /tʌf/ adj. 艰难的 (9)
at all times 总是,随时,永远 (9)
passenger /ˈpæsɪndʒə(r)/ n. 乘客 (11)
exactly /ɪɡˈzæktli/ adv. (答语)完全正确;准确地 (11)
*personality /ˌpɜːsəˈnæləti/ n. 性格,个性 (11)
improvement /ɪmˈpruːvmənt/ n. 改进,改善 (12)
either ... or ... 要么...要么...,不是...就是... (12)
decide on 决定,选定 (12)
take on 承担(责任),决定做 (12)
challenge /ˈtʃælɪndʒ/ n. 挑战 (12)
winner /ˈwɪnə(r)/ n. 获胜者 (13)
outgoing /ˈaʊtɡəʊɪŋ/ adj. 外向的,友好的 (13)
opposite /ˈɒpəzɪt/ n. 对立的人(或事物) (13)
kindness /ˈkaɪndnəs/ n. 善良 (13)
matter /ˈmætə(r)/ n. 关乎...的事情;问题 (13)
as a matter of fact 事实上 (13)
let sb down 使失望 (14)
probably /ˈprɒbəbli/ adv. 很可能,大概 (14)
encouragement /ɪnˈkʌrɪdʒmənt/ n. 鼓励 (14)
*behaviour /bɪˈheɪvjə(r)/ n. (AmE behavior) 表现方式;行为 (15)
pass sth on to sb 传给某人 (15)
son /sʌn/ n. 儿子 (15)
remain /rɪˈmeɪn/ linking v. 保持不变,仍然是 (15)
confident /ˈkɒnfɪdənt/ adj. 自信的 (15)
likely /ˈlaɪkli/ adv. 可能; adj. 可能的 (15)
negative /ˈneɡətɪv/ adj. 消极的;有害的;否定的 (15)
*lecture /ˈlektʃə(r)/ n. 演讲,讲座 (16)
speaker /ˈspiːkə(r)/ n. 发言者;讲(某种语言)的人 (16)
connection /kəˈnekʃn/ n. 关联;联结 (16)
point /pɔɪnt/ vt. & vi. 指向,指引 (16)
point out 指出 (16)
pay off 成功,奏效 (17)
succeed /səkˈsiːd/ vi. 成功 (17)
position /pəˈzɪʃn/ n. 职位;位置 (18)
president /ˈprezɪdənt/ n. 主席;院长;董事长 (18)
cooperate /kəʊˈɒpəreɪt/ vi. 合作 (18)
voice /vɔɪs/ vt. 表达 (18)
consider /kənˈsɪdə(r)/ vt. & vi. 仔细考虑 (18)
decision /dɪˈsɪʒn/ n. 决定 (22)
*patience /ˈpeɪʃns/ n. 耐心 (22)
stick /stɪk/ vi. & vt. 粘贴,粘住;刺,插入 (22)
stick to 坚持 (22)
stress /stres/ n. 精神压力,心理负担; v. & vi. (使)焦虑不安,疲惫不堪 (23)
under stress 在压力之下,承受压力 (23)
waste /weɪst/ vt. 浪费,滥用 (23)
mobile phone n. 手机 (23)
regret /rɪˈɡret/ vt. 懊悔,感到遗憾 (23)
exam /ɪɡˈzæm/ n. (= examination /ɪɡˌzæmɪˈneɪʃn/) 考试 (25)
focused /ˈfəʊkəst/ adj. 注意力集中的,目标明确的 (25)
argue /ˈɑːɡjuː/ vi. 争论,争吵,争辩 (26)
silly /ˈsɪli/ adj. 傻的,愚蠢的 (26)
normal /ˈnɔːml/ adj. 正常的,典型的 (26)
stress sb out 使极度焦虑,使压力大 (26)
bottom /ˈbɒtəm/ n. 底部;底 (26)
dialogue /ˈdaɪəlɒɡ/ n. 对话 (27)
communicate /kəˈmjuːnɪkeɪt/ vi. & vt. 交流; vi. 沟通 (27)
dictionary /ˈdɪkʃənri/ n. 词典,辞书 (28)
hear of 听说 (28)
youth /juːθ/ n. 青年;青春 (28)
stage /steɪdʒ/ n. 阶段,时期;舞台 (29)
experience /ɪkˈspɪəriəns/ vt. 经历;体验 (29)
rapid /ˈræpɪd/ adj. 快速的 (29)
ugly /ˈʌɡli/ adj. 丑陋的 (29)
*mood /muːd/ n. 情绪,心情 (29)
risk /rɪsk/ vt. 冒...的风险;冒险做 (29)
risk sth/doing sth 冒...的风险 (29)
go through 经历,遭受 (29)
adult /əˈdʌlt/ n. 成年人 (29)
mean /miːn/ adj. 刻薄;吝啬的 (30)
stranger /ˈstreɪndʒə(r)/ n. 陌生人;外地人 (30)
uncomfortable /ʌnˈkʌmftəbl/ adj. 不自在的;使人不舒服的 (30)
midterm /ˌmɪdˈtɜːm/ adj. 期中的 (31)
*tight /taɪt/ adj. 紧的 (31)
overweight /ˌəʊvəˈweɪt/ adj. 超重的 (31)
bully /ˈbʊli/ vt. 恐吓,伤害,胁迫; n. 恃强凌弱之人,恶霸 (31)
stand up for sb/sth 支持,维护 (31)
screen /skriːn/ n. 屏幕 (31)
bedtime /ˈbedtaɪm/ n. 就寝时间 (31)
pain /peɪn/ n. 痛苦;疼痛 (32)
get sb down 使悲伤(沮丧、忧郁等) (32)
shame /ʃeɪm/ n. 羞耻;让人遗憾的事 (32)

==================== Unit 2 ====================
teenage /ˈtiːneɪdʒ/ adj. 青少年的,十几岁的 (20)
drive /draɪv/ vt. 迫使;驾驶 (21)
mad /mæd/ adj. 气愤;疯的 (21)
be in low spirits 情绪低落 (21)
lately /ˈleɪtli/ adv. 最近 (21)
cut back on sth 减少,削减,缩减 (21)

==================== Unit 3 ====================
*seed /siːd/ n. 种子;起因 (35)
dancer /ˈdɑːnsə(r)/ n. 舞蹈演员,跳舞者 (35)
recognize /ˈrekəɡnaɪz/ vt. (= recognise) 赞赏,公认;认识,认出 (36)
*contribution /ˌkɒntrɪˈbjuːʃn/ n. 贡献 (36)
*overcome /ˌəʊvəˈkʌm/ vt. 克服,解决 (36)
suffering /ˈsʌfərɪŋ/ n. 痛苦,苦难 (36)
*household /ˈhaʊshəʊld/ n. 家庭,一户 (36)
household name n. 家喻户晓的人物 (36)
*inspiration /ˌɪnspəˈreɪʃn/ n. 鼓舞人心的人(或事物);灵感 (36)
*further /ˈfɜːðə(r)/ v. 促进,增进 (36)
*diagnose /ˈdaɪəɡnəʊz/ vt. 诊断 (36)
be diagnosed with 被诊断出患有...(疾病) (36)
*rob /rɒb/ vt. 掠夺 (36)
shortly /ˈʃɔːtli/ adv. 不久 (36)
rob sb of sth 剥夺(某人所需或应得之物) (36)
*muscle /ˈmʌsl/ n. 肌肉 (36)
yet /jet/ conj. 然而,但是 (36)
surprisingly /səˈpraɪzɪŋli/ adv. 使人惊奇地 (36)
*attitude /ˈætɪtjuːd/ n. 态度 (36)
*despite /dɪˈspaɪt/ prep. 尽管,即使 (37)
universe /ˈjuːnɪvɜːs/ n. 宇宙 (37)
continued /kənˈtɪnjuːd/ adj. 连续不断的 (37)
scientific /ˌsaɪənˈtɪfɪk/ adj. 科学的 (37)
*audience /ˈɔːdiəns/ n. 读者,观众,听众 (37)
highly /ˈhaɪli/ adv. 很,非常 (37)
whenever /wenˈevə(r)/ conj. 无论何时 (37)
*achievement /əˈtʃiːvmənt/ n. 成就 (37)
stand in sb's way 妨碍某人,阻止某人 (37)
however /haʊˈevə(r)/ adv. 不管多么 (37)
musician /mjuˈzɪʃn/ n. 音乐家 (39)
death /deθ/ n. 死亡 (39)
shoulder /ˈʃəʊldə(r)/ n. 肩膀 (40)
make it (to) 获得成功 (40)
coach /kəʊtʃ/ n. 教练 (40)
pretty /ˈprɪti/ adv. 相当 (40)
knee /niː/ n. 膝,膝盖 (40)
challenging /ˈtʃælɪndʒɪŋ/ adj. 有挑战性的 (41)
cheers /tʃɪəz/ exclam. 再见;干杯 (42)
fair /feə(r)/ adj. 公平的,公正的 (43)
fair play n. 公平竞赛,公平办事 (43)
Irish /ˈaɪrɪʃ/ adj. 爱尔兰(人)的,爱尔兰语的 (43)
*gymnast /ˈdʒɪmnæst/ n. 体操运动员 (43)
compete /kəmˈpiːt/ vi. 参加比赛;竞争 (43)
*injure /ˈɪndʒə(r)/ vt. 伤害,使受伤 (43)
*performance /pəˈfɔːməns/ n. 表现;表演 (43)
will /wɪl/ n. 意志,毅力;意愿 (43)
runner /ˈrʌnə(r)/ n. 赛跑运动员,跑步者 (43)
semi-final /ˌsemi ˈfaɪnl/ n. 半决赛 (43)
whatever /wɒtˈevə(r)/ det. & pron. 无论什么,不管什么 (44)
diary /ˈdaɪəri/ n. 日记 (45)
victory /ˈvɪktəri/ n. 胜利 (45)
live through sth 经历(灾难等)而幸存 (45)
perform /pəˈfɔːm/ vt. 做,执行; v. & vi. 表演 (46)
disappoint /ˌdɪsəˈpɔɪnt/ vt. 使...失望 (46)

==================== Unit 4 ====================
*cactus /ˈkæktəs/ n. 仙人掌 (49)
*lotus /ˈləʊtəs/ n. 莲属植物;莲花图案 (49)
*self /self/ n. 自我;本来面目 (49)
*peanut /ˈpiːnʌt/ n. 花生 (50)
unused /ˌʌnˈjuːzd/ adj. 未用过的 (50)
pity /ˈpɪti/ n. 遗憾 (50)
dig /dɪɡ/ v. & vi. 挖,掘,凿 (50)
a couple of 几个;一对 (50)
dig up 掘地;挖掘出 (50)
celebration /ˌselɪˈbreɪʃn/ n. 庆祝;庆典 (50)
oil /ɔɪl/ n. 食用油;石油 (50)
unlike /ˌʌnˈlaɪk/ prep. 不像 (51)
dig out 挖掘出;发掘 (51)
*stem /stem/ n. 茎,梗,柄 (51)
bear /beə(r)/ v. 结(果实),开(花);生(孩子) (51)
*attractive /əˈtræktɪv/ adj. 吸引人的 (51)
compare /kəmˈpeə(r)/ vt. 比较,对比 (51)
expect sth of sb 期待某人做某事(或具备某种能力、品质) (51)
hidden /ˈhɪdn/ adj. 隐藏的,隐匿的 (53)
society /səˈsaɪəti/ n. 社会 (53)
helpfulness /ˈhelpflnəs/ n. 乐于助人 (54)
purpose /ˈpɜːpəs/ n. 重要意义;目的,意图 (54)
satisfied /ˈsætɪsfaɪd/ adj. 满意的 (55)
boss /bɒs/ n. 老板,上司 (55)
dentist /ˈdentɪst/ n. 牙科医生 (56)
wife /waɪf/ n. (pl. wives) 妻子 (56)
stamp /stæmp/ n. 邮票 (56)
daughter /ˈdɔːtə(r)/ n. 女儿 (56)
passage /ˈpæsɪdʒ/ n. 章节;段落;乐段 (57)
*devote /dɪˈvəʊt/ vt. 献身,致力,专心 (57)
devote...to... 把...奉献给... (57)
research /rɪˈsɜːtʃ/ vt., vi. & n. 研究 (57)
house /haʊz/ vt. 收藏,安置 (57)
overtourism /ˈəʊvətʊərɪzəm/ n. 过度旅游 (57)
graduate /ˈɡrædʒueɪt/ vi. & vt. (大学)毕业 (57)
digitalize /ˈdɪdʒɪtəlaɪz/ vt. (= digitalise) 使(信息)数字化 (57)
serve /sɜːv/ vt. 能满足...的需要; vt. & vi. 服务;提供 (58)
condition /kənˈdɪʃn/ n. 状态,状况 (58)
*contribute /kənˈtrɪbjuːt/ vi. & vt. 贡献,增进,促成 (58)
judge /dʒʌdʒ/ vt. & vi. 判断,认为; vt. 审判 (59)
*amazed /əˈmeɪzd/ adj. 大为惊奇 (59)
make up one's mind 下定决心 (60)

==================== Unit 5 ====================
keyboard /ˈkiːbɔːd/ n. 键盘 (65)
*bow /baʊ/ n. 琴弓;弓 (65)
*string /strɪŋ/ n. 弦;细绳 (65)
guitar /ɡɪˈtɑː(r)/ n. 吉他 (65)
*strength /streŋθ/ n. 强度,力度;力量 (65)
pear-shaped /ˈpeə ʃeɪpt/ adj. 梨形的 (65)
musical /ˈmjuːzɪkl/ adj. 音乐的 (65)
instrument /ˈɪnstrəmənt/ n. 乐器;仪器 (65)
*boundary /ˈbaʊndri/ n. 边界 (66)
*composer /kəmˈpəʊzə(r)/ n. 作曲家 (66)
*unique /juˈniːk/ adj. 独一无二的 (66)
*earn /ɜːn/ vt. 赢得,博得; vt. & vi. 赚得,挣钱 (66)
familiar /fəˈmɪliə(r)/ adj. 熟悉的 (66)
familiar with sth 通晓,熟悉 (66)
*worldwide /ˌwɜːldˈwaɪd/ adv. 在世界各地; adj. 影响全世界的 (66)
simply /ˈsɪmpli/ adv. 仅仅 (67)
*flow /fləʊ/ n. 流,流动 (67)
eastern /ˈiːstən/ adj. 东方国家的;东方的 (67)
bell /bel/ n. 钟(声);电铃(声) (67)
talented /ˈtæləntɪd/ adj. 有天赋的 (69)
mixture /ˈmɪkstʃə(r)/ n. 混合 (69)
press /pres/ n. 新闻界;平面媒体 (69)
brain /breɪn/ n. 脑;智力 (70)
ticket /ˈtɪkɪt/ n. 票,入场券 (72)
concert /ˈkɒnsət/ n. 音乐会 (72)
rather /ˈrɑːðə(r)/ adv. 相当,在某种程度上 (73)
country /ˈkʌntri/ n. 乡村 (73)
*jazz /dʒæz/ n. 爵士乐 (73)
rock /rɒk/ n. 摇滚乐 (73)
*drum /drʌm/ n. 鼓 (73)
cowboy /ˈkaʊbɔɪ/ n. 牛仔 (73)
African /ˈæfrɪkən/ adj. 非洲(人)的 (73)
American /əˈmerɪkən/ n. 美国人,美洲人 (73)
make up 创作,编写;编造 (73)
attend /əˈtend/ vt. & vi. 出席,参加;定期去(某处) (74)
quick /kwɪk/ adj. 迅速的 (74)
*jasmine /ˈdʒæzmɪn/ n. 茉莉 (74)
*flute /fluːt/ n. 长笛 (76)
*range /reɪndʒ/ n. 一系列;类;范围 (76)
*gentle /ˈdʒentl/ adj. 柔和的;温柔的 (76)
download /ˌdaʊnˈləʊd/ vt. 下载 (76)
calming /ˈkɑːmɪŋ/ adj. 令人平静的 (76)

==================== Unit 6 ====================
*calligrapher /kəˈlɪɡrəfə(r)/ n. 书法家 (79)
date back (to...) 追溯到 (79)
bottled /ˈbɒtld/ adj. 瓶装的 (79)
*calligraphy /kəˈlɪɡrəfi/ n. 书法 (79)
*tip /tɪp/ n. 尖,尖端 (80)
final /ˈfaɪnl/ adj. 最终的,最后的 (80)
*stroke /strəʊk/ n. 笔画 (80)
appear /əˈpɪə(r)/ vi. 出现 (80)
doorway /ˈdɔːweɪ/ n. 门口,门道 (80)
give it a try 试一试 (80)
still /stɪl/ adj. 静止的,平静的,安静的 (80)
*concentrate /ˈkɒnsntreɪt/ vi. & vt. 集中(注意力); v. 使...集中 (80)
concentrate on 集中注意力(做某事) (80)
pleasure /ˈpleʒə(r)/ n. 快乐,满足 (80)
take pleasure in 从...中获得乐趣 (80)
undoubtedly /ʌnˈdaʊtɪdli/ adv. 无疑地 (80)
character /ˈkærəktə(r)/ n. 文字 (81)
artistic /ɑːˈtɪstɪk/ adj. 艺术的 (81)
characteristic /ˌkærəktəˈrɪstɪk/ n. 特征 (81)
breath /breθ/ n. 呼吸的空气 (81)
slow down (使)慢下来 (81)
pressure /ˈpreʃə(r)/ n. 心理压力;压力 (81)
under pressure 承受着压力;被迫 (81)
pride /praɪd/ n. 自豪,骄傲 (81)
beautifully /ˈbjuːtɪfli/ adv. 漂亮地 (84)
*technique /tekˈniːk/ n. 技巧,技艺 (85)
unfamiliar /ˌʌnfəˈmɪliə(r)/ adj. 不熟悉的 (85)
up close 很近地,在近处 (86)
basket /ˈbɑːskɪt/ n. 篮,篓,筐 (86)
perhaps /pəˈhæps/ adv. 可能,也许 (87)
general /ˈdʒenrəl/ adj. 一般的;总的 (87)
brushwork /ˈbrʌʃwɜːk/ n. 画法,笔触 (87)
similarity /ˌsɪməˈlærəti/ n. 相似性 (89)
present /prɪˈzent/ vt. 展现 (89)
sometime /ˈsʌmtaɪm/ adv. 在某时 (89)
in general 大体上;总的说来 (89)
expert /ˈekspɜːt/ n. 专家 (90)
a great deal 大量,很多 (90)

==================== Unit 7 ====================
action /ˈækʃn/ n. (= action film) 动作片 (93)
*comedy /ˈkɒmədi/ n. 喜剧 (93)
cartoon /kɑːˈtuːn/ n. 卡通片;漫画 (93)
*documentary /ˌdɒkjuˈmentri/ n. 纪录片,纪实广播(或电视)节目 (93)
*romance /rəʊˈmæns/ n. 爱情故事;传奇故事 (93)
all-time /ˌɔːl ˈtaɪm/ adj. 空前的,一向的 (94)
loss /lɒs/ n. 去世;丧失,损失 (94)
actress /ˈæktrəs/ n. 女演员 (94)
*humanitarian /hjuːˌmænɪˈteəriən/ n. 人道主义者 (94)
*ballet /ˈbæleɪ/ n. 芭蕾舞 (94)
*charm /tʃɑːm/ n. 魅力 (94)
*insist /ɪnˈsɪst/ vt. & vi. 坚持说;坚决要求 (94)
*based /beɪst/ adj. 基于 (94)
based upon/on 以...为基础(或根据) (94)
*major /ˈmeɪdʒə(r)/ adj. 主要的,重要的 (94)
mark /mɑːk/ vt. 是...的迹象,表明;标示 (94)
*career /kəˈrɪə(r)/ n. 事业;职业 (94)
princess /ˌprɪnˈses/ n. 公主 (94)
appearance /əˈpɪərəns/ n. 演出;出现 (95)
*angel /ˈeɪndʒl/ n. 天使 (95)
radio /ˈreɪdiəʊ/ n. 无线电广播;收音机 (95)
discover /dɪˈskʌvə(r)/ vt. 发现 (95)
cancer /ˈkænsə(r)/ n. 癌症 (95)
pass away 去世 (95)
peacefully /ˈpiːsfəli/ adv. 平静地 (95)
star /stɑː(r)/ vi. 主演,担任主角 (97)
a number of 一些 (97)
aid /eɪd/ n., vi. & vt. 援助,帮助 (97)
tireless /ˈtaɪələs/ adj. 不知疲倦的 (97)
rush hour n. 交通高峰期 (98)
actor /ˈæktə(r)/ n. 演员 (98)
park /pɑːk/ vt. & vi. 停(车) (99)
*script /skrɪpt/ n. 剧本;脚本 (99)
storyteller /ˈstɔːritelə(r)/ n. 故事(或小说)作者 (99)
mistake /mɪˈsteɪk/ vt. 误会,误解 (99)
steal /stiːl/ vt. 偷,窃取 (99)
steal the show 吸引更多的注意,抢风头 (99)
*supporting /səˈpɔːtɪŋ/ adj. 次要的,配角的 (99)
kung fu /ˌkʌŋ ˈfuː/ n. 功夫 (100)
handsome /ˈhænsəm/ adj. 英俊的,帅气的 (100)
*inspiring /ɪnˈspaɪərɪŋ/ adj. 激励的,鼓舞人心的 (100)
price /praɪs/ n. 价格;代价 (101)
*scriptwriter /ˈskrɪptraɪtə(r)/ n. 编剧 (102)
director /dəˈrektə(r); daɪˈrektə(r)/ n. 导演 (102)
film-maker /ˈfɪlm meɪkə(r)/ n. 制片人 (102)
film /fɪlm/ v. & vt. 拍摄 (102)
shoot /ʃuːt/ vt. & vi. 拍摄 (102)
*editor /ˈedɪtə(r)/ n. 剪辑员;编辑 (102)
post-production /ˌpəʊst prəˈdʌkʃn/ n. 后期制作 (102)
bring sb/sth to life 使更有趣(生动) (102)
come to life 有了生命,活了过来 (103)
world-class /ˌwɜːld ˈklɑːs/ adj. 世界级的,世界一流的 (103)
*wrestler /ˈreslə(r)/ n. 摔跤运动员 (103)
touching /ˈtʌtʃɪŋ/ adj. 感人的 (103)
fighter /ˈfaɪtə(r)/ n. 斗士 (104)
elder /ˈeldə(r)/ adj. 年纪较长的 (104)

==================== Unit 8 ====================
short story n. 短篇小说 (107)
classic /ˈklæsɪk/ adj. 最优秀的;典型的;典雅的 (107)
take one's time 从容不迫,慢慢来 (107)
*branch /brɑːntʃ/ n. 树枝 (108)
against /əˈɡenst/ prep. 倚,紧靠;以...为背景 (108)
bedside /ˈbedsaɪd/ n. 床边 (108)
*anger /ˈæŋɡə(r)/ n. 愤怒,怒气 (108)
make sense 有意义,讲得通 (108)
have (...) to do with 与...有关 (108)
apartment /əˈpɑːtmənt/ n. 公寓套房 (109)
masterpiece /ˈmɑːstəpiːs/ n. 杰作 (109)
fool /fuːl/ n. 傻瓜 (111)
remain /rɪˈmeɪn/ vi. 剩余,继续存在;逗留 (112)
widely /ˈwaɪdli/ adv. 普遍地,广泛地 (109)
run out of 用完,耗尽 (114)
fair /feə(r)/ n. 展销会;集市 (114)
seat /siːt/ vt. (使)就座,坐 (115)
act /ækt/ n. (戏剧等)一幕;行为;表演 (115)
*throne /θrəʊn/ n. 宝座;王位 (115)
*image /ˈɪmɪdʒ/ n. 意象;图像 (115)
lasting /ˈlɑːstɪŋ/ adj. 持久的 (115)
unable /ʌnˈeɪbl/ adj. 未能,无法 (116)
enemy /ˈenəmi/ n. 敌人 (116)
writing /ˈraɪtɪŋ/ n. 著作,作品 (116)
show up 出现,露面 (117)
mirror /ˈmɪrə(r)/ n. 镜子 (118)
hurry up 赶快,急忙(做某事) (118)
knock /nɒk/ n. 敲门声,敲击声 (118)
doorbell /ˈdɔːbel/ n. 门铃 (118)
ring /rɪŋ/ vi. 发出铃声; vt. & vi. (使)发出钟声 (118)"""

# ====== CJK分割法（与convert.py一致） ======
def first_cjk_index(s):
    for i, ch in enumerate(s):
        code = ord(ch)
        if (0x4E00 <= code <= 0x9FFF) or (0x3000 <= code <= 0x303F) or (0xFF00 <= code <= 0xFFEF):
            return i
    return None

def strip_trailing_page(s):
    m = re.search(r'[\(（]\s*(\d+)\s*[\)）]\s*$', s)
    if not m:
        return s, None
    return s[:m.start()].rstrip(), int(m.group(1))

# 词性标签模式
POS_LIST = r'(?:n\.|v\.|vt\.|vi\.|adj\.|adv\.|prep\.|conj\.|pron\.|det\.|num\.|abbr\.|aux\.|art\.|int\.|exclam\.|linking\s+v\.|predet\.)'
POS_TAIL = re.compile(r'\s+' + POS_LIST + r'(?:\s*[,&]\s*' + POS_LIST + r')*\s*$')
POS_HEAD = re.compile(r'^\s*' + POS_LIST + r'(?:\s*[,&]\s*' + POS_LIST + r')*\s*')
# 中文部分中混入的词性标签
POS_IN_ZH = re.compile(r'\s*' + POS_LIST + r'(?:\s*[,&]\s*' + POS_LIST + r')*')

# ====== 解析 ======
units = []
current_unit = None
current_words = []

for line in raw.strip().split('\n'):
    line = line.strip()
    if not line:
        continue

    # 单元标题
    m = re.match(r'^=+\s*(Unit\s+\d+)\s*=+$', line)
    if m:
        if current_unit and current_words:
            units.append({'unit': current_unit, 'words': current_words, 'lo': 0, 'hi': 9999})
        current_unit = m.group(1)
        current_words = []
        continue

    # 提取页码
    page = None
    pm = re.search(r'\((\d+)\)\s*$', line)
    if pm:
        page = int(pm.group(1))
        line = re.sub(r'\s*\(\d+\)\s*$', '', line)

    # 去掉扩展词标记
    is_star = line.startswith('*')
    if is_star:
        line = line[1:]

    # 找到第一个CJK字符的位置，从那里切开
    cjk_idx = first_cjk_index(line)
    if cjk_idx is None:
        continue

    en_part = line[:cjk_idx].strip()
    zh_part = line[cjk_idx:].strip()

    # === 处理英文部分：找到音标/之前的内容作为headword ===
    # 对于有音标的：找 /.../ 位置，headword在其之前
    ipa_m = re.search(r'/\s*[^/]+?\s*/', en_part)
    if ipa_m:
        raw_head = en_part[:ipa_m.start()].strip()
        after_ipa = en_part[ipa_m.end():].strip()
    else:
        # 无音标（词组）：整个en_part就是headword（可能有尾部括号说明）
        raw_head = en_part
        after_ipa = ''

    # 清理headword中的词性标记和括号说明
    headword = re.sub(r'\s+[nv]\.(\s*[,&]\s*[nv][it]?\.)*(?:\s*\([^)]*\))?\s*$', '', raw_head)
    headword = re.sub(r'\s+(?:adj|adv|prep|conj|pron|det|num|abbr|aux|art|int|exclam|predet|linking\s+v)\.(\s*[,&]\s*(?:[nv][it]?\.|adj\.|adv\.|prep\.|conj\.|pron\.|det\.|num\.|abbr\.|aux\.|art\.|int\.|exclam\.|predet\.|linking\s+v\.))*(?:\s*\([^)]*\))?\s*$', '', raw_head)
    # 去掉尾部括号（可能是CJK之前的残留）
    headword = re.sub(r'\s*\([A-Za-z=/].*?\)\s*$', '', headword).strip()
    headword = re.sub(r'\s*\($', '', headword).strip()  # 孤立的(

    # === 处理中文部分 ===
    # 去掉各种残留的英文/词性
    # 1. 去掉开头的词性标记
    zh_part = re.sub(r'^[\s,;&]*(?:[nv][it]?\.|adj\.|adv\.|prep\.|conj\.|pron\.|det\.|num\.|abbr\.|aux\.|art\.|int\.|exclam\.|predet\.|linking\s+v\.)(?:\s*[,&]\s*(?:[nv][it]?\.|adj\.|adv\.|prep\.|conj\.|pron\.|det\.|num\.|abbr\.|aux\.|art\.|int\.|exclam\.|predet\.|linking\s+v\.))*[\s,;&]*', '', zh_part)
    # 2. 去掉zh中混入的POS标签（如 "标准; adj. 标准" → "标准; 标准"）
    zh_part = re.sub(r';\s*[a-z]+\.[\s;]*', '; ', zh_part)
    zh_part = re.sub(r'。\s*[a-z]+\.[\s;]*', '。', zh_part)
    # 3. 去掉任何残留的英文单词
    zh_part = re.sub(r'\s*[a-zA-Z][a-zA-Z\s,;&.]+\s*$', '', zh_part).strip()

    if en_part and zh_part:
        current_words.append({'en': en_part, 'zh': zh_part, 'page': page})

if current_unit and current_words:
    units.append({'unit': current_unit, 'words': current_words, 'lo': 0, 'hi': 9999})

# ====== 按页码范围重新分配 ======
unit_ranges = {
    'Unit 1': (0, 18),
    'Unit 2': (20, 32),
    'Unit 3': (35, 46),
    'Unit 4': (49, 60),
    'Unit 5': (65, 76),
    'Unit 6': (79, 90),
    'Unit 7': (93, 104),
    'Unit 8': (107, 118),
}

all_words = []
for u in units:
    for w in u['words']:
        all_words.append(w)

fixed = {uname: [] for uname in unit_ranges}
unmatched = 0
for w in all_words:
    page = w['page'] or 0
    matched = False
    for uname, (lo, hi) in unit_ranges.items():
        if lo <= page <= hi:
            fixed[uname].append(w)
            matched = True
            break
    if not matched:
        unmatched += 1
        print(f'  [未匹配] {w["en"]} (页码{page})')

# 输出
final_units = []
for uname in ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5', 'Unit 6', 'Unit 7', 'Unit 8']:
    fixed[uname].sort(key=lambda w: w['page'] or 0)
    final_units.append({'unit': uname, 'words': fixed[uname]})

total = sum(len(u['words']) for u in final_units)
print(f'9A: {len(final_units)} 单元, {total} 词')
for u in final_units:
    print(f'  {u["unit"]}: {len(u["words"])} 词')
if unmatched:
    print(f'  未匹配: {unmatched} 词')

# ====== 检查英文是否混入zh ======
bad = 0
for u in final_units:
    for w in u['words']:
        if re.search(r'[a-zA-Z]{2,}', w['zh']):
            print(f'  [英文混入] {u["unit"]} | {w["en"]} | zh={w["zh"]}')
            bad += 1
if bad:
    print(f'  !! {bad} 处英文混入中文')
else:
    print('  ✅ 无英文混入中文')

# ====== 检查英文是否缺失（en为空或等于词性标记） ======
empty_en = 0
for u in final_units:
    for w in u['words']:
        if not w['en'] or re.match(r'^[nv]\.|vt\.|vi\.|adj\.|adv\.', w['en']):
            print(f'  [EN异常] {u["unit"]} | en="{w["en"]}" | zh={w["zh"]}')
            empty_en += 1
if empty_en:
    print(f'  !! {empty_en} 处英文异常')
else:
    print('  ✅ 英文均正常')

# ====== 生成JS片段 ======
lines = []
lines.append('  "9A": {')
lines.append('    label: "九年级上册",')
lines.append('    semester: "上册",')
lines.append('    grade: 9,')
lines.append('    units: [')
for u in final_units:
    lines.append('      {')
    lines.append(f'        unit: "{u["unit"]}",')
    lines.append('        words: [')
    for w in u['words']:
        en = w['en'].replace('\\', '\\\\').replace('"', '\\"')
        zh = w['zh'].replace('\\', '\\\\').replace('"', '\\"')
        lines.append(f'          {{ en: "{en}", zh: "{zh}" }},')
    lines.append('        ]')
    lines.append('      },')
lines.append('    ]')
lines.append('  },')

out = r'C:\微云同步助手\82127972\kousuan\assets\wordbank_9a_v2.js'
with open(out, 'w', encoding='utf-8') as f:
    f.write('// 9A 单词数据（译林版）- v2 CJK分割法\n')
    f.write('\n'.join(lines))
    f.write('\n')
print(f'\n输出: {out}')
