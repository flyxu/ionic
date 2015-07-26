##

##将一个文件夹中的所有md文件转成html文件
find . -name "*.md" -type f -exec sh -c 'markx "${0}" > "${0%.md}.html"' {} \;
