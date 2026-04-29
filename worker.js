
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let path = url.pathname;

    // 默认重定向到index.html
    if (path === '/' || path === '') {
      path = '/index.html';
    }

    try {
      // 尝试从静态资源中获取文件
      let contentType = getContentType(path);
      let content = '';

      // 基本的静态文件服务器 - 在实际项目中我们会使用Assets
      // 这里我们提供一个简单的响应结构
      return new Response('项目已部署，请使用Cloudflare Pages或Worker Assets进行完整部署', {
        headers: {
          'Content-Type': 'text/plain',
          'X-Deploy-Status': 'Cloudflare Worker active'
        }
      });

    } catch (error) {
      return new Response('File not found', { status: 404 });
    }
  }
};

function getContentType(path) {
  if (path.endsWith('.html')) return 'text/html';
  if (path.endsWith('.css')) return 'text/css';
  if (path.endsWith('.js')) return 'application/javascript';
  if (path.endsWith('.png')) return 'image/png';
  if (path.endsWith('.jpg') || path.endsWith('.jpeg')) return 'image/jpeg';
  if (path.endsWith('.gif')) return 'image/gif';
  if (path.endsWith('.svg')) return 'image/svg+xml';
  if (path.endsWith('.ico')) return 'image/x-icon';
  return 'application/octet-stream';
}