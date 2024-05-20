**环境安装**

https://docs.github.com/zh/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll#next-steps

```shell
# install ruby
sudo apt-get install ruby-full

# 添加 TUNA 源并移除默认源
gem sources --add https://mirrors.tuna.tsinghua.edu.cn/rubygems/ --remove https://rubygems.org/
# 列出已有源
gem sources -l
# 应该只有 TUNA 一个

# install bundler
gem install bundler

# bundle换源
bundle config mirror.https://rubygems.org https://mirrors.tuna.tsinghua.edu.cn/rubygems

# 安装依赖
bundle install
```

**本地测试**

https://docs.github.com/zh/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll