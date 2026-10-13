import type { SponsorConfig } from "../types/sponsorConfig";

export const sponsorConfig: SponsorConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 打赏用途说明
	usage: "",

	// 是否显示打赏者列表
	showSponsorsList: false,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: false,

	// 是否在文章详情页底部显示打赏按钮
	showButtonInPost: false,

	// 打赏方式列表
	methods: [
		{
			// 支付宝与微信二合一收款码
			name: "支付宝 / 微信",
			icon: "material-symbols:qr-code-2-rounded",
			// 收款码图片路径（需要放在 public 目录下）
			qrCode: "/assets/images/sponsor/donate-qrcode.webp",
			link: "",
			description: "支付宝 或 微信 扫码均可",
			enabled: true,
		},
	],

	// 打赏者列表（可选）
	sponsors: [],
};
