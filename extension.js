const vscode = require('vscode');

function activate(context) {
    let format = vscode.commands.registerCommand('extension.format', function() {
        let originText = vscode.window.activeTextEditor.document.getText()

        let imgRegex = /\!\[[^\[\]]*\]\([^\(\)]*\)(?!<\/a>)/
        let imgCode = imgRegex.exec(originText)

        let title = imgCode[0].substring(imgCode[0].indexOf('[') + 1, imgCode[0].indexOf(']'))
        let url = imgCode[0].substring(imgCode[0].indexOf('(') + 1, imgCode[0].indexOf(')'))
        let newImgCode = `<a data-fancybox title="${title}" href="${url}">${imgCode}</a>`

        let newText = originText.replace(imgCode, newImgCode)
        console.log(newText)

        // get the Range of the whole text of a document
        let textEditor = vscode.window.activeTextEditor
        let firstLine = textEditor.document.lineAt(0);
        let lastLine = textEditor.document.lineAt(textEditor.document.lineCount - 1);
        let textRange = new vscode.Range(0,
            firstLine.range.start.character,
            textEditor.document.lineCount - 1,
            lastLine.range.end.character);

        let uri = vscode.window.activeTextEditor.document.uri
        let textEdits = [];
        textEdits.push(new vscode.TextEdit(textRange, newText))
        let workspaceEdit = new vscode.WorkspaceEdit()
        workspaceEdit.set(uri, textEdits)
        vscode.workspace.applyEdit(workspaceEdit)

        vscode.window.showInformationMessage('format successful');
    });

    let resetFormat = vscode.commands.registerCommand('extension.resetFormat', function() {
        vscode.window.showInformationMessage('resetFormat');
    });

    context.subscriptions.push(format, resetFormat);
}
exports.activate = activate;

function deactivate() {}
exports.deactivate = deactivate