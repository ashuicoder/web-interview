import{o as a,c as t,a as s,F as p,f as e,h as o}from"./app.5908c0c0.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const l={},u=e(`<p><code>box-shadow</code> \u5C5E\u6027\u7528\u4E8E\u5728\u5143\u7D20\u7684\u6846\u67B6\u4E0A\u6DFB\u52A0\u9634\u5F71\u6548\u679C\u3002\u4F60\u53EF\u4EE5\u5728\u540C\u4E00\u4E2A\u5143\u7D20\u4E0A\u8BBE\u7F6E\u591A\u4E2A\u9634\u5F71\u6548\u679C\uFF0C\u5E76\u7528\u9017\u53F7\u5C06\u4ED6\u4EEC\u5206\u9694\u5F00\u3002\u8BE5\u5C5E\u6027\u53EF\u8BBE\u7F6E\u7684\u503C\u5305\u62EC\u9634\u5F71\u7684 X \u8F74\u504F\u79FB\u91CF\u3001Y \u8F74\u504F\u79FB\u91CF\u3001\u6A21\u7CCA\u534A\u5F84\u3001\u6269\u6563\u534A\u5F84\u548C\u989C\u8272\u3002</p><p>\u9762\u8BD5\u6700\u559C\u6B22\u95EE\u7684\u5C31\u662F<code>box-shadow</code>\u6709\u51E0\u4E2A\u503C\uFF0C\u6BCF\u4E2A\u503C\u4EE3\u8868\u4EC0\u4E48\u610F\u601D\u3002</p><p>\u8BED\u6CD5\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* x\u504F\u79FB\u91CF | y\u504F\u79FB\u91CF | \u9634\u5F71\u6A21\u7CCA\u534A\u5F84 | \u9634\u5F71\u6269\u6563\u534A\u5F84 | \u9634\u5F71\u989C\u8272 | \u6269\u6563\u65B9\u5411 */</span>
<span class="token property">box-shadow</span><span class="token punctuation">:</span> offset-x offset-y blur-radius spread-radius color inset<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5411\u5143\u7D20\u6DFB\u52A0\u5355\u4E2A box-shadow \u6548\u679C\u65F6\u4F7F\u7528\u4EE5\u4E0B\u89C4\u5219\uFF1A</p><ul><li>\u5F53\u7ED9\u51FA\u4E24\u4E2A\u3001\u4E09\u4E2A\u6216\u56DB\u4E2A <code>&lt;length&gt;</code>\u503C\u65F6\u3002</li><li>\u5982\u679C\u53EA\u7ED9\u51FA\u4E24\u4E2A\u503C, \u90A3\u4E48\u8FD9\u4E24\u4E2A\u503C\u5C06\u4F1A\u88AB\u5F53\u4F5C <code>&lt;offset-x&gt;&lt;offset-y&gt;</code> \u6765\u89E3\u91CA\u3002</li><li>\u5982\u679C\u7ED9\u51FA\u4E86\u7B2C\u4E09\u4E2A\u503C, \u90A3\u4E48\u7B2C\u4E09\u4E2A\u503C\u5C06\u4F1A\u88AB\u5F53\u4F5C<code>&lt;blur-radius&gt;</code>\u89E3\u91CA\u3002</li><li>\u5982\u679C\u7ED9\u51FA\u4E86\u7B2C\u56DB\u4E2A\u503C, \u90A3\u4E48\u7B2C\u56DB\u4E2A\u503C\u5C06\u4F1A\u88AB\u5F53\u4F5C<code>&lt;spread-radius&gt;</code>\u6765\u89E3\u91CA\u3002</li><li>\u53EF\u9009\uFF0Cinset \u5173\u952E\u5B57\u3002</li><li>\u53EF\u9009\uFF0C<code>&lt;color&gt;</code>\u503C\u3002</li></ul><p>\u82E5\u8981\u5BF9\u540C\u4E00\u4E2A\u5143\u7D20\u6DFB\u52A0\u591A\u4E2A\u9634\u5F71\u6548\u679C\uFF0C\u8BF7\u4F7F\u7528\u9017\u53F7\u5C06\u6BCF\u4E2A\u9634\u5F71\u89C4\u5219\u5206\u9694\u5F00\u3002</p><p>\u4EE5\u4E0B\u4F8B\u5B50\u4E2D\uFF0C\u5305\u62EC\u4E86\u4E09\u79CD shadows\uFF0C\u5185\u7F6E\u7684\u9634\u5F71, \u5E38\u89C4\u7684\u4E0B\u6C89\u9634\u5F71, \u548C\u4E00\u4E2A 2 \u4E2A\u50CF\u7D20\u5BBD\u5EA6\u7684 border \u5F0F\u7684\u9634\u5F71</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blockquote</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q</span>
    <span class="token punctuation">&gt;</span></span>You may shoot me with your words,<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    You may cut me with your eyes,<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    You may kill me with your hatefulness,<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    But still, like air, I&#39;ll rise.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q</span>
  <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token entity named-entity" title="\u2014">&amp;mdash;</span> Maya Angelou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blockquote</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">blockquote</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 -3em 3em <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">,</span> 0 0 0 2px <span class="token function">rgb</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">,</span>
    0.3em 0.3em 1em <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,10),i=o("\u6548\u679C\u5982\u4E0B\uFF1A "),r=["src"];function k(n,d){return a(),t(p,null,[u,s("p",null,[i,s("img",{src:n.$withBase("/images/box-shadow.png"),alt:"VuePress Logo"},null,8,r)])],64)}var m=c(l,[["render",k]]);export{m as default};