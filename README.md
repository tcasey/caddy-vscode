# Caddy Theme for VS Code

[![Version](https://vsmarketplacebadge.apphb.com/version/tcasey.caddy-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=tcasey.caddy-vscode)

![Preview](https://raw.githubusercontent.com/tcasey/caddy-vscode/master/assets/editor.png)


# Installation

1. Open **Extensions** sidebar panel in VS Code. `View → Extensions`
2. Search for `Caddy` - find the one by **tcasey**
3. Click **Install** to install it.
4. Click **Reload** to reload the your editor
5. File > Preferences > Color Theme > **Caddy**
6. Optional: Use the recommended settings below for best experience

## Recommended Settings

```js
{
  "workbench.colorTheme": "Caddy",
  "vscode_custom_css.imports": [
  "/Users/trevor/.vscode/custom-styles.css"
    ],
    "editor.fontFamily": "Operator Mono",
    "editor.fontWeight": "400",
    "editor.fontSize": 16,
    "editor.lineHeight": 25,
    "editor.letterSpacing": 0.5,
    "files.trimTrailingWhitespace": true,
    "editor.tabSize": 2,
    "editor.renderWhitespace": "all",
    // this isn't really underline-thin but we hack it to be a thicker cursor
    "editor.cursorStyle": "underline-thin",
    "editor.cursorBlinking": "solid",
    "prettier.eslintIntegration": true,
}
```

## Hack Your Styles Even More
Some things in VS code can't be controlled by settings, but you can install [this plugin](https://github.com/be5invis/vscode-custom-css), then make a file on your computer that will hold your custom CSS, I like to make one in my root called `~/.vscodestyles.css` and then put this everything in [custom-styles.css](./custom-styles.css) into your file.

Once done, open your command palette and select enable **custom CSS and JS**

Finally reload your editor and the Custom CSS should be taking. You can test this by typing into file - the dirty circle should be yellow not white.

## I don't like something

First, this theme is new so if something is funky, please open an issue.

These are the things we have control over. If you would like to change something, you can either open a PR and see if I'd like it added, or override the colours in your own settings.json file.

https://code.visualstudio.com/docs/getstarted/theme-color-reference

