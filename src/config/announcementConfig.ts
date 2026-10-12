import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题，留空则走i18n默认标题
	title: "欢迎来到我的博客！",

	// 公告内容
	content: "欢迎来到我的博客！你可以在这里查看我的最新文章、项目和其他有趣的内容。",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "跳转到我的bilibili主页",
		// 链接 URL
		url: "https://space.bilibili.com/1844475405",
		// 内部链接
		external: false,
	},
};
