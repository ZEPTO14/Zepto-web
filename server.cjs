const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, 'web');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.json':'application/json','.map':'application/json','.jpg':'image/jpeg','.png':'image/png','.glb':'model/gltf-binary'};
const port = Number(process.env.PORT || 8080);
http.createServer(async (req,res) => {
  const end = (code,body='') => {res.writeHead(code);res.end(body)};
  if (!['GET','HEAD'].includes(req.method)) return end(405);
  let name;
  try { name=decodeURIComponent(new URL(req.url,'http://localhost').pathname); } catch {return end(400)}
  if(name==='/health') return end(200,'ok');
  const target=path.resolve(root,'.'+(name==='/'?'/index.html':name));
  if(!target.startsWith(root+path.sep)||target.includes('\0')) return end(404);
  try {
    const stat=await fs.promises.stat(target);
    if(!stat.isFile()) return end(404);
    res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream','Content-Length':stat.size});
    if(req.method==='HEAD')return res.end();
    fs.createReadStream(target).on('error',()=>res.destroy()).pipe(res);
  } catch {return end(404)}
}).listen(port,'0.0.0.0',()=>console.log('ZEPTO: 0.0.0.0:'+port));
