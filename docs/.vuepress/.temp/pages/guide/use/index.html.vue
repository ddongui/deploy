<template><div><h1 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h1>
<h2 id="通过局部安装使用" tabindex="-1"><a class="header-anchor" href="#通过局部安装使用" aria-hidden="true">#</a> 通过局部安装使用</h2>
<p><strong>在你的项目根目录下的 <code v-pre>packages.json </code>中加入</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"deploy"</span><span class="token operator">:</span> <span class="token string">"deploy"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在你的项目根目录下创建配置文件，支持三种类型(<code v-pre>js---commomJs模式</code>, <code v-pre>ts</code>, <code v-pre>json</code>)</strong></p>
<ol>
<li><code v-pre>deploy.config.json</code></li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"relativePath"</span><span class="token operator">:</span> <span class="token string">"./docs/.vuepress/dist"</span><span class="token punctuation">,</span>
    <span class="token property">"branchName"</span><span class="token operator">:</span> <span class="token string">"main"</span><span class="token punctuation">,</span>
    <span class="token property">"files"</span><span class="token operator">:</span> <span class="token string">"."</span><span class="token punctuation">,</span>
    <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"#"</span><span class="token punctuation">,</span>
    <span class="token property">"remoteUrl"</span><span class="token operator">:</span> <span class="token string">"https://github.com/*/*.git"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><code v-pre>deploy.config.ts</code></li>
</ol>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>defineConfig<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@ddongui/deploy"</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    relativePath<span class="token operator">:</span> <span class="token string">"./docs/.vuepress/dist"</span><span class="token punctuation">,</span>
    branchName<span class="token operator">:</span> <span class="token string">"main"</span><span class="token punctuation">,</span>
    files<span class="token operator">:</span> <span class="token string">"."</span><span class="token punctuation">,</span>
    message<span class="token operator">:</span> <span class="token string">"#"</span><span class="token punctuation">,</span>
    remoteUrl<span class="token operator">:</span> <span class="token string">"https://github.com/*/*.git"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li><code v-pre>deploy.config.js</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">relativePath</span><span class="token operator">:</span> <span class="token string">"./docs/.vuepress/dist"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">branchName</span><span class="token operator">:</span> <span class="token string">"main"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">files</span><span class="token operator">:</span> <span class="token string">"."</span><span class="token punctuation">,</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"#"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">remoteUrl</span><span class="token operator">:</span> <span class="token string">"https://github.com/*/*.git"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通过全局安装使用" tabindex="-1"><a class="header-anchor" href="#通过全局安装使用" aria-hidden="true">#</a> 通过全局安装使用</h2>
<p>和局部安装的唯一区别是不需要在<code v-pre>packages.json</code> 中加入 <code v-pre>script</code> 属性, 直接可以在项目根目录下输入命令 <code v-pre>deploy</code></p>
</div></template>


