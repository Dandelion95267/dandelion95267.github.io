// 根据当前文件夹的简历初稿整理。项目指标为简历记录的阶段性结果。
window.portfolio = {
  name: "朱禹豪",
  description: "中国矿业大学信息安全本科生，已保研至湖南大学计算机科学与技术专业。关注 AI Agent 与大模型应用开发，用工程实践连接想法、工具与真实场景。",
  about: "我目前就读于中国矿业大学信息安全专业（2023—2027），GPA 4.31 / 5.00，专业排名 6 / 81。已保研至湖南大学计算机科学与技术专业，硕士预计于 2027 年入学，目前尚未入学。",
  email: "18331006309@163.com",
  phone: "18331006309",
  github: "https://github.com/Dandelion95267",
  education: [
    { school: "湖南大学", major: "计算机科学与技术", degree: "硕士", period: "2027—2030（预计）", note: "已保研 · 待入学" },
    { school: "中国矿业大学", major: "信息安全", degree: "本科", period: "2023—2027", note: "GPA 4.31 / 5.00 · 专业排名 6 / 81" }
  ],
  internship: {
    role: "AI Agent / 大模型应用开发实习生",
    start: "2026 年 11 月下旬可到岗",
    schedule: "每周 5 天",
    duration: "可实习 6 个月",
    location: "接受线下"
  },
  projects: [
    {
      id: "trip-planner", title: "旅游助手 · 规划与审核双 Agent", category: "agent", type: "AI Agent 应用", visual: "agent", visualLabel: "TRIP / PLANNER", period: "2026.11—至今", subtitle: "规划、工具调用、约束检查与审核回退的双 Agent 工作流",
      description: "接入高德 MCP 工具，将行程规划、程序校验与审核回退组织成一个完整应用。",
      tags: ["Python", "HelloAgents", "MCP", "FastAPI", "Vue 3"],
      overview: "基于 HelloAgents 组织规划与审核双 Agent 工作流，使用 FastAPI 提供异步接口，Pydantic 定义请求与结构化行程；前端使用 Vue 3 与 TypeScript，支持地图展示、预算估算及 JSON / PDF 导出。",
      features: [
        "通过 MCP 接入高德景点、天气、酒店、餐馆及路线服务，保留候选来源与查询记录。程序核对地点来源、景点数量、交通方式和步行上限。",
        "审核最多触发两轮修改；校验修改后的原数量要求，不合规草稿保留上一版。区分明确问题与参考提醒，减少依据不足的意见触发重写。",
        "构建 10 份固定对照，各重复 3 次：问题对照检出由 12 / 15 提升至 15 / 15，正常对照保持 15 / 15 通过。另做 5 条真实接口回归，4 条通过硬检查，1 条明确保留未满足路线。",
        "使用 unittest 与 Playwright 验证后端、评测工具、页面及导出。简历记录阶段性通过 255 项后端、54 项评测工具、30 项浏览器测试。"
      ],
      learning: "将模型生成与程序检查结合，明确工具来源、修改边界和回退规则。上述评测为开发集结果，测试数量为简历初稿记录的项目阶段状态。",
      source: "https://github.com/Dandelion95267/trip-planner", demo: "", paper: ""
    },
    {
      id: "iot-intrusion", title: "物联网入侵检测 · 信息熵与深度学习", category: "research", type: "论文与科研", visual: "research", visualLabel: "IoT / SECURITY", period: "2026.03 收录", subtitle: "Information Entropy × CNN-LSTM-Attention",
      description: "独立完成数据预处理、信息熵特征构建、模型实现、对比实验与论文写作。",
      tags: ["Python", "PyTorch", "Information Entropy", "CNN-LSTM-Attention"],
      overview: "论文：IoT Intrusion Detection Based on Information Entropy with CNN-LSTM-Attention。Yuhao Zhu（独立作者），EMC² 2026；据简历记录，IEEE Xplore 已于 2026 年 3 月收录。DOI：10.1109/EMC68537.2026.11441966。",
      features: [
        "独立完成数据预处理与信息熵特征构建。",
        "实现 CNN-LSTM-Attention 模型并完成对比实验。",
        "独立完成论文写作；论文实验报告入侵检测准确率 95.02%。"
      ],
      learning: "从数据处理、特征设计到模型实验与论文写作，完成一次完整科研实践。95.02% 为论文所报告实验条件下的准确率。",
      source: "", demo: "", paper: "https://doi.org/10.1109/EMC68537.2026.11441966"
    }
  ]
};
