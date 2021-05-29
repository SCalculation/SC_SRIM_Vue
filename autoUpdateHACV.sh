npm run build #1、创建静态文件
cd GitHub
cd updateGitHub 
mv .git .. # 2、先将.git复制出来
mv README.md ..
mv LICENSE ..
cd ..
rm -r updateGitHub #删掉所有的
mkdir updateGitHub #重建文件夹
mv .git updateGitHub
mv README.md updateGitHub
mv LICENSE updateGitHub
cd ..
pwd
cp -r ./docs/.vuepress/dist/* ./GitHub/updateGitHub
echo "文件生成成功，准备开始上传"
cd ./GitHub/updateGitHub
git add .
git commit -m "auto update :smile:"
git push origin main