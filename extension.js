const vscode = require('vscode');

function activate(context) {
    let format = vscode.commands.registerCommand('extension.format', function() {
        let originText = vscode.window.activeTextEditor.document.getText()
        let imgRegex = /\!\[[^\[\]]*\]\([^\(\)]*\)(?!<\/a>)/
        let imgCode = imgRegex.exec(originText)

        let title = imgCode[0].substring(imgCode[0].indexOf('[') + 1, imgCode[0].indexOf(']'))
        let url = imgCode[0].substring(imgCode[0].indexOf('(') + 1, imgCode[0].indexOf(')'))
        let newImg = `<a data-fancybox title="${title}" href="${url}">${imgCode}</a>`

        console.log(newImg)

        vscode.window.showInformationMessage('format');
    });

    let resetFormat = vscode.commands.registerCommand('extension.resetFormat', function() {
        vscode.window.showInformationMessage('resetFormat');
    });

    context.subscriptions.push(format, resetFormat);
}
exports.activate = activate;

function deactivate() {}
exports.deactivate = deactivate