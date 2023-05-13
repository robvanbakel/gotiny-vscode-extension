import * as vscode from 'vscode';

import * as gotiny from 'gotiny';

export default async () => {
  const long = await vscode.window.showInputBox({
    placeHolder: 'https://amazon.com/very-long-url',
    prompt: 'Enter a long URL to shorten',
  });

  if (!long) return;

  try {
    const result = await gotiny.set(long);
    const { tiny } = result[0];

    const actionText = 'Copy to clipboard';

    const action = await vscode.window.showInformationMessage(tiny, actionText);

    if (action === actionText) {
      vscode.env.clipboard.writeText(tiny);
    }
  } catch (err: any) {
    vscode.window.showErrorMessage(err.message);
  }
};
