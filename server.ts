import { serve } from 'https://deno.land/std/http/server.ts';
import { readFileStr } from 'https://deno.land/std/fs/read_file_str.ts';


const server = serve({ port: 3000 });
for await (const req of server) {
	// Read the url
	const url = req.url;
	const params = req.url.split("?");
	if (params.length >= 2) {
		const search_params = new URLSearchParams(params[1]);
		console.log(search_params.get('refresh'));
	}
	
	const text = await readFileStr('./views/'+ url.substr(1) +'.html');
	req.respond({ body: text });    
}
