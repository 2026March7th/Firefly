/**
 * 还原被 Cloudflare 邮箱混淆（Scrape Shield → Email Address Obfuscation）替换的邮箱文字。
 *
 * 背景：Cloudflare 会把页面里的邮箱换成
 * `<span class="__cf_email__" data-cfemail="…">[email protected]</span>`，
 * 再由它注入的 email-decode.min.js 还原——但那个脚本只匹配 href 指向
 * /cdn-cgi/l/email-protection 的 <a>。本站 rehype-email-protection 已经把 mailto:
 * 换成了 href="#" + data-encoded-email，于是 Cloudflare 只把可见文字包成了占位符、
 * 且永远还原不回来（整页刷新也一样）。另外本站是 Swup 无刷新跳转，切页换入的 HTML
 * 也不在整页脚本的扫描范围内。
 *
 * 这里按 Cloudflare 的算法自行还原：首字节是异或密钥，其后每字节与它异或。
 */
export function decodeProtectedEmails(root: ParentNode = document): void {
	for (const el of root.querySelectorAll<HTMLElement>("[data-cfemail]")) {
		const encoded = el.getAttribute("data-cfemail") ?? "";
		if (encoded.length < 4) continue;
		const key = Number.parseInt(encoded.slice(0, 2), 16);
		let email = "";
		for (let i = 2; i < encoded.length; i += 2) {
			email += String.fromCharCode(
				Number.parseInt(encoded.slice(i, i + 2), 16) ^ key,
			);
		}
		el.textContent = email;
		el.removeAttribute("data-cfemail");
	}
}

/** 首次加载 + 每次 Swup 换页后还原被混淆的邮箱文字 */
export function initEmailDeobfuscation(): void {
	decodeProtectedEmails();
	document.addEventListener("astro:page-load", () => decodeProtectedEmails());
	document.addEventListener("swup:contentReplaced", () => decodeProtectedEmails());
}
