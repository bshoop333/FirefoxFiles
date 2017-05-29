@echo off
cd /d %~dp0
set urlC=https://github.com/ziahamza/webui-aria2/archive/
c:\software\aria2\aria2c.exe --allow-overwrite=true %urlC%master.zip
"c:\Program Files\7-Zip\7z.exe" x webui-aria2-master.zip -oc:\software\NginxServer\www -aoa
"c:\Program Files\7-Zip\7z.exe" x webui-aria2-master.zip -oc:\software\aria2 -aoa
del webui-aria2-master.zip /f /s /q /a
set urlC=https://github.com/binux/yaaw/archive/
c:\software\aria2\aria2c.exe --allow-overwrite=true %urlC%master.zip
"c:\Program Files\7-Zip\7z.exe" x yaaw-master.zip -oc:\software\NginxServer\www -aoa
"c:\Program Files\7-Zip\7z.exe" x yaaw-master.zip -oc:\software\aria2 -aoa
del yaaw-master.zip /f /s /q /a
exit
