"use strict";
// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.
module.exports = {
    config: {
        updateChannel: 'stable',
        fontSize: 12,
        fontFamily: '"Fira Code", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
        fontWeight: 'normal',
        fontWeightBold: 'bold',
//        lineHeight: 1,
//        letterSpacing: 0,
//        cursorColor: '#1239B8',
//        cursorAccentColor: '#000',
        // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
        cursorShape: 'BLOCK',
        cursorBlink: false,
//        foregroundColor: '#FFF',
//        backgroundColor: '#081A51',
//        selectionColor: '#30D987',
//       borderColor: '#000',
        // custom CSS to embed in the main window
        css: '',
        // custom CSS to embed in the terminal window
        termCSS: '',
        // set custom startup directory (must be an absolute path)
        workingDirectory: '',
        // custom padding (CSS format, i.e.: `top right bottom left`)
//        padding: '12px 14px',
        shell: '/bin/zsh',
        shellArgs: ['--login'],
        // for environment variables
        env: {},
        bell: 'false',
        copyOnSelect: true,
        defaultSSHApp: true,
        quickEdit: false,
        macOptionSelectionMode: 'vertical',
        webGLRenderer: false,
        // keypress required for weblink activation: [ctrl|alt|meta|shift]
        // todo: does not pick up config changes automatically, need to restart terminal :/
        webLinksActivationKey: 'shift',
        // if `false` (without backticks and without quotes), Hyper will use ligatures provided by some fonts
        disableLigatures: false,
        disableAutoUpdates: false,
    },
    plugins: [
     "hyper-dracula",
     "hyper-font-ligatures",
     "hyper-statusline-extended"
    ],
    // in development, you can create a directory under
    // `~/.hyper_plugins/local/` and include it here
    // to load it and avoid it being `npm install`ed
    localPlugins: [],
    keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
    },
};
//# sourceMappingURL=config-default.js.map
