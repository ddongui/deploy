<template><div><h1 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h1>
<p>配置文件的配置对象类型</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Option</span> <span class="token punctuation">{</span>
    <span class="token comment">// deploy目标的相对路径</span>
    relativePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token comment">// 仓库分支名字</span>
    branchName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token comment">// 要推送的文件(在deploy目标路径下)</span>
    files<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token comment">// 推送附加消息</span>
    message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token comment">// 远程仓库链接</span>
    remoteUrl<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


