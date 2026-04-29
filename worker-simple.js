
export default {
  async fetch(request, env, ctx) {
    return new Response('xiuhun-bd-html Cloudflare Worker 部署成功！\n\n对于完整的静态HTML项目部署，推荐使用 Cloudflare Pages。', {
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
    });
  },
};