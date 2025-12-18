import * as vscode from "vscode";

export function getConfig() {
  const config = vscode.workspace.getConfiguration("autogitcommitnoverify");
  return {
    enable: config.get<boolean>("enable", false),
    push: config.get<boolean>("push", true),
    commitMessage: config.get<string>("commitMessage", "Auto commit"),
    branch: config.get<string>("branch", "main"),
  };
}
