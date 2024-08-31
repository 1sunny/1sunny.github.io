https://github.com/huashengdun/webssh
需要安装webssh,然后服务器wssh --xsrf=False

在misc文件夹:
./bochs-2.6.2-build.sh /my/pintos-toolchain
./toolchain-build.sh /my/pintos-toolchain
记得好像会download失败
Note1-2.md里面有一些错误解决

export PATH="/my/pintos-toolchain/x86_64/bin:$PATH"
export gdbm="./src/misc/gdb-macros"

需要修改pintos.html中的服务器地址

要把zsh配置文件弄到服务器去