# vuepress-img-format 

<img alt="icons" src="https://raw.githubusercontent.com/xnng/vuepress-img-format/master/icon.png">

This is a plug-in that allows vuepress to support image magnification.

And it needs to cooperate with fancybox.

## How to use ?

Add fancybox to `.vuepress/config.js`

```js
module.exports = {
    head: [
        // add jquert and fancybox
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
        ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }]
    ],
    themeConfig: {
        // your config
    }
}
```

Open the command, imput `img format` or `img reset format`, the markdown of the picture will be formatted。

Or you can use shortcut keys:

| Shortcut keys | format | reset format |
| ------ | :------: | :------: |
| Windows/Linux | Ctrl + Shift +8 | Ctrl + Shift + 8 |
| Mac | Cmd + Shift + 8 | Cmd + Shift + 9 |

<img alt="vuepress-img-format" src="https://user-images.githubusercontent.com/38936252/48043620-8bca5c00-e1c2-11e8-8389-b450a82b8c35.gif" width="750">

Finally, you can see the effect.

<img alt="effect" src="https://user-images.githubusercontent.com/38936252/48043918-119ad700-e1c4-11e8-9f61-4ebb02f161c6.gif" width="750">

Enjoy it !

## License

[MIT](./LICENSE)