import { serve } from 'https://deno.land/std/http/server.ts';
import { readFileStr } from 'https://deno.land/std/fs/read_file_str.ts';


const server = serve({ port: 3000 });
for await (const req of server) {
	// Read the url
	const url = req.url;
	const params = req.url.split("?");
    console.log('Request from client ${url}');
	if (params.length >= 2) {
		const search_params = new URLSearchParams(params[1]);
		console.log(search_params.get('refresh'));
	}
	
	const text = await readFileStr('./views/index.html');
	req.respond({ body: text });    
}
