# Concept Video · AI 生图 + MG 动画科普视频项目

基于 Opencode `concept-explainer-video` skill 实际制作的第 01 期「token」科普视频项目，
包含 AI 生图素材、风格测试、MG 动画脚本、Remotion 源码、剪辑片段和最终成片。

## 目录结构

```
concept-video/
├── ep01-token/                  # 第 01 期「token」项目（329 MB）
│   ├── 动效脚本.md              # MG 动画分镜脚本（9 列：镜号/时间码/画面/入场/缓动/字幕/配音…）
│   ├── 文本脚本.md              # 旁白文本脚本
│   ├── subtitles_formatted.md   # 格式化字幕
│   ├── EP01_final.mp4           # 最终成片（4.2 MB）
│   ├── EP01_draft.mp4 / EP01_v2.mp4  # 草稿版本
│   ├── anim_test.mp4 / anim_test_v2.mp4  # 动画测试
│   ├── clip_s01~s08.mp4        # 8 段剪辑片段
│   ├── ep01_final/              # 最终版片段 + 中文字幕帧
│   ├── character/                # 角色立绘（5 种姿势）
│   ├── char_pixel_v2/           # 像素风角色（5 种姿势）
│   ├── char_variants/           # 角色变体 v1（狐狸/机器人/恐龙/鸟）
│   ├── char_variants2/          # 角色变体 v2（柴犬厨师/猫法师/熊猫学生/机器宇航员/塔可怪物/幽灵投资人）
│   ├── pixel_test/               # 像素风测试图
│   ├── consistency/              # 8 方向一致性测试图
│   ├── style_test/               # 风格测试（扁平/科幻/蓝图/霓虹）
│   ├── style_batch/              # 风格批量测试（base/no_glow/swiss/handmade/blueprint/paper）
│   ├── style_batch2/             # 风格批量测试 2（彩铅/水墨/孔版/剪纸/黑板/重像素/线框/印章/水彩/ASCII）
│   ├── style_3d_test/            # 3D 风格测试（写实/黏土/毛玻璃/等距/虚幻引擎）
│   ├── style_keys/ ~ style_keys_more5/  # 风格关键词测试系列（扁平信息图/分镜/蓝图/木刻/等距/编辑/黑板/剪纸/像素场景/单色涂鸦/终端/刺绣/蓝晒/黏土动画/蚀刻/毛毡/全息/乐高/衍纸/牛皮纸/羊皮纸/浮世绘/湿壁画/彩色玻璃/沙画/挂毯/洞穴壁画/茶渍…）
│   ├── style_keys_sci/ sci2/    # 科学风格（专利/X光/达芬奇/NASA/植物/电路/地形/工业革命/蒸汽蓝图/电镜/数学黑板/神经网络）
│   ├── style_clean_test/ split_test/  # 风格清理/拆分测试
│   ├── frames/ frames_v2/ frames_v3_paper/  # 各版本分镜帧
│   ├── ep01_frames/ ep01_frames_cn/  # 最终帧（英文/中文）
│   ├── key_cn/                   # 关键帧（中文）
│   ├── voice_samples/            # 16 种 TTS 音色样本
│   ├── voice_s01~s08.mp3        # 各镜头配音
│   ├── font_compare.png          # 字体对比
│   └── style_eval.txt / style_eval2.txt  # 风格评估记录
├── remotion/                     # Remotion MG 动画源码工程（0.6 MB，node_modules 未上传）
│   ├── src/TokenNumbering.tsx    # 主组件
│   ├── src/theme.tsx             # 主题
│   ├── src/shared.tsx            # 共享组件
│   ├── src/index.tsx             # 入口
│   ├── public/cat_wizard.png     # 角色素材
│   └── package.json
└── assets/                       # 测试素材（45 MB）
    ├── pixel_character_seedance_test.mp4  # 像素角色视频生成测试
    ├── llm_explainer_test.mp4             # LLM 解释视频测试
    ├── pixel_character_test.png            # 像素角色测试图
    └── llm_frame.png                        # LLM 帧测试图
```

## 说明

- **未上传**：`refs/`（1.5 GB 参考视频原件，8 支 B 站参考视频）、`remotion/node_modules/`（依赖，按 `package.json` 重建）。
- 风格测试图覆盖几十种视觉风格，是 `concept-explainer-video` skill 中「参考风格库」的实际生图验证结果。
- 动效脚本和文本脚本对应 Opencode skill 中的模板规范（5 种入场方式 + 5 种缓动曲线 + 90 秒五段结构）。
