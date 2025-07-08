/**
 * @author: kared
 * @create_date: 2025-05-10 21:15:59
 * @last_editors: kared
 * @last_edit_time: 2025-05-11 01:25:36
 * @description: This Cloudflare Worker script handles image generation.
 */

// import html template
import HTML from './index.html';

// Available models list
const AVAILABLE_MODELS = [
 {
 id: 'stable-diffusion-xl-base-1.0',
 name: 'Stable Diffusion XL Base 1.0',
 description: 'Stability AI SDXL 文生圖模型',
 key: '@cf/stabilityai/stable-diffusion-xl-base-1.0'
 },
 {
 id: 'flux-1-schnell',
 name: 'FLUX.1 [schnell]',
 description: '精確細節表現的高效能文生圖模型',
 key: '@cf/black-forest-labs/flux-1-schnell'
 },
 {
 id: 'dreamshaper-8-lcm',
 name: 'DreamShaper 8 LCM',
 description: '增強影像真實感的 SD 微調模型',
 key: '@cf/lykon/dreamshaper-8-lcm'
 },
 {
 id: 'stable-diffusion-xl-lightning',
 name: 'Stable Diffusion XL Lightning',
 description: '更有效率的文生圖模型',
 key: '@cf/bytedance/stable-diffusion-xl-lightning'
 }
];

// Random prompts list
const RANDOM_PROMPTS = [
 'cyberpunk cat samurai graphic art, blood splattered, beautiful colors',
 '1girl, solo, outdoors, camping, night, mountains, nature, stars, moon, tent, twin ponytails, green eyes, cheerful, happy, backpack, sleeping bag, camping stove, water ttle, mountmountains, giver, giver, 片, glash, 片, glash, s, gt, , g , 片, gt, wood, smoke, shadows, contrast, clear sky, constellations, Milky Way',
 'masterpiece, best quality, amazing quality, very aesthetic, high resolution, ultra-detailed, absurdres, newest, scenery, anime, anime coloring, (daded sunlight:1.2), rimrim bars, litman, air0s , ft, hah , rimrim shiny eyes, parted lips, medium breasts, puffy sleeve white dress, forest, flowers, white butterfly, looking at viewer',
 'frost_glass, masterpiece, best quality, absurdres, cute girl wearing red Christmas dress, holding small reindeer, hug, braided ponytail, sidelocks, hairclip, hair ornaments, green eyes, (snowy, fors, mutlights, asnaments, 可能frosted, snow, aurora, moon, night, sharp focus, highly detailed, abstract, flowing',
 '1girl, hatsune miku, white pupils, power elements, microphone, vibrant blue color palette, abstract,abstract background, dreamlike atmosphere, delicate linework, wind-swept hair, energy, piepiece, delicate linework, wind-swept hair, energy, piece,best qualitypieceality, masterpieceality, masterpieceal）
 'cyberpunk cat(neon lights:1.3) clutter,ultra detailed, ctrash, chaotic, low light, contrast, dark, rain ,at night ,cinematic , dystopic, broken ground, tunnels, skyscrapers',
 'Cyber​​punk catgirl with purple hair, wearing leather and latex outfit with pink and purple cheetah print, holding a hand gun, black latex brassiere, glowing blue eyes with purple tech sunga, tail, lsung un​​ykkkunk shk, tail, llas s, sal, sh. jacket, tight shiny leather pants, cyberpunk alley background, Cyb3rWar3, Cyber​​​​ware',
 'a wide aerial view of a floating elven city in the sky, with two elven figures walking side by side across a glowing skybridge, the bridge arching between tall crystal towers, surrounded by clou and golden light, crystal towers, surrounded by clou and golden light, majretics , surroundm, sh）, golden sh , surrounds s , c. architecture',
 'masterpiece, newest, absurdres,incredibly absurdres, best quality, amazing quality, very aesthetic, 1girl, very long hair, blonde, multi-tied hair, center-flap bangs, sun sunbird, nulti-tied hair, center-flap bangs, sunsunn, dulon ​​☺ adidas, simple bird',
 'beautiful girl, breasts, curvy, looking down scope, looking away from viewer, laying on the ground, laying ontop of jacket, aiming a sniper rifle, dark braided hair, backwards hat, armordogs, hatlesss, leeve sweaty, foreshortening, depth of field, at night, night, alpine, lightly snowing, dusting of snow, Closeup, detailed face, freckles',
];

// Passwords for authentication
// demo: const PASSWORDS = ['P@ssw0rd']
const PASSWORDS = []


export default {
 async fetch(request, env) {
 const originalHost = request.headers.get("host");

 // CORS Headers
 const corsHeaders = {
 'Access-Control-Allow-Origin': '*',
 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
 'Access-Control-Allow-Headers': 'Content-Type',
 };

 if (request.method === 'OPTIONS') {
 return new Response(null, {
 headers: corsHeaders
 });
 }

 try {
 const url = new URL(request.url);
 const path = url.pathname;

 // process api requests
 if (path === '/api/models') {
 // get available models list
 return new Response(JSON.stringify(AVAILABLE_MODELS), {
 headers: {
 ...corsHeaders,
 'Content-Type': 'application/json'
 }
 });
 } else if (path === '/api/prompts') {
 // get random prompts list
 return new Response(JSON.stringify(RANDOM_PROMPTS), {
 headers: {
 ...corsHeaders,
 'Content-Type': 'application/json'
 }
