import * as vscode from 'vscode';

import shortenLink from './commands/shortenLink';

export function activate(context: vscode.ExtensionContext) {
  const commands = {
    shortenLink,
  };

  Object.entries(commands).forEach(([id, command]) => {
    const disposable = vscode.commands.registerCommand(`gotiny.${id}`, command);
    context.subscriptions.push(disposable);
  });
}

export function deactivate() {}
