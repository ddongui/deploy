#!/usr/bin/env node
import shell from "shelljs";
import type { Options } from "../";
import getOptionsObj from "../utils/getOptionsObj";
import getConfigFile from "../utils/getConfigFile";
import fs from "fs"
import path from "path"

/* const info = process.argv[2] */
const currentWorkingDirectory = process.cwd()

const condigFileInfos = getConfigFile(currentWorkingDirectory)
const options = getOptionsObj(condigFileInfos)

const gitCommand = {
    cd: {
        exec(params: Options) {
            if (shell.cd(params.relativePath).code) {
                shell.echo("找不到目录")
                shell.exit(1)
            }
        }
    },
    init: {
        exec() {
            if (shell.exec("git init").code) {
                shell.echo("初始化失败")
                shell.exit(1)
            }
        }
    },
    createBranch: {
        exec(params: Options) {
            if (shell.exec(`git checkout -b ${params.branchName}`).code) {
                shell.echo(`创建分支 ${params.branchName} 失败`)
                shell.exit(1)
            }
        }
    },
    add: {
        exec(params: Options) {
            if (shell.exec(`git add ${params.files}`).code) {
                shell.echo(`添加文件 ${params.files} 到缓存区失败`)
                shell.exit(1)
            }
        }
    },
    commit: {
        exec(params: Options) {
            if (shell.exec(`git commit -m ${params.message}`).code) {
                shell.echo("提交到本地仓库失败 ")
                shell.exit(1)
            }
        }
    },
    addRemoteURL: {
        exec(params: Options) {
            if (shell.exec(`git remote add origin ${params.remoteUrl}`).code) {
                shell.echo("添加远程仓库失败")
                shell.exit(1)
            }
        }
    },
    push: {
        exec(params: Options) {
            let timeOut, code, counter = 0, stderr
            do {
                if (counter === 0)
                    console.log("正在推送...");
                else
                    console.log("推送超时,正在尝试再一次推送...");
                ({ stderr, code } = shell.exec(`git push origin ${params.branchName} -f`))

                timeOut = stderr.match(/\d\s*ms/) || stderr.match(/errno 10054/)
            } while (code && timeOut)
        }
    }
}
type Command = { exec: Function }
function macroCommand(options: Options) {
    const _commands: Command[] = []

    function add(command: Command) {
        _commands.push(command)
    }

    function exec() {
        _commands.forEach((command => {
            command.exec && command.exec(options)
        }))
    }

    return { add, exec }
}
/* function isFailed(code) {
    return code === 0 ? false : true
} */

if (options) {
    const pushToGitHub = macroCommand(options)
    pushToGitHub.add(gitCommand.cd)

    if (!fs.existsSync(path.resolve(currentWorkingDirectory, options.relativePath, ".git"))) {
        pushToGitHub.add(gitCommand.init)
        pushToGitHub.add(gitCommand.createBranch)
        pushToGitHub.add(gitCommand.addRemoteURL)
    }

    pushToGitHub.add(gitCommand.add)
    pushToGitHub.add(gitCommand.commit)
    pushToGitHub.add(gitCommand.push)
    pushToGitHub.exec()
} else {
    throw new Error("cant find config file")
}


