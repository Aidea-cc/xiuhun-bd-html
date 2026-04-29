
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let path = url.pathname;

    if (path === '/' || path === '') {
      path = '/index.html';
    }

    const htmlContent = `&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;xiuhun-bd-html&lt;/title&gt;
  &lt;style&gt;
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 40px; text-align: center; }
    h1 { color: #409eff; }
    .info { margin-top: 30px; color: #606266; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;🚀 xiuhun-bd-html 项目部署成功！&lt;/h1&gt;
  &lt;p class="info"&gt;Worker 正在运行中&lt;/p&gt;
  &lt;p&gt;当前路径: ${path}&lt;/p&gt;
  &lt;p&gt;项目将通过 Cloudflare Pages 完整部署&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;`;

    return new Response(htmlContent, {
      headers: {
        'Content-Type': 'text/html;charset=utf-8',
      },
    });
  },
};