(() => {
  "use strict";
  const data = window.portfolio;
  const $ = (selector) => document.querySelector(selector);
  const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"}[char]));
  const safeUrl = (value) => {
    try { const url = new URL(value); return url.protocol === "https:" || url.protocol === "http:" ? url.href : ""; }
    catch { return ""; }
  };
  document.querySelectorAll("[data-name]").forEach((element) => { element.textContent = data.name; });
  $("#code-name").textContent = data.name;
  $("#hero-description").textContent = data.description;
  $("#about-description").textContent = data.about;
  $("#education-list").innerHTML = data.education.map(item => `<article class="education-item"><div class="education-item-heading"><h3>${escape(item.school)}</h3><span>${escape(item.degree)}</span></div><p>${escape(item.major)}</p><div class="education-period">${escape(item.period)}</div><div class="education-status">${escape(item.note)}</div></article>`).join("");
  $("#internship-role").textContent = data.internship.role;
  $("#internship-details").innerHTML = [data.internship.start, data.internship.schedule, data.internship.duration, data.internship.location].map(item => `<span>${escape(item)}</span>`).join("");
  $("#year").textContent = new Date().getFullYear();
  document.title = `${data.name} · 个人作品集`;

  const themeButton = $(".theme-toggle");
  let storedTheme;
  try { storedTheme = localStorage.getItem("portfolio-theme"); } catch { /* 本地隐私模式仍可切换主题。 */ }
  let dark = storedTheme ? storedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  function applyTheme() {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    themeButton.setAttribute("aria-pressed", String(dark));
    themeButton.setAttribute("aria-label", dark ? "切换为浅色模式" : "切换为深色模式");
    $("meta[name=theme-color]").content = dark ? "#18221d" : "#ffffff";
  }
  applyTheme();
  themeButton.addEventListener("click", () => {
    dark = !dark; applyTheme();
    try { localStorage.setItem("portfolio-theme", dark ? "dark" : "light"); } catch { /* 无存储权限时仅应用于当前页面。 */ }
  });

  const agentVisual = `<div class="agent-flow" aria-hidden="true"><div class="flow-node"><small>01 / PLAN</small><strong>规划 Agent</strong><span>行程草稿 · 结构化输出</span></div><div class="flow-arrow">→</div><div class="flow-node review-node"><small>02 / REVIEW</small><strong>审核 Agent</strong><span>约束检查 · 修改与回退</span></div></div><div class="flow-tools">MCP 工具 ↔ 高德服务 <span>FastAPI / Pydantic</span></div>`;
  const researchVisual = `<div class="research-flow" aria-hidden="true"><div class="signal-chart"><svg viewBox="0 0 320 65"><path d="M0 44h20l9-20 13 34 12-43 12 30h25l12-17 13 27 13-42 15 31h24l11-17 12 30 12-47 13 32h25l11-18 13 31 11-36 14 26h30" fill="none" stroke="currentColor" stroke-width="2"/></svg><span>NETWORK TRAFFIC → ENTROPY FEATURES</span></div><div class="model-chain"><b>CNN</b><i>→</i><b>LSTM</b><i>→</i><b>Attention</b></div><div class="research-result"><strong>95.02%</strong><span>论文实验准确率</span><span class="publication">EMC² 2026</span></div></div>`;
  const visuals = {agent: agentVisual, research: researchVisual};
  const projects = data.projects;
  $("#project-grid").innerHTML = projects.map((project, index) => `<article class="project-card" data-category="${escape(project.category)}"><div class="project-visual visual-${escape(project.visual)}" role="img" aria-label="${escape(project.subtitle)}，流程示意"><div class="visual-kicker"><b>${escape(project.visualLabel)}</b><span>WORK ${String(index+1).padStart(2,"0")}</span></div>${visuals[project.visual] || ""}</div><div class="project-body"><div class="project-meta"><span>${escape(project.type)}</span><span>${String(index+1).padStart(2,"0")}</span></div><h3>${escape(project.title)}</h3><div class="project-period">${escape(project.period)}</div><p>${escape(project.description)}</p><div class="tags">${project.tags.map(tag=>`<span>${escape(tag)}</span>`).join("")}</div><button class="project-detail" type="button" data-project="${escape(project.id)}" aria-label="查看${escape(project.title)}的详情">查看项目笔记 <span>↗</span></button></div></article>`).join("");
  $(".filter[data-filter=all] span").textContent = String(projects.length).padStart(2,"0");
  document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach(item => {
        const selected = item === button;
        item.classList.toggle("active",selected); item.setAttribute("aria-pressed",String(selected));
      });
      let count = 0;
      document.querySelectorAll(".project-card").forEach(card => {
        const visible = button.dataset.filter === "all" || card.dataset.category === button.dataset.filter;
        card.hidden = !visible; if (visible) count++;
      });
      $("#no-projects").hidden = count > 0;
    });
  });
  const dialog = $("#project-dialog");
  document.querySelectorAll(".project-detail").forEach(button => button.addEventListener("click", () => {
    const project = projects.find(item => item.id === button.dataset.project);
    if (!project) return;
    const links = [[project.source,"查看源码 ↗"],[project.demo,"在线演示 ↗"],[project.paper,"阅读论文 ↗"]].filter(([url])=>safeUrl(url));
    $("#dialog-content").innerHTML = `<h2 id="dialog-title">${escape(project.title)}</h2><p class="dialog-subtitle">${escape(project.subtitle)}</p><div class="tags">${project.tags.map(tag=>`<span>${escape(tag)}</span>`).join("")}</div><h3>项目概述</h3><p>${escape(project.overview)}</p><h3>关键工作与结果</h3><ul>${project.features.map(feature=>`<li>${escape(feature)}</li>`).join("")}</ul><h3>实践与思考</h3><p>${escape(project.learning)}</p>${links.length?`<div class="dialog-links">${links.map(([url,label])=>`<a href="${escape(safeUrl(url))}" target="_blank" rel="noopener noreferrer">${label}</a>`).join("")}</div>`:`<p class="dialog-notice">项目资料整理中，后续补充更多展示。</p>`}`;
    dialog.showModal();
  }));
  $(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  let toastTimeout;
  function toast(message) {
    clearTimeout(toastTimeout); $("#toast").textContent = message; $("#toast").classList.add("visible");
    toastTimeout = setTimeout(()=>$("#toast").classList.remove("visible"),4200);
  }
  $("#email-button").addEventListener("click", () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {toast("邮箱还未填写，在 content.js 中添加后即可联系。"); return;}
    window.location.href = `mailto:${encodeURIComponent(data.email)}`;
  });
  const github = safeUrl(data.github);
  if (github) {
    $("#github-link").href = github; $("#github-link").target = "_blank"; $("#github-link").rel = "noopener noreferrer";
  } else { $("#github-link").addEventListener("click",event=>{ event.preventDefault(); toast("GitHub 地址还未填写，在 content.js 中添加你的主页链接。"); }); }
  $("#contact-hint").textContent = data.email || (github ? "欢迎在 GitHub 交流" : "联系方式待填写");
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    $("#contact-hint").href = `mailto:${encodeURIComponent(data.email)}`;
  }
  const phone = $("#contact-phone");
  phone.textContent = `电话：${data.phone}`;
  phone.href = `tel:${data.phone.replace(/[^\d+]/g, "")}`;
})();
